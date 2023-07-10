require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

const {
    DB_USERNAME,
    DB_PASSWORD,
    DB_DATABASE,
    DB_HOST,
    DB_PORT,
} = process.env;

const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'mysql',
    logging: false,
});

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y los agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, 'model'))
    .filter((file) => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, 'model', file)));
    });

// Injectamos la conexión (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));

// Realizamos las relaciones entre los modelos
const { Carrera, Materia, Usuario } = sequelize.models;

// Relaciones
Carrera.hasMany(Materia, { foreignKey: 'carrera_id' });
Materia.belongsTo(Carrera, { foreignKey: 'carrera_id' });

Usuario.belongsTo(Carrera, { foreignKey: 'carrera_id' });
Usuario.belongsTo(Materia, { foreignKey: 'materia_id' });

module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize,     // para importar la conexión { conn } = require('./db.js');
};
