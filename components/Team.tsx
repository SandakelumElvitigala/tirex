"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const teamMembers = [
  {
    name: "E.D.Ayeshmantha Pramuditha",
    title: "Electrical Engineer",
    image: "/team-member1.jpg",
    description: "Ayeshmantha is an skilled engineer who graduated from University of Moratuwa",
  },
  {
    name: "Ravindu Leelananda",
    title: "Electrical Engineer",
    image: "/team-member2.jpg",
    description:
      "Ravindu is an skilled engineer who graduated from SLIIT",
  }
]

const Team = () => {
  return (
    <section id="team" className="py-20 bg-purple-800/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="glassmorphism overflow-hidden hover:bg-purple-700/50 transition-colors duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} layout="fill" objectFit="cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-1 gradient-text">{member.name}</h3>
                    <p className="text-sm text-gray-300 mb-2">{member.title}</p>
                    <p className="text-sm text-gray-400">{member.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team

