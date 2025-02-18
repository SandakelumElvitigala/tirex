"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

interface Testimonial {
  id: number
  name: string
  company: string
  testimonial: string
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [newReview, setNewReview] = useState({ name: "", company: "", testimonial: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase.from("reviews").select("*").order("created_at", { ascending: false })

      if (error) throw error

      setTestimonials(data)
      setIsLoading(false)
    } catch (error) {
      setError("Failed to fetch testimonials")
      setIsLoading(false)
    }
  }

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewReview((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const { data, error } = await supabase.from("reviews").insert([newReview]).select()

      if (error) throw error

      setTestimonials((prev) => [data[0], ...prev])
      setNewReview({ name: "", company: "", testimonial: "" })
      toast({
        title: "Review submitted",
        description: "Thank you for your feedback!",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit review. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isLoading) {
    return <div className="text-center py-20">Loading testimonials...</div>
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">{error}</div>
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
          {testimonials.length > 0 ? (
              <div className="relative max-w-3xl mx-auto mb-16">
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
          ) : (
              <p className="text-center text-gray-300 mb-16">No testimonials available yet.</p>
          )}

          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-center text-gray-200">Share Your Experience</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={newReview.name}
                  onChange={handleInputChange}
                  required
                  className="bg-purple-800/50 text-gray-200 placeholder-gray-400"
              />
              <Input
                  type="text"
                  name="company"
                  placeholder="Your Company"
                  value={newReview.company}
                  onChange={handleInputChange}
                  required
                  className="bg-purple-800/50 text-gray-200 placeholder-gray-400"
              />
              <Textarea
                  name="testimonial"
                  placeholder="Your Testimonial"
                  value={newReview.testimonial}
                  onChange={handleInputChange}
                  required
                  className="bg-purple-800/50 text-gray-200 placeholder-gray-400"
              />
              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? "Submitting..." : "Submit Your Review"}
              </Button>
            </form>
          </div>
        </div>
      </section>
  )
}

export default Testimonials

