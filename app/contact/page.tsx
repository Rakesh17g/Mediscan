"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Car, Bus, CheckCircle2 } from "lucide-react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-teal-600" />,
      title: "Address",
      details: ["123 Healthcare Avenue", "Medical District", "City, State 12345"],
    },
    {
      icon: <Phone className="h-6 w-6 text-teal-600" />,
      title: "Phone Numbers",
      details: ["Main: (555) 123-4567", "Emergency: 911", "Appointments: (555) 123-4568"],
    },
    {
      icon: <Mail className="h-6 w-6 text-teal-600" />,
      title: "Email",
      details: ["info@medicare-hospital.com", "appointments@medicare-hospital.com", "emergency@medicare-hospital.com"],
    },
    {
      icon: <Clock className="h-6 w-6 text-teal-600" />,
      title: "Hours",
      details: ["Emergency: 24/7", "Outpatient: Mon-Fri 7AM-7PM", "Weekends: 8AM-5PM"],
    },
  ]

  const departments = [
    { name: "General Inquiry", value: "general" },
    { name: "Appointments", value: "appointments" },
    { name: "Emergency", value: "emergency" },
    { name: "Billing", value: "billing" },
    { name: "Patient Records", value: "records" },
    { name: "Insurance", value: "insurance" },
  ]

  return (
    <div className="container py-12 md:py-24">
      {/* Header */}
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
        <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">Contact Us</div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h1>
        <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          We're here to help. Contact us for appointments, questions, or any healthcare needs.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="rounded-full bg-teal-100 p-3 flex-shrink-0">{info.icon}</div>
                  <div>
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Emergency Information */}
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-700 flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Emergency Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-600 mb-2">
                <strong>For life-threatening emergencies, call 911 immediately.</strong>
              </p>
              <p className="text-gray-600 text-sm">
                Our emergency department is open 24/7 and equipped to handle all types of medical emergencies.
              </p>
            </CardContent>
          </Card>

          {/* Directions */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Getting Here</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Car className="h-5 w-5 text-teal-600 mt-1" />
                <div>
                  <p className="font-medium">By Car</p>
                  <p className="text-gray-600 text-sm">
                    Free parking available in our main parking garage. Valet parking available at the main entrance.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Bus className="h-5 w-5 text-teal-600 mt-1" />
                <div>
                  <p className="font-medium">Public Transportation</p>
                  <p className="text-gray-600 text-sm">
                    Bus routes 15, 22, and 45 stop directly in front of the hospital. Metro station is 2 blocks away.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                  >
                    <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto" />
                  </motion.div>
                  <h3 className="text-xl font-bold">Message Sent!</h3>
                  <p className="text-gray-500">
                    Thank you for contacting us. We'll respond to your message within 24 hours.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-4">
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Select>
                      <SelectTrigger id="department">
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept) => (
                          <SelectItem key={dept.value} value={dept.value}>
                            {dept.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Enter message subject" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Enter your message" className="min-h-[120px]" required />
                  </div>
                  <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Find Us</h2>
        <Card>
          <CardContent className="p-0">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <p className="text-gray-600">Interactive map would be displayed here</p>
                <p className="text-sm text-gray-500 mt-2">123 Healthcare Avenue, Medical District</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
