"use client"
import React from 'react'
import Projects from '@/src/components/projects'
import Container from "@/src/components/container"
import Navbar from "@/src/components/navbar"
import { motion, useScroll } from 'framer-motion'
import Footer from '@/src/components/footer'

function ProjectsPage() {

  const { scrollYProgress } = useScroll()

  return (
    <section>

      {/* SCROLL PROGRESS BAR */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          originX: 0,
          backgroundColor: "#14b8a6", // teal
          zIndex: 999
        }}
      />

      <Container>
        <Navbar />
        <Projects />
      </Container>

      <Footer />
    </section>
  )
}

export default ProjectsPage