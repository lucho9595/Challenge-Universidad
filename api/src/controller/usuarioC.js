const { Usuario, Materia, Carrera } = require('../db');

// Obtener todos los usuarios
async function getUsuarios(req, res) {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios.' });
    }
};

//busco uno por id
async function getUser(req, res, next) {
    const { id } = req.params;
    try {
        const user = await Usuario.findByPk(id)
        if (!user) { res.json({ msg: 'Usuario no encontrado' }) }
        res.status(200).json({ msg: 'Usuario encontrado', user });
    } catch (error) {
        next(error);
    }

}

// Crear un nuevo usuario
const createUsuario = async (req, res) => {
    const { apellido_y_nombre, dni, celular, email, edad, codigo_postal, domicilio, carrera_inscripta, password } = req.body;
    try {
        const newUser = new Usuario({
            apellido_y_nombre,
            dni,
            celular,
            email,
            edad,
            codigo_postal,
            domicilio,
            carrera_inscripta,
            password
        });
        const user = await newUser.save();
        return res.json({ msg: "Usuario creado", user });
    } catch (error) {
        console.log(error)
    }
};

//logueo
const login = async (req, res, next) => {
    const { apellido_y_nombre } = req.body;

    try {
        //Chequeamos si existe el nombre
        const user = await Usuario.findOne({
            apellido_y_nombre
        });

        if (!user) {
            return res.json({
                msg: "Usuario no encontrado"
            });
        }

        return res.json({ msg: "Useruario logueado" });
    } catch (err) {
        next(err);
    }
}

// Actualizar un usuario
const updateUsuario = async (req, res) => {
    const { id } = req.params;
    const { apellido_y_nombre, dni, celular, email, edad, codigo_postal, domicilio, carrera_inscripta, password } = req.body;
    try {
        const usuario = await Usuario.findByPk(id);
        if (usuario) {
            usuario.apellido_y_nombre = apellido_y_nombre;
            usuario.dni = dni;
            usuario.celular = celular;
            usuario.email = email;
            usuario.edad = edad;
            usuario.codigo_postal = codigo_postal;
            usuario.domicilio = domicilio;
            usuario.carrera_inscripta = carrera_inscripta;
            usuario.password = password;
            await usuario.save();
            return res.status(200).json({ msg: "Usuario editado" });
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

const asignarMateria = async (req, res) => {
    const { id } = req.params; // Obtener el ID del estudiante desde los parámetros de la URL
    const { materiaId } = req.body; // Obtener el ID de la materia desde el cuerpo de la solicitud

    try {
        // Verificar si el estudiante existe en la base de datos
        const estudiante = await Usuario.findByPk(id);
        if (!estudiante) {
            return res.status(404).json({ error: 'Estudiante no encontrado' });
        }

        // Obtener el año de cursada del estudiante
        const añoCursada = estudiante.año_cursada;

        // Verificar si el estudiante puede asignar materias del año siguiente
        if (añoCursada > 1) {
            // Realizar la lógica para permitir la asignación de materias del año siguiente
            // Puedes utilizar consultas y condiciones adicionales según tu estructura de base de datos y reglas de negocio
            // Por ejemplo, puedes verificar si el estudiante ha aprobado al menos el 70% de las materias del año actual antes de permitir la asignación de materias del año siguiente
            // Si se cumplen las condiciones, asigna la materia al estudiante
        } else {
            // Realizar la lógica para permitir la asignación de materias del primer año
            // Puedes utilizar consultas y condiciones adicionales según tu estructura de base de datos y reglas de negocio
            // Asigna la materia al estudiante
        }

        return res.status(200).json({ mensaje: 'Materia asignada correctamente' });
    } catch (error) {
        return res.status(500).json({ error: 'Error al asignar la materia' });
    }
};

const anotarCarrera = async (req, res) => {
    const { id } = req.params; // Obtener el ID del usuario desde los parámetros de la ruta
    const { id_carrera } = req.body; // Obtener el ID de la carrera desde el cuerpo de la solicitud

    try {
        // Verificar si el usuario existe en la base de datos
        const usuario = await Usuario.findByPk(id);

        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        // Verificar si el usuario ya está inscripto en una carrera
        if (usuario.carrera_inscripta) {
            return res.status(400).json({ error: 'El usuario ya está inscripto en una carrera' });
        }

        // Obtener la carrera seleccionada
        const carrera = await Carrera.findByPk(id_carrera);

        if (!carrera) {
            return res.status(404).json({ error: 'Carrera no encontrada' });
        }

        // Actualizar los datos del usuario con la carrera seleccionada
        usuario.carrera_inscripta = carrera.nombre_carrera;
        usuario.año_cursada = 1; // Por defecto, se asigna el primer año

        // Guardar los cambios en la base de datos
        await usuario.save();

        // Obtener las materias correspondientes al primer año de la carrera
        const materias = await Materia.findAll({
            where: { año_cursada: 1, carrera_id: id_carrera },
        });

        // Asignar las materias al usuario
        await usuario.addMaterias(materias);

        return res.json({ message: 'Usuario inscripto en la carrera y materias asignadas correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al inscribir al usuario en la carrera' });
    }
};

module.exports = {
    getUsuarios,
    createUsuario,
    updateUsuario,
    deleteUsuario,
    asignarMateria,
    anotarCarrera,
    login,
    getUser
};