import React from 'react'
import { NavLinkProp } from '../types/Types'
import { NavLink } from './NavLink'

export const MenuOverlay: React.FC<{links: NavLinkProp[]}> = ({links}) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
        {links.map((link : NavLinkProp, index) => (
            <li key={index}>
                <NavLink href={link.href} title={link.title}/>
            </li>
        ))}
    </ul>
  )
}
