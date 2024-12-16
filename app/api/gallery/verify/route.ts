export async function POST(request: Request) {
  try {
    const { token } = await request.json();
    
    if (token === process.env.GALLERY_ADMIN_TOKEN) {
      return new Response(JSON.stringify({ verified: true }), { status: 200 });
    }
    
    return new Response(JSON.stringify({ verified: false }), { status: 401 });
  } catch (error) {
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : 'Invalid request' 
    }), { status: 400 });
  }
} 