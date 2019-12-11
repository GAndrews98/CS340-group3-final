-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: classmysql.engr.oregonstate.edu:3306
-- Generation Time: Dec 11, 2019 at 02:09 PM
-- Server version: 10.3.13-MariaDB-log
-- PHP Version: 7.0.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cs340_andrjose`
--

-- --------------------------------------------------------

--
-- Table structure for table `Games`
--

CREATE TABLE `Games` (
  `time` date NOT NULL,
  `location` varchar(25) NOT NULL,
  `score` varchar(25) NOT NULL,
  `team1` int(12) NOT NULL,
  `team2` int(12) NOT NULL,
  `team3` int(12) NOT NULL,
  `team4` int(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Games`
--

INSERT INTO `Games` (`time`, `location`, `score`, `team1`, `team2`, `team3`, `team4`) VALUES
('1980-06-07', '	\r\nCorvallis, Oregon', '0-0-0-2', 1456456456, 1231231232, 1841841841, 1573573573),
('1992-06-11', 'Los Angeles, California', '12-1-3-3', 1231231231, 1258258258, 1753753737, 1471471471),
('2002-04-01', 'Cambridge, Massachusetts', '34-10-2-0', 1231231231, 1753753737, 1591591591, 1258258258),
('2003-06-02', 'Seattle, Washington', '17-1-13-0', 1753753737, 1591591591, 1471471471, 1258258258),
('2006-06-05', 'Berkeley, California', '6-6-4-12', 1456456456, 1231231232, 1841841841, 1573573573),
('2008-12-13', 'Pullman, Washington', '0-22-10-5', 1456456456, 1231231232, 1841841841, 1573573573),
('2012-01-01', 'Stanford, California', '18-0-9-1', 1258258258, 1471471471, 1847847847, 1591591591),
('2012-06-06', 'Tempe, Arizona', '6-3-1-0', 1591591591, 1471471471, 1231231231, 1258258258),
('2012-12-12', '	\r\nTuscon, Arizona', '17-0-0-6', 1847847847, 1231231231, 1258258258, 1471471471),
('2018-12-12', 'Salt Lake City, Utah', '5-3-17-1', 1753753737, 1471471471, 1847847847, 1258258258);

-- --------------------------------------------------------

--
-- Table structure for table `Players`
--

CREATE TABLE `Players` (
  `player_id` int(9) NOT NULL,
  `name` varchar(40) NOT NULL,
  `year` varchar(10) NOT NULL,
  `team_id` int(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Players`
--

INSERT INTO `Players` (`player_id`, `name`, `year`, `team_id`) VALUES
(112121212, 'Henry', '2011-2016', 1258258258),
(121212121, 'John Cena', '1990-', 1841841841),
(125252525, 'Randy Jones', '2007-2011', 1753753737),
(126262626, 'Chair with a Knife', '2000-2018', 1456456456),
(142424242, 'Yoda', '1980-', 1591591591),
(148484848, 'Cornelius Vanderwall III', '2016-', 1231231231),
(174747474, 'Stapler', '2004-', 1258258258),
(176767676, 'Jeff', '1886-2015', 1258258258),
(186868686, 'Chair with a Club', '2000-', 1456456456),
(198989898, 'Dr. Pepper', '2002-2009', 1847847847),
(1456456456, 'Laptop on Steroids', '1973-', 1231231231),
(1987987987, 'Bohemiam Rapper', '2001-', 1231231231);

-- --------------------------------------------------------

--
-- Table structure for table `Records`
--

CREATE TABLE `Records` (
  `category` varchar(25) NOT NULL,
  `value` float NOT NULL,
  `player_id` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Records`
--

INSERT INTO `Records` (`category`, `value`, `player_id`) VALUES
('Shekels Spent', 24, 142424242),
('Shekels Spent', 7, 148484848),
('Shekels Spent', 3, 198989898),
('Shekels Spent', 22, 125252525),
('Furthest Distance Dug', 0.7, 126262626),
('Furthest Distance Dug', 2, 174747474),
('Furthest Distance Dug', 124, 176767676),
('Furthest Distance Dug', 66, 121212121),
('Furthest Distance Dug', 7.7, 112121212),
('Tears Shed', 6, 126262626),
('Tears Shed', 60, 186868686),
('Tears Shed', 27, 148484848),
('Tears Shed', 12, 198989898),
('Tears Shed', 18, 112121212),
('Tears Shed', 242, 176767676),
('Tears Shed', 0, 121212121),
('Tears Shed', 65, 125252525),
('Tears Shed', 18, 174747474),
('Tears Shed', 46, 142424242),
('Highest Jump', 22, 186868686),
('Highest Jump', 2, 142424242),
('Highest Jump', 14, 121212121),
('Highest Jump', 1.6, 174747474),
('Highest Jump', 3, 125252525),
('Pints of Blood Spilled', 116, 148484848),
('Pints of Blood Spilled', 217, 142424242),
('Pints of Blood Spilled', 66, 198989898),
('Pints of Blood Spilled', 618, 121212121),
('Pints of Blood Spilled', 79, 125252525),
('Meters of Tin Cut', 0.7, 148484848),
('Meters of Tin Cut', 0.8, 198989898),
('Meters of Tin Cut', 0.4, 186868686),
('Meters of Tin Cut', 1.3, 121212121),
('Meters of Tin Cut', 2.6, 126262626),
('Meters of Tin Cut', 0.9, 142424242);

-- --------------------------------------------------------

--
-- Table structure for table `Schools`
--

CREATE TABLE `Schools` (
  `name` varchar(30) NOT NULL,
  `location` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Schools`
--

INSERT INTO `Schools` (`name`, `location`) VALUES
('Arizona State University', 'Tempe, Arizona'),
('MIT', 'Cambridge, Massachusetts'),
('Oregon State University', 'Corvallis, Oregon'),
('Stanford University', 'Stanford, California'),
('UC Berkeley', 'Berkeley, California'),
('UCLA', 'Los Angeles, California'),
('University of Arizona', 'Tuscon, Arizona'),
('University of Utah', 'Salt Lake City, Utah'),
('University of Washington', 'Seattle, Washington'),
('Washington State University', 'Pullman, Washington');

-- --------------------------------------------------------

--
-- Table structure for table `Teams`
--

CREATE TABLE `Teams` (
  `team_id` int(12) NOT NULL,
  `level` varchar(25) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `schoolname` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Teams`
--

INSERT INTO `Teams` (`team_id`, `level`, `gender`, `schoolname`) VALUES
(1231231231, 'Collegiate', 'Male', 'Arizona State University'),
(1231231232, 'Intramural', 'Male', 'UC Berkeley'),
(1258258258, 'Collegiate', 'Female', 'MIT'),
(1456456456, 'Intramural', 'Male', 'University of Washington'),
(1471471471, 'Collegiate', 'Female', 'UCLA'),
(1573573573, 'Intramural', 'Female', 'MIT'),
(1591591591, 'Collegiate', 'Female', 'Arizona State University'),
(1753753737, 'Collegiate', 'Male', 'UC Berkeley'),
(1841841841, 'Intramural', 'Male', 'Oregon State University'),
(1847847847, 'Collegiate', 'Female', 'University of Washington');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Games`
--
ALTER TABLE `Games`
  ADD PRIMARY KEY (`time`,`location`);

--
-- Indexes for table `Players`
--
ALTER TABLE `Players`
  ADD PRIMARY KEY (`player_id`);

--
-- Indexes for table `Schools`
--
ALTER TABLE `Schools`
  ADD PRIMARY KEY (`name`);

--
-- Indexes for table `Teams`
--
ALTER TABLE `Teams`
  ADD PRIMARY KEY (`team_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
