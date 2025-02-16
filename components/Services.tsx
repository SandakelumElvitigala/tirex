"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Building, Zap, HardHat, Recycle, Cpu } from "lucide-react"

const services = [
  {
    icon: Lightbulb,
    title: "Electrical Design",
    description: "Comprehensive electrical system design for residential, commercial, and industrial projects.",
  },
  {
    icon: Building,
    title: "Civil Engineering",
    description: "Structural design, site development, and infrastructure planning for various construction projects.",
  },
  {
    icon: Zap,
    title: "Power Systems",
    description: "Design and implementation of power distribution systems, including renewable energy solutions.",
  },
  {
    icon: HardHat,
    title: "Project Management",
    description:
      "End-to-end project management services ensuring timely and efficient completion of engineering projects.",
  },
  {
    icon: Recycle,
    title: "Sustainable Solutions",
    description: "Implementing eco-friendly and energy-efficient designs for a greener future.",
  },
  {
    icon: Cpu,
    title: "Smart Infrastructure",
    description: "Integrating IoT and AI technologies into building and city infrastructure for improved efficiency.",
  },
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-purple-800/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="glassmorphism h-full hover:bg-purple-700/50 transition-colors duration-300">
                <CardHeader>
                  <service.icon className="w-12 h-12 mb-4 text-primary" />
                  <CardTitle className="text-xl font-semibold gradient-text">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

