/*
  Warnings:

  - You are about to drop the `another` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `profile` MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `another`;
