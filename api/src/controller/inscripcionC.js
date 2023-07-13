const Inscripcion = require('../model/inscripcion');
const Usuario = require('../model/usuario');
const Materia = require('../model/materias');


 const getMateriaInscripcion= async (req, res) => {
    const { usuarioId } = req.params;

    try {
      const inscripcion = await Inscripcion.findOne({
        where: { usuario_id: usuarioId },
        include: [
          {
            model: Materia,
            attributes: ['id_materia', 'nombre'],
          },
        ],
      });

      if (inscripcion) {
        res.json(inscripcion.Materia);
      } else {
        res.status(404).json({ error: 'No se encontró una inscripción para el usuario' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al buscar la inscripción' });
    }
  };

 const asignarMaterias= async (req, res) => {
    const { usuarioId } = req.params;

    try {
      const usuario = await Usuario.findByPk(usuarioId);
      const inscripcionesUsuario = await Inscripcion.findAll({
        where: { usuario_id: usuarioId },
      });

      if (!usuario) {
        return res.status(404).json({ error: 'No se encontró el usuario' });
      }

      // Verificar si el usuario está en el primer año de cursada
      if (usuario.año_cursada === 1) {
        // Buscar las materias del primer año de la carrera del usuario
        const materiasPrimerAño = await Materia.findAll({
          where: { año_cursada: 1, carrera_id: usuario.carrera_id },
        });

        // Crear las inscripciones para las materias del primer año
        await Inscripcion.bulkCreate(
          materiasPrimerAño.map((materia) => ({
            usuario_id: usuarioId,
            materia_id: materia.id_materia,
          }))
        );

        res.json({ message: 'Materias del primer año asignadas exitosamente' });
      } else {
        // Calcular el porcentaje de materias aprobadas del año actual
        const porcentajeAprobadas = (inscripcionesUsuario.filter((inscripcion) => inscripcion.aprobada).length / inscripcionesUsuario.length) * 100;

        // Verificar si el porcentaje de materias aprobadas es mayor o igual al 70%
        if (porcentajeAprobadas >= 70) {
          const materiasSiguienteAño = await Materia.findAll({
            where: { año_cursada: usuario.año_cursada + 1, carrera_id: usuario.carrera_id },
          });

          // Crear las inscripciones para las materias del siguiente año
          await Inscripcion.bulkCreate(
            materiasSiguienteAño.map((materia) => ({
              usuario_id: usuarioId,
              materia_id: materia.id_materia,
            }))
          );

          res.json({ message: 'Materias del siguiente año asignadas exitosamente' });
        } else {
          res.json({ message: 'No se cumplen los requisitos para asignar materias del siguiente año' });
        }
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al asignar las materias' });
    }
  };

  module.exports = {
    asignarMaterias,
    getMateriaInscripcion
  };