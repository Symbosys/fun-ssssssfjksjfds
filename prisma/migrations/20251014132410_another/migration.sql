/*
  Warnings:

  - The primary key for the `profile` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `profile` DROP PRIMARY KEY,
    ADD COLUMN `address` VARCHAR(191) NULL,
    ADD COLUMN `cardVerification` JSON NULL,
    ADD COLUMN `dateOfBirth` VARCHAR(191) NULL,
    ADD COLUMN `enquiryVerificationChange` JSON NULL,
    ADD COLUMN `gender` VARCHAR(191) NULL,
    ADD COLUMN `incomeGstChange` JSON NULL,
    ADD COLUMN `iscardVerificationVerified` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `isenquiryVerificationChangeVerified` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `isincomeGstChangeVerified` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `isjoiningFromChangeVerified` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `islocationVerificationChangeAreaVerified` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `ismedicalKitVerified` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `isnocChangeVerified` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `isphoneVerificationVerified` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `ispoliceVerificationVerified` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `issecretarySafetyChangeVerified` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `joiningFromChange` JSON NULL,
    ADD COLUMN `locationVerificationChangeArea` JSON NULL,
    ADD COLUMN `medicalKit` JSON NULL,
    ADD COLUMN `nocChange` JSON NULL,
    ADD COLUMN `phoneVerification` JSON NULL,
    ADD COLUMN `policeVerification` JSON NULL,
    ADD COLUMN `secretarySafetyChange` JSON NULL,
    ADD COLUMN `state` VARCHAR(191) NULL,
    ADD COLUMN `upi` VARCHAR(191) NULL,
    ADD COLUMN `url` VARCHAR(191) NULL,
    ADD COLUMN `website` VARCHAR(191) NULL,
    MODIFY `id` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Another` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `data` JSON NULL,

    UNIQUE INDEX `Another_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- RenameIndex
ALTER TABLE `profile` RENAME INDEX `profile_email_key` TO `Profile_email_key`;

-- RenameIndex
ALTER TABLE `profile` RENAME INDEX `profile_phone_key` TO `Profile_phone_key`;
