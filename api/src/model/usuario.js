const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Usuario', {
        id_usuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        apellido_y_nombre: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        dni: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        celular: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        edad: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        codigo_postal: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        domicilio: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        carrera_inscripta: {
            type: DataTypes.STRING(150),
            allowNull: true,
        },
        rol: {
            type: DataTypes.STRING(20),
            allowNull: false,
            defaultValue: 'estudiante',
        },
        password: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
        año_cursada: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1, // Valor por defecto para el primer año
        },
    }, { timestamps: false });
};
