const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define
        ('Carrera', {
            id_carrera: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nombre_carrera: {
                type: DataTypes.STRING(120),
                allowNull: true,
            },
            descripcion_carrera: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            fecha_apertura: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            facultad: {
                type: DataTypes.STRING(150),
                allowNull: true,
            },
            años_carrera: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
        },
            { timestamps: false });
};