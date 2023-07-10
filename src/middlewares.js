// Middleware para verificar si el usuario es admin
const isAdmin = (req, res, next) => {
    if (req.user && req.user.rol === 'admin') {
        // El usuario es admin, continuar con la siguiente función de middleware
        next();
    } else {
        // El usuario no tiene permisos de admin, devolver error de autorización
        res.status(403).json({ error: 'No tienes permisos de administrador.' });
    }
};

// Middleware para verificar si el usuario es estudiante
const isEstudiante = (req, res, next) => {
    if (req.user && req.user.rol === 'estudiante') {
        // El usuario es estudiante, continuar con la siguiente función de middleware
        next();
    } else {
        // El usuario no tiene permisos de estudiante, devolver error de autorización
        res.status(403).json({ error: 'No tienes permisos de estudiante.' });
    }
};
module.exports = {
    isAdmin,
    isEstudiante,
};