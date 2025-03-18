'use client';

import createSession from '@/utils/codershubinc/createSession';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState, Suspense } from 'react';

function Session() {
    const searchParams = useSearchParams();
    const secret = searchParams.get('secret');
    const userId = searchParams.get('userId');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const session = async () => {
            try {
                if (!secret || !userId) {
                    console.log('No secret and userId found');
                    return;
                }
                const response = await createSession(secret, userId);
                console.log('Session response:', response);
            } catch (error) {
                console.error('Error creating session:', error);
            } finally {
                setLoading(false);
            }
        };

        session();
    }, [secret, userId]);

    if (loading) {
        return <div>Loading session...</div>;
    }

    return <div>Session initialized</div>;
}

function Page() {
    return (
        <Suspense fallback={<div>Loading session...</div>}>
            <Session />
        </Suspense>
    );
}

export default Page;
