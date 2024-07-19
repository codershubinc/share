/** @type {import('next').NextConfig} */
const nextConfig = {
    images:  {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.dicebear.com',
                port: '',
                pathname: '/**',
            },
        ],
    }


};


export default nextConfig;
