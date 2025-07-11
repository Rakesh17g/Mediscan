"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Mail, Phone, MapPin, Award, GraduationCap } from "lucide-react"

const doctors = [
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-thirdman-5327580.jpg-Opp6EehMT5Fyrsg941FGZiakoWPINk.jpeg",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    title: "Chief of Cardiology",
    experience: "15+ years",
    education: "Harvard Medical School",
    certifications: ["Board Certified Cardiologist", "Interventional Cardiology"],
    description:
      "Dr. Johnson specializes in cardiovascular health with over 15 years of experience in diagnosing and treating heart conditions. She is an expert in interventional cardiology and has performed over 2,000 cardiac procedures.",
    languages: ["English", "Spanish"],
    availability: "Mon-Fri: 8AM-5PM",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-thirdman-5327656.jpg-S5QoHUPRh9g6FLzDOGIQzoVwHbjKQk.jpeg",
    name: "Dr. Michael Williams",
    specialty: "Neurology",
    title: "Head of Neurology Department",
    experience: "12+ years",
    education: "Johns Hopkins University",
    certifications: ["Board Certified Neurologist", "Epilepsy Specialist"],
    description:
      "Dr. Williams is an expert in neurological disorders with a focus on innovative treatment approaches and patient-centered care. He specializes in epilepsy, stroke care, and neurodegenerative diseases.",
    languages: ["English", "French"],
    availability: "Tue-Sat: 9AM-6PM",
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    name: "Dr. Emily Chen",
    specialty: "Pediatrics",
    title: "Pediatric Specialist",
    experience: "10+ years",
    education: "Stanford Medical School",
    certifications: ["Board Certified Pediatrician", "Pediatric Emergency Medicine"],
    description:
      "Dr. Chen provides comprehensive healthcare for children from infancy through adolescence. She has extensive experience in pediatric emergency medicine and developmental pediatrics.",
    languages: ["English", "Mandarin"],
    availability: "Mon-Fri: 7AM-4PM",
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    name: "Dr. Robert Martinez",
    specialty: "Orthopedics",
    title: "Orthopedic Surgeon",
    experience: "18+ years",
    education: "Mayo Clinic College of Medicine",
    certifications: ["Board Certified Orthopedic Surgeon", "Sports Medicine"],
    description:
      "Dr. Martinez specializes in orthopedic surgery with expertise in joint replacement, sports medicine, and trauma surgery. He has helped thousands of patients regain mobility and return to active lifestyles.",
    languages: ["English", "Spanish"],
    availability: "Mon-Thu: 8AM-6PM",
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    name: "Dr. Lisa Thompson",
    specialty: "Ophthalmology",
    title: "Eye Care Specialist",
    experience: "14+ years",
    education: "University of Pennsylvania",
    certifications: ["Board Certified Ophthalmologist", "Retinal Specialist"],
    description:
      "Dr. Thompson is a comprehensive ophthalmologist with subspecialty training in retinal diseases. She performs advanced eye surgeries including cataract surgery and retinal procedures.",
    languages: ["English"],
    availability: "Wed-Sun: 9AM-5PM",
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    name: "Dr. James Wilson",
    specialty: "General Surgery",
    title: "Chief of Surgery",
    experience: "20+ years",
    education: "University of Chicago",
    certifications: ["Board Certified General Surgeon", "Minimally Invasive Surgery"],
    description:
      "Dr. Wilson is a highly experienced general surgeon specializing in minimally invasive techniques. He has pioneered several laparoscopic procedures and is known for his expertise in complex abdominal surgeries.",
    languages: ["English"],
    availability: "Mon-Fri: 6AM-3PM",
  },
]

export default function DoctorsPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">Our Medical Team</div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Expert Doctors</h1>
        <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Our team of highly qualified medical professionals is dedicated to providing exceptional care with years of
          experience and specialized training.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        ref={ref}
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
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{doctor.name}</CardTitle>
                    <CardDescription className="text-teal-600 font-medium">{doctor.specialty}</CardDescription>
                    <p className="text-sm text-gray-500 mt-1">{doctor.title}</p>
                  </div>
                  <Badge variant="secondary" className="bg-teal-100 text-teal-700">
                    {doctor.experience}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">{doctor.description}</p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <GraduationCap className="h-4 w-4 text-teal-600" />
                    <span className="text-gray-600">{doctor.education}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="h-4 w-4 text-teal-600" />
                    <span className="text-gray-600">{doctor.certifications[0]}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-teal-600" />
                    <span className="text-gray-600">Languages: {doctor.languages.join(", ")}</span>
                  </div>
                </div>

                <div className="pt-2 border-t">
                  <p className="text-sm text-gray-500">
                    <strong>Availability:</strong> {doctor.availability}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-teal-200 text-teal-700 hover:bg-teal-100 bg-transparent"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-teal-700">
                  <Mail className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-teal-700">
                  <Phone className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action Section */}
      <div className="mt-24 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Schedule an Appointment?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Our experienced medical team is here to provide you with the highest quality care. Book your appointment today
          and take the first step towards better health.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-teal-600 hover:bg-teal-700">
            <Calendar className="mr-2 h-4 w-4" />
            Book Appointment
          </Button>
          <Button variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-100 bg-transparent">
            <Phone className="mr-2 h-4 w-4" />
            Call Us: (555) 123-4567
          </Button>
        </div>
      </div>
    </div>
  )
}
