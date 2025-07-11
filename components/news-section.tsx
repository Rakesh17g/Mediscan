"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, User } from "lucide-react"

const newsArticles = [
  {
    title: "Revolutionary AI-Powered Diagnostic Imaging Now Available",
    excerpt:
      "MediScan introduces cutting-edge AI technology to enhance diagnostic accuracy and reduce scan times by 40%.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-tima-miroshnichenko-5452221.jpg-zncJJBiJfsZKK7Ki8N1yVCuENTS0Fm.jpeg",
    category: "Technology",
    date: "January 15, 2025",
    author: "Dr. Sarah Johnson",
    readTime: "3 min read",
  },
  {
    title: "New Pediatric Wing Opens with Child-Friendly Design",
    excerpt:
      "Our expanded pediatric department features interactive play areas and specialized equipment designed for young patients.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Facilities",
    date: "January 10, 2025",
    author: "Emily Chen",
    readTime: "2 min read",
  },
  {
    title: "Heart Health Awareness Month: Free Screenings Available",
    excerpt: "Join us throughout February for complimentary cardiovascular screenings and educational workshops.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Health Tips",
    date: "January 8, 2025",
    author: "Dr. Michael Williams",
    readTime: "4 min read",
  },
]

export default function NewsSection() {
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
    <section className="w-full py-16 md:py-24 bg-white" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-700">
            <Calendar className="mr-2 h-4 w-4" />
            Latest News & Updates
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Stay Informed
          </h2>
          <p className="max-w-[700px] text-gray-600 text-lg md:text-xl leading-relaxed">
            Keep up with the latest developments, health tips, and innovations at MediScan Hospital.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {newsArticles.map((article, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="secondary"
                      className="bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 border-0"
                    >
                      {article.category}
                    </Badge>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-teal-600 transition-colors duration-300">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="w-full group-hover:bg-teal-50 group-hover:text-teal-700 transition-colors duration-300"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Button
            variant="outline"
            className="border-2 border-teal-200 text-teal-700 hover:bg-teal-50 hover:border-teal-300 px-8 py-3 bg-transparent"
          >
            View All News & Updates
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
