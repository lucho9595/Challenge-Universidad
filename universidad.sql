-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-07-2023 a las 03:43:01
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `universidad`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrera`
--

CREATE TABLE `carrera` (
  `id_carrera` int(11) NOT NULL,
  `nombre_carrera` varchar(150) NOT NULL,
  `descripcion_carrera` varchar(255) NOT NULL,
  `fecha_apertura` date NOT NULL,
  `facultad` varchar(150) NOT NULL,
  `año_cursada` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materia`
--

CREATE TABLE `materia` (
  `id_materia` int(11) NOT NULL,
  `nombre_materia` varchar(255) NOT NULL,
  `horas_total_cursada` int(11) NOT NULL,
  `forma_aprobacion` varchar(50) NOT NULL,
  `carrera` varchar(150) NOT NULL,
  `año_cursada` int(11) NOT NULL,
  `carrera_id` int(11) NOT NULL,
  `estudiante_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `apellido_y_nombre` varchar(255) NOT NULL,
  `dni` int(11) NOT NULL,
  `celular` int(11) NOT NULL,
  `email` varchar(150) NOT NULL,
  `edad` int(11) NOT NULL,
  `codigo_postal` int(11) NOT NULL,
  `domicilio` varchar(150) NOT NULL,
  `carrera_inscripta` varchar(150) DEFAULT NULL,
  `rol` varchar(20) NOT NULL DEFAULT 'estudiante',
  `materia_id` int(11) NOT NULL,
  `carrera_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `apellido_y_nombre`, `dni`, `celular`, `email`, `edad`, `codigo_postal`, `domicilio`, `carrera_inscripta`, `rol`, `materia_id`, `carrera_id`) VALUES
(4, 'Admin User', 12345678, 123456789, 'admin@admin.com', 30, 12345, 'Calle Admin', NULL, 'admin', 0, 0),
(6, 'Estudiante User', 98765432, 987654321, 'estudiante@estudiante.com', 20, 54321, 'Calle Estudiante', 'Ingeniería en Informática', 'estudiante', 0, 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrera`
--
ALTER TABLE `carrera`
  ADD PRIMARY KEY (`id_carrera`);

--
-- Indices de la tabla `materia`
--
ALTER TABLE `materia`
  ADD PRIMARY KEY (`id_materia`),
  ADD KEY `FK_materia_carrera` (`carrera_id`),
  ADD KEY `FK_materia_estudiante` (`estudiante_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD KEY `FK_usuarios_materia` (`materia_id`),
  ADD KEY `FK_usuarios_carrera` (`carrera_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrera`
--
ALTER TABLE `carrera`
  MODIFY `id_carrera` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `materia`
--
ALTER TABLE `materia`
  MODIFY `id_materia` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `materia`
--
ALTER TABLE `materia`
  ADD CONSTRAINT `FK_materia_carrera` FOREIGN KEY (`carrera_id`) REFERENCES `carrera` (`id_carrera`),
  ADD CONSTRAINT `FK_materia_estudiante` FOREIGN KEY (`estudiante_id`) REFERENCES `usuarios` (`id_usuario`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `FK_usuarios_carrera` FOREIGN KEY (`carrera_id`) REFERENCES `carrera` (`id_carrera`),
  ADD CONSTRAINT `FK_usuarios_materia` FOREIGN KEY (`materia_id`) REFERENCES `materia` (`id_materia`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
