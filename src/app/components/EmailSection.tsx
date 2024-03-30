import React from 'react'
import GithubIcon from '../../../public/github.svg'
import LinkedinIcon from '../../../public/linkedin.svg'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
        <div>
            <h5 className='text-xl font-bold text-white my-2'>
                Let's Connect
            </h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                {" "}
                I'm currently looking for new opportunies
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href="github.com">
                    <Image src={GithubIcon} alt='Github Icon' className='w-30 h-30'></Image>
                </Link>
                <Link href="linkedin.com">
                    <Image src={LinkedinIcon} alt='Linkedin Icon' className='w-50 h-50'></Image>
                </Link>
            </div>
        </div>
        <div>
            <form className="flex flex-col gap-4">
                <label htmlFor="email" className='text-white'>
                    tin.isaac@yahoo.com.sg
                </label>
                <input type="email" id="email" required placeholder='tin.isaac@yahoo.com.sg'/>
            </form>
        </div>
    </section>
  )
}

export default EmailSection