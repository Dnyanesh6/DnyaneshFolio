"use client"
import React from 'react'
import { motion } from 'framer-motion'
function hero() {
  return (
    <motion.div
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
    className='flex pl-8 mt-8 pt-8'
    >
      {/* intro section */}
      <section 
      className='flex flex-col gap-6 max-w-3xl'>
        <h1 
        className='text-5xl font-bold tracking-tight  text-white mb-4'>
          I&apos;m a developer who loves solving complex problems with <span className='text-blue-400'>code</span>.</h1>
        <p
        className="text-neutral-400 w-2/3 flex justify-between"
        >
          Hi, I&apos;m Dnyanesh — a full-stack developer focused on building modern
          applications using React, Next.js, and backend systems.
        </p>

        <p
        className='text-neutral-400 w-2/3 flex justify-between'
        >
          Lately I&apos;ve been exploring blockchain development with Rust and the
          Solana ecosystem while building projects that push my engineering skills.
        </p>
      </section>
    </motion.div>
  )
}

export default hero