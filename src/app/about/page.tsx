"use client"
import React from 'react'
import About from "@/src/components/about"
import Container from "@/src/components/container"
import Navbar from "@/src/components/navbar"
import Footer from "@/src/components/footer"
import { motion } from 'framer-motion'
function about() {
  return (
    <section>
    <Container >
    <Navbar />
    <motion.div
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
    >
    <About />
    </motion.div>
    <Footer></Footer>
    </Container>
    </section>
  )
}

export default about