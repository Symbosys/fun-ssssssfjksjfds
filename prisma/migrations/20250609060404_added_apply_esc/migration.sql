/*
  Warnings:

  - You are about to drop the `maleapplicants` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `maleapplicants`;

-- CreateTable
CREATE TABLE `Applicants` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `age` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `whatsapp` VARCHAR(191) NULL,
    `gender` ENUM('MALE', 'FEMALE') NOT NULL DEFAULT 'MALE',
    `address` VARCHAR(191) NULL,

    UNIQUE INDEX `Applicants_email_key`(`email`),
    UNIQUE INDEX `Applicants_phone_key`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
