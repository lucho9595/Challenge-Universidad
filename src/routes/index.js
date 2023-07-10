const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middlewares');
const { isEstudiante } = require('../middlewares');
const { authController } = require('../middlewares')

// Importar controladores
const carreraController = require('../controller/carreraC');
const materiaController = require('../controller/materiasC');
const usuarioController = require('../controller/usuarioC');

router.post('/registro', authController.registro);

// Rutas para Carreras (accesibles solo para el rol ADMIN)
router.get('/carreras', carreraController.getCarreras);
router.post('/carreras', isAdmin, carreraController.createCarrera);
router.put('/carreras/:id', isAdmin, carreraController.updateCarrera);
router.delete('/carreras/:id', isAdmin, carreraController.deleteCarrera);

// Rutas para Materias (accesibles solo para el rol ADMIN)
router.get('/materias', materiaController.getMaterias);
router.post('/materias', isAdmin, materiaController.createMateria);
router.put('/materias/:id', isAdmin, materiaController.updateMateria);
router.delete('/materias/:id', isAdmin, materiaController.deleteMateria);

// Rutas para Usuarios (accesibles solo para el rol ADMIN)
router.get('/usuarios', usuarioController.getUsuarios);
router.post('/usuarios', usuarioController.createUsuario);
router.put('/usuarios/:id', usuarioController.updateUsuario);
router.delete('/usuarios/:id', usuarioController.deleteUsuario);

// Ruta para asignar notas de materias (accesible solo para el rol ADMIN)
router.post('/asignar-notas', isAdmin, materiaController.asignarNotas);

// Ruta para anotar al estudiante a una carrera
router.post('/estudiantes/:estudianteId/anotar-carrera', isEstudiante, usuarioController.anotarCarrera);

// Ruta para obtener la información académica del estudiante
router.get('/estudiantes/:estudianteId/informacion-academica', isEstudiante, usuarioController.getInformacionAcademica);

module.exports = router;