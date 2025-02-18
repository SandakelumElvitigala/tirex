"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { supabase } from "@/lib/supabase"
import Modal from "@/components/ui/modal"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  body: string
  date: string
}

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const { data, error } = await supabase.from("blogs").select("*").order("date", { ascending: false }).limit(3)

        if (error) {
          throw new Error(error.message)
        }

        setBlogPosts(data)
        setIsLoading(false)
      } catch (err) {
        setError("Failed to fetch blog posts")
        setIsLoading(false)
      }
    }

    fetchBlogPosts()
  }, [])

  const handleReadMore = async (postId: string) => {
    try {
      const { data, error } = await supabase.from("blogs").select("*").eq("id", postId).single()

      if (error) {
        throw new Error(error.message)
      }

      setSelectedPost(data)
      setIsModalOpen(true)
    } catch (err) {
      console.error("Failed to fetch full blog post:", err)
    }
  }

  if (isLoading) {
    return (
        <section id="blog" className="py-20 bg-purple-800/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Latest Insights
            </h2>
            <p className="text-center text-gray-300">Loading blog posts...</p>
          </div>
        </section>
    )
  }

  if (error) {
    return (
        <section id="blog" className="py-20 bg-purple-800/30">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Latest Insights
            </h2>
            <p className="text-center text-red-500">{error}</p>
          </div>
        </section>
    )
  }

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
                    key={post.id}
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
                      <p className="text-sm text-gray-400 mb-4">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                      <Button variant="outline" onClick={() => handleReadMore(post.id)}>
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          {selectedPost && (
              <div className="p-6">
                <h2 className="text-3xl font-bold mb-4 gradient-text">{selectedPost.title}</h2>
                <p className="text-sm text-gray-400 mb-4">
                  {new Date(selectedPost.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 mb-4">{selectedPost.excerpt}</p>
                  <div dangerouslySetInnerHTML={{ __html: selectedPost.body }} />
                </div>
              </div>
          )}
        </Modal>
      </section>
  )
}

export default Blog

