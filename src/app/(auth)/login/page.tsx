'use client';
import { useState, useEffect, use } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from "framer-motion";
import Loading from '@/components/custom/loader';
import Image from 'next/image';
import { fetchUser, handleEmailPassLogin, handleGoogleLogin } from './utils/index.util'

function Page() {
    const { handleSubmit, register } = useForm();
    const [loading, setLoading] = useState(false);
    const [navigating, setNavigating] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();

    const handelSubmit = async (data: any) => {
        await handleEmailPassLogin(data, setLoading, setNavigating, setErrorMessage, router);
    }

    const handleGoogleLoginClick = () => {
        handleGoogleLogin(setLoading, setNavigating, setErrorMessage, router);
    };
    useEffect(() => {
        fetchUser(setLoading, setErrorMessage, router);
    }, []);

    return (
        navigating ? <Loading /> : (
            <div className="flex min-h-screen items-center justify-center p-6 bg-gray-100 dark:bg-gray-900 transition-colors">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                >
                    <AnimatePresence>
                        {loading ? (
                            <motion.div
                                key="loading"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col items-center justify-center py-10"
                            >
                                <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
                                <p className="text-gray-600 dark:text-gray-300 mt-4">Logging in...</p>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="login-form"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col space-y-4"
                                onSubmit={handleSubmit(handelSubmit)}
                            >
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
                                    Login to <span className="text-blue-500">codershubinc</span>
                                </h2>
                                {errorMessage && <p className="text-red-500 text-sm text-center">{errorMessage}</p>}
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    {...register('email', { required: true })}
                                    className="dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                />
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Enter password"
                                    {...register('password', { required: true })}
                                    className="dark:bg-gray-700 dark:text-white dark:border-gray-600"
                                />
                                <Button
                                    variant="secondary"
                                    type="submit"
                                    className="w-full text-center font-sans bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                                >
                                    Login
                                </Button>
                                <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                                    Don&apos;t have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
                                </p>
                            </motion.form>
                        )}
                    </AnimatePresence>

                    {!loading && !navigating && (
                        <Button
                            variant="outline"
                            className="w-full h-16 mt-4 text-center font-sans border-gray-300 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700 flex items-center justify-center gap-2"
                            onClick={handleGoogleLoginClick}
                        >
                            <Image
                                src="/google.svg"
                                alt="Google"
                                width={56}
                                height={56}
                                className="inline-block"
                            />
                            Continue with Google
                        </Button>
                    )}
                </motion.div>
            </div>
        )
    );
}

export default Page;