import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FloatingNav from "@/components/FloatingNav"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Tirex Engineering",
  description: "Innovative Electrical & Civil Engineering Solutions",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} gradient-bg min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingNav />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'