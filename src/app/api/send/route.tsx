import type { NextApiRequest, NextApiResponse } from 'next';
// import { EmailTemplate } from '../../components/EmailTemplate';
import  nodemailer from 'nodemailer';

export async function POST(req : Request, res : Response) {
    console.log("hi")
    console.log(req.body)

    const body = await req.json();
    console.log(body)
    
    
    const { fromEmail, toEmail, subject, message } = body;

    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        host: process.env.EMAIL_HOST,
        port: 587,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        },
      });
  
      const mailOption = {
        from: fromEmail,
        to: toEmail,
        subject: subject,
        html: message
      }
  
      await transporter.sendMail(mailOption)
      return Response.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
      return Response.json({ error }, { status: 500 });
    }
  }