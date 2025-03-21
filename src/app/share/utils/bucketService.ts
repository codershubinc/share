import { getSessionFromCookie } from "@/utils/getSession";
import { Client, ID, Storage } from "node-appwrite";

const bucketId = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID || "";

class BucketService {
    private client: Client;
    private storage: Storage;

    constructor() {

        this.client = new Client()
            .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "")
            .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "")
            .setKey(process.env.NEXT_PUBLIC_APPWRITE_BUCKET_API_KEY || "")


        this.storage = new Storage(this.client);
    }

    async uploadFile(file: File) {

        if (!file) {
            console.error("No file provided");
            throw new Error("File is required for upload.");
        }

        if (!bucketId) {
            console.error("Missing bucket ID");
            throw new Error("Bucket ID is not defined.");
        }

        try {
            console.log("Uploading file to bucket:", bucketId);
            console.log("File received:", file);

            const result = await this.storage.createFile(bucketId, ID.unique(), file);
            console.log("File uploaded successfully:", result);

            return result;
        } catch (error) {
            console.error("Upload Error:", error);
            throw error;
        }
    }

    async getFile(fileId: string) {

        if (!fileId) {
            console.error("No file ID provided");
            throw new Error("File ID is required.");
        }

        try {
            const file = await this.storage.getFile(bucketId, fileId);
            return file;
        } catch (error) {
            console.error("Error fetching file:", error);
            throw error;
        }
    }
    async deleteFile(fileId: string) {
        if (!fileId) {
            console.error("No file ID provided");
            throw new Error("File ID is required.");
        }

        try {
            await this.storage.deleteFile(bucketId, fileId);
            console.log(`File with ID ${fileId} deleted successfully`);
        } catch (error) {
            console.error("Error deleting file:", error);
            throw error;
        }
    }
    async listFiles() {
        try {
            const files = await this.storage.listFiles(bucketId);
            return files;
        } catch (error) {
            console.error("Error listing files:", error);
            throw error;
        }
    }
    async getFilePreview(fileId: string) {
        if (!fileId) {
            console.error("No file ID provided");
            throw new Error("File ID is required.");
        }

        try {
            const preview = await this.storage.getFilePreview(bucketId, fileId);
            return preview;
        } catch (error) {
            console.error("Error fetching file preview:", error);
            throw error;
        }
    }
    async getFileDownload(fileId: string) {
        if (!fileId) {
            console.error("No file ID provided");
            throw new Error("File ID is required.");
        }

        try {
            const download = await this.storage.getFileDownload(bucketId, fileId);
            return download;
        } catch (error) {
            console.error("Error fetching file download:", error);
            throw error;
        }
    }
    getFileView(fileId: string) {
        if (!fileId) {
            console.error("No file ID provided");
            throw new Error("File ID is required.");
        }

        try {
            const view = this.storage.getFileView(bucketId, fileId);
            return view;
        } catch (error) {
            console.error("Error fetching file view:", error);
            throw error;
        }
    }
}

const Bucket = new BucketService();
export default Bucket;
