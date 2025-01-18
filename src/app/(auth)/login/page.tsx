'use client'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import React from 'react'
import { useForm } from "react-hook-form"
import Auth from "@/utils/codershubinc/auth.util"

function Page() {
    const { handleSubmit, register } = useForm()
    const handleLogin = async (data: any) => {
        try {
            const response = await Auth.login(
                data.email,
                data.password
            )

            console.log('login data given', data)
            console.log('login responce ', response)
        } catch (error) {
            console.log('login error', error);

        }

    }


    return (
        <div
            className="flex min-h-[90vh] flex-col items-center justify-between p-24"
        >

            <div
                className="  flex flex-col items-center justify-center border border-gray-200 p-8 rounded-lg shadow-lg"
            >
                <form
                    className="flex flex-col items-center justify-center space-y-4 gap-4"
                    onSubmit={handleSubmit(handleLogin)}
                >
                    <h2>
                        Login to <span className="text-blue-500 font-italic" >codershubinc</span> account
                    </h2>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Email"
                        {...register('email')}
                        required
                    />
                    <Input
                        id="password"
                        type="password"
                        placeholder="Enter password"
                        {...register('password')}
                        required
                    />
                    <Button
                        variant="secondary"
                        type="submit"
                        className="w-full text-center font-sans "
                    >
                        Login
                    </Button>

                    <p>
                        don&apos;t have an account? <a href="/signup" className="text-blue-500">Sign up</a>
                    </p>

                </form>
            </div>

        </div>
    )
}

export default Page