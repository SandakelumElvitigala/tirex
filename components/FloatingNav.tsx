"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
        >
          <ul className="flex space-x-2 bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-full px-4 py-2 shadow-lg">
            {["About", "Services", "Portfolio", "Team"].map((item) => (
              <li key={item}>
                <Link
                  href={`/#${item.toLowerCase()}`}
                  className="text-white hover:text-blue-400 px-3 py-2 rounded-full transition duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

export default FloatingNav

