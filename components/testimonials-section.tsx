"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Patient",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "The care I received at MediScan was exceptional. The staff was professional, caring, and made me feel comfortable throughout my treatment. I couldn't have asked for better service.",
    treatment: "Cardiology",
  },
  {
    name: "Michael Rodriguez",
    role: "Patient",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Dr. Johnson and her team saved my life. The emergency response was quick, and the follow-up care was outstanding. MediScan truly cares about their patients.",
    treatment: "Emergency Care",
  },
  {
    name: "Emily Chen",
    role: "Patient",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "As a mother, I was worried about my child's surgery. The pediatric team at MediScan was amazing - they explained everything and made both of us feel at ease.",
    treatment: "Pediatric Surgery",
  },
  {
    name: "David Thompson",
    role: "Patient",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "The diagnostic imaging department is top-notch. The MRI scan was quick, comfortable, and the results were explained clearly. Highly recommend MediScan!",
    treatment: "Diagnostic Imaging",
  },
  {
    name: "Lisa Anderson",
    role: "Patient",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "I've been a patient here for years. The consistency in quality care and the personal attention from the staff keeps me coming back. They truly care about patient outcomes.",
    treatment: "General Medicine",
  },
  {
    name: "Robert Kim",
    role: "Patient",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "The orthopedic surgery I had was life-changing. I'm back to playing sports thanks to Dr. Martinez and the rehabilitation team. Excellent facilities and care!",
    treatment: "Orthopedic Surgery",
  },
]

export default function TestimonialsSection() {
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
    <section className="w-full py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-amber-100 px-4 py-2 text-sm text-amber-700 font-medium">
            <Star className="mr-2 h-4 w-4 fill-current" />
            Patient Testimonials
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent font-poppins">
            What Our Patients Say
          </h2>
          <p className="max-w-[700px] text-gray-600 text-lg md:text-xl leading-relaxed font-inter">
            Don't just take our word for it. Here's what our patients have to say about their experience at MediScan.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-teal-200" />
                    <p className="text-gray-700 italic leading-relaxed pl-6 font-inter">"{testimonial.text}"</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 font-poppins">{testimonial.name}</p>
                      <p className="text-sm text-teal-600 font-medium font-inter">{testimonial.treatment}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 font-poppins">4.9/5</div>
              <div className="text-sm text-gray-600 font-inter">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 font-poppins">10,000+</div>
              <div className="text-sm text-gray-600 font-inter">Happy Patients</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 font-poppins">98%</div>
              <div className="text-sm text-gray-600 font-inter">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
