/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: './dist',
    images: {
        unoptimized: true,
      },
    webpack: (
        config,
        { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    )  => {
        return config
    },
};

export default nextConfig;
