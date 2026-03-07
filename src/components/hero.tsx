"use client";
import React from "react";
import { motion } from "framer-motion";
import Project from "./projects";
import { Code, Package, Server, Wrench } from "lucide-react";

const skills = {
  Languages: ["JavaScript", "TypeScript", "Rust", "C"],
  frontend: ["React", "Next.js", "React Native", "Tailwind", "Framer Motion"],
  backend: ["Node.js", "MongoDB"],
  tools: ["Git", "Github", "VS Code", "Postman", "Figma"],
  domains:["Web Development", "web3", "Mobile Development"]
};

function Hero() {
  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col px-6 md:px-8 mt-8 pt-8"
    >
      {/* Intro */}
      <section className="flex flex-col gap-6 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          I&apos;m a developer who loves solving complex problems with{" "}
          <span className="text-blue-400">code</span>.
        </h1>

        <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
          Hi, I&apos;m Dnyanesh a full-stack developer focused on building
          modern applications using React, Next.js, and backend systems.
        </p>

        <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
          Lately I&apos;ve been exploring blockchain development with Rust and
          the Solana ecosystem while building projects that push my engineering
          skills.
        </p>
      </section>

      {/* Skills */}
      <section className="mt-16 md:mt-24">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
          My Skills
        </h2>

        <p className="text-neutral-400 max-w-2xl text-sm md:text-base">
          I specialize in building modern web applications with a focus on
          performance and user experience.
        </p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
        >
          {/* Languages */}
          <div className="flex items-start gap-4 border border-neutral-800 rounded-xl p-5 bg-neutral-900/40">
            <Code className="text-yellow-400 mt-1" />
            <div>
              <h3 className="text-white font-semibold text-lg">Languages</h3>
              <p className="text-neutral-400 text-sm">
                {skills.Languages.join(", ")}
              </p>
            </div>
          </div>

          {/* Frontend */}
          <div className="flex box-shadow-md z-50  items-start gap-4 border border-neutral-800 rounded-xl p-5 bg-neutral-900/40">
            <Package className="text-blue-400 mt-1" />
            <div>
              <h3 className="text-white font-semibold text-lg">Frontend</h3>
              <p className="text-neutral-400 text-sm">
                {skills.frontend.join(", ")}
              </p>
            </div>
          </div>

          {/* Backend */}
          <div className="flex box-shadow-md z-50 items-start gap-4 border border-neutral-800 rounded-xl p-5 bg-neutral-900/40">
            <Server className="text-green-400 mt-1" />
            <div>
              <h3 className="text-white font-semibold text-lg">Backend</h3>
              <p className="text-neutral-400 text-sm">
                {skills.backend.join(", ")}
              </p>
            </div>
          </div>

          {/* Tools */}
          <div className="flex box-shadow-md z-50 items-start gap-4 border border-neutral-800 rounded-xl p-5 bg-neutral-900/40">
            <Wrench className="text-yellow-400 mt-1" />
            <div>
              <h3 className="text-white font-semibold text-lg">Tools</h3>
              <p className="text-neutral-400 text-sm">
                {skills.tools.join(", ")}
              </p>
            </div>
          </div>

            {/* Domains */}
            <div className="flex box-shadow-md z-50 items-start gap-4 border border-neutral-800 rounded-xl p-5 bg-neutral-900/40">
            <Wrench className="text-yellow-400 mt-1" />
            <div>
              <h3 className="text-white font-semibold text-lg">Domains</h3>
              <p className="text-neutral-400 text-sm">
                {skills.domains.join(", ")}
              </p>
            </div>
          </div>

        </motion.div>
      </section>

      {/* Porjects */}
      <section className="mt-16 md:mt-24">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
          Here are some of the things I&apos;ve been working on recently
        </h2>

        <Project/>
      </section>
    </motion.div>
  );
}

export default Hero;