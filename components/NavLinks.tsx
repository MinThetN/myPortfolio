"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

function NavLinks() {
  return (
    <ul className='text-white font-mono space-y-4'>
      {links.map((link) => (
        <motion.li
          key={link.name}
          whileHover={{ x: 10 }}
          className="transition-colors"
        >
          <Link 
            href={link.href} 
            className="block py-2 px-4 hover:text-blue-400 transition-colors"
          >
            {link.name}
          </Link>
        </motion.li>
      ))}
    </ul>
  )
}

export default NavLinks
