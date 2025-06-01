"use client"
import React from 'react'
import NavLinks from './NavLinks'
import { motion } from 'framer-motion'
import Logo from './Logo'

function MainNav() {
  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='fixed left-0 top-0 h-screen w-64 p-6'
    >
      <Logo />
      <NavLinks />
    </motion.nav>
  )
}

export default MainNav
