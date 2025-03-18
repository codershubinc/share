'use client'
import createSession from '@/utils/codershubinc/createSession'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, Suspense } from 'react'

function Page() {

    const searchParams = useSearchParams()
    const secret = searchParams.get('secret')
    const userId = searchParams.get('userId')

    console.log('secrete', secret)
    console.log('userId', userId);

    const session = async () => {
        try {
            if (!secret || !userId) return console.log('no secret and userId found');
            const response = await createSession(secret, userId);
            console.log('response session:', response);
        } catch (error) {
            console.log('error at creating session', error);
        }
    };
    (() => session())()


    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div>
                session
            </div>
        </Suspense>
    )
}

export default Page