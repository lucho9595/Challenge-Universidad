const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
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
            type: DataTypes.ENUM('Promoción', 'Examen Final'),
            allowNull: false,
        },
        carrera_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        año_cursada: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        nota1: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        nota2: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        nota3: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        nota4: {
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