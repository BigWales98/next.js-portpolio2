import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    const token = request.nextUrl.searchParams.get('token');
    
    if (token !== process.env.REVALIDATION_TOKEN) {
      return NextResponse.json({ message: '인증 실패' }, { status: 401 });
    }

    revalidatePath('/gallery');
    
    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (error) {
    return NextResponse.json({ 
      message: '에러 발생', 
      error: error instanceof Error ? error.message : '알 수 없는 에러'
    }, { status: 500 });
  }
} 