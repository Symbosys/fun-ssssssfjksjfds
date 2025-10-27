import { deleteFromCloudinary, uploadToCloudinary } from "../../config/cloudinary.js";

// Helper function to handle image upload and replacement
export const handleImageUpload = async (
    file: Express.Multer.File | undefined,
    fieldName: string,
    existingImageData: any,
    loanApplicationId: number
): Promise<{ uploaded: boolean; public_id: string; url: string } | null> => {
    if (!file) return null;

    try {
        // If there's an existing image, delete it from Cloudinary first
        if (existingImageData && existingImageData.public_id) {
            try {
                await deleteFromCloudinary(existingImageData.public_id);
            } catch (deleteError) {
                console.error(`Failed to delete existing image for ${fieldName}:`, deleteError);
                // Continue with upload even if deletion fails
            }
        }

        // Upload new image to Cloudinary
        const folder = `loan-applications/${loanApplicationId}`;
        const uploadResult = await uploadToCloudinary(file.buffer, folder);
        
        return {
            uploaded: true,
            public_id: uploadResult.public_id,
            url: uploadResult.secure_url
        };
    } catch (error) {
        console.log({error});
        console.error(`Failed to upload image for ${fieldName}:`, error);
        throw new Error(`Failed to upload ${fieldName} image`);
    }
};