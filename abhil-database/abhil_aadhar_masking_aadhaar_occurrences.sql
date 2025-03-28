-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: abhil_aadhar_masking
-- ------------------------------------------------------
-- Server version	8.3.0

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
-- Table structure for table `aadhaar_occurrences`
--

DROP TABLE IF EXISTS `aadhaar_occurrences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `aadhaar_occurrences` (
  `id` int NOT NULL AUTO_INCREMENT,
  `file_id` int NOT NULL,
  `page_number` int NOT NULL,
  `aadhaar_count` int NOT NULL,
  `detection_method` enum('OCR','Regex','AI Model') NOT NULL,
  `masking_status` enum('Masked','Unmasked') NOT NULL,
  `masked_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `file_id` (`file_id`),
  CONSTRAINT `aadhaar_occurrences_ibfk_1` FOREIGN KEY (`file_id`) REFERENCES `files` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=231 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aadhaar_occurrences`
--

LOCK TABLES `aadhaar_occurrences` WRITE;
/*!40000 ALTER TABLE `aadhaar_occurrences` DISABLE KEYS */;
INSERT INTO `aadhaar_occurrences` VALUES (201,1,1,2,'OCR','Masked','2025-03-26 09:17:00'),(202,2,2,1,'Regex','Masked','2025-03-25 14:25:00'),(203,2,4,1,'AI Model','Masked','2025-03-25 14:26:00'),(204,3,3,3,'OCR','Masked','2025-03-20 11:15:00'),(205,3,5,2,'AI Model','Masked','2025-03-20 11:20:00'),(206,4,1,1,'Regex','Unmasked','2025-03-20 11:20:00'),(207,5,2,2,'OCR','Masked','2025-03-23 08:35:00'),(208,5,4,1,'AI Model','Masked','2025-03-23 08:38:00'),(209,5,6,1,'Regex','Masked','2025-03-23 08:39:00'),(210,3,7,1,'AI Model','Masked','2025-03-20 11:25:00'),(211,6,1,2,'OCR','Masked','2025-03-24 12:12:00'),(212,6,3,1,'AI Model','Masked','2025-03-24 12:14:00'),(213,7,2,3,'Regex','Masked','2025-03-21 10:07:00'),(214,7,3,2,'OCR','Masked','2025-03-21 10:10:00'),(215,8,1,1,'AI Model','Masked','2025-03-19 16:05:00'),(216,8,4,2,'Regex','Masked','2025-03-19 16:08:00'),(217,9,5,1,'OCR','Unmasked','2025-03-19 16:08:00'),(218,10,2,3,'AI Model','Masked','2025-03-26 13:47:00'),(219,10,4,1,'Regex','Masked','2025-03-26 13:50:00'),(220,10,5,2,'OCR','Masked','2025-03-26 13:52:00'),(221,11,2,1,'OCR','Masked','2025-03-18 08:35:00'),(222,11,5,2,'AI Model','Masked','2025-03-18 08:37:00'),(223,12,1,3,'Regex','Masked','2025-03-20 14:12:00'),(224,12,4,2,'OCR','Masked','2025-03-20 14:18:00'),(225,13,3,1,'AI Model','Unmasked','2025-03-20 14:18:00'),(226,14,2,2,'OCR','Masked','2025-03-21 11:05:00'),(227,14,6,3,'Regex','Masked','2025-03-21 11:08:00'),(228,15,1,1,'AI Model','Masked','2025-03-24 09:12:00'),(229,15,3,2,'OCR','Masked','2025-03-24 09:14:00'),(230,12,5,1,'Regex','Masked','2025-03-20 14:19:00');
/*!40000 ALTER TABLE `aadhaar_occurrences` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-28 17:37:09
