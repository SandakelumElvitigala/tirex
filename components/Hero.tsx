"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="relative h-screen overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <Image src="/hero-background.jpg" alt="Engineering background" layout="fill" objectFit="cover" quality={100} />
      </motion.div>
      <motion.div
        style={{ opacity: useTransform(scrollY, [0, 300], [0.7, 0]) }}
        className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-purple-800/30"
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glassmorphism p-8 rounded-lg max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4 gradient-text"
          >
            Tirex Engineering (pvt) Ltd
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-gray-300"
          >
            Innovative Electrical & Civil Engineering Solutions for a Sustainable Future
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Explore Our Services
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

