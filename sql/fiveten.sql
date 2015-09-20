-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Сен 20 2015 г., 13:37
-- Версия сервера: 5.5.40-0ubuntu0.14.04.1
-- Версия PHP: 5.5.9-1ubuntu4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `monitoring`
--

-- --------------------------------------------------------

--
-- Структура таблицы `fiveten`
--

CREATE TABLE IF NOT EXISTS `fiveten` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lat` float NOT NULL,
  `lng` float NOT NULL,
  `popup` text CHARACTER SET utf8 NOT NULL,
  `name` text CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=20 ;

--
-- Дамп данных таблицы `fiveten`
--

INSERT INTO `fiveten` (`id`, `lat`, `lng`, `popup`, `name`) VALUES
(19, 50.4451, 30.5367, 'Сергей Орлов\nhttps://www.facebook.com/sergey.orlov.s?pnref=eh', 'Киев');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
