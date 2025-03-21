import DOC from "@/utils/appwrite/uploadFileInfo"
import { deleteFile } from "./uploadFile";

export const uploadFileInfo = async (
    name: string,
    size: string,
    type: string,
    userId: string,
    docId: string,
    deviceInfo: string,
    message: string,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setError: React.Dispatch<React.SetStateAction<string | null>>,
) => {
    try {

        setLoading(true)
        if (!name || !size || !type || !userId || !docId) {
            console.error('Missing required file information');
            throw new Error('Missing required file information');
        }

        const uploadedFile = await DOC.uploadFileInfo(
            name,
            size,
            type,
            userId,
            docId,
            deviceInfo,
            message
        )

        if (uploadedFile?.$id) {
            console.log("File info uploaded successfully:", uploadedFile);
            setError(null);
            return uploadedFile;
        }
    } catch (error) {
        console.error('Error uploading file info:', error);
        setError('Error uploading file info');
    } finally {
        setLoading(false)
    }
}