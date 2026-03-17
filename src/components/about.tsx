"use client"
import React from "react"
import { motion } from "framer-motion"
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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            {/* //github */}
            <a className="hover:scale-110 transition-transform hover:color-teal-400" href="https://github.com/Dnyanesh6" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            {/* twitter */}
            <a className="hover:scale-110 transition-transform hover:color-teal-400" href="https://x.com/Dnyanesh05_" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter-icon lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
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