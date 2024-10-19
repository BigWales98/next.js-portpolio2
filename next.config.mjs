//import dotenv from 'dotenv'
//dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  images: {
      domains: [
          'www.notion.so',
          'images.unsplash.com',
          's3.us-west-2.amazonaws.com'
      ],
      format: ['image/png', 'image/webp', 'image/jpeg']
    },
    
    env: {
        NOTION_TOKEN: process.env.NOTION_TOKEN,
        NOTION_DATABASE_ID: process.env.NOTION_DATABASE_ID,
    },
    
};

export default nextConfig;



