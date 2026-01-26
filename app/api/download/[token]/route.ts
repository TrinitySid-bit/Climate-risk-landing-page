import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: Request,
  { params }: { params: { token: string } }
) {
  const { token } = params;

  if (!token) {
    return NextResponse.json({ error: 'Missing download token' }, { status: 400 });
  }

  try {
    // TODO: Validate token against database
    // For now, we'll use token as filename reference
    
    const reportsDir = path.join(process.cwd(), 'reports');
    const pdfPath = path.join(reportsDir, `${token}.pdf`);

    // Check if file exists
    if (!fs.existsSync(pdfPath)) {
      return NextResponse.json(
        { error: 'Report not found or link expired' },
        { status: 404 }
      );
    }

    // Read the PDF file
    const pdfBuffer = fs.readFileSync(pdfPath);

    // Return PDF with proper headers
    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="NestCheck-Report.pdf"`,
      },
    });
  } catch (error) {
    console.error('Download error:', error);
    return NextResponse.json(
      { error: 'Failed to download report' },
      { status: 500 }
    );
  }
}