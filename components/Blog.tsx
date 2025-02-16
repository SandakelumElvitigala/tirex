"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const blogPosts = [
  {
    title: "The Future of Smart Cities",
    excerpt: "Exploring how IoT and AI are shaping urban infrastructure and improving quality of life.",
    date: "June 15, 2025",
  },
  {
    title: "Sustainable Engineering Practices",
    excerpt: "Innovative approaches to reduce environmental impact in construction and energy projects.",
    date: "May 28, 2025",
  },
  {
    title: "Advancements in Renewable Energy",
    excerpt: "Latest breakthroughs in solar, wind, and energy storage technologies.",
    date: "May 10, 2025",
  },
]

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-purple-800/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        >
          Latest Insights
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="glassmorphism h-full hover:bg-purple-700/50 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="gradient-text">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <p className="text-sm text-gray-400 mb-4">{post.date}</p>
                  <Button variant="outline" asChild>
                    <Link href="#" className="text-gray-200 hover:text-white">
                      Read More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild>
            <Link href="#">View All Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Blog

