/*
  Warnings:

  - You are about to drop the column `iscardVerificationVerified` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `isenquiryVerificationChangeVerified` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `isincomeGstChangeVerified` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `isjoiningFromChangeVerified` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `islocationVerificationChangeAreaVerified` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `ismedicalKitVerified` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `isnocChangeVerified` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `isphoneVerificationVerified` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `ispoliceVerificationVerified` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `issecretarySafetyChangeVerified` on the `profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `profile` DROP COLUMN `iscardVerificationVerified`,
    DROP COLUMN `isenquiryVerificationChangeVerified`,
    DROP COLUMN `isincomeGstChangeVerified`,
    DROP COLUMN `isjoiningFromChangeVerified`,
    DROP COLUMN `islocationVerificationChangeAreaVerified`,
    DROP COLUMN `ismedicalKitVerified`,
    DROP COLUMN `isnocChangeVerified`,
    DROP COLUMN `isphoneVerificationVerified`,
    DROP COLUMN `ispoliceVerificationVerified`,
    DROP COLUMN `issecretarySafetyChangeVerified`,
    ADD COLUMN `carVefificationStatus` ENUM('PENDING', 'APPROVED', 'REJECTED') NOT NULL DEFAULT 'PENDING',
    ADD COLUMN `enquiryVerificationChangeStatus` ENUM('PENDING', 'APPROVED', 'REJECTED') NOT NULL DEFAULT 'PENDING',
    ADD COLUMN `incomeGstChangeStatus` ENUM('PENDING', 'APPROVED', 'REJECTED') NOT NULL DEFAULT 'PENDING',
    ADD COLUMN `joiningFromChangeStatus` ENUM('PENDING', 'APPROVED', 'REJECTED') NOT NULL DEFAULT 'PENDING',
    ADD COLUMN `locationVerificationChangeAreaStatus` ENUM('PENDING', 'APPROVED', 'REJECTED') NOT NULL DEFAULT 'PENDING',
    ADD COLUMN `medicalKitStatus` ENUM('PENDING', 'APPROVED', 'REJECTED') NOT NULL DEFAULT 'PENDING',
    ADD COLUMN `nocChangeStatus` ENUM('PENDING', 'APPROVED', 'REJECTED') NOT NULL DEFAULT 'PENDING',
    ADD COLUMN `phoneVerificationVerifiedStatus` ENUM('PENDING', 'APPROVED', 'REJECTED') NOT NULL DEFAULT 'PENDING',
    ADD COLUMN `policeVerificationStatus` ENUM('PENDING', 'APPROVED', 'REJECTED') NOT NULL DEFAULT 'PENDING',
    ADD COLUMN `secretarySafetyChangeStatus` ENUM('PENDING', 'APPROVED', 'REJECTED') NOT NULL DEFAULT 'PENDING';
