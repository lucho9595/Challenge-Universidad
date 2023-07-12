const { Nota } = require('../db');

// Crear una nueva nota
const createNota = async (req, res) => {
    const { nota1, nota2, nota3, nota4, materia_id, usuario_id } = req.body;
    const nota_final = (nota1 + nota2 + nota3 + nota4) / 4;

    try {
        const nota = await Nota.create({
            nota1,
            nota2,
            nota3,
            nota4,
            nota_final,
            materia_id,
            usuario_id
        });

        res.json({ message: 'Nota creada exitosamente', nota });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
};

// Actualizar una nota
const updateNota = async (req, res) => {
    const { id } = req.params;
    const { nota1, nota2, nota3, nota4, materia_id, usuario_id } = req.body;
    const nota_final = (nota1 + nota2 + nota3 + nota4) / 4;

    try {
        const nota = await Nota.findByPk(id);

        if (nota) {
            nota.nota1 = nota1;
            nota.nota2 = nota2;
            nota.nota3 = nota3;
            nota.nota4 = nota4;
            nota.nota_final = nota_final;
            nota.materia_id = materia_id;
            nota.usuario_id = usuario_id;

            await nota.save();

            res.json({ message: 'Nota actualizada exitosamente', nota });
        } else {
            res.status(404).json({ error: 'Nota no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar la nota' });
    }
};

// Eliminar una nota
const deleteNota = async (req, res) => {
    const { id } = req.params;

    try {
        const nota = await Nota.findByPk(id);

        if (nota) {
            await nota.destroy();
            res.json({ message: 'Nota eliminada exitosamente' });
        } else {
            res.status(404).json({ error: 'Nota no encontrada' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar la nota' });
    }
};

module.exports = {
    createNota,
    updateNota,
    deleteNota
};