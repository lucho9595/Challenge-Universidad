const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Estudiante', {
        id_estudiantes: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        dni: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        apellido_y_nombre: {
            type: DataTypes.STRING(150),
            allowNull: true,
        },
        celular: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING(150),
            allowNull: true,
        },
        edad: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        codigo_postal: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        domicilio: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        carrera_inscripta: {
            type: DataTypes.STRING(150),
            allowNull: true,
        },
    },
        { timestamps: false });
}