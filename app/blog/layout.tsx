import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Tirex Engineering Blog",
    description: "Latest insights and updates from Tirex Engineering",
}

export default function BlogLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white">{children}</div>
}

