/*
  Warnings:

  - You are about to drop the `hotels` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `booking` MODIFY `date` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `model` ADD COLUMN `height` VARCHAR(191) NULL,
    ADD COLUMN `weight` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `hotels`;
