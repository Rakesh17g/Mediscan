"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, HeartPulse, Shield, Stethoscope } from "lucide-react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-teal-400"></div>
        <div className="absolute top-32 right-20 w-16 h-16 rounded-full bg-blue-400"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-cyan-400"></div>
        <div className="absolute bottom-40 right-10 w-12 h-12 rounded-full bg-indigo-400"></div>
      </div>

      {/* Floating Medical Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Stethoscope className="absolute top-20 left-1/4 w-8 h-8 text-teal-300 opacity-20 animate-float" />
        <HeartPulse className="absolute top-40 right-1/3 w-6 h-6 text-blue-300 opacity-20 animate-pulse" />
        <Shield className="absolute bottom-32 left-1/3 w-7 h-7 text-cyan-300 opacity-20 animate-float" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <motion.div
            className="text-center lg:text-left space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg border border-white/20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <HeartPulse className="w-4 h-4 text-teal-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">Advanced Healthcare Solutions</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="text-gray-900 font-poppins">Innovative Care for</span>
              <br />
              <span className="bg-gradient-to-r from-teal-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent font-poppins">
                Modern Healthcare
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-inter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Providing accessible, expert-led care powered by cutting-edge technology. Your health journey starts with
              compassionate professionals who put your wellbeing first.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Button
                size="lg"
                className="group relative px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0"
              >
                <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Book Appointment
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 bg-white/80 backdrop-blur-sm hover:bg-white border-2 border-gray-200 hover:border-teal-300 text-gray-700 hover:text-teal-700 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-6 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium">24/7 Emergency Care</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="font-medium">200+ Expert Doctors</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                <span className="font-medium">50,000+ Patients Served</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image/Card Section */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Main Card with Neumorphism */}
            <div className="relative">
              {/* Neumorphic Card */}
              <div className="relative w-80 h-96 sm:w-96 sm:h-[28rem] bg-white/90 backdrop-blur-sm rounded-3xl shadow-[20px_20px_60px_#d1d5db,-20px_-20px_60px_#ffffff] border border-white/20 overflow-hidden">
                {/* Image */}
                <div className="h-3/5 overflow-hidden rounded-t-3xl">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-thirdman-5327580.jpg-Opp6EehMT5Fyrsg941FGZiakoWPINk.jpeg"
                    alt="Professional healthcare team at MediScan Hospital"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 h-2/5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins">Expert Medical Team</h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-inter">
                      Our certified professionals are dedicated to providing personalized care with the latest medical
                      innovations.
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mt-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-4 h-4 bg-amber-400 rounded-full"></div>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-700">4.9/5 Rating</span>
                  </div>
                </div>
              </div>

              {/* Floating Stats Cards */}
              <motion.div
                className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-[10px_10px_30px_#d1d5db,-10px_-10px_30px_#ffffff] border border-white/20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                    <HeartPulse className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 font-poppins">98%</p>
                    <p className="text-xs text-gray-600 font-inter">Success Rate</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-[10px_10px_30px_#d1d5db,-10px_-10px_30px_#ffffff] border border-white/20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 font-poppins">24/7</p>
                    <p className="text-xs text-gray-600 font-inter">Available</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20 text-white">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  )
}
