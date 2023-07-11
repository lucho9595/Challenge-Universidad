const express = require('express');
const router = express.Router();

// Importar controladores
const carreraController = require('../controller/carreraC');
const materiaController = require('../controller/materiasC');
const usuarioController = require('../controller/usuarioC');

// Rutas para Carreras
router.get('/carrera', carreraController.getCarreras);
router.get('/carrera/:id', carreraController.getCarrera);
router.post('/carrera', carreraController.createCarrera);
router.put('/carrera/:id', carreraController.updateCarrera);
router.delete('/carrera/:id', carreraController.deleteCarrera);

// Rutas para Materias 
router.get('/materia', materiaController.getMaterias);
router.post('/materia', materiaController.createMateria);
router.put('/materia/:id', materiaController.updateMateria);
router.delete('/materia/:id', materiaController.deleteMateria);

// Rutas para Usuarios 
router.get('/usuario', usuarioController.getUsuarios);
router.get('/usuario/:id', usuarioController.getUser);
router.post('/usuario', usuarioController.createUsuario);
router.post('/login', usuarioController.login);
router.put('/usuario/:id', usuarioController.updateUsuario);
router.delete('/usuario/:id', usuarioController.deleteUsuario);
router.post('/usuario/:id/asignarmateria', usuarioController.asignarMateria);
router.post('/usuario/:id/carrera', usuarioController.anotarCarrera);
module.exports = router;