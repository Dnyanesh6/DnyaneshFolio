"use client"
import React from 'react'
import Hero from "@/src/components/hero"
import Container from "@/src/components/container"
import Navbar from "@/src/components/navbar"
import { motion } from 'framer-motion'
import Footer from '@/src/components/footer'
function hero() {
  return (
    <section>
    <Container>
    <Navbar />
    <motion.div
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
    >
    <Hero />
    </motion.div>
    </Container>
    <Footer />
    </section>
  )
}

export default hero