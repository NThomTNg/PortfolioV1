import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const pdfPath = path.join(process.cwd(), 'app', 'assets', 'CV.pdf');
    const pdfBuffer = fs.readFileSync(pdfPath);
    
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="CV.pdf"'
      },
    });
  } catch (error) {
    console.error('Error serving PDF:', error);
    return new NextResponse('PDF not found', { status: 404 });
  }
}
