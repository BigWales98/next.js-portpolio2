import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function DELETE(request: Request) {
  try {
    const { publicId, adminToken } = await request.json();
    
    // 여러 토큰 검증
    const validTokens = [
      process.env.GALLERY_ADMIN_TOKEN,
      process.env.GALLERY_ADMIN_TOKEN0,
      process.env.GALLERY_ADMIN_TOKEN1,
    ];
    
    if (!validTokens.includes(adminToken)) {
      return new Response(JSON.stringify({ 
        error: '권한이 없습니다.' 
      }), { status: 401 });
    }

    const result = await cloudinary.uploader.destroy(publicId);
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : 'Failed to delete image' 
    }), { status: 500 });
  }
} 