"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-purple-900 rounded-lg shadow-xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className="absolute top-4 right-4 text-gray-400 hover:text-white" onClick={onClose}>
                        <X size={24} />
                    </button>
                    {children}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Modal

