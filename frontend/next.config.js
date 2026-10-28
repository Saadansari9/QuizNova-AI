/** @type {import('next').NextConfig} */
const backendTarget = process.env.BACKEND_URL;

const nextConfig = {
  reactStrictMode: true,
  // Only proxy to an external backend if BACKEND_URL is explicitly configured.
  // When deploying to Vercel without a separate backend, Next.js internal API routes
  // handle all auth, quiz generation, and evaluation serverlessly.
  async rewrites() {
    if (!backendTarget) {
      return [];
    }
    return [
      {
        source: '/api/backend/:path*',
        destination: `${backendTarget}/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
