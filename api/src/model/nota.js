const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Nota', {
        id_nota: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nota1: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        nota2: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        nota3: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        nota4: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        nota_final: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        materia_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        usuario_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        timestamps: false
    });
};
