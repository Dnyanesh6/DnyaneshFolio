"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import React, { useState } from "react"
import { Menu, X } from "lucide-react"

const links = ["About", "Projects", "Contact"]

export default function Navbar({ className }: { className?: string }) {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`w-full flex justify-center items-center px-4 ${className}`}
    >
      <div className="w-full max-w-6xl h-16 flex justify-between bg-neutral-700 rounded-2xl drop-shadow-lg border border-neutral-300 items-center px-4">

        {/* LEFT SECTION */}
        <div className="flex items-center gap-2">
          <img
            className="w-9 h-9 rounded-full"
            src="/passport.jpeg"
            alt="profile"
          />
          <span className="hidden sm:block text-white font-medium">
            Dnyanesh Chaudhari
          </span>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-6 text-white">
          {links.map((link, index) => (
            <Link
              key={index}
              href={`/${link.toLowerCase()}`}
              className="hover:text-neutral-300 transition"
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