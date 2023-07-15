const { Usuario, Materia} = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

const createUsuario = async (req, res) => {
    const {
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
    } = req.body;

    try {
        let newUser;

        if (año_cursada === 1) {
            const materiasPrimerAño = await Materia.findAll({
                where: {
                    año_cursada: 1,
                    carrera_id: carrera_id
                }
            });

            const materiasIds = [];
            for (let i = 0; i < materiasPrimerAño.length; i++) {
                materiasIds.push(materiasPrimerAño[i].id_materia);
            }

            // Aplicar bcrypt al hashear la contraseña
            const saltRounds = 10;
            const hashedPassword = bcrypt.hashSync(password, saltRounds);

            // Crear el nuevo usuario con las propiedades proporcionadas y las materias asignadas
            newUser = await Usuario.create({
                apellido_y_nombre,
                dni,
                celular,
                email,
                edad,
                codigo_postal,
                domicilio,
                carrera_id,
                password: hashedPassword, // Guardar la contraseña hasheada en lugar de la contraseña en texto plano
                año_cursada,
                materias_asignadas: materiasIds,
            });
        } else {
            res.status(400).json({ error: "El año de cursada debe ser 1 para asignar materias automáticamente" });
            return;
        }

        res.json({ msg: "Usuario creado", user: newUser });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al crear el usuario" });
    }
};

//logueo
const login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Verificar si el usuario existe en la base de datos
      const usuario = await Usuario.findOne({ where: { email } });
      if (!usuario) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
      }
  
      // Verificar la contraseña
      const passwordMatch = await bcrypt.compare(password, usuario.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
      }
  
      // Generar un token de autenticación
      const token = jwt.sign({ id: usuario.id }, 'secreto', { expiresIn: '10h' });
  
      res.json({ token, user: usuario });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Error en el servidor' });
    }
  };

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