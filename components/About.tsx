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
            TIREX Engineering (Pvt) Ltd is committed to providing innovative, reliable, and high-quality engineering solutions. Specializing in construction and electrical systems, we focus on delivering excellence across every project. With a strong emphasis on customer satisfaction, we ensure that each project is completed to the highest standards, from design to implementation.
          </p>
          <p className="text-lg text-gray-300">
            Our team combines technical expertise with practical experience, making us the ideal partner for transforming your vision into reality. Whether you're seeking consultation, design, or full-scale project execution, TIREX Engineering is here to serve you.
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
                  Our mission at TIREX Engineering is to deliver superior engineering solutions that enhance the built environment and meet the diverse needs of our clients. We are dedicated to providing exceptional service, leveraging advanced technology, and maintaining the highest standards of quality and safety. By fostering a culture of collaboration, innovation, and integrity, we aim to be a trusted partner in every project we undertake, ensuring long-term value and success for our clients and communities.
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
                  To be a leading force in the engineering industry, known for our commitment to innovation, quality, and sustainability. At TIREX Engineering, we strive to shape the future of construction and electrical systems through cutting-edge solutions that exceed client expectations and contribute to the advancement of infrastructure and technology.
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

