-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: bltest
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `elements`
--

DROP TABLE IF EXISTS `elements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `elements` (
  `u_id` int NOT NULL,
  `OSP` varchar(255) DEFAULT NULL,
  `LNG` varchar(255) DEFAULT NULL,
  `PIF` varchar(255) DEFAULT NULL,
  `LIS` varchar(255) DEFAULT NULL,
  `ADR` varchar(255) DEFAULT NULL,
  `BCF` varchar(255) DEFAULT NULL,
  `ESRP` varchar(255) DEFAULT NULL,
  `ECRF` varchar(255) DEFAULT NULL,
  `FG` varchar(255) DEFAULT NULL,
  `Bridge` varchar(255) DEFAULT NULL,
  `PSS` varchar(255) DEFAULT NULL,
  `Logger` varchar(255) DEFAULT NULL,
  `CHE` varchar(255) DEFAULT NULL,
  `CAD` varchar(255) DEFAULT NULL,
  `IDX` varchar(255) DEFAULT NULL,
  `Other` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`u_id`),
  CONSTRAINT `fk_elements_user` FOREIGN KEY (`u_id`) REFERENCES `old_users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `elements`
--

LOCK TABLES `elements` WRITE;
/*!40000 ALTER TABLE `elements` DISABLE KEYS */;
INSERT INTO `elements` VALUES (1,'a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','admin proviledges'),(2,'o','o','x','o','o','o','o','o','o','o','o','o','o','o','o',''),(3,'o','o','o','o','o','x','x','o','o','x','x','x','x','o','o',''),(4,'o','o','o','o','o','o','o','o','o','o','o','o','o','x','x',''),(5,'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o','Crendetializing'),(6,'o','o','o','o','o','o','o','o','o','o','o','x','o','o','o',''),(7,'o','o','o','o','o','o','o','o','o','o','o','x','o','o','o',''),(8,'o','o','o','o','o','o','o','o','o','o','o','x','o','o','o',''),(9,'o','o','o','o','o','o','o','o','o','o','o','x','o','o','o',''),(10,'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o',''),(11,'o','o','o','o','o','o','x','o','o','o','o','o','x','o','o',''),(12,'o','o','o','o','o','x','x','o','o','o','o','o','o','o','o',''),(13,'o','o','o','o','o','o','o','o','x','o','o','o','o','o','o',''),(14,'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o','Security Monitoring'),(15,'o','o','o','o','o','o','o','o','o','o','o','o','x','o','o',''),(16,'o','o','o','o','o','o','o','x','o','o','o','o','x','o','o',''),(17,'o','o','o','o','o','o','o','o','o','o','o','o','o','o','o','Advisor'),(18,'o','o','o','x','x','o','o','o','o','o','o','o','o','o','o',''),(19,'o','o','o','o','o','o','o','o','o','o','o','o','o','o','x',''),(20,'o','o','o','o','o','x','o','o','o','o','o','o','o','o','o',''),(21,'o','o','o','o','o','o','o','o','o','o','o','x','o','o','o',''),(22,'o','o','o','o','o','o','x','o','o','o','o','o','o','o','o',''),(23,'x','o','o','o','o','o','o','o','o','o','o','o','o','o','o',''),(24,'o','x','o','o','o','o','o','o','o','o','o','o','o','o','o',''),(25,'x','o','o','x','x','o','o','o','o','o','o','o','x','o','o',''),(26,'o','o','o','o','o','o','o','o','o','o','o','o','x','o','o','');
/*!40000 ALTER TABLE `elements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `old_users`
--

DROP TABLE IF EXISTS `old_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `old_users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `profile_completed` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `old_users`
--

LOCK TABLES `old_users` WRITE;
/*!40000 ALTER TABLE `old_users` DISABLE KEYS */;
INSERT INTO `old_users` VALUES (1,'admin','admin',NULL),(2,'Aculab','apple',NULL),(3,'Atos','avacado',NULL),(4,'Bell_Canada','banana',NULL),(5,'Comtech','cherry',NULL),(6,'Eonti','emu',NULL),(7,'Equature','envelope',NULL),(8,'Eventide','elastic',NULL),(9,'Exacom','easter',NULL),(10,'Frequentis','fox',NULL),(11,'Hexagon','hammer',NULL),(12,'Indigital','igloo',NULL),(13,'Intrado','icecream',NULL),(14,'Intuitus','iceburg',NULL),(15,'Micro_automation','Mango',NULL),(16,'Motorola','macaroni',NULL),(17,'NextNav','nintendo',NULL),(18,'Nokia','nachos',NULL),(19,'RapidSOS','robot',NULL),(20,'Sinch','soccer',NULL),(21,'Stancil','spinach',NULL),(22,'Synergem','sushi',NULL),(23,'T_Mobile','tomato',NULL),(24,'Valid8','violin',NULL),(25,'Verizon','vanilla',NULL),(26,'Zetron','zucchini',NULL);
/*!40000 ALTER TABLE `old_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tests`
--

DROP TABLE IF EXISTS `tests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tests` (
  `BLpair` varchar(255) DEFAULT NULL,
  `Status` varchar(255) DEFAULT NULL,
  `Comments` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tests`
--

LOCK TABLES `tests` WRITE;
/*!40000 ALTER TABLE `tests` DISABLE KEYS */;
INSERT INTO `tests` VALUES ('Atos:ESRP:Valid8:ECRF','Passed',' '),('Atos:ESRP:Verizon:ECRF','Passed',' '),('Atos:ESRP:Zetron:ECRF','Failed','weee'),('Atos:ESRP:T_Mobile:ECRF','Failed','weee'),('Atos.Atos:BCF:Synergem:ESRP','Failed','ffbfb'),('Atos.Atos:BCF:Eventide:Logger','Failed','afasdasda'),('Atos','Atos:BCF:Eventide:Logger','Failed'),('Atos','Atos:BCF:Exacom:Logger','Failed'),('Failed','gfhfhf',NULL),('Failed','gfhfhf',NULL),('${username}:${columnName}','Passed','com'),('Atos:Atos:BCF:Exacom:Logger','Passed','com'),('Atos:Atos:BCF:Eonti:Logger','Passed','com'),('Atos000000Atos:BCF:Exacom:Logger','Passed','com'),('Atos000000Atos:BCF:Eonti:Logger','Passed','com'),('Atos:BCF:Indigital:ESRP','Failed','sc'),('Atos:BCF:Equature:Logger','Failed','xcxc'),('Verizon:OSP_Voice:Valid8:LNG','Failed','cascascs'),('Indigital:ESRP:Valid8:LNG','Failed','cascascs'),('Tmobile:OSP_Video:Atos:ESRP','Passed',' '),('Valid8:LNG:Atos:ESRP','Passed',' '),('Atos:ESRP:Tmobile:OSP_RTT','Passed',' '),('Atos:PSAP:Motorola:ECRF','Passed',' '),('Tmobile:OSP_Video:Frequentis:ESRP','Passed',' '),('Tmobile:OSP_Video:Indigital:ESRP','Failed',NULL),('Comtech:PSAP:Intrado:ECRF','Passed',' '),('Comtech:PSAP:Motorola:ECRF','Passed',' '),('Comtech:PSAP:IIT:ECRF','Passed',' '),('Atos:ESRP:Verizon:OSP_RTT','Passed',' '),('IIT:ECRF:Atos:ESRP','Passed',' '),('Exacom:Logger:Atos:ESRP','Passed',' '),('Stancil:Logger:Atos:ESRP','Failed',NULL),('Verizon:OSP_RTT:Atos:ESRP','Passed',' ');
/*!40000 ALTER TABLE `tests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `toolingdata`
--

DROP TABLE IF EXISTS `toolingdata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `toolingdata` (
  `ToolingName` varchar(50) DEFAULT NULL,
  `ID` varchar(10) DEFAULT NULL,
  `OSP_LNG` varchar(10) DEFAULT NULL,
  `BCF` varchar(10) DEFAULT NULL,
  `ECRF` varchar(10) DEFAULT NULL,
  `ESRP` varchar(10) DEFAULT NULL,
  `CHE` varchar(10) DEFAULT NULL,
  `Location` varchar(20) DEFAULT NULL,
  `Notes` varchar(255) DEFAULT NULL,
  `Test_Scenario_1` tinyint(1) DEFAULT NULL,
  `Test_Scenario_2` tinyint(1) DEFAULT NULL,
  `Test_Scenario_3` tinyint(1) DEFAULT NULL,
  `Test_Scenario_4` tinyint(1) DEFAULT NULL,
  `Test_Scenario_5` tinyint(1) DEFAULT NULL,
  `Test_Scenario_6` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `toolingdata`
--

LOCK TABLES `toolingdata` WRITE;
/*!40000 ALTER TABLE `toolingdata` DISABLE KEYS */;
INSERT INTO `toolingdata` VALUES ('Tooling #1 MORNING','1M.1','TMO','ATOS','MOTO','IND','COM/SOL','C2_TMO_KS',NULL,0,0,0,0,0,0),('Tooling #1 MORNING','1M.2','VAL','ATOS','MOTO','IND','MICR','C1_LNG_IL','changess',0,0,0,0,0,0),('Tooling #1 MORNING','1M.3','TMO','ATOS','MOTO','IND','FREQ','C3_TMO_IL','faileddd',0,0,0,0,0,0),('Tooling #1 MORNING','1M.4','ACU','ATOS','INTRADO','IND','MOTO','C2_LNG_IL','T1 and T3 passed, T2,T4 and T5 failed',1,0,1,0,0,0),('Tooling #1 MORNING','1M.5','TMO','IND','INTRADO','HEX','ATOS','C1_TMO_WA','',0,0,0,1,0,0),('Tooling #1 MORNING','1M.6','VAL','IND','MOTO','ATOS','ZET','C3_LNG_IL',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #1 MORNING','1M.7','TMO','ATOS','INTRADO','HEX','COM/SOL','C2_TMO_KS',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #1 AFTERNOON','1A.1','VZW','ATOS','MOTO','HEX','MICR','C1_VZW_NJ',NULL,0,0,0,0,0,1),('Tooling #1 AFTERNOON','1A.2','ACU','IND','INTRADO','FREQ','ATOS','C4_LNG_IL',NULL,0,0,0,0,0,1),('Tooling #1 AFTERNOON','1A.3','VZW','ATOS','INTRADO','HEX','MOTO','C2_VZW_TX',NULL,0,0,0,0,0,1),('Tooling #1 AFTERNOON','1A.4','VAL','ATOS','MOTO','HEX','COM/SOL','C5_LNG_IL',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #1 AFTERNOON','1A.5','VZW','ATOS','INTRADO','IND','ZET','C3_VZW_TX',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #1 AFTERNOON','1A.6','ACU','ATOS','MOTO','HEX','FREQ','C7_LNG_IL',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #1 AFTERNOON','1A.7','VZW','ATOS','INTRADO','FREQ','MICR','C1_VZW_NJ',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #1 AFTERNOON','1A.8','VZW','IND','INTRADO','FREQ','MOTO','C2_VZW_TX',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #1 AFTERNOON','1A.9','VAL','ATOS','INTRADO','FREQ','COM/SOL','C5_LNG_IL',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #1 AFTERNOON','1A.10','VZW','IND','MOTO','HEX','ZET','C3_VZW_TX',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #1 AFTERNOON','1A.11','ACU','IND','MOTO','HEX','FREQ','C7_LNG_IL',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #1 AFTERNOON','1A.12','VZW','IND','INTRADO','FREQ','MICR','C1_VZW_NJ',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #1 AFTERNOON','1A.13','VAL','IND','INTRADO','FREQ','COM/SOL','C5_LNG_IL',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #1 AFTERNOON','1A.14','VZW','IND','INTRADO','FREQ','ZET','C3_VZW_TX',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #2 MORNING','2M.1','VZW','IND','MOTO','HEX','ATOS','C1_VZW_NJ',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #2 MORNING','2M.2','ACU','ATOS','MOTO','FREQ','MICR','C4_LNG_IL',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #2 MORNING','2M.3','VZW','ATOS','MOTO','FREQ','COM/SOL','C2_VZW_TX',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #2 MORNING','2M.4','VAL','ATOS','INTRADO','FREQ','MOTO','C5_LNG_IL',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #2 MORNING','2M.5','VZW','ATOS','INTRADO','IND','FREQ','C3_VZW_TX',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #2 MORNING','2M.6','ACU','ATOS','MOTO','IND','ZET','C7_LNG_IL',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #2 MORNING','2M.7','ACU','IND','MOTO','ATOS','MICR','C4_LNG_IL',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #2 MORNING','2M.8','VZW','IND','MOTO','ATOS','COM/SOL','C2_VZW_TX',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #2 MORNING','2M.9','VZW','IND','INTRADO','ATOS','FREQ','C3_VZW_TX',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #2 MORNING','2M.10','ACU','ATOS','INTRADO','HEX','ZET','C7_LNG_IL',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #2 MORNING','2M.11','ACU','IND','INTRADO','HEX','MICR','C4_LNG_IL',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #2 MORNING','2M.12','VZW','IND','INTRADO','HEX','COM/SOL','C2_VZW_TX',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #2 MORNING','2M.13','ACU','IND','MOTO','FREQ','ZET','C7_LNG_IL',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #2 AFTERNOON','2A.1','TMO','ATOS','INTRADO','IND','MICR','C1_TMO_WA',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #2 AFTERNOON','2A.2','VAL','IND','MOTO','FREQ','ATOS','C1_LNG_IL',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #2 AFTERNOON','2A.3','TMO','IND','INTRADO','ATOS','MOTO','C2_TMO_KS',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #2 AFTERNOON','2A.4','ACU','ATOS','INTRADO','IND','COM/SOL','C2_LNG_IL',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #2 AFTERNOON','2A.5','TMO','ATOS','MOTO','HEX','ZET','C3_TMO_IL',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #2 AFTERNOON','2A.6','VAL','ATOS','INTRADO','HEX','FREQ','C3_LNG_IL',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #2 AFTERNOON','2A.7','TMO','IND','MOTO','HEX','MICR','C1_TMO_WA',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #2 AFTERNOON','2A.8','ACU','IND','MOTO','HEX','COM/SOL','C2_LNG_IL',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #2 AFTERNOON','2A.9','TMO','ATOS','INTRADO','FREQ','ZET','C3_TMO_IL',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #2 AFTERNOON','2A.10','VAL','IND','INTRADO','HEX','FREQ','C3_LNG_IL',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #2 AFTERNOON','2A.11','TMO','IND','INTRADO','FREQ','MICR','C1_TMO_WA',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #2 AFTERNOON','2A.12','ACU','IND','INTRADO','FREQ','COM/SOL','C2_LNG_IL',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #2 AFTERNOON','2A.13','TMO','IND','INTRADO','ATOS','ZET','C3_TMO_IL',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #1 MORNING','1M.8','VAL','ATOS','INTRADO','HEX','MICR','C1_LNG_IL',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #1 MORNING','1M.9','TMO','IND','MOTO','ATOS','FREQ','C3_TMO_IL',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #1 MORNING','1M.10','ACU','IND','INTRADO','HEX','MOTO','C2_LNG_IL',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #1 MORNING','1M.11','VAL','IND','INTRADO','HEX','ZET','C3_LNG_IL',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #1 MORNING','1M.12','TMO','IND','MOTO','FREQ','COM/SOL','C2_TMO_KS',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #1 MORNING','1M.13','VAL','IND','MOTO','FREQ','MICR','C1_LNG_IL',NULL,NULL,NULL,NULL,NULL,NULL,NULL),('Tooling #1 MORNING','1M.14','VAL','ATOS','MOTO','FREQ','ZET','C3_LNG_IL',NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `toolingdata` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userinfo`
--

DROP TABLE IF EXISTS `userinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userinfo` (
  `c_id` int NOT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Phone_number` int DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`c_id`),
  CONSTRAINT `fk_userinfo_user` FOREIGN KEY (`c_id`) REFERENCES `old_users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userinfo`
--

LOCK TABLES `userinfo` WRITE;
/*!40000 ALTER TABLE `userinfo` DISABLE KEYS */;
INSERT INTO `userinfo` VALUES (1,NULL,NULL,NULL),(2,NULL,NULL,NULL),(3,NULL,NULL,NULL),(4,NULL,NULL,NULL),(5,NULL,NULL,NULL),(6,NULL,NULL,NULL),(7,NULL,NULL,NULL),(8,NULL,NULL,NULL),(9,NULL,NULL,NULL),(10,NULL,NULL,NULL),(11,NULL,NULL,NULL),(12,NULL,NULL,NULL),(13,NULL,NULL,NULL),(14,NULL,NULL,NULL),(15,NULL,NULL,NULL),(16,NULL,NULL,NULL),(17,NULL,NULL,NULL),(18,NULL,NULL,NULL),(19,NULL,NULL,NULL),(20,NULL,NULL,NULL),(21,NULL,NULL,NULL),(22,NULL,NULL,NULL),(23,NULL,NULL,NULL),(24,NULL,NULL,NULL),(25,NULL,NULL,NULL),(26,NULL,NULL,NULL);
/*!40000 ALTER TABLE `userinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL DEFAULT '0',
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Phone_number` varchar(10) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `OSP_Voice` varchar(255) DEFAULT NULL,
  `OSP_RTT` varchar(255) DEFAULT NULL,
  `OSP_Video` varchar(255) DEFAULT NULL,
  `PIF` varchar(255) DEFAULT NULL,
  `LNG` varchar(255) DEFAULT NULL,
  `FG` varchar(255) DEFAULT NULL,
  `ESRP` varchar(255) DEFAULT NULL,
  `OCIF` varchar(255) DEFAULT NULL,
  `PSAP` varchar(255) DEFAULT NULL,
  `EIDO` varchar(255) DEFAULT NULL,
  `Logger` varchar(255) DEFAULT NULL,
  `ECRF` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','admin',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2,'Acculab','apple','Kayenat Patil','3124936579','kpatil7@hawk.iit.edu',NULL,NULL,NULL,'x',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,'Atos','avacado','Kayenat Patil','3124936579','kpatil7@hawk.iit.edu',NULL,NULL,NULL,NULL,NULL,NULL,'x',NULL,'x',NULL,'x',NULL),(4,'Bell_Canada','banana','Kayenat Patil','3124936579','kpatil7@hawk.iit.edu',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'x',NULL,NULL),(5,'Comtech','cherry','Demo','3124936579','kpatil7@hawk.iit.edu',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'x',NULL,NULL,NULL),(7,'Equature','envelope',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'x',NULL),(8,'Eventide','elastic',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'x',NULL),(9,'Exacom','easter',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'x',NULL),(10,'Frequentis','fox','Fossil','3124936579','sdsd@gmail.edu',NULL,NULL,NULL,NULL,NULL,NULL,'x','x','x',NULL,NULL,NULL),(11,'Hexagon','hammer','Harry Smith','3124936579','kpatil7@hawk.iit.edu',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'x',NULL,NULL),(12,'Indigital','igloo',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'x',NULL,NULL,NULL,NULL,NULL),(13,'Intrado','icecream',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'x',NULL,NULL,NULL,NULL,NULL,'x'),(15,'Micro_automation','Mango',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'x',NULL,NULL,NULL),(16,'Motorola','macaroni',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'x',NULL,NULL,'x'),(14,'Stancil','spinach','Stanley','3124936579','kpatil7@hawk.iit.edu',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'x',NULL),(17,'Valid8','violin',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'x',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(18,'Verizon','vanilla',NULL,NULL,NULL,'x','x',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(19,'Zetron','zucchini',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'x','x',NULL,NULL),(6,'IIT','inertia',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'x'),(20,'Tmobile','trex','Terry','3124936579','kpatil7@hawk.iit.edu','x','x','x',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(21,'Versaterm','voltage',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(23,'admin2','admin2',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-31 15:16:56
