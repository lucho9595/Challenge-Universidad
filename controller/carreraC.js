const Carrera = require('../models/carrera');

// Controlador para crear una nueva carrera
exports.newCarrera = async (req, res) => {
  try {
    const { nombre_carrera, descripcion_carrera, fecha_apertura, facultad, años_carrera } = req.body;
    const carrera = await Carrera.create({ nombre_carrera, descripcion_carrera, fecha_apertura, facultad, años_carrera });
    res.status(201).json({ success: true, carrera });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Error al crear la carrera' });
  }
};

// Controlador para obtener información de todas las carreras
exports.getCarreras = async (req, res) => {
  try {
    const carreras = await Carrera.findAll();
    res.json({ success: true, carreras });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Error al obtener las carreras' });
  }
};

// Editar una carrera
exports.editarCarrera = async (req, res) => {
    try {
      const { carreraId } = req.params;
      const { nombre_carrera, descripcion_carrera, fecha_apertura, facultad, años_carrera } = req.body;
  
      await Carrera.update(
        { nombre_carrera, descripcion_carrera, fecha_apertura, facultad, años_carrera },
        { where: { id_carrera: carreraId } }
      );
  
      res.json({ success: true, message: 'Carrera actualizada correctamente.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Error al actualizar la carrera.' });
    }
  };
  
  // Borrar una carrera
  exports.borrarCarrera = async (req, res) => {
    try {
      const { carreraId } = req.params;
  
      await Carrera.destroy({ where: { id_carrera: carreraId } });
  
      res.json({ success: true, message: 'Carrera eliminada correctamente.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Error al eliminar la carrera.' });
    }
  };
  