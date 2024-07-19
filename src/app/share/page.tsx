'use client'
import React, { useEffect, useState } from 'react';
import { currentDate } from '@/helpers/common/functions/date/date.helpers'
import { fileSize, fileSizeCheckSafe } from '@/helpers/common/functions/fileSize.helpers'
import Random from '@/helpers/common/functions/randamizer.helper';
import Interval from '@/helpers/common/functions/interval.helper';


const page = () => {
    const [colorHsl, setColorHsl] = useState('')
    const [randomImageUrl, setRandomImageUrl] = useState(Random.Avatar({ avatarStyle: 'auto', query: 'JohnDoe' }));
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (!file) return
        console.log('File:', file);
        console.log('File name:', file.name);
        console.log('File size:', file.size);
        console.log('File type:', (file.type));
        console.log('Last modified:', file.lastModified);

        if (!fileSizeCheckSafe({ maxFileSize: 5, fileSizeInBytes: file.size, makeTost: true })) return


        const fileInfo = {
            name: file.name,
            type: (file.type),
            lastModifiedDate: file.lastModified,
            uploadingDate: currentDate({ format: 'DD-MM-YYYY' }),
            size: fileSize(file.size)
        }
        console.log('File info:', fileInfo)

    };
    const setARandomImageUrl = () => {
        const randomImageUrl = Random.Avatar({ avatarStyle: 'auto' , queryLength: 5 })

        setRandomImageUrl(randomImageUrl)
        console.log('Random image URL:', randomImageUrl);


    }

    useEffect(() => {
        Interval.FunctionInterval({ timeInSec: 5, functionProp: () => setARandomImageUrl() })
        const intervalId = setInterval(() => {
            setColorHsl(Random.ColorHSL());
        }, 10000);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);

    }, []);

    useEffect(() => {
        const share_div = document.getElementById('share-div')
        if (share_div) {
            share_div.style.backgroundColor = colorHsl
        }
        // console.log(colorHsl)

    }, [colorHsl])
    return (
        <div
            className='flex flex-col items-center justify-center h-screen bg-slate-400'
            id='share-div'
        >
            <input type="file" onChange={handleFileChange} />
            <img
                src={randomImageUrl}
                className='w-40 transition-opacity duration-500 ease-in-out hover:-translate-y-1 hover:scale-110'
                alt=""
            />

        </div>
    );
};

export default page;
