const express = require("express");
const app = express();
require("dotenv").config();

//Configuro conexion con base de datos:
const { Sequelize } = require('sequelize'); //esta es una ORM la cual hace una conexion del backend con la base de datos.
const sequelize = new Sequelize('universidad', process.env.USERNAME, process.env.PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
});

//Importo las rutas
const carrera = require("./routes/carreraRoutes");
const materia = require("./routes/materiaRoutes");
const estudiantes = require("./routes/estudiantesRoutes");
const notas = require("./routes/notasRoutes");

//manejo el middleware para utilizar los archivos JSON
app.use(express.json());

// Asociar las rutas
app.use('/carrera', carrera);
app.use('/materia', materia);
app.use('/estudiante', estudiantes);
app.use('/nota', notas);

// Conectar a la base de datos y sincronizar los modelos
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión establecida con la base de datos.');

        // Sincronizar los modelos creado en la carpeta model con la base de datos
        await sequelize.sync();

        // Iniciar el servidor
        app.listen(port, () => {
            console.log(`Servidor escuchando en http://localhost:${process.env.PORT}`);
        });
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
})();