"use client"

import { motion } from "framer-motion"
import React from "react"
import { Github,Linkedin, Twitter } from "lucide-react"

const socials =[
    { icon: <Github />, href: "https://www.linkedin.com/in/dnyanesh-chaudhari-48942328a/" },
    { icon: <Linkedin />, href:"https://github.com/Dnyanesh6" },
    { icon: <Twitter />, href: "https://x.com/Dnyanesh05_" }

]

export default function Contact() {
  const qrRef = React.useRef<HTMLImageElement>(null)
  // eslint-disable-next-line react-hooks/refs
  qrRef.current?.addEventListener("click", () => {
    window.open("https://linktr.ee/dnyanesh6", "_blank")
  })
  return (
    <motion.section
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full height-auto flex justify-center"
    >
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 bg-zinc-900 p-10 rounded-2xl shadow-lg">

        {/* LEFT */}
        <div className="flex flex-col gap-6">

          <h2 className="text-3xl font-bold text-white">
            Let’s Work Together 🚀
          </h2>

          <p className="text-zinc-400">
            Open for freelance, internships & collaborations.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:dnyaneshchaudhari05@email.com"
              className="px-5 py-3 bg-teal-600 rounded-lg text-white font-medium hover:bg-teal-700"
            >
              Email Me
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              target="_blank"
              className="px-4 py-2 flex justify-center items-center rounded-lg text-sm font-medium bg-gradient-to-b from-zinc-500 via-zinc-600 to-zinc-800 hover:from-zinc-700 hover:via-zinc-800 hover:to-zinc-900 transition"
            >
              Resume
            </motion.a>

          </div>

          {/* Socials */}
          <div className="flex gap-4 text-zinc-400">
            {socials.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ y: -3 }}
                className="hover:text-teal-500 transition"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-center justify-center gap-4">

          <motion.img
            src="/linktree-qr.png"
            alt="QR"
            className="w-48 h-48 rounded-xl bg-white p-4 shadow-lg"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 200 }}
          />

          <p className="text-lg text-semibold  text-white-500">
            Scan to connect instantly
          </p>

        </div>

      </div>

    </motion.section>
    
)
}