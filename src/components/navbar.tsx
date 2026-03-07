"use client"

import { motion } from "framer-motion"
import {useRouter } from "next/navigation"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { Menu, Target, X } from "lucide-react"
import axios from "axios";

const links = ["About", "Projects", "Contact"]

export default function Navbar({ className }: { className?: string }) {

  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  const getPorjects = async () => {
    try {
      const res = await axios.post("https://api.github.com/users/Dnyanesh6/repos")
      console.log(res.data)

      return res.data;
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPorjects()
  })

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`w-full md:w--full flex justify-center gap-40 bg-red- items-center px-4 ${className}`}
    >
      <div className="w-full md:w-3/4 max-w-6xl h-16 flex justify-between bg-zinc-800 rounded-2xl drop-shadow-lg  items-center px-4">

        {/* LEFT SECTION */}
        <div 
        onClick={()=>{router.push('/Hero')}}
        className="flex items-center gap-2 cursor-pointer">
          <img
            className="w-10 h-10 transition rounded-full"
            src="/passport.jpeg"
            alt="profile"
          />
          <span className="hidden sm:block text-white font-bold text-lg">
            Dnyanesh Chaudhari
          </span>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-14 text-white">
          {links.map((link, index) => (
            <Link
              key={index}
              href={`/${link.toLowerCase()}`}
              className="hover:text-neutral-300 text-lg transition"
            >
              {link}
            </Link>
          ))}
        </div>


        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden text-white focus:outline-none">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      
        <a
        href="/DC_resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
        className=" py-4 text-md bg-gradient-to-b from-zinc-500 via-zinc-600 to-zinc-800 text-white px-4 py-2 rounded-lg hover:from-zinc-700 hover:text-neutral-300 hover:via-zinc-800 hover:to-zinc-900 transition duration-300 "
        >
          Download CV
        </a>
        
      
      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 w-[90%] bg-neutral-700 rounded-xl flex flex-col items-center md:hidden mt-2"
        >
          {links.map((link, index) => (
            <Link
              key={index}
              href={`/${link.toLowerCase()}`}
              className="w-full text-center py-4 m-2 rounded-lg text-white border-b border-neutral-600"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </Link>
            
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}