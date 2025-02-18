"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"
import Modal from "@/components/ui/modal"

interface BlogPost {
    id: string
    title: string
    excerpt: string
    body: string
    date: string
}

const BlogPage = () => {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const { data, error } = await supabase.from("blogs").select("*").order("date", { ascending: false })

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

    const handleReadMore = (post: BlogPost) => {
        setSelectedPost(post)
        setIsModalOpen(true)
    }

    if (isLoading) {
        return (
            <div className="container mx-auto py-20 px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    Blog Posts
                </h1>
                <p className="text-center text-gray-300">Loading blog posts...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className="container mx-auto py-20 px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    Blog Posts
                </h1>
                <p className="text-center text-red-500">{error}</p>
            </div>
        )
    }

    return (
        <div className="container mx-auto py-20 px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Blog Posts
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="glassmorphism h-full hover:bg-purple-700/50 transition-colors duration-300">
                            <CardHeader>
                                <CardTitle className="gradient-text text-xl">{post.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col justify-between h-full">
                                <div>
                                    <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                                    <p className="text-sm text-gray-400 mb-4">
                                        {new Date(post.date).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </p>
                                    <Button variant="outline" onClick={() => handleReadMore(post)} className="self-start">
                                        Read More
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
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
        </div>
    )
}

export default BlogPage

