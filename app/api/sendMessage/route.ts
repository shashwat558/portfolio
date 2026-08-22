import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import { getClientIp, rateLimit } from "@/lib/security";
import { redis } from "@/lib/redis";

const contactSchema = z.object({
  email: z.email().max(254),
  name: z.string().trim().min(1).max(100),
  message: z.string().trim().min(1).max(5000),
});

function stripControlChars(value: string): string {
  return value.replace(/[\r\n\x00-\x1f\x7f]+/g, " ");
}

export async function POST(req: NextRequest) {
  const client = redis();

  const allowed = await rateLimit(client, `contact:${getClientIp(req)}`, 5, 3600);
  if (!allowed) {
    return NextResponse.json(
      { message: "Too many messages sent. Please try again later." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid request" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid name, email or message." },
      { status: 400 }
    );
  }

  const { email, name, message } = parsed.data;
  const smtpEmail = process.env.SMTP_EMAIL;
  const smtpPassword = process.env.SMTP_PASSWORD;

  if (!smtpEmail || !smtpPassword) {
    console.error("SMTP credentials are not configured");
    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: smtpEmail, pass: smtpPassword },
    });

    await transporter.sendMail({
      from: smtpEmail,
      replyTo: email,
      to: smtpEmail,
      subject: `New message from ${stripControlChars(name)}`,
      text: stripControlChars(message),
    });

    return NextResponse.json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 }
    );
  }
}
