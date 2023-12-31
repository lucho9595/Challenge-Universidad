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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carreras`
--

LOCK TABLES `carreras` WRITE;
/*!40000 ALTER TABLE `carreras` DISABLE KEYS */;
INSERT INTO `carreras` VALUES (1,'Contador Publico','abocado a la contabilidad publica','1920-10-02 04:00:00','Economia',6),(2,'Administracion de empresas','abocado a la administracion','1930-10-02 04:00:00','Economia',6),(3,'Ingeniero informatico','abocado a la informatica','1900-10-02 04:16:48','Informatica',6),(4,'Medicina','abocado a la medicina','1850-10-02 03:53:48','Medicina',6),(5,'Ingeniero Quimico','es un ingeniero quimico','2023-07-06 00:00:00','Ingenieria',6);
/*!40000 ALTER TABLE `carreras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inscripcions`
--

DROP TABLE IF EXISTS `inscripcions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inscripcions` (
  `id_inscripcion` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int DEFAULT NULL,
  `materia_id` int DEFAULT NULL,
  PRIMARY KEY (`id_inscripcion`),
  KEY `materia_id` (`materia_id`),
  KEY `inscripcion_ibfk_1_idx` (`usuario_id`),
  CONSTRAINT `inscripcions_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id_usuario`),
  CONSTRAINT `inscripcions_ibfk_2` FOREIGN KEY (`materia_id`) REFERENCES `materia` (`id_materia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inscripcions`
--

LOCK TABLES `inscripcions` WRITE;
/*!40000 ALTER TABLE `inscripcions` DISABLE KEYS */;
/*!40000 ALTER TABLE `inscripcions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materia`
--

DROP TABLE IF EXISTS `materia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materia` (
  `id_materia` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `horas_total_cursada` int DEFAULT NULL,
  `forma_aprobacion` enum('Promoción','Examen Final') DEFAULT NULL,
  `carrera_id` int DEFAULT NULL,
  `año_cursada` int DEFAULT NULL,
  PRIMARY KEY (`id_materia`),
  KEY `carrera_id` (`carrera_id`),
  CONSTRAINT `MATERIA` FOREIGN KEY (`carrera_id`) REFERENCES `carreras` (`id_carrera`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materia`
--

LOCK TABLES `materia` WRITE;
/*!40000 ALTER TABLE `materia` DISABLE KEYS */;
INSERT INTO `materia` VALUES (1,'Matematica 1',60,'Promoción',1,1),(2,'Algebra 1',60,'Promoción',1,1),(3,'Anatomia',60,'Promoción',4,1),(4,'Fisiologia',60,'Promoción',4,2),(5,'Quimica',60,'Promoción',4,1),(6,'Embriologia',60,'Promoción',4,1),(7,'Bioetica',60,'Promoción',4,2),(8,'Patologia',60,'Promoción',4,1),(9,'Logistica',60,'Promoción',3,2),(10,'Principios de Programacion',60,'Examen Final',3,1),(11,'Principios de Logica',60,'Examen Final',3,1),(12,'Matematica 2',60,'Examen Final',1,2),(14,'Historia 5',20,'Promoción',1,5),(15,'Matematica 5',20,'Promoción',1,5);
/*!40000 ALTER TABLE `materia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nota`
--

DROP TABLE IF EXISTS `nota`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nota` (
  `id_nota` int NOT NULL AUTO_INCREMENT,
  `nota1` decimal(4,2) DEFAULT NULL,
  `nota2` decimal(4,2) DEFAULT NULL,
  `nota3` decimal(4,2) DEFAULT NULL,
  `nota4` decimal(4,2) DEFAULT NULL,
  `nota_final` int DEFAULT NULL,
  `usuario_id` int DEFAULT NULL,
  `materia_id` int DEFAULT NULL,
  PRIMARY KEY (`id_nota`),
  KEY `materia_id` (`materia_id`),
  KEY `nota_ibfk_1_idx` (`usuario_id`),
  CONSTRAINT `nota_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id_usuario`),
  CONSTRAINT `nota_ibfk_2` FOREIGN KEY (`materia_id`) REFERENCES `materia` (`id_materia`),
  CONSTRAINT `CHK_nota1` CHECK (((`nota1` >= 0) and (`nota1` <= 10))),
  CONSTRAINT `CHK_nota2` CHECK (((`nota2` >= 0) and (`nota2` <= 10))),
  CONSTRAINT `CHK_nota3` CHECK (((`nota3` >= 0) and (`nota3` <= 10))),
  CONSTRAINT `CHK_nota4` CHECK (((`nota4` >= 0) and (`nota4` <= 10))),
  CONSTRAINT `nota_chk_1` CHECK (((`nota1` >= 1) and (`nota1` <= 10))),
  CONSTRAINT `nota_chk_2` CHECK (((`nota2` >= 1) and (`nota2` <= 10))),
  CONSTRAINT `nota_chk_3` CHECK (((`nota3` >= 1) and (`nota3` <= 10))),
  CONSTRAINT `nota_chk_4` CHECK (((`nota4` >= 1) and (`nota4` <= 10)))
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nota`
--

LOCK TABLES `nota` WRITE;
/*!40000 ALTER TABLE `nota` DISABLE KEYS */;
INSERT INTO `nota` VALUES (8,3.00,6.00,9.00,9.00,7,19,5),(9,3.00,6.00,9.00,9.00,7,19,3);
/*!40000 ALTER TABLE `nota` ENABLE KEYS */;
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
  `carrera_id` int DEFAULT NULL,
  `rol` varchar(20) DEFAULT 'estudiante',
  `password` varchar(255) NOT NULL,
  `año_cursada` int NOT NULL DEFAULT '1',
  `materias_asignadas` json DEFAULT NULL,
  PRIMARY KEY (`id_usuario`),
  KEY `usuarios_ibfk_1` (`carrera_id`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`carrera_id`) REFERENCES `carreras` (`id_carrera`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (18,'admins',12345678,123456789,'admin@admin.com',25,1234,'Calle admin',1,'admin','$2b$10$NgeL2HSC0u/jP17OQaYMNOst8qVZWFPc9dcRC5cC3tqBoKE.G0xQC',0,'0'),(19,'Luciano Coronel',38666654,1137601819,'luciano@luciano.com',30,1828,'Calle 1',4,'estudiante','$2b$10$bZidVMYSGkYt2WQoOoDEtOxEC4ndxFeaqpfUIuwo6hnwfM2rDrwz.',1,'[3, 5, 6, 8]'),(20,'ve larga',38636805,1137601819,'a@a.com',29,1234,'Rawson 1152',4,'estudiante','$2b$10$5.WTSgF0XlmRN0EfrR.PS.g5yGMCH9CqzyJyVBbS22i7k3uWU6xFS',1,'[3, 5, 6, 8]');
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

-- Dump completed on 2023-07-16 23:32:35
