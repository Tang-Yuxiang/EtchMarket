/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack: (config: { externals: string[]; module: { rules: { test: RegExp; use: string[]; }[]; }; }) => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding');
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
      
    });
    
    return config;
  },
};

module.exports = nextConfig;
