"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const About = () => {
  return (
    <section id="about" className="py-20 bg-purple-900/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
        >
          About Tirex Engineering
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <p className="text-lg mb-6 text-gray-300">
            Tirex Engineering, established in 2025, is a cutting-edge electrical and civil engineering company. We pride
            ourselves on our team of highly skilled engineers and experienced professionals who are dedicated to
            delivering innovative solutions for our clients.
          </p>
          <p className="text-lg text-gray-300">
            Our commitment to excellence and state-of-the-art technology allows us to tackle complex projects with
            precision and efficiency. From concept to completion, we ensure that every project meets the highest
            standards of quality, safety, and sustainability.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="glassmorphism h-full hover:bg-purple-800/50 transition-colors duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 gradient-text">Our Mission</h3>
                <p className="text-foreground/80">
                  To deliver innovative and sustainable engineering solutions that shape the future of infrastructure
                  and technology.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card className="glassmorphism h-full hover:bg-purple-800/50 transition-colors duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 gradient-text">Our Vision</h3>
                <p className="text-foreground/80">
                  To be the leading force in transforming the built environment through cutting-edge engineering
                  practices.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Card className="glassmorphism h-full hover:bg-purple-800/50 transition-colors duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 gradient-text">Our Values</h3>
                <p className="text-foreground/80">
                  Innovation, Sustainability, Integrity, Excellence, and Collaboration guide every aspect of our work.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

