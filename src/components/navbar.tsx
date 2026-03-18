"use client"

import { motion } from "framer-motion"
import { useRouter, redirect } from "next/navigation"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import axios from "axios"

const links = ["About", "Projects", "Contact"]

export default function Navbar({ className }: { className?: string }) {

  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  const getProjects = async () => {
    try {
      const res = await axios.get("https://api.github.com/users/Dnyanesh6/repos")
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProjects()
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`w-full flex justify-center px-4 ${className}`}
    >

      <div className="w-full md:w-3/4 max-w-6xl h-16 flex justify-between items-center bg-zinc-800 rounded-2xl px-4 shadow-lg">

        {/* LEFT */}
        <div
          onClick={() => router.push("/Hero")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            className="w-10 h-10 rounded-full"
            src="/passport.jpeg"
            alt="profile"
          />

          <span className="hidden sm:block text-white font-bold text-lg">
            Dnyanesh Chaudhari
          </span>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-4 text-white items-center">

          {links.map((link, index) => (
            <motion.div 
            className="hover:bg-teal-50/10 p-2 cursor-pointer rounded-lg"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            key={index}>
            <Link
            href={`/${link}`}
              className="hover:text-neutral-300  text-lg transition"
            >
              {link}
            </Link>
            </motion.div>
          ))}

          {/* CV BUTTON */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-b from-zinc-500 via-zinc-600 to-zinc-800 hover:from-zinc-700 hover:via-zinc-800 hover:to-zinc-900 transition"
          >
            Download CV
          </a>

        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden text-white">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 w-[90%] max-w-md bg-zinc-800 rounded-xl flex flex-col items-center md:hidden p-4"
        >

          {links.map((link, index) => (
            <div
              key={index}
              className="w-full text-center py-3 tracking-tight text-sm text-white border-b border-zinc-700"
              onClick={() => {
                router.push(`/${link}`);
                setMenuOpen(false);
              }}
            >
              {link}
            </div>
          ))}

          {/* CV BUTTON MOBILE */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full text-center px-4 py-3 rounded-lg bg-gradient-to-b from-zinc-500 via-zinc-600 to-zinc-800 text-white"
          >
            Download CV
          </a>

        </motion.div>
      )}

    </motion.nav>
  )
}