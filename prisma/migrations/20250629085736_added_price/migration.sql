/*
  Warnings:

  - Added the required column `price` to the `Model` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `model` ADD COLUMN `price` VARCHAR(191) NOT NULL;
