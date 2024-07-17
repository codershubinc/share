'use client'
import React from 'react';

const FileInput = () => {
    const handleFileChange = (event: any) => {
        const dateOfNow = 'Date : ' + new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear()
        const file = event.target.files?.[0];

        if (!file) return
        console.log('File:', file);
        console.log('File name:', file.name);
        console.log('File size:', file.size);
        console.log('File type:', (file.type));
        console.log('Last modified:', file.lastModifiedDate);

        const fileSize = Number((file.size / 1024 / 1024).toFixed(2))// in mb
        if (fileSize >= 5) {
            alert('File size should be less than 5 mb')
            console.error('File size should be less than 5 mb')
            event.target.value = null
            return
        }

        const fileInfo = {
            name: file.name,
            type: (file.type),
            lastModifiedDate: file.lastModifiedDate,
            uploadingDate: dateOfNow,
            size: fileSize
        }
        console.log('File info:', fileInfo);


    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
        </div>
    );
};

export default FileInput;
