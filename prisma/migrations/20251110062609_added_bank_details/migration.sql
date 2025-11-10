/*
  Warnings:

  - You are about to drop the column `cardVerificationFee` on the `contact` table. All the data in the column will be lost.
  - You are about to drop the column `enquiryVerificationFee` on the `contact` table. All the data in the column will be lost.
  - You are about to drop the column `hotelBookingFee` on the `contact` table. All the data in the column will be lost.
  - You are about to drop the column `incomeGstFee` on the `contact` table. All the data in the column will be lost.
  - You are about to drop the column `locationVerificationFee` on the `contact` table. All the data in the column will be lost.
  - You are about to drop the column `medicalKitFee` on the `contact` table. All the data in the column will be lost.
  - You are about to drop the column `nocFee` on the `contact` table. All the data in the column will be lost.
  - You are about to drop the column `policeVerificationFee` on the `contact` table. All the data in the column will be lost.
  - You are about to drop the column `registrationFee` on the `contact` table. All the data in the column will be lost.
  - You are about to drop the column `secretarySafetyFee` on the `contact` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `contact` DROP COLUMN `cardVerificationFee`,
    DROP COLUMN `enquiryVerificationFee`,
    DROP COLUMN `hotelBookingFee`,
    DROP COLUMN `incomeGstFee`,
    DROP COLUMN `locationVerificationFee`,
    DROP COLUMN `medicalKitFee`,
    DROP COLUMN `nocFee`,
    DROP COLUMN `policeVerificationFee`,
    DROP COLUMN `registrationFee`,
    DROP COLUMN `secretarySafetyFee`;

-- AlterTable
ALTER TABLE `profile` ADD COLUMN `bankAccountNumber` VARCHAR(191) NULL,
    ADD COLUMN `bankName` VARCHAR(191) NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `ifscCode` VARCHAR(191) NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
