'use client'
import React from 'react'

function Page() {

    const [cookie, setCookie] = React.useState<string | null | undefined>(null)

    React.useEffect(() => {
        const cookieValue = document.cookie

        console.log('cookieValue', cookieValue);
        setCookie(cookieValue)
    }, [])



    return (
        <div
            onClick={() => {
                console.log('cookie', cookie?.split('session=')[1]?.split(';')[0]);

            }}
        >Page</div>
    )
}

export default Page