/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Linkedin, Github, Twitter } from "lucide-react"
import { useRouter } from 'next/navigation'

const links = ["About", "Projects", "Contact"]
function footer({ className }: { className?: string }) {
  const router = useRouter()
  return (
    <div className='flex justify-center items-center mb-16 mt-8'>
        <footer className="bg-neutral-900 text-white py-4 px-4 sm:px-6 lg:px-8 ">
            <div 
            onClick={() => router.push("/hero")}
            className="container mx-auto text-center p-4 cursor-pointer flex flex-row items-center gap-4">
                <img src="/passport.jpeg" className='size-12 rounded-full' alt="Profile image" />
                <p 
                className='font-semibold text-xl  '>Dnyanesh chaudhari</p>
            </div>

            <div className="hidden md:flex gap-4 mt-4 text-white md:items-center md:justify-center">

          {links.map((link, index) => (
            <motion.div 
            className="font-Inter p-2 rounded-lg"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            key={index}>
            <Link
              href={`/${link}`}
              onClick={() => router.push(`/${link.toLowerCase()}`)}
              className="hover:text-neutral-300  text-lg transition"
            >
              {link}
            </Link>
            </motion.div>
          ))}
          </div>

          <div className="mt-4 flex gap-10 justify-center  ">
            {/* //linkedin */}
            <a className="hover:scale-110 transition-transform hover:color-teal-400" href="https://www.linkedin.com/in/dnyanesh-chaudhari-48942328a/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="hover:text-teal-400 transition" />
            </a>
            {/* //github */}
            <a className="hover:scale-110 transition-transform hover:color-teal-400" href="https://github.com/Dnyanesh6" target="_blank" rel="noopener noreferrer">
              <Github className="hover:text-teal-400 transition" />
            </a>
            {/* twitter */}
            <a className="hover:scale-110 transition-transform hover:color-teal-400" href="https://x.com/Dnyanesh05_" target="_blank" rel="noopener noreferrer">
              <Twitter className="hover:text-teal-400 transition" />
            </a>
          </div>
        </footer>
    </div>
  )
}

export default footer