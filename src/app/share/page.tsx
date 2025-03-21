'use client'
import React from 'react'
import { motion } from 'framer-motion'
import BottomTextArea from './utils/bottomTextArea'
import useAuth from '@/utils/hooks/useAuth'

function Page() {
    const { error, isLogin, loading } = useAuth()

    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
            {loading ? (
                // 🔄 Loading Animation
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center"
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full"
                    />
                    <h1 className="text-blue-500 mt-4">Configuring app for you...</h1>
                </motion.div>
            ) : isLogin ? (
                // ✅ User Logged In - Fade In Animation
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full flex flex-col items-center"
                >
                    <BottomTextArea />
                </motion.div>
            ) : (
                // ❌ Not Logged In - Fade In & Shake Animation
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center"
                >
                    <motion.h1
                        className="text-red-500"
                        animate={{ x: [0, -5, 5, 0] }}
                        transition={{ duration: 0.5, repeat: 2 }}
                    >
                        Please login to share files
                    </motion.h1>
                </motion.div>
            )}
        </div>
    )
}

export default Page
