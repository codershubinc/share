import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import React from 'react'

function page() {
    return (
        <div
            className="flex min-h-[90vh] flex-col items-center justify-between p-24"
        >

            <div
                className="  flex flex-col items-center justify-center border border-gray-200 p-8 rounded-lg shadow-lg"
            >
                <form
                    className="flex flex-col items-center justify-center space-y-4 gap-4"
                >
                    <h2>
                        Login to <span className="text-blue-500 font-italic" >codershubinc</span> account
                    </h2>
                    <Input
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Email"
                        required
                    />
                    <Input
                        name="password"
                        id="password"
                        type="password"
                        placeholder="Enter password"
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

export default page