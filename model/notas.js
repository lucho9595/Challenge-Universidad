const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Nota', {
        id_notas: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        estudiante: {
            type: DataTypes.STRING(150),
            allowNull: true,
        },
        materia: {
            type: DataTypes.STRING(150),
            allowNull: true,
        },
        parcial_1: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        parcial_2: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        parcial_3: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        parcial_4: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        nota_final: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
        { timestamps: false });
}