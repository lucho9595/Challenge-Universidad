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
    const { nombre, horasTotales, formaAprobacion, carreraId, anioCursada } = req.body;
    try {
        const materia = await Materia.create({
            nombre,
            horasTotales,
            formaAprobacion,
            carreraId,
            anioCursada,
        });
        res.json(materia);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la materia.' });
    }
};

// Actualizar una materia
const updateMateria = async (req, res) => {
    const { id } = req.params;
    const { nombre, horasTotales, formaAprobacion, carreraId, anioCursada } = req.body;
    try {
        const materia = await Materia.findByPk(id);
        if (materia) {
            materia.nombre = nombre;
            materia.horasTotales = horasTotales;
            materia.formaAprobacion = formaAprobacion;
            materia.carreraId = carreraId;
            materia.anioCursada = anioCursada;
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
    const { id } = req.params;
    try {
        const materia = await Materia.findByPk(id);
        if (materia) {
            await materia.destroy();
            res.json({ message: 'Materia eliminada correctamente.' });
        } else {
            res.status(404).json({ error: 'Materia no encontrada.' });
        }
    } catch (error) {
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
