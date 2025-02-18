"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { supabase } from "@/lib/supabase"

interface Project {
  id: number
  title: string
  image: string
  category: string
  status: string
  description: string
}

const Portfolio = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [filter, setFilter] = useState({ category: "all", status: "all" })
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      setIsLoading(true)
      const { data, error } = await supabase.from("projects").select("*")

      if (error) throw error

      setProjects(data || [])
    } catch (error) {
      setError("Failed to fetch projects")
      console.error("Error fetching projects:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const filteredProjects = projects.filter(
      (project) =>
          (filter.category === "all" || project.category === filter.category) &&
          (filter.status === "all" || project.status === filter.status),
  )

  if (isLoading) {
    return <div className="text-center py-20">Loading projects...</div>
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">{error}</div>
  }

  return (
      <section id="portfolio" className="py-20 bg-purple-900/30">
        <div className="container mx-auto px-4">
          <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
          >
            Our Projects
          </motion.h2>

          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <Button
                variant={filter.category === "all" ? "default" : "outline"}
                onClick={() => setFilter((prev) => ({ ...prev, category: "all" }))}
            >
              All Projects
            </Button>
            <Button
                variant={filter.category === "electrical" ? "default" : "outline"}
                onClick={() => setFilter((prev) => ({ ...prev, category: "electrical" }))}
            >
              Electrical Engineering
            </Button>
            <Button
                variant={filter.category === "civil" ? "default" : "outline"}
                onClick={() => setFilter((prev) => ({ ...prev, category: "civil" }))}
            >
              Civil Engineering
            </Button>
          </div>
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <Button
                variant={filter.status === "all" ? "default" : "outline"}
                onClick={() => setFilter((prev) => ({ ...prev, status: "all" }))}
            >
              All Status
            </Button>
            <Button
                variant={filter.status === "ongoing" ? "default" : "outline"}
                onClick={() => setFilter((prev) => ({ ...prev, status: "ongoing" }))}
            >
              Ongoing
            </Button>
            <Button
                variant={filter.status === "completed" ? "default" : "outline"}
                onClick={() => setFilter((prev) => ({ ...prev, status: "completed" }))}
            >
              Completed
            </Button>
          </div>

          <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
          >
            {filteredProjects.map((project) => (
                <motion.div
                    key={project.id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                >
                  <Card className="glassmorphism overflow-hidden cursor-pointer hover:bg-purple-800/50 transition-colors duration-300">
                    <CardContent className="p-0">
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="relative aspect-video">
                            <Image
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                layout="fill"
                                objectFit="cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                              <p className="text-white text-lg font-semibold">View Details</p>
                            </div>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="glassmorphism bg-purple-900/70">
                          <DialogHeader>
                            <DialogTitle className="gradient-text">{project.title}</DialogTitle>
                            <DialogDescription>{project.description}</DialogDescription>
                          </DialogHeader>
                          <div className="mt-4">
                            <p className="text-sm text-gray-400">
                              Category: {project.category === "electrical" ? "Electrical Engineering" : "Civil Engineering"}
                            </p>
                            <p className="text-sm text-gray-400">
                              Status: {project.status === "ongoing" ? "Ongoing" : "Completed"}
                            </p>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2 gradient-text">{project.title}</h3>
                        <p className="text-sm text-gray-400 mb-2">
                          {project.category === "electrical" ? "Electrical Engineering" : "Civil Engineering"}
                        </p>
                        <p
                            className={`text-sm font-semibold ${project.status === "ongoing" ? "text-yellow-400" : "text-green-400"}`}
                        >
                          {project.status === "ongoing" ? "Ongoing" : "Completed"}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  )
}

export default Portfolio

