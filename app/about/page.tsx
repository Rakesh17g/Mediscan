"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Building, Heart, Shield, Users, Clock, Stethoscope, Target } from "lucide-react"

const values = [
  {
    icon: <Heart className="h-6 w-6 text-red-500" />,
    title: "Compassionate Care",
    description:
      "We treat every patient with empathy, respect, and dignity, ensuring comfort throughout their healthcare journey.",
  },
  {
    icon: <Shield className="h-6 w-6 text-blue-500" />,
    title: "Safety First",
    description:
      "Patient safety is our top priority. We maintain the highest standards of medical care and infection control.",
  },
  {
    icon: <Target className="h-6 w-6 text-green-500" />,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from medical procedures to patient experience.",
  },
  {
    icon: <Users className="h-6 w-6 text-purple-500" />,
    title: "Teamwork",
    description: "Our collaborative approach ensures comprehensive care through multidisciplinary medical teams.",
  },
]

const milestones = [
  {
    year: "1985",
    title: "Hospital Founded",
    description: "MediScan Hospital was established with a vision to provide exceptional healthcare to our community.",
  },
  {
    year: "1995",
    title: "First Expansion",
    description: "Added specialized departments including Cardiology and Neurology to serve more patients.",
  },
  {
    year: "2005",
    title: "Technology Upgrade",
    description: "Invested in state-of-the-art medical equipment and digital health records system.",
  },
  {
    year: "2015",
    title: "Research Center",
    description: "Opened our medical research center to advance healthcare through clinical trials and studies.",
  },
  {
    year: "2020",
    title: "Telemedicine Launch",
    description: "Launched comprehensive telemedicine services to provide remote healthcare access.",
  },
  {
    year: "2025",
    title: "AI Integration",
    description: "Integrated artificial intelligence to enhance diagnostic accuracy and patient care.",
  },
]

const leadership = [
  {
    name: "Dr. Margaret Foster",
    position: "Chief Executive Officer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Dr. Foster brings over 25 years of healthcare leadership experience to MediCare Hospital.",
  },
  {
    name: "Dr. David Kim",
    position: "Chief Medical Officer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Dr. Kim oversees all clinical operations and ensures the highest standards of medical care.",
  },
  {
    name: "Sarah Mitchell",
    position: "Chief Nursing Officer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Sarah leads our nursing team with over 20 years of experience in patient care excellence.",
  },
]

export default function AboutPage() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="container py-12 md:py-24">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
        <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">About MediScan</div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Dedicated to Your Health & Wellbeing
        </h1>
        <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          For over 40 years, MediScan Hospital has been a trusted healthcare provider, committed to delivering
          exceptional medical care with compassion and innovation.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid gap-8 lg:grid-cols-2 mb-16">
        <Card className="border-l-4 border-l-teal-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-teal-600" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              To provide exceptional, compassionate healthcare services that improve the health and wellbeing of our
              community. We are committed to delivering patient-centered care through innovation, excellence, and
              collaboration.
            </p>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Stethoscope className="h-5 w-5 text-blue-600" />
              Our Vision
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              To be the leading healthcare provider in our region, recognized for clinical excellence, innovative
              treatments, and outstanding patient experience. We envision a healthier community through accessible,
              quality healthcare for all.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Values Section */}
      <div className="mb-16" ref={ref}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These fundamental principles guide everything we do and shape our commitment to exceptional healthcare.
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {values.map((value, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="rounded-full bg-gray-100 p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Statistics */}
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-8 md:p-12 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
          <p className="text-gray-600">Numbers that reflect our commitment to healthcare excellence</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-600 mb-2">50,000+</div>
            <p className="text-gray-600">Patients Treated Annually</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-600 mb-2">200+</div>
            <p className="text-gray-600">Medical Professionals</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-600 mb-2">12</div>
            <p className="text-gray-600">Specialized Departments</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-600 mb-2">98%</div>
            <p className="text-gray-600">Patient Satisfaction</p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Four decades of growth, innovation, and unwavering commitment to healthcare excellence.
          </p>
        </div>
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <Badge variant="outline" className="bg-teal-100 text-teal-700 border-teal-200 px-3 py-1">
                  {milestone.year}
                </Badge>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the experienced leaders who guide our mission of providing exceptional healthcare.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadership.map((leader, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle>{leader.name}</CardTitle>
                <CardDescription className="text-teal-600 font-medium">{leader.position}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{leader.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Accreditations */}
      <div className="bg-gray-50 rounded-xl p-8 md:p-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Accreditations & Awards</h2>
          <p className="text-gray-600">Recognition for our commitment to quality and excellence</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <Award className="h-12 w-12 text-teal-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Joint Commission Accredited</h3>
            <p className="text-sm text-gray-600">Gold Seal of Approval</p>
          </div>
          <div className="text-center">
            <Building className="h-12 w-12 text-teal-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Magnet Hospital</h3>
            <p className="text-sm text-gray-600">Excellence in Nursing</p>
          </div>
          <div className="text-center">
            <Shield className="h-12 w-12 text-teal-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Patient Safety Excellence</h3>
            <p className="text-sm text-gray-600">Leapfrog Group Recognition</p>
          </div>
          <div className="text-center">
            <Clock className="h-12 w-12 text-teal-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Best Hospital</h3>
            <p className="text-sm text-gray-600">Regional Healthcare Awards</p>
          </div>
        </div>
      </div>
    </div>
  )
}
