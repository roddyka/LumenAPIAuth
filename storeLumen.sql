-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 14/08/2020 às 17:17
-- Versão do servidor: 8.0.19
-- Versão do PHP: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `storeLumen`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `admin`
--

CREATE TABLE `admin` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `admin`
--

INSERT INTO `admin` (`id`, `name`, `email`, `password`, `email_verified_at`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Rodrigo ADM', 'rodrigoka4@gmail.com', '$2y$10$LfFOjhNtUF3fbfSqWX/2z.fpdTrbUQpdIAboJEbq59C0pDP.xkBWG', NULL, NULL, '2020-08-07 15:23:30', '2020-08-07 15:23:30'),
(2, 'RODRIGO DE CARVALHO ANTUNES', 'rodrigoka@live.com', '$2y$10$qU7oCcBNf/DCQWybBzFwluWH5vK4HmdyL/gsBPqNExszFayZwJ/J.', NULL, NULL, '2020-08-11 17:58:35', '2020-08-11 17:58:35');

-- --------------------------------------------------------

--
-- Estrutura para tabela `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2020_08_06_094929_create_products_table', 1),
(2, '2020_08_07_112711_create_users_table', 2),
(3, '2020_08_07_115636_create_admin_table', 2);

-- --------------------------------------------------------

--
-- Estrutura para tabela `products`
--

CREATE TABLE `products` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `weigth` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `size` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `virtual` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `weigth`, `size`, `virtual`, `created_at`, `updated_at`) VALUES
(1, 'Nihil in officia ipsum.', 'Nihil aut asperiores ut quae facere et adipisci. Aspernatur dicta cum ipsa qui. Temporibus ipsa minima possimus hic numquam molestias ad iusto. Laboriosam facere quia eos sit adipisci.', '7.04', '0.15', 'G', 0, '2020-08-06 10:15:06', '2020-08-06 10:15:06'),
(2, 'Ea alias et nihil ad quos voluptas.', 'Necessitatibus quasi nam tenetur nesciunt repellat excepturi. Est eveniet incidunt nobis ducimus. Illo sit nulla sed consequuntur.', '1.94', '0.15', 'G', 0, '2020-08-06 10:15:06', '2020-08-06 10:15:06'),
(3, 'Iure et dolore sunt.', 'Et ducimus fugit quia molestias distinctio. Id vel exercitationem totam aut aspernatur culpa. Quia dignissimos earum aut atque nam aut aut quia.', '4.05', '0.15', 'G', 0, '2020-08-06 10:15:06', '2020-08-06 10:15:06'),
(4, 'Neque odit similique quae tenetur saepe nostrum at.', 'Aperiam nulla aliquid in eum sed est. Dolor pariatur quis perspiciatis id accusamus et in. Voluptatem rem natus itaque placeat veniam commodi architecto. Eos ducimus quia laudantium accusamus.', '6.59', '0.15', 'G', 0, '2020-08-06 10:15:06', '2020-08-06 10:15:06'),
(5, 'Aliquid distinctio impedit et.', 'Aut dolorem aut nostrum. Ex voluptas consequatur ut accusantium. Accusantium ut ipsum nobis quibusdam fugiat aut qui est.', '8.93', '0.15', 'G', 0, '2020-08-06 10:15:06', '2020-08-06 10:15:06'),
(6, 'Aut beatae voluptas et quis minus sit repellat.', 'Et magnam sint quod. In et illum nemo. Repellat impedit consequuntur rem minima qui sit. Totam nostrum soluta sed id pariatur repudiandae. Mollitia est cum ducimus reiciendis pariatur ex aliquid.', '2.20', '0.15', 'G', 0, '2020-08-06 10:15:06', '2020-08-06 10:15:06'),
(7, 'Quaerat et doloremque voluptatem voluptatem.', 'A quo aut sed expedita similique tempora. Cupiditate harum corrupti quas inventore omnis.', '6.78', '0.15', 'G', 0, '2020-08-06 10:15:06', '2020-08-06 10:15:06'),
(8, 'Blanditiis in et ut impedit neque.', 'Rerum omnis alias dolor et ut accusantium aut. Earum culpa quod tempore facere velit. Modi culpa minima officia sit temporibus quae facilis.', '8.83', '0.15', 'G', 0, '2020-08-06 10:15:06', '2020-08-06 10:15:06'),
(9, 'Iure impedit similique magni aliquid ducimus sint error.', 'Voluptas et dolor aut perspiciatis. Tenetur voluptate ex omnis necessitatibus facilis quis officia. Quia qui a maxime. Consequuntur accusamus iusto eos dolore voluptate.', '0.24', '0.15', 'G', 0, '2020-08-06 10:15:06', '2020-08-06 10:15:06'),
(10, 'Non et labore dolorum quia voluptate facilis.', 'Rerum temporibus tempore enim totam et repellat. Ut porro et et labore molestiae. Qui est neque aut blanditiis. Officiis in minima nemo aliquid excepturi perferendis.', '1.28', '0.15', 'G', 0, '2020-08-06 10:15:06', '2020-08-06 10:15:06');

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `email_verified_at`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Rodrigo', 'rodrigoka4@gmail.com', '$2y$10$M50cI/iGN40rL/VONGGgeekwSZ3FxHhTY7dhN3SQXbrOttKTRsiPq', NULL, NULL, '2020-08-07 14:47:40', '2020-08-07 14:47:40'),
(2, 'Rodrigo', 'rodrigoka@live.com', '$2y$10$MBbAf6/Cn3NJb4YlOLLGlOXYwodZip9Iuf4rpW64F11t4BQbGtNdi', NULL, NULL, '2020-08-10 14:30:47', '2020-08-10 14:30:47'),
(3, 'RODRIGO DE CARVALHO ANTUNES', 'admin@admin.com', '$2y$10$u53JH9LlYT/SafsunqdWUOrvge595LYuoT/Vxzl71K6zLWjengX0K', NULL, NULL, '2020-08-11 10:33:16', '2020-08-11 10:33:16'),
(4, 'rodrigo', 'rodrigo@gmail.com', '$2y$10$PaJtm44GORxiWNNMISdJwesDHnZTx2Kksev7H6X/2f6fELsDm0.Ie', NULL, NULL, '2020-08-11 11:26:38', '2020-08-11 11:26:38');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admin_email_unique` (`email`);

--
-- Índices de tabela `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `admin`
--
ALTER TABLE `admin`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
