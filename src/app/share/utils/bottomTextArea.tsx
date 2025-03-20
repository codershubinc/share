'use client'
import React, { useEffect, useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Input } from '@/components/ui/input'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import uploadFile from './uploadFile'

function BottomTextArea() {
    const [message, setMessage] = useState<string>("")
    const [file, setFile] = useState<File | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        console.log('message:', message);
    }, [message])

    const uploadFileService = async () => {
        await uploadFile(
            file,
            setLoading
        )
    }


    return (
        <div className='fixed bottom-0 left-0 right-0 mx-auto mb-4 w-[100vh] flex flex-col items-center gap-2'>
            <Input
                type='file'
                className='w-1/4 mb-1'
                onChange={(e) => setFile(e.target.files?.[0] || null)}
            />

            <Textarea
                placeholder="Type your message here..."
                className="w-[90vh] h-32 rounded-lg resize-none"
                onChange={(e) => setMessage(e.target.value.trim())}
            />
            <Button
                className='w-1/4'
                onClick={uploadFileService}
                disabled={loading}
                variant='outline'
            >
                {loading ? 'Uploading...' : 'Upload File'}
            </Button>
        </div>
    );
}

export default BottomTextArea;
