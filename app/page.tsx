import { Calendar, Phone, Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import DoctorsSection from "@/components/doctors-section"
import AppointmentForm from "@/components/appointment-form"
import StatsSection from "@/components/stats-section"
import TestimonialsSection from "@/components/testimonials-section"
import NewsSection from "@/components/news-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <DoctorsSection />
      <NewsSection />
      <section className="py-20 bg-gradient-to-r from-teal-50 to-cyan-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-teal-100 px-4 py-2 text-sm text-teal-700 mb-4">
                <Calendar className="mr-2 h-4 w-4" />
                Book an Appointment
              </div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Schedule Your Visit Today
              </h2>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                Our online appointment system makes it easy to schedule a visit with our healthcare professionals.
                Choose your preferred doctor, date, and time with just a few clicks.
              </p>

              {/* Feature highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
                <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg backdrop-blur-sm">
                  <div className="rounded-full bg-teal-100 p-2">
                    <Clock className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Same Day Appointments</p>
                    <p className="text-sm text-gray-600">Available for urgent care</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg backdrop-blur-sm">
                  <div className="rounded-full bg-teal-100 p-2">
                    <Users className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Expert Specialists</p>
                    <p className="text-sm text-gray-600">200+ certified doctors</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now: (555) 123-4567
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-teal-200 text-teal-700 hover:bg-teal-50 hover:border-teal-300 transition-all duration-300 bg-transparent"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  View Available Times
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border bg-white/80 backdrop-blur-sm p-8 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
