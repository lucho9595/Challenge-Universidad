const { Materia } = require('../db');

// Obtener todas las materias
const getMaterias = async (req, res) => {
    try {
        const materias = await Materia.findAll();
        res.json(materias);
    } catch (error) {
        res.status(500).json({ error });
    }
};

const createMateria = async (req, res) => {
    const { nombre, horas_total_cursada, forma_aprobacion, carrera_ids, año_cursada } = req.body;

    try {
        const carreraIds = Array.isArray(carrera_ids)
            ? carrera_ids.filter((id) => Number.isInteger(id))
            : [carrera_ids].filter((id) => Number.isInteger(id));

        const materia = await Materia.create({
            nombre,
            horas_total_cursada,
            forma_aprobacion,
            carrera_id: carreraIds,
            año_cursada,
        });

        res.json({ message: 'Materia creada exitosamente', materia });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear la materia' });
    }
};

// Actualizar una materia
const updateMateria = async (req, res) => {
    const { id } = req.params;
    const { nombre, horas_total_cursada, forma_aprobacion, carrera_ids, año_cursada } = req.body;

    try {
        const materia = await Materia.findByPk(id);

        if (materia) {
            materia.nombre = nombre;
            materia.horas_total_cursada = horas_total_cursada;
            materia.forma_aprobacion = forma_aprobacion;
            materia.carrera_ids = carrera_ids;
            materia.año_cursada = año_cursada;

            await materia.save();

            res.json({ message: 'Materia actualizada exitosamente', materia });
        } else {
            res.status(404).json({ error: 'Materia no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar la materia' });
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

module.exports = {
    getMaterias,
    createMateria,
    updateMateria,
    deleteMateria,
};