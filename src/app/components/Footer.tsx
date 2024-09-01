import React from 'react'
import logoIcon from '../../../public/logo.png'
import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
        <div className="container p-3 flex justify-between items-center">
            <Link href="/">
              <Image src = {logoIcon} alt="Logo" width={80} height={40} className='object-contain lg:ml-10 md:ml-5 sm:ml-0'></Image>
            </Link>
            <p className="text-slate-600">All Rights Reserved</p>
        </div>
    </footer>
  )
}
