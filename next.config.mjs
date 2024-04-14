/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    optimizeFonts: true,
    images:  {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**"
            },
            {
                protocol: "http",
                hostname: "**"
            },
        ],
        minimumCacheTTL: 1500000
    },
};

export default nextConfig;
