/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'images.unsplash.com',
            'assets.architecturaldigest.in',
            'images.indianexpress.com',
        ],
    },
}

module.exports = nextConfig
