import { motion } from "framer-motion"
import Link from "next/link"
import React from 'react'

const links = ["About", "Projects", "Contact"]

export default function Navbar({className}: {className?: string}) {
  return (
    <motion.nav 
    initial={{y:-100, opacity:0}}
    animate={{y:0, opacity:1}}
    transition={{duration:0.3, ease:"easeInOut"}}
    className={`w-full h-16 flex justify-center items-center `}>
      <div className={`w-full h-16 flex justify-between bg-neutral-700 rounded-2xl drop-shadow-lg z-10 border-neutral-300 items-center justify-center`}>
        <div className="left-0 flex justify-center items-center gap-2 absolute p-6">
          <img className="size-10 rounded-full" src="/passport.jpeg" alt="profile" />
          <span>Dnyanesh Chaudhari</span>
        </div>

        <div>
          {links.map((link, index) => (
            <Link
            className="p-6"
            key={index} href={`/${link.toLowerCase()}`}>
              {link}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

