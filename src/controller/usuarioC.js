const { Usuario, Materia } = require('../db');

// Obtener todos los usuarios
const getUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios.' });
    }
};

// Crear un nuevo usuario
const createUsuario = async (req, res) => {
    const { apellidoNombre, dni, celular, email, edad, codigoPostal, domicilio, carreraInscripta, rol } = req.body;
    try {
        const usuario = await Usuario.create({
            apellidoNombre,
            dni,
            celular,
            email,
            edad,
            codigoPostal,
            domicilio,
            carreraInscripta,
            rol,
        });
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el usuario.' });
    }
};

// Actualizar un usuario
const updateUsuario = async (req, res) => {
    const { id } = req.params;
    const { apellidoNombre, dni, celular, email, edad, codigoPostal, domicilio, carreraInscripta, rol } = req.body;
    try {
        const usuario = await Usuario.findByPk(id);
        if (usuario) {
            usuario.apellidoNombre = apellidoNombre;
            usuario.dni = dni;
            usuario.celular = celular;
            usuario.email = email;
            usuario.edad = edad;
            usuario.codigoPostal = codigoPostal;
            usuario.domicilio = domicilio;
            usuario.carreraInscripta = carreraInscripta;
            usuario.rol = rol;
            await usuario.save();
            res.json(usuario);
        } else {
            res.status(404).json({ error: 'Usuario no encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el usuario.' });
    }
};

// Eliminar un usuario
const deleteUsuario = async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await Usuario.findByPk(id);
        if (usuario) {
            await usuario.destroy();
            res.json({ message: 'Usuario eliminado correctamente.' });
        } else {
            res.status(404).json({ error: 'Usuario no encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el usuario.' });
    }
};

// Controlador para obtener la información académica del estudiante
const getInformacionAcademica = async (req, res) => {
    try {
        const { estudianteId } = req.params;

        // Obtener los datos personales del estudiante
        const estudiante = await Usuario.findByPk(estudianteId);

        // Obtener la carrera del estudiante
        const carrera = await Carrera.findByPk(estudiante.carrera_id);

        // Obtener las materias del estudiante con sus notas
        const materias = await Materia.findAll({
            where: { estudiante_id: estudianteId },
        });

        // Calcular el estado y la nota final de cada materia
        const informacionAcademica = materias.map((materia) => {
            const { nota1, nota2, nota3, nota4 } = materia;
            const notas = [nota1, nota2, nota3, nota4];

            const parcialesAprobados = notas.filter((nota) => nota >= 4);
            const cantidadParcialesDesaprobados = 4 - parcialesAprobados.length;

            let estado;
            let notaFinal;

            if (cantidadParcialesDesaprobados >= 2) {
                estado = 'Reprobado';
                notaFinal = 2;
            } else if (cantidadParcialesDesaprobados === 1) {
                estado = 'Aprobado - Examen Final';
                notaFinal = (nota1 + nota2 + nota3 + nota4 - Math.min(...notas)) / 3;
            } else {
                const promedio = notas.reduce((total, nota) => total + nota, 0) / 4;
                if (promedio >= 7) {
                    estado = 'Promocionado';
                } else {
                    estado = 'Final';
                }
                notaFinal = promedio;
            }

            return {
                materia: materia.nombre_materia,
                nota1,
                nota2,
                nota3,
                nota4,
                estado,
                notaFinal,
            };
        });

        // Construir el objeto de respuesta con la información académica del estudiante
        const informacionAcademicaEstudiante = {
            estudiante: {
                nombre: estudiante.apellido_y_nombre,
                dni: estudiante.dni,
                celular: estudiante.celular,
                email: estudiante.email,
            },
            carrera: {
                nombre: carrera.nombre_carrera,
                facultad: carrera.facultad,
                añoCursada: carrera.año_cursada,
            },
            materias: informacionAcademica,
        };

        res.json(informacionAcademicaEstudiante);
    } catch (error) {
        console.error('Error al obtener la información académica del estudiante:', error);
        res.status(500).json({ error: 'Ocurrió un error al obtener la información académica del estudiante.' });
    }
};

// Controlador para anotar al estudiante a una carrera
const anotarCarrera = async (req, res) => {
    try {
        const { estudianteId } = req.params;
        const { carreraId } = req.body;

        // Verificar si el estudiante ya está inscrito en una carrera
        const estudiante = await Usuario.findByPk(estudianteId);
        if (estudiante.carrera_id) {
            return res.status(400).json({ error: 'El estudiante ya está inscrito en una carrera.' });
        }

        // Verificar si la carrera existe
        const carrera = await Carrera.findByPk(carreraId);
        if (!carrera) {
            return res.status(404).json({ error: 'La carrera especificada no existe.' });
        }

        // Asignar la carrera al estudiante
        estudiante.carrera_id = carreraId;
        await estudiante.save();

        res.json({ message: 'El estudiante se ha anotado a la carrera exitosamente.' });
    } catch (error) {
        console.error('Error al anotar al estudiante a la carrera:', error);
        res.status(500).json({ error: 'Ocurrió un error al anotar al estudiante a la carrera.' });
    }
};

module.exports = {
    getUsuarios,
    createUsuario,
    updateUsuario,
    deleteUsuario,
    getInformacionAcademica,
    anotarCarrera
};