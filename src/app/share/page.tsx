'use client'
import React from 'react';
import { currentDate } from '@/helpers/common/functions/date/date.helpers'
import { fileSize, fileSizeCheckSafe } from '@/helpers/common/functions/fileSize.helpers'
import toast from 'react-hot-toast';

const page = () => {
    const handleFileChange = (event: any) => {
        const file = event.target.files?.[0];

        if (!file) return
        console.log('File:', file);
        console.log('File name:', file.name);
        console.log('File size:', file.size);
        console.log('File type:', (file.type));
        console.log('Last modified:', file.lastModifiedDate);

        if (!fileSizeCheckSafe({ maxFileSize: 5, fileSizeInBytes: file.size })) {
            return
        }

        const fileInfo = {
            name: file.name,
            type: (file.type),
            lastModifiedDate: file.lastModifiedDate,
            uploadingDate: currentDate({ format: 'DD-MM-YYYY' }),
            size: fileSize(file.size)
        }
        toast.success('File info: ' + fileInfo.name)
        console.log('File info:', fileInfo)
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
        </div>
    );
};

export default page;
