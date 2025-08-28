-- AlterTable
ALTER TABLE `contact` ADD COLUMN `cardVerificationFee` VARCHAR(191) NULL,
    ADD COLUMN `enquiryVerificationFee` VARCHAR(191) NULL,
    ADD COLUMN `hotelBookingFee` VARCHAR(191) NULL,
    ADD COLUMN `incomeGstFee` VARCHAR(191) NULL,
    ADD COLUMN `locationVerificationFee` VARCHAR(191) NULL,
    ADD COLUMN `medicalKitFee` VARCHAR(191) NULL,
    ADD COLUMN `nocFee` VARCHAR(191) NULL,
    ADD COLUMN `policeVerificationFee` VARCHAR(191) NULL,
    ADD COLUMN `secretarySafetyFee` VARCHAR(191) NULL;
