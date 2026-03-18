"use client"

import { motion } from "framer-motion"

const timeline = [
  {
    year: "2025",
    items: [
      "Building blockchain-based applications on Solana",
      "Started exploring Web3 and Rust",
      "Joined a web3 community and started exploringg Solana ecosystem",
    ]
  },
  {
    year: "2024",
    items: [
        "Learned React, Next.js and backend development",
        "Working on full-stack projects with Next.js",
        "Exploring system design and backend architecture",
        "Started exploring Web3 and Rust",
    ]
  },
  {
    year: "2023",
    items: [
      "Started my journey in web development",
      "Built first projects using HTML, CSS, JS",
      "Developed interest in real-world applications"
    ]
  }
]

export default function Timeline() {
  return (
    <section className=" mt-10 md:mt-24 px-6 md:px-8">
      
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
        My Journey
      </h2>

      <div className="relative border-l border-teal-500/30 pl-8 space-y-12">

        {timeline.map((entry, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* DOT */}
            <div className="absolute -left-[34px] top-2 w-4 h-4 bg-teal-400 rounded-full shadow-[0_0_12px_#2dd4bf]" />

            {/* YEAR */}
            <h3 className="text-xl font-semibold text-teal-400 mb-4">
              {entry.year}
            </h3>

            {/* CARD */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-lg hover:shadow-teal-500/10 transition">

              <ul className="space-y-3 text-neutral-300 text-sm md:text-base">
                {entry.items.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    
                    {/* Custom bullet */}
                    <span className="mt-1 w-2 h-2 bg-teal-400 rounded-full" />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  )
}