const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Materia', {
        id_materia: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nombre: {
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
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: false,
        },
        año_cursada: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
        { timestamps: false });
};