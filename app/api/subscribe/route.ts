import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(request: Request) {
  const { email } = await request.json()
  
  // Save to a text file
  const filePath = path.join(process.cwd(), 'emails.txt')
  const timestamp = new Date().toISOString()
  const line = `${timestamp} - ${email}\n`
  
  try {
    fs.appendFileSync(filePath, line)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error saving email:', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}