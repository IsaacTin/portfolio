"use client"
import React, { useRef, useState } from 'react';
import GithubIcon from '../../../public/github.svg';
import LinkedinIcon from '../../../public/linkedin.svg';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const myEmail : string = process.env.FROM_EMAIL as string;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = formRef.current;
        if (!form) {
            console.error('Form element not found');
            return;
        }

        const formData = new FormData(form);
        let data = {
            fromEmail: myEmail,
            toEmail: formData.get('email') as string,
            subject: "Thank You for Contacting Me!",
            message: `
                    <p>Hi!</p>
                    <p>Thank you for contacting me!</p>
                    <p>I will get back to you shortly!</p>
                    <br/>
                    <p> Regards, </p>
                    <p> Isaac Tin </p>
            `
        };

        try {
            const JSONdata = JSON.stringify(data);
            const endPoint = "/api/send";
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSONdata
            };

            const response = await fetch(endPoint, options);
            const resData = await response.json();
            if (response.ok) {
                console.log('Message Sent');
            } else {
                console.error('Error:', resData);
            }
        } catch (error) {
            console.error('Error in handleSubmit:', error);
        }

        data = {
            fromEmail: myEmail,
            toEmail: "tin.isaac@yahoo.com.sg",
            subject: `Contact from ${formData.get('email') as string} with subject ${formData.get('subject') as string}`,
            message: formData.get('message') as string
        };

        try {
            const JSONdata = JSON.stringify(data);
            const endPoint = "/api/send";
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSONdata
            };

            const response = await fetch(endPoint, options);
            const resData = await response.json();
            if (response.ok) {
                console.log('Message Sent');
                setEmailSubmitted(true);
                form.reset(); // Reset the form fields
            } else {
                console.error('Error:', resData);
            }
        } catch (error) {
            console.error('Error in handleSubmit:', error);
        }
    };

    return (
        <section id ="contact" className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div className="z-10">
                <h5 className='text-xl font-bold text-white my-2'>
                    Let&apos;s Connect
                </h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    I&apos;m currently looking for new opportunities
                </p>
                <div className='socials flex flex-row gap-2'>
                    <Link href="https://github.com/IsaacTin" target="_blank" rel="noopener noreferrer">
                        <Image src={GithubIcon} alt='Github Icon' className='w-30 h-30'></Image>
                    </Link>
                    <Link href="https://www.linkedin.com/in/isaac-tin-4346631a5/" target="_blank" rel="noopener noreferrer">
                        <Image src={LinkedinIcon} alt='Linkedin Icon' className='w-50 h-50'></Image>
                    </Link>
                </div>
            </div>
            <div>
                <form ref={formRef} className="flex flex-col" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                            Your Email
                        </label>
                        <input 
                            name="email"
                            type="email" 
                            id="email" 
                            required 
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder='example@gmail.com.sg'
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">
                            Your Subject
                        </label>
                        <input 
                            name="subject"
                            type="text" 
                            id="subject" 
                            required 
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder='Just saying hi'
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">
                            Your Message
                        </label>
                        <textarea 
                            name="message" 
                            id="message" 
                            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Leave your message here"
                        >
                        </textarea>
                    </div>

                    <button type="submit" className="bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
                        Send Message
                    </button>
                    {
                        emailSubmitted && (
                            <p className="text-green-500 text-sm mt-2">
                                Email Sent Successfully!
                            </p>
                        )
                    }
                </form>
            </div>
        </section>
    )
}

export default EmailSection;
