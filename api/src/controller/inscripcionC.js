const Usuario = require('../model/usuario');
const Materia = require('../model/materias');

const asignarMateriasPrimerAño = async (req, res) => {
  const { id } = req.params;

  try {
    // Buscar el usuario por su ID
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ error: 'No se encontró el usuario' });
    }

    // Buscar las materias del primer año de la carrera del usuario
    const materiasPrimerAño = await Materia.findAll({
      where: { año_cursada: 1, carrera_id: usuario.carrera_id },
    });

    // Obtener los IDs de las materias del primer año
    const materiasIds = materiasPrimerAño.map((materia) => materia.id_materia);

    // Asignar las materias al usuario
    usuario.materias_asignadas = materiasIds;

    // Guardar los cambios en la base de datos
    await usuario.save();

    res.json({ message: 'Materias del primer año asignadas exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al asignar las materias' });
  }
};

module.exports = {
  asignarMateriasPrimerAño,
};