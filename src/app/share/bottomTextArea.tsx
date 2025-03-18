'use client'
import React, { useEffect, useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Input } from '@/components/ui/input'


function BottomTextArea() {
    const [message, setMessage] = useState<string>()
    useEffect(() => {
        console.log('message', message);
    }, [message])

    return (
        <div
            className='fixed bottom-0 left-0 right-0 mx-auto mb-4 w-[100vh] '
        >

            <Input
                type='file'
                className='w-1/4 mb-1'
                onChange={(e) => console.log('file', e.target.files)}
            />

            <Textarea
                placeholder="Type your message here..."
                className="w-[90vh] h-32 rounded-lg resize-none "
                onChange={(e) => setMessage(e.target.value.trim())}

            />
        </div>
    )
}

export default BottomTextArea