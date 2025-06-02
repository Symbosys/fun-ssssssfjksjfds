/*
  Warnings:

  - You are about to drop the `service` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `service` to the `Model` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `service` DROP FOREIGN KEY `Service_modelId_fkey`;

-- AlterTable
ALTER TABLE `model` ADD COLUMN `service` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `service`;
