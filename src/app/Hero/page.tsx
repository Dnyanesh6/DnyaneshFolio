"use client"
import React from 'react'
import Hero from "@/src/components/hero"
import Container from "@/src/components/container"
import Navbar from "@/src/components/navbar"
import { motion, useScroll } from 'framer-motion'
import Footer from '@/src/components/footer'

function HeroPage() {

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
        <Hero />
      </Container>

      <Footer />
    </section>
  )
}

export default HeroPage