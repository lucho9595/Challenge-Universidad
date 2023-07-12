const { Usuario } = require('../db');

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
    const { apellido_y_nombre, dni, celular, email, edad, codigo_postal, domicilio, carrera_id, password, año_cursada } = req.body;
    try {
        const newUser = new Usuario({
            apellido_y_nombre,
            dni,
            celular,
            email,
            edad,
            codigo_postal,
            domicilio,
            carrera_id,
            password,
            año_cursada
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
    const { apellido_y_nombre, dni, celular, email, edad, codigo_postal, domicilio, carrera_id, password, año_cursada } = req.body;
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
            usuario.carrera_id = carrera_id;
            usuario.password = password;
            usuario.año_cursada = año_cursada;
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
module.exports = {
    getUsuarios,
    createUsuario,
    updateUsuario,
    deleteUsuario,
    login,
    getUser
};