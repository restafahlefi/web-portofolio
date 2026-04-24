import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Inisialisasi Resend dengan API Key dari environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Validasi input sederhana
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Data tidak lengkap" }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', // Email default Resend untuk testing
      to: ['restavalefi1401@gmail.com'], // Alamat email tujuan Anda
      subject: `Pesan Baru dari ${name} (Portofolio)`,
      text: `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`,
      replyTo: email, // Memudahkan Anda membalas langsung ke pengirim
    });

    if (data.error) {
      return NextResponse.json({ error: data.error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
