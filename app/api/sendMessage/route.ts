import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";


export async function POST(req:NextRequest) {
    const {email, name, message} = await req.json();

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD,

        }
    })

    const mailOptions = {
        from: email,
        to: process.env.SMTP_EMAIL,
        subject: `New message from ${name}`,
        text: message
    }

    try {
        await transporter.sendMail(mailOptions)
        return NextResponse.json({message:"Message sent successfully"})
    } catch (error) {


        return NextResponse.json({message:"Got an error while sending message", error})
        
    }
    
}