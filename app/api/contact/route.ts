import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error('Missing RESEND_API_KEY environment variable');
    return NextResponse.json(
      { error: 'Server configuration error: Missing API Key' },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { name, email, subject, message } = await request.json();

    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['proccygfx@gmail.com'],
      subject: subject || `New Contact Form Submission from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 12px;">
          <h1 style="color: #161616; margin-bottom: 24px; font-size: 24px; border-bottom: 2px solid #e5e5e5; padding-bottom: 12px;">Portfolio Contact Form</h1>
          
          <div style="background-color: white; padding: 24px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
            <p style="margin: 0 0 16px 0; font-size: 16px; color: #444;">
              <strong style="color: #161616;">Name:</strong><br/>
              ${name}
            </p>
            
            <p style="margin: 0 0 16px 0; font-size: 16px; color: #444;">
              <strong style="color: #161616;">Email:</strong><br/>
              <a href="mailto:${email}" style="color: #0066cc; text-decoration: none;">${email}</a>
            </p>

            <p style="margin: 0 0 16px 0; font-size: 16px; color: #444;">
              <strong style="color: #161616;">Subject:</strong><br/>
              ${subject || 'No Subject'}
            </p>
            
            <div style="margin-top: 24px; border-top: 1px solid #eee; padding-top: 24px;">
              <strong style="color: #161616; font-size: 16px; display: block; margin-bottom: 8px;">Message:</strong>
              <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #333; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <p style="margin-top: 24px; font-size: 12px; color: #888; text-align: center;">
            Sent from your portfolio website.
          </p>
        </div>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Contact Form Error:', error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
