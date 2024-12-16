export async function POST(request: Request) {
  try {
    const { token } = await request.json();
    
    // 쉼표로 구분된 토큰 문자열을 배열로 변환
    const validTokens = [
        process.env.GALLERY_ADMIN_TOKEN,
        process.env.GALLERY_ADMIN_TOKEN0,
        process.env.GALLERY_ADMIN_TOKEN1,
    ];

    if (validTokens.includes(token)) {
      return new Response(JSON.stringify({ verified: true }), { status: 200 });
    }
    
    return new Response(JSON.stringify({ verified: false }), { status: 401 });
  } catch (error) {
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : 'Invalid request' 
    }), { status: 400 });
  }
} 