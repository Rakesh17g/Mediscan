"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Mail } from "lucide-react"

const doctors = [
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-thirdman-5327580.jpg-Opp6EehMT5Fyrsg941FGZiakoWPINk.jpeg",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    description:
      "Specializing in cardiovascular health with over 10 years of experience in diagnosing and treating heart conditions.",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-thirdman-5327656.jpg-S5QoHUPRh9g6FLzDOGIQzoVwHbjKQk.jpeg",
    name: "Dr. Michael Williams",
    specialty: "Neurology",
    description:
      "Expert in neurological disorders with a focus on innovative treatment approaches and patient-centered care.",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-tima-miroshnichenko-5452221.jpg-zncJJBiJfsZKK7Ki8N1yVCuENTS0Fm.jpeg",
    name: "Medical Team",
    specialty: "Collaborative Care",
    description:
      "Our collaborative medical team works together to provide comprehensive care and treatment plans for complex cases.",
  },
]

export default function DoctorsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="w-full py-12 md:py-24 bg-gray-50" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">Our Medical Team</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Expert Doctors</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our team of highly qualified medical professionals is dedicated to providing exceptional care.
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {doctors.map((doctor, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={doctor.image || "/placeholder.svg"}
                    alt={doctor.name}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{doctor.name}</CardTitle>
                  <CardDescription className="text-teal-600 font-medium">{doctor.specialty}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 text-sm">{doctor.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" className="border-teal-200 text-teal-700 hover:bg-teal-100">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-500 hover:text-teal-700">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
