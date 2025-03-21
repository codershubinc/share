'use client'
import React, { useEffect, useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import uploadFile, { deleteFile } from './uploadFile'
import toast from 'react-hot-toast'
import { uploadFileInfo } from './uploadFileInfo'
import useAuth from '@/utils/hooks/useAuth'

function BottomTextArea() {
    const [message, setMessage] = useState<string | null>("")
    const [file, setFile] = useState<File | null>(null)
    const [loading, setLoading] = useState(false)
    const { user } = useAuth()

    useEffect(() => {
        console.log('message:', message);
    }, [message])

    const uploadFileService = async () => {
        if (!file) {
            toast.error('Please select a file to upload!');
            return;
        }

        setLoading(true);
        let fileId = "";

        try {
            const fileUpload = await toast.promise(
                uploadFile(file, setLoading),
                {
                    loading: 'Uploading file...',
                    success: 'File uploaded successfully!',
                    error: 'File upload failed!',
                }
            );

            if (fileUpload?.$id) {
                fileId = fileUpload.$id;
                console.log('File uploaded successfully:', fileUpload);

                const uploadedFileInfo = await toast.promise(
                    uploadFileInfo(
                        file.name,
                        file.size.toString(),
                        file.type,
                        user?.user?.$id,
                        fileId,
                        user?.user?.deviceInfo || 'Unknown Device',
                        message || 'No message provided',
                        setLoading,
                        setMessage,
                    ),
                    {
                        loading: 'Uploading file info...',
                        success: 'File info uploaded successfully!',
                        error: 'File info upload failed!',
                    }
                );

                if (uploadedFileInfo?.$id) {
                    console.log('File info uploaded successfully:', uploadedFileInfo);
                    setFile(null);
                    setMessage(""); // Reset message field
                }
            }
        } catch (error) {
            if (fileId) {
                await toast.promise(deleteFile(fileId), {
                    loading: 'Deleting file...',
                    success: 'File deleted successfully!',
                    error: 'File deletion failed!',
                });
            }
            console.error('Error uploading file:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='fixed bottom-0 left-0 right-0 mx-auto mb-4 w-full max-w-screen-md flex flex-col items-center gap-2'
        >
            {/* File Input Animation */}
            <motion.div
                initial={{ scale: 1 }}
                animate={file ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 0.3 }}
                className="w-full"
            >
                <Input
                    type='file'
                    className='mb-1 w-1/4'
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                />
                {file && <p className="text-sm text-slate-700 w-max text-left"> <span className='text-white font-sans font-bold text-lg ' >File chosen :</span>  {file.name}</p>}
            </motion.div>

            <Textarea
                placeholder="Type your message here..."
                className="w-[90vh] h-32 rounded-lg resize-none"
                onChange={(e) => setMessage(e.target.value.trim())}
                required={true}
            />

            {/* Animated Upload Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={loading ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="w-1/4"
                disabled={!file || loading}
            >
                <Button
                    variant='outline'
                    className="w-full"
                    disabled={!file || loading}
                    type='submit'
                    onClick={uploadFileService}
                >
                    {loading ? 'Uploading...' : 'Upload File'}
                </Button>
            </motion.button>
        </motion.div>
    );
}

export default BottomTextArea;
