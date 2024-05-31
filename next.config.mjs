/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/:path*', // any route in the app
                headers: [
                    {
                        key: 'referrer-policy',
                        value: 'no-referrer',
                    },
                ],
            },
        ];
    }
};

export default nextConfig;
