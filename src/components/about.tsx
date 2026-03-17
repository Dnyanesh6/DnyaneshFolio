"use client"
import React from "react"
import { motion } from "framer-motion"
import { Linkedin, Github, Twitter } from "lucide-react"
import Timeline from "@/src/components/timeline"

function About({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="px-6 md:px-8 mt-16"
    >
      {/* TOP SECTION */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">

        {/* TEXT */}
        <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
          Hi, I’m <span className="text-teal-400">Dnyanesh</span>, a developer who builds and learns through real projects.
        </h3>

        {/* IMAGE + SOCIAL */}
        <div className="flex flex-col items-center">
          <img
            src="/passport.jpeg"
            alt="Profile"
            className="w-40 h-40 md:w-52 md:h-52 rounded-xl object-cover shadow-lg"
          />

          {/* SOCIAL ICONS */}
          <div className="mt-4 flex gap-6 justify-center  ">
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

        </div>
      </div>

      {/* PARAGRAPHS */}
      <div className="mt-12 max-w-3xl space-y-6 text-neutral-400 text-sm md:text-base leading-relaxed">
        
        <p>
          I’m Dnyanesh, a Computer Science student with a strong interest in building modern web applications and exploring backend systems. I enjoy working across the stack, turning ideas into functional and scalable products.
        </p>
      </div>

      <div className="mt-4 max-w-full space-y-6 text-neutral-400 text-sm md:text-base leading-relaxed">
        <p>
          My primary focus is on technologies like React, Next.js, and Node.js, where I build responsive and user-friendly interfaces while ensuring efficient backend logic. I am also actively exploring blockchain development using Rust and the Solana ecosystem.
        </p>

        <p>
          I believe in learning through building projects, constantly improving my skills by solving real-world problems and writing clean, scalable code.
        </p>

        <p>Here is the timeline of my journey:</p>
        <Timeline />
      </div>
    </motion.div>
  )
}

export default About