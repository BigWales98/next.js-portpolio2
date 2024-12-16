//import dotenv from 'dotenv'
//dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'www.notion.so'
        },
        {
            protocol: 'https',
            hostname: 'images.unsplash.com'
        },
        {
            protocol: 'https',
            hostname: 's3.us-west-2.amazonaws.com'
        },
        {
            protocol: 'https',
            hostname: 'png.pngtree.com'  // 새로 추가된 이미지 도메인
        }
      ],
      domains: ['res.cloudinary.com'],
    },
    
    env: {
        NOTION_TOKEN: process.env.NOTION_TOKEN,
        NOTION_DATABASE_ID: process.env.NOTION_DATABASE_ID,
    },

    webpack: (config) => {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          fs: false,
        };
        return config;
      },    
};

export default nextConfig;



