import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// Email tujuan perusahaan — ganti dengan email asli perusahaan
const COMPANY_EMAIL = 'syahfrianarrafi@gmail.com';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { nama, email, pesan } = body;

        // Validasi server-side
        if (!nama || !email || !pesan) {
            return NextResponse.json(
                { error: 'Semua field wajib diisi.' },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Format email tidak valid.' },
                { status: 400 }
            );
        }

        // Kirim email via Resend
        const { data, error } = await resend.emails.send({
            from: 'Karya Babatan Resend<onboarding@resend.dev>',
            to: [COMPANY_EMAIL],
            replyTo: email,
            subject: `Pesan Baru dari ${nama.trim()}`,
            html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #af101a 0%, #D32F2F 100%); padding: 32px 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700;">
              📩 Pesan Baru dari Website
            </h1>
            <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px;">
              Ada pengunjung yang menghubungi melalui form kontak.
            </p>
          </div>

          <!-- Body -->
          <div style="padding: 32px 24px; border: 1px solid #e5e5e5; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; width: 120px; vertical-align: top;">
                  Nama
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #1a1a1a; font-size: 15px; font-weight: 500;">
                  ${nama.trim()}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; vertical-align: top;">
                  Email
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #1a1a1a; font-size: 15px;">
                  <a href="mailto:${email.trim()}" style="color: #af101a; text-decoration: none;">${email.trim()}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; vertical-align: top;">
                  Pesan
                </td>
                <td style="padding: 12px 0; color: #1a1a1a; font-size: 15px; line-height: 1.7;">
                  ${pesan.trim().replace(/\n/g, '<br/>')}
                </td>
              </tr>
            </table>

            <!-- Footer Note -->
            <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #f0f0f0;">
              <p style="color: #aaa; font-size: 12px; margin: 0;">
                Email ini dikirim melalui form kontak website CV Karya Babatan. 
                Balas langsung ke email ini untuk merespon pengirim.
              </p>
            </div>
          </div>
        </div>
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: 'Gagal mengirim email. Silakan coba lagi.' },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { message: 'Email berhasil dikirim!', id: data?.id },
            { status: 200 }
        );
    } catch (err) {
        console.error('Server error:', err);
        return NextResponse.json(
            { error: 'Terjadi kesalahan pada server.' },
            { status: 500 }
        );
    }
}
