"use client"

import Image from "next/image"

const projects = [
  {
    title: "Solscan-Lite",
    description:
      "A lightweight Solana blockchain explorer built with react-native and solana wallet adapter.",
    image: "/projects/solscan-lite.jpeg",
    tech: ["Expo", "React-native", "TypeScript"],
    github: "https://github.com/Dnyanesh6/SolScan.lite"
  },
  {
    title: "Portfolio Website",
    description:
      "A personal developer portfolio built with Next.js and Tailwind CSS to showcase projects, skills, and technical work.",
    image: "/projects/portfolio.png",
    tech: ["Next.js", "Tailwind", "TypeScript", "React"],
    github: "https://github.com/Dnyanesh6/DnyaneshFolio"
  },
  
]

export default function Projects() {
  return (
    <section className="mt-24">

      <h2 className="text-3xl font-bold mb-10 text-white">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-neutral-900 group border border-neutral-800 rounded-xl overflow-hidden hover:scale-[1.02] transition duration-300"
          >

            {/* Project Image */}
            <div className="relative h-52 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-fit group-hover:brightness-90 transition duration-300 "
              />
            </div>

            {/* Content */}
            <div className="p-6">

              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="text-neutral-400 mt-3 text-sm">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex gap-3 mt-4 text-sm text-neutral-400">
                {project.tech.map((t, index) => (
                  <span
                    key={index}
                    className="bg-neutral-800 px-2 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={project.github}
                className="inline-block hover:text-blue-400 mt-6   text-sm"
              >
                View Source →
              </a>

            </div>
          </div>
        ))}

      </div>
    </section>
  )
}