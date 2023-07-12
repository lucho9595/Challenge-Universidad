const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Inscripcion', {
        id_inscripcion: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        estudiante_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Usuario',
                key: 'id_usuario',
            },
        },
        materia_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Materia',
                key: 'id_materia',
            },
        }
    },
        { timestamps: false });
};