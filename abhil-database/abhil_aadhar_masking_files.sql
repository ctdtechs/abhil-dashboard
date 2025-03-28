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
-- Table structure for table `files`
--

DROP TABLE IF EXISTS `files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `files` (
  `id` int NOT NULL AUTO_INCREMENT,
  `file_name` varchar(255) NOT NULL,
  `file_path` varchar(500) NOT NULL,
  `total_pages` int NOT NULL,
  `uploaded_by` varchar(100) NOT NULL,
  `processing_status` enum('Pending','Completed','Failed') NOT NULL,
  `processing_time` decimal(5,2) DEFAULT NULL,
  `uploaded_at` datetime NOT NULL,
  `downloaded_on` datetime DEFAULT NULL,
  `processing_type` enum('Realtime','Historical') NOT NULL,
  `purged_on` datetime DEFAULT NULL,
  `purged_status` enum('Purged','Not Purged') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files`
--

LOCK TABLES `files` WRITE;
/*!40000 ALTER TABLE `files` DISABLE KEYS */;
INSERT INTO `files` VALUES (1,'sample_1.pdf','/uploads/sample_1.pdf',3,'admin','Completed',8.30,'2025-03-26 09:15:00','2025-03-26 09:20:00','Realtime','2025-03-27 10:00:00','Purged'),(2,'sample_2.pdf','/uploads/sample_2.pdf',5,'john','Completed',11.70,'2025-03-25 14:22:00','2025-03-25 14:30:00','Historical','2025-03-27 12:00:00','Not Purged'),(3,'report_3.pdf','/uploads/report_3.pdf',7,'alice','Completed',9.50,'2025-03-20 11:10:00',NULL,'Realtime',NULL,'Not Purged'),(4,'document_4.pdf','/uploads/document_4.pdf',2,'bob','Pending',NULL,'2025-03-22 15:45:00',NULL,'Historical',NULL,'Not Purged'),(5,'confidential_5.pdf','/uploads/confidential_5.pdf',6,'charlie','Completed',12.20,'2025-03-23 08:30:00','2025-03-23 08:40:00','Realtime',NULL,'Not Purged'),(6,'financial_report.pdf','/uploads/financial_report.pdf',4,'david','Completed',10.50,'2025-03-24 12:10:00','2025-03-24 12:20:00','Historical','2025-03-28 14:00:00','Purged'),(7,'invoice_7.pdf','/uploads/invoice_7.pdf',3,'emma','Completed',7.80,'2025-03-21 10:05:00','2025-03-21 10:12:00','Realtime',NULL,'Not Purged'),(8,'security_report.pdf','/uploads/security_report.pdf',6,'frank','Completed',13.40,'2025-03-19 16:00:00','2025-03-19 16:10:00','Historical',NULL,'Not Purged'),(9,'contract_9.pdf','/uploads/contract_9.pdf',8,'grace','Pending',NULL,'2025-03-22 09:30:00',NULL,'Realtime',NULL,'Not Purged'),(10,'agreement_10.pdf','/uploads/agreement_10.pdf',5,'harry','Completed',9.90,'2025-03-26 13:45:00','2025-03-26 13:55:00','Historical',NULL,'Not Purged'),(11,'legal_notice.pdf','/uploads/legal_notice.pdf',7,'isabella','Completed',14.20,'2025-03-18 08:30:00','2025-03-18 08:40:00','Historical',NULL,'Not Purged'),(12,'medical_record.pdf','/uploads/medical_record.pdf',5,'jack','Completed',9.50,'2025-03-20 14:10:00','2025-03-20 14:20:00','Realtime','2025-03-27 15:00:00','Purged'),(13,'policy_doc.pdf','/uploads/policy_doc.pdf',6,'kate','Pending',NULL,'2025-03-23 17:45:00',NULL,'Historical',NULL,'Not Purged'),(14,'audit_report.pdf','/uploads/audit_report.pdf',9,'liam','Completed',16.30,'2025-03-21 11:00:00','2025-03-21 11:10:00','Realtime',NULL,'Not Purged'),(15,'salary_slip.pdf','/uploads/salary_slip.pdf',3,'michael','Completed',7.20,'2025-03-24 09:10:00','2025-03-24 09:15:00','Historical',NULL,'Not Purged');
/*!40000 ALTER TABLE `files` ENABLE KEYS */;
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
