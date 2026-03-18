"use client"
import React from 'react'
import About from "@/src/components/about"
import Container from "@/src/components/container"
import Navbar from "@/src/components/navbar"
import Footer from "@/src/components/footer"
import { motion, useScroll } from 'framer-motion'
function AboutPage() {

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
        <About />
      </Container>

      <Footer />
    </section>
  )
}

export default AboutPage