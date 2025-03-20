'use client'
import React from 'react'
import BottomTextArea from './utils/bottomTextArea'
import useAuth from '@/utils/hooks/useAuth'

function Page() {

    const { error, isLogin, loading } = useAuth()
    return (

        isLogin ? (
            <div
                className="flex min-h-screen flex-col items-center justify-between p-24"
            >
                <BottomTextArea />
            </div>
        ) : (
            <div className='flex min-h-screen flex-col items-center justify-between p-24'>
                <h1 className='text-red-500'> {loading ? 'please wait configuring app for you' : 'please login to share files'}</h1>
            </div>
        )
    )
}

export default Page