const { Materia } = require('../db');

// Obtener todas las materias
const getMaterias = async (req, res) => {
    try {
        const materias = await Materia.findAll();
        res.json(materias);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las materias.' });
    }
};

// Crear una nueva materia
const createMateria = async (req, res) => {
    const { nombre_materia, horas_total_cursada, forma_aprobacion, carrera_id, año_cursada } = req.body;
    try {
        const buscar = await Materia.findOne({ where: { nombre_materia } })
        if (buscar) {
            return res.status(400).json({ msg: "Esa materia ya existe" });
        } else {
            const materias = await Materia.create({
                nombre_materia,
                horas_total_cursada,
                forma_aprobacion,
                carrera_id,
                año_cursada,
            });
            return res.status(200).json({ msg: "Materia creada", materias });
        }
    } catch (error) {
        res.status(500).json({ error });
    }
};

// Actualizar una materia
const updateMateria = async (req, res) => {
    const { id } = req.params;
    const { nombre_materia, horas_total_cursada, forma_aprobacion, carrera_id, año_cursada } = req.body;
    try {
        const materia = await Materia.findByPk(id);
        if (materia) {
            materia.nombre_materia = nombre_materia;
            materia.horas_total_cursada = horas_total_cursada;
            materia.forma_aprobacion = forma_aprobacion;
            materia.carrera_id = carrera_id;
            materia.año_cursada = año_cursada;
            await materia.save();
            res.json(materia);
        } else {
            res.status(404).json({ error: 'Materia no encontrada.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la materia.' });
    }
};

// Eliminar una materia
const deleteMateria = async (req, res) => {
    try {
        const { id } = req.params;
        const materia = await Materia.findByPk(id);
        if (materia) {
            await materia.destroy();
            res.json({ message: 'Materia eliminada correctamente.' });
        } else {
            res.status(404).json({ error: 'Materia no encontrada.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar la materia.' });
    }
};


const asignarNotas = async (req, res) => {
    const { estudianteId, materiaId, nota1, nota2, nota3, nota4 } = req.body;

    try {
        // Verificar que el estudiante existe y que la materia pertenece a ese estudiante
        const estudiante = await Usuario.findOne({
            where: {
                id_usuario: estudianteId,
            },
        });

        if (!estudiante) {
            return res.status(404).json({ error: 'Estudiante no encontrado' });
        }

        const materia = await Materia.findOne({
            where: {
                id_materia: materiaId,
                estudiante_id: estudianteId,
            },
        });

        if (!materia) {
            return res.status(404).json({ error: 'Materia no encontrada para el estudiante' });
        }

        // Asignar las notas y calcular el promedio
        materia.nota_1 = nota1;
        materia.nota_2 = nota2;
        materia.nota_3 = nota3;
        materia.nota_4 = nota4;

        materia.nota_final = (nota1 + nota2 + nota3 + nota4) / 4;

        // Guardar los cambios en la base de datos
        await materia.save();

        return res.status(200).json({ message: 'Notas asignadas correctamente' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al asignar las notas' });
    }
};

module.exports = {
    getMaterias,
    createMateria,
    updateMateria,
    deleteMateria,
    asignarNotas
};
