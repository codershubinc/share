import Bucket from "./bucketService";




const uploadFile = async (
    file: File | null,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>

) => {
    setLoading(true)
    if (!file) {
        console.error('No file selected');
        return;
    }

    try {
        console.log('Uploading file:', file);

        const response = await Bucket.uploadFile(file)

        console.log('Upload successful:', response);
        return response
    } catch (error) {
        console.error('Upload error:', error);
    } finally {
        setLoading(false)
    }
};

export default uploadFile;