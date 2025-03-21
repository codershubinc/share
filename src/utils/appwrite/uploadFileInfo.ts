import { Client, Databases, ID, Query } from "node-appwrite";

class doc {

    client = new Client()
        .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || '')
        .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '')
        .setKey(process.env.NEXT_PUBLIC_APPWRITE_DOC_API_KEY || '')

    database = new Databases(this.client)

    async uploadFileInfo(
        name: string,
        size: string,
        type: string,
        userId: string,
        docId: string,
        deviceInfo: string,
        message: string,
    ) {

        try {
            const uploadFileInfo = await this.database.createDocument(
                process.env.NEXT_PUBLIC_APPWRITE_DOC_DATABASE_ID || '',
                process.env.NEXT_PUBLIC_APPWRITE_DOC_COLLECTION_ID || '',
                ID.unique(),
                {
                    name,
                    size,
                    type,
                    userId,
                    docId,
                    deviceInfo,
                    message,
                }
            );
            return uploadFileInfo;
        } catch (error) {
            console.error('Error uploading file info:', error);
            throw error; // Rethrow the error for further handling if needed

        }
    }
    async getFileInfo(userId: string) {
        try {
            const fileInfo = await this.database.listDocuments(
                process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || '',
                process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID || '',
                [
                    Query.equal('userId', userId)
                ]
            );
            return fileInfo;
        } catch (error) {
            console.error('Error fetching file info:', error);
            throw error; // Rethrow the error for further handling if needed

        }
    }
    async deleteFileInfo(docId: string) {
        try {
            const deleteFileInfo = await this.database.deleteDocument(
                process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || '',
                process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID || '',
                docId
            );
            return deleteFileInfo;
        } catch (error) {
            console.error('Error deleting file info:', error);
            throw error; // Rethrow the error for further handling if needed

        }
    }
    async getFileInfoByDocId(docId: string) {
        try {
            const fileInfo = await this.database.getDocument(
                process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || '',
                process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID || '',
                docId
            );
            return fileInfo;
        } catch (error) {
            console.error('Error fetching file info:', error);
            throw error; // Rethrow the error for further handling if needed


        }
    }
}

const DOC = new doc();
export default DOC;