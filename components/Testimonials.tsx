"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    company: "TechCorp Inc.",
    testimonial:
      "Tirex Engineering delivered an outstanding solution for our smart office project. Their expertise in both electrical and civil engineering was evident throughout the process.",
  },
  {
    id: 2,
    name: "Bob Smith",
    company: "GreenBuild Constructions",
    testimonial:
      "We were impressed by Tirex's commitment to sustainability. They helped us achieve LEED certification for our latest development with their innovative approach.",
  },
  {
    id: 3,
    name: "Carol Davis",
    company: "PowerGrid Solutions",
    testimonial:
      "The team at Tirex Engineering showed exceptional skill in upgrading our power distribution systems. Their work has significantly improved our grid's efficiency and reliability.",
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-purple-900/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        >
          What Our Clients Say
        </motion.h2>
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="glassmorphism bg-purple-800/50">
                <CardContent className="p-6 text-center">
                  <p className="text-lg mb-4 text-gray-300">"{testimonials[currentIndex].testimonial}"</p>
                  <p className="font-semibold text-gray-200">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-gray-400">{testimonials[currentIndex].company}</p>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full bg-primary text-primary-foreground rounded-full p-2 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full bg-primary text-primary-foreground rounded-full p-2 focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

