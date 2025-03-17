'use client'
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

export default function Loading() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900"
        >
            <div className="flex flex-col items-center space-y-4">
                <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
                <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">Loading...</p>
            </div>
        </motion.div>
    );
}
