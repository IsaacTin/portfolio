"use client"
import React, { useState }from 'react'
import Link from 'next/link'
import Image from 'next/image'; // Import Image component
import { NavLinkProp } from '../types/Types'
import { MenuOverlay } from './MenuOverlay'
import { NavLink } from './NavLink'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid';
import logoIcon from '../../../public/logo.png';
import { animate } from 'framer-motion';


const navLinks: NavLinkProp[] = [
    {
        title: "About",
        href: "#about"
    },
    {
        title: "Projects",
        href: "#projects"
    }, 
    {
        title: "Contact",
        href: "#contact"
    }
]

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const smoothScroll = () => {
    const scrollY = 0;

    animate(window.scrollY, scrollY, {
    duration: 1.5,
    onUpdate: (latest) => window.scrollTo(0, latest),
    ease: [0.0, 0.6, 0.3, 0.9]
    });
};

const handleScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    smoothScroll();  // ID of the section to scroll to
};


  return (
    <nav className='fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-70'>
        <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto py-2 px-4'>
        <Link href="/" onClick={handleScroll} className='flex items-center'>
                <Image
                    src={logoIcon}
                    alt="Logo"
                    width={80} 
                    height={40}
                    className='object-contain' // Ensure image fits within container
                />
            </Link>
            <div className='mobile-menu block md:hidden'>
                {
                    !navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <Bars3Icon className='h-5 w-5' />
                        </button>

                    ) : (
                        <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <XMarkIcon className='h-5 w-5' />
                        </button>
                    )
                }
            </div>
            <div className='menu hidden md:block md:w-auto' id="navbar">
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                    {navLinks.map((link : NavLinkProp, index) => (
                        <li key={index}>
                            <NavLink href={link.href} title={link.title}/>
                        </li>
                    ))}                
                </ul>
            </div>
        </div>
        <div className='lg:hidden'>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </div>
    </nav>
  )
}

export default Navbar