-- CreateTable
CREATE TABLE `PaymentFee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cardVerificationFee` VARCHAR(191) NULL,
    `hotelBookingFee` VARCHAR(191) NULL,
    `medicalKitFee` VARCHAR(191) NULL,
    `policeVerificationFee` VARCHAR(191) NULL,
    `nocFee` VARCHAR(191) NULL,
    `locationVerificationFee` VARCHAR(191) NULL,
    `secretarySafetyFee` VARCHAR(191) NULL,
    `enquiryVerificationFee` VARCHAR(191) NULL,
    `incomeGstFee` VARCHAR(191) NULL,
    `phoneVerificationFee` VARCHAR(191) NULL,
    `joiningFromFee` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `QRCode` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `phone` VARCHAR(191) NULL,
    `image` JSON NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
