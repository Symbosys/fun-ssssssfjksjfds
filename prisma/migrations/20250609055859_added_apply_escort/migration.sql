-- AlterTable
ALTER TABLE `model` ADD COLUMN `gender` ENUM('MALE', 'FEMALE') NOT NULL DEFAULT 'FEMALE';

-- CreateTable
CREATE TABLE `MaleApplicants` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `age` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `whatsapp` VARCHAR(191) NULL,
    `gender` ENUM('MALE', 'FEMALE') NOT NULL DEFAULT 'MALE',
    `address` VARCHAR(191) NULL,

    UNIQUE INDEX `MaleApplicants_email_key`(`email`),
    UNIQUE INDEX `MaleApplicants_phone_key`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
