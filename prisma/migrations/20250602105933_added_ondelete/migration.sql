-- DropForeignKey
ALTER TABLE `modelimage` DROP FOREIGN KEY `ModelImage_modelId_fkey`;

-- DropIndex
DROP INDEX `ModelImage_modelId_fkey` ON `modelimage`;

-- AddForeignKey
ALTER TABLE `ModelImage` ADD CONSTRAINT `ModelImage_modelId_fkey` FOREIGN KEY (`modelId`) REFERENCES `Model`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
