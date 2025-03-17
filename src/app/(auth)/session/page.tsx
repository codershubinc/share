'use client'
import createSession from '@/utils/codershubinc/createSession'
import React, { useEffect } from 'react'

function Page() {

    const params = new URLSearchParams(window.location.search)
    const secret = params.get('secret')
    const userId = params.get('userId')

    console.log('secrete', secret)
    console.log('userId', userId);


    useEffect(() => {
        if (!secret || !userId) return console.log('no secret and userId found')
        session()
    }, [])
    const session = async () => {
        try {
            if (!secret || !userId) return console.log('no secret and userId found')
            const responce = await createSession(
                secret,
                userId
            )
            console.log('response session ', responce);
        } catch (error) {
            console.log('error at creating session', error);
            throw error
        }
    }




    return (
        <div>
            session
        </div>
    )
}

export default Page