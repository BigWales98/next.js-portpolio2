import dotenv from 'dotenv'

dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NOTION_TOKEN: process.env.NOTION_TOKEN,
        NOTION_DATABASE_ID: process.env.NOTION_DATABASE_ID,
    },
};

export default nextConfig;
