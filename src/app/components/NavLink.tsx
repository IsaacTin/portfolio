import React from 'react'
import Link from 'next/link'
import { NavLinkProp } from '../types/Types'
import { animate } from 'framer-motion'

export const NavLink = ({href, title} : NavLinkProp) => {
  const smoothScroll = (targetId: string) => {
    const target = document.getElementById(targetId);
    if (target) {
        const scrollY = target.getBoundingClientRect().top + window.pageYOffset - 200;
    
        animate(window.scrollY, scrollY, {
        duration: 1.5,
        onUpdate: (latest) => window.scrollTo(0, latest),
        ease: [0.0, 0.6, 0.3, 0.9]
        });
    }
};

const handleScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    smoothScroll(targetId);  // ID of the section to scroll to
};

  return (
    <Link href={href} onClick={(e) => handleScroll(e, href.substring(1))} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>
        {title}
    </Link>
  )
}

