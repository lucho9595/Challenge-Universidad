Project React JS - Universidad ATLANTIDA
Challenge Universidad

ENDPOINTS:
// Endpoints para Carrera
router.get --> http://localhost:4000/carreras/:id
router.get --> http://localhost:4000/carreras
router.post --> http://localhost:4000/carreras
router.put --> http://localhost:4000/carreras/:id
router.delete --> http://localhost:4000/carreras/:id


// Endpoints para Materia
router.get --> http://localhost:4000/materias
router.post --> http://localhost:4000/materias
router.put --> http://localhost:4000/materias/:id
router.delete --> http://localhost:4000/materias/:id


// Endpoints para Estudiante
router.get --> http://localhost:4000/estudiantes/:id
router.get --> http://localhost:4000/estudiantes
router.post --> http://localhost:4000/estudiantes
router.put --> http://localhost:4000/estudiantes/:id
router.delete --> http://localhost:4000/estudiantes/:id

// Ruta para el inicio de sesión
router.post -->http://localhost:4000/login

// Endpoints para Nota
router.get --> http://localhost:4000/notas/usuario/:usuario_id
router.get --> http://localhost:4000/notas
router.post --> http://localhost:4000/notas
router.put --> http://localhost:4000/notas/:id
router.delete --> http://localhost:4000/notas/:id

Funcionalidades
USUARIO:

Autenticacion , envio de email de bienvenida.
Perfil del usuario, cambio de sus datos , ver sus notas.

ADMIN:

Dashboard de admin
Seccion para crear carreras.
Seccion para crear materias.
Puede ver: Nombre de Carreras su facultad y la cantidad de inscriptos, nombre de materias, nombre de usuarios, ver los datos del admin y modificarlos
 
Tecnologías usadas en el proyecto:
React
Bootstrap
Node
MySQL

Authors
Luciano Coronel - linkedin

Instalacion
In the project directory, you can run:

git clone https://github.com/lucho9595/Challenge-Universidad

El boilerplate cuenta con dos carpetas: api y client. En estas carpetas estará el código del back-end y el front-end respectivamente.

En api crear un archivo llamado: .env que tenga la siguiente forma:

PORT=4000
DB_USER=usuarioDeMySQL
DB_PASSWORD=passwordDeMySQL
DB_PASSWORD="lucho11524911"
DB_DATABASE="universidad"
DB_HOST="localhost"
DB_PORT="3306"
Reemplazar usuarioDeMySQL y passwordDeMySQL con tus propias credenciales para conectarte a MySQL. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

Adicionalmente será necesario que creen desde MySQL una base de datos llamada universidad

npm install
On folder /cliente/universidad npm install & npm npm start
On folder /api npm install & npm start