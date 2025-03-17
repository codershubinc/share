'use client'
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import Auth from "@/utils/codershubinc/auth.util";
import GoogleAuth from "@/utils/codershubinc/google.auth";
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

function Page() {
    const { handleSubmit, register } = useForm();
    const [loading, setLoading] = useState(false);
    const navigator = useRouter()

    const handleLogin = async (data: any) => {
        setLoading(true);
        try {
            const response = await Auth.login(data.email, data.password);
            console.log('login data given', data);
            console.log('login response', response);
        } catch (error) {
            console.log('login error', error);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setLoading(true);
        try {
            const response = await GoogleAuth.login(
                'http://localhost:3000/session',
                'http://localhost:3000/login'
            );
            console.log('google login response', response);
            navigator.push(response?.uri)
        } catch (error) {
            console.log('google login error', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center p-6 bg-gray-100 dark:bg-gray-900 transition-colors">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-10">
                        <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
                        <p className="text-gray-600 dark:text-gray-300 mt-4">Logging in...</p>
                    </div>
                ) : (
                    <form className="flex flex-col space-y-4" onSubmit={handleSubmit(handleLogin)}>
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
                            Login to <span className="text-blue-500">codershubinc</span>
                        </h2>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Email"
                            {...register('email')}
                            required
                            className="dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        />
                        <Input
                            id="password"
                            type="password"
                            placeholder="Enter password"
                            {...register('password')}
                            required
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
                    </form>
                )}
                {!loading && (
                    <Button
                        variant="outline"
                        className="w-full mt-4 text-center font-sans border-gray-300 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
                        onClick={handleGoogleLogin}
                    >
                        Continue with Google
                    </Button>
                )}
            </div>
        </div>
    );
}

export default Page;
