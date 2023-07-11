-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: universidad
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carreras`
--

DROP TABLE IF EXISTS `carreras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carreras` (
  `id_carrera` int NOT NULL AUTO_INCREMENT,
  `nombre_carrera` varchar(150) NOT NULL,
  `descripcion_carrera` varchar(255) NOT NULL,
  `fecha_apertura` datetime NOT NULL,
  `facultad` varchar(150) NOT NULL,
  `año_cursada` int NOT NULL,
  PRIMARY KEY (`id_carrera`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carreras`
--

LOCK TABLES `carreras` WRITE;
/*!40000 ALTER TABLE `carreras` DISABLE KEYS */;
INSERT INTO `carreras` VALUES (1,'Contador Publico','experto en contabilidad y el profesional preparado para tener una visión integral de las empresas y todo tipo de organizaciones','1910-10-02 04:16:48','Economia',6),(2,'Administrador de Empresas','experto en contabilidad y el profesional preparado para tener una visión integral de las empresas y todo tipo de organizaciones','1920-10-02 04:00:00','Economia',6);
/*!40000 ALTER TABLE `carreras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materia`
--

DROP TABLE IF EXISTS `materia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materia` (
  `id_materia` int NOT NULL AUTO_INCREMENT,
  `nombre_materia` varchar(255) NOT NULL,
  `horas_total_cursada` int NOT NULL,
  `forma_aprobacion` enum('Promoción','Examen Final') NOT NULL,
  `año_cursada` int NOT NULL,
  `carrera_id` int NOT NULL,
  `estudiante_id` int DEFAULT NULL,
  `nota1` int DEFAULT NULL,
  `nota2` int DEFAULT NULL,
  `nota3` int DEFAULT NULL,
  `nota4` int DEFAULT NULL,
  `nota_final` int DEFAULT NULL,
  PRIMARY KEY (`id_materia`),
  KEY `FK_materia_carrera_idx` (`carrera_id`),
  KEY `FK_materia_estudiante` (`estudiante_id`),
  CONSTRAINT `FK_materia_carrera` FOREIGN KEY (`carrera_id`) REFERENCES `carreras` (`id_carrera`),
  CONSTRAINT `FK_materia_estudiante` FOREIGN KEY (`estudiante_id`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materia`
--

LOCK TABLES `materia` WRITE;
/*!40000 ALTER TABLE `materia` DISABLE KEYS */;
INSERT INTO `materia` VALUES (1,'Matematica 1',60,'Promoción',1,1,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `materia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `apellido_y_nombre` varchar(255) NOT NULL,
  `dni` int NOT NULL,
  `celular` int NOT NULL,
  `email` varchar(150) NOT NULL,
  `edad` int NOT NULL,
  `codigo_postal` int NOT NULL,
  `domicilio` varchar(150) NOT NULL,
  `carrera_inscripta` varchar(150) DEFAULT NULL,
  `rol` varchar(20) DEFAULT 'estudiante',
  `materia_id` int DEFAULT NULL,
  `carrera_id` int DEFAULT NULL,
  `password` varchar(15) NOT NULL,
  `año_cursada` int DEFAULT '1',
  PRIMARY KEY (`id_usuario`),
  KEY `FK_usuarios_materia` (`materia_id`),
  KEY `FK_usuarios_carrera` (`carrera_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Admin User',12345678,123456789,'admin@admin.com',30,12345,'Calle Admin',NULL,'admin',0,0,'admin1234',1);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-11 16:49:20
