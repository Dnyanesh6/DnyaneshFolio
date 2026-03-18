"use client"
import React from 'react'
import Contact from "@/src/components/contact"
import Container from "@/src/components/container"
import Navbar from "@/src/components/navbar"
import Footer from "@/src/components/footer"
import { motion, useScroll } from 'framer-motion'
function AboutPage() {

  const { scrollYProgress } = useScroll()

  return (
    <section className='flex flex-col min-h-screen'>

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

      <Container className='flex-grow'>
        <Navbar />
        <Contact />
        <Footer />
      </Container>
    </section>
  )
}

export default AboutPage