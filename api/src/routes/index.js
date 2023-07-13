const express = require('express');
const router = express.Router();

const carreraController = require('../controller/carreraC');
const materiaController = require('../controller/materiasC');
const usuarioController = require('../controller/usuarioC');
const notaController = require('../controller/notaC');
const inscripcionController = require('../controller/inscripcionC');

// Endpoints para Carrera
router.get('/carreras', carreraController.getCarreras);
router.get('/carreras/:id', carreraController.getCarrera);
router.post('/carreras', carreraController.createCarrera);
router.put('/carreras/:id', carreraController.updateCarrera);
router.delete('/carreras/:id', carreraController.deleteCarrera);

// Endpoints para Materia
router.get('/materias', materiaController.getMaterias);
router.post('/materias', materiaController.createMateria);
router.put('/materias/:id', materiaController.updateMateria);
router.delete('/materias/:id', materiaController.deleteMateria);

// Endpoints para Estudiante
router.get('/estudiantes', usuarioController.getUsuarios);
router.get('/estudiantes/:id', usuarioController.getUser);
router.post('/estudiantes', usuarioController.createUsuario);
router.put('/estudiantes/:id', usuarioController.updateUsuario);
router.delete('/estudiantes/:id', usuarioController.deleteUsuario);

// Endpoints para Nota
router.get('/notas', notaController.getNotas);
router.post('/notas', notaController.createNota);
router.put('/notas/:id', notaController.updateNota);
router.delete('/notas/:id', notaController.deleteNota);

module.exports = router;