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
            allowNull: false,
        },
        nombre_materia: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        horas_total_cursada: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        forma_aprobacion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        carrera: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        año_cursada: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        nota_1: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        nota_2: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        nota_3: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        nota_4: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        nota_final: {
            type: DataTypes.FLOAT,
            allowNull: true,
        }
    },
        { timestamps: false });
};
