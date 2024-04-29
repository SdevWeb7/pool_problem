-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 29 avr. 2024 à 07:26
-- Version du serveur : 8.0.29
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `blog_backoffice`
--

-- --------------------------------------------------------

--
-- Structure de la table `comment`
--

DROP TABLE IF EXISTS `comment`;
CREATE TABLE IF NOT EXISTS `comment` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `nickname` varchar(30) NOT NULL,
  `message` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `publishTime` datetime NOT NULL,
  `story_id` int UNSIGNED DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `story_id` (`story_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `comment`
--

INSERT INTO `comment` (`id`, `nickname`, `message`, `publishTime`, `story_id`) VALUES
(1, 'Jako', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis rem corrupti est.', '2024-04-28 00:25:08', 2),
(2, 'Clara', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis rem corrupti est.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis rem corrupti est.', '2024-04-29 07:25:08', 2),
(3, 'Bobby', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis rem corrupti est.', '2024-04-29 07:25:51', 1);

-- --------------------------------------------------------

--
-- Structure de la table `story`
--

DROP TABLE IF EXISTS `story`;
CREATE TABLE IF NOT EXISTS `story` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `content` varchar(1000) NOT NULL,
  `author` char(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'Admin',
  `publishTime` datetime NOT NULL,
  `img_src` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `story`
--

INSERT INTO `story` (`id`, `title`, `content`, `author`, `publishTime`, `img_src`) VALUES
(1, 'Voyage au Canada', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni non reiciendis ut id temporibus minus optio tempora minima perspiciatis omnis. Praesentium amet neque minima et. Dolorem aspernatur labore mollitia itaque non, impedit voluptatem molestias quod. Magnam reprehenderit corporis dolores delectus architecto voluptatibus! Mollitia debitis consequatur consectetur nobis nemo minima unde obcaecati aperiam, optio illo natus ex? Totam repudiandae vel voluptate harum nihil corporis omnis quam sapiente unde optio ipsum a facilis tenetur odio, consectetur nemo incidunt repellendus reiciendis delectus sequi temporibus quas quos! Temporibus deleniti, quod odio similique doloribus eaque error totam sint consequatur culpa, magnam omnis cumque qui in tempora laboriosam laborum, ad ducimus? Id optio cum nemo magni beatae quaerat quam minima veniam tempora eveniet earum, quo aliquam alias laborum sequi illum officiis ratione suscipit et officia soluta. Consequuntur blanditiis numquam libero cu', 'Admin', '2024-04-25 19:22:56', 'no_picture.webp'),
(2, 'Vive le Japon', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni non reiciendis ut id temporibus minus optio tempora minima perspiciatis omnis. Praesentium amet neque minima et. Dolorem aspernatur labore mollitia itaque non, impedit voluptatem molestias quod. Magnam reprehenderit corporis dolores delectus architecto voluptatibus! Mollitia debitis consequatur consectetur nobis nemo minima unde obcaecati aperiam, optio illo natus ex? Totam repudiandae vel voluptate harum nihil corporis omnis quam sapiente unde optio ipsum a facilis tenetur odio, consectetur nemo incidunt repellendus reiciendis delectus sequi temporibus quas quos! Temporibus deleniti, quod odio similique doloribus eaque error totam sint consequatur culpa, magnam omnis cumque qui in tempora laboriosam laborum, ad ducimus? Id optio cum nemo magni beatae quaerat quam minima veniam tempora eveniet earum, quo aliquam alias laborum sequi illum officiis ratione suscipit et officia soluta. Consequuntur blanditiis numquam libero cu', 'Admin', '2024-04-27 12:24:15', 'no_picture.webp');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`story_id`) REFERENCES `story` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
