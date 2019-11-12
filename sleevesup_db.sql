/*
SQLyog Community v13.0.1 (64 bit)
MySQL - 5.7.21 : Database - sleevesup
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
/*Table structure for table `task_list` */

CREATE TABLE `task_list` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Details` varchar(255) DEFAULT NULL,
  `Status` enum('Open','Completed') DEFAULT 'Open',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `Details` (`Details`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

/*Data for the table `task_list` */

insert  into `task_list`(`ID`,`Details`,`Status`) values 
(1,'Test 1','Completed'),
(3,'Test 2','Open'),
(4,'Test 3','Open');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
