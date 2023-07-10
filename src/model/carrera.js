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
                type: DataTypes.STRING(150),
                allowNull: false,
            },
            descripcion_carrera: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            fecha_apertura: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            facultad: {
                type: DataTypes.STRING(150),
                allowNull: false,
            },
            año_cursada: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
            { timestamps: false });
};