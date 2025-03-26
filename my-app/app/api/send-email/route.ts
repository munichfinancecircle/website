// import type { NextApiRequest, NextApiResponse } from "next";
// import nodemailer from "nodemailer";

// export async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method Not Allowed" });
//   }

//   const { name, email, subject, message } = req.body;

//   // Configure nodemailer transport (use your email provider's SMTP settings)
//   const transporter = nodemailer.createTransport({
//     service: "Gmail", // Or use 'smtp.your-email-provider.com'
//     auth: {
//       user: process.env.EMAIL_USER, // Your email
//       pass: process.env.EMAIL_PASS, // Your email password or app password
//     },
//   });

//   try {
//     await transporter.sendMail({
//       from: `"${name}" <${email}>`,
//       to: process.env.EMAIL_USER, // Replace with your email
//       subject: subject,
//       text: message,
//       html: `<p>${message}</p>`,
//     });

//     return res.status(200).json({ message: "Email sent successfully" });
//   } catch (error) {
//     console.error("Email sending error:", error);
//     return res.status(500).json({ message: "Error sending email" });
//   }
// }

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    // Configure nodemailer transport
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER, // Change to your recipient email
      subject: subject,
      text: message,
      html: `<p>${message}</p>`,
    });

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ message: "Error sending email" }, { status: 500 });
  }
}
