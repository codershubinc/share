'use client'
import React, { useEffect } from 'react'

function Page() {
    useEffect(() => {
        try {
            let data
            fetch('https://api-codershubinc.vercel.app/v0.1/random_user/big0')
                .then(res => data = res.json())
                .then(res => console.log( 'data' , res))

        } catch (error) {
            console.log(error);
        }



    }, [])
    return (
        <div>page</div>
    )
}

export default Page