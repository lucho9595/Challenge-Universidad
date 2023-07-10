const { Carrera } = require('../db');

// Obtener información de las carreras registradas
const getCarreras = async (req, res) => {
  try {
    const carreras = await Carrera.findAll();
    const carrerasConInscriptos = await Promise.all(
      carreras.map(async (carrera) => {
        const inscriptosPorAño = await Usuario.count({
          where: { carrera_id: carrera.id_carrera },
          group: ['año_cursada'],
        });
        return { ...carrera.toJSON(), inscriptosPorAño };
      })
    );
    res.json(carrerasConInscriptos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocurrió un error al obtener las carreras.' });
  }
};

// Crear una nueva carrera
const createCarrera = async (req, res) => {
  const { nombre_carrera, descripcion_carrera, fecha_apertura, facultad, año_cursada } = req.body;
  try {
    const carrera = await Carrera.create({
      nombre_carrera, descripcion_carrera, fecha_apertura, facultad, año_cursada
    });
    res.json(carrera);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la carrera.' });
  }
};

// Actualizar una carrera
const updateCarrera = async (req, res) => {
  const { id } = req.params;
  const { nombre_carrera, descripcion_carrera, fecha_apertura, facultad, año_cursada } = req.body;
  try {
    const carrera = await Carrera.findByPk(id);
    if (carrera) {
      carrera.nombre_carrera = nombre_carrera;
      carrera.descripcion_carrera = descripcion_carrera;
      carrera.fecha_apertura = fecha_apertura;
      carrera.facultad = facultad;
      carrera.año_cursada = año_cursada;
      await carrera.save();
      res.json(carrera);
    } else {
      res.status(404).json({ error: 'Carrera no encontrada.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la carrera.' });
  }
};

// Borrar una carrera
const deleteCarrera = async (req, res) => {
  try {
    const { id } = req.params;
    const carrera = await Carrera.findByPk(id);
    if (!carrera) {
      return res.status(404).json({ error: 'No se encontró la carrera especificada.' });
    }
    await carrera.destroy();
    res.json({ message: 'Carrera eliminada exitosamente.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocurrió un error al eliminar la carrera.' });
  }
};

module.exports = {
  getCarreras,
  createCarrera,
  updateCarrera,
  deleteCarrera,
};
