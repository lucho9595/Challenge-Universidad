const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Materia', {
        id_materia: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre_materia: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        horas_totales: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        forma_aprobacion: {
            type: DataTypes.STRING(20),
            allowNull: true,
        },
        carrera: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        año_cursada: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
        { timestamps: false });
}