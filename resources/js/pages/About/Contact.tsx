"use client"

import type React from "react"

import Template from "./Template"
import AnimatedElement from "@/components/ui/animated-element"
import { Link } from "@inertiajs/react"
import { useState, useRef, useEffect } from "react"
import { MapPin, Phone, ChevronRight, Calendar } from 'lucide-react'
import gsap from "gsap"
import SchedulePricingModal from "@/components/SchedulePricingModal" // Import the modal component

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    location: "",
    program: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const particlesRef = useRef<HTMLDivElement>(null)

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Function to open the modal
  const openModal = (e: React.MouseEvent) => {
    e.preventDefault() // Prevent default link behavior
    setIsModalOpen(true)
  }

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false)
  }

  // Set end date for promotion (example: 7 days from now)
  useEffect(() => {
    const endDate = new Date()
    endDate.setDate(endDate.getDate() + 7) // 7 days from now

    const timer = setInterval(() => {
      const now = new Date()
      const difference = endDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(timer)
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        location: "",
        program: "",
      })
    }, 1500)
  }

  // GSAP animations
  useEffect(() => {
    // Create particles
    if (particlesRef.current) {
      const particles = particlesRef.current
      const colors = ["#ff4b4b", "#ffffff", "#ff8080", "#ffcc00", "#ff6b6b"]
      const particleInterval = setInterval(() => {
        const particle = document.createElement("div")
        const size = Math.random() * 6 + 2
        const color = colors[Math.floor(Math.random() * colors.length)]

        particle.style.position = "absolute"
        particle.style.width = `${size}px`
        particle.style.height = `${size}px`
        particle.style.borderRadius = "50%"
        particle.style.backgroundColor = color
        particle.style.opacity = "0.4"
        particle.style.left = `${Math.random() * 100}%`
        particle.style.top = `${Math.random() * 100}%`

        particles.appendChild(particle)

        gsap.to(particle, {
          x: Math.random() * 50 - 25,
          y: Math.random() * 40 - 20,
          opacity: 0,
          duration: 4 + Math.random() * 3,
          ease: "power1.out",
          onComplete: () => {
            if (particles.contains(particle)) {
              particles.removeChild(particle)
            }
          },
        })
      }, 300)

      return () => {
        if (particleInterval) {
          clearInterval(particleInterval)
        }
      }
    }
  }, [])

  return (
    <Template title="Contact Us">
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-[40vh] flex items-center">
        {/* Particle effect container */}
        <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-10"></div>

        {/* Background decorative elements */}
        <div className="absolute top-1/4 -right-10 w-40 h-40 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-red-600/15 rounded-full blur-2xl"></div>
        <div className="absolute right-0 top-1/2 w-24 h-24 bg-red-500/10 rounded-full blur-xl"></div>

        <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>

        {/* Martial arts silhouettes */}
        <div
          className="absolute bottom-0 right-0 w-64 h-64 bg-contain bg-no-repeat bg-right-bottom opacity-10"
          style={{ backgroundImage: "url('/karate-silhouette-1.png')" }}
        ></div>
        <div
          className="absolute top-0 left-0 w-48 h-48 bg-contain bg-no-repeat bg-left-top opacity-10"
          style={{ backgroundImage: "url('/karate-silhouette-2.png')" }}
        ></div>

        <div className="container relative mx-auto px-4 py-24 z-20">
          <AnimatedElement type="fadeIn" delay={0.2}>
            <div className="inline-flex items-center space-x-2 mb-4 justify-center w-full">
              <div className="h-px w-8 bg-red-500"></div>
              <span className="text-red-400 uppercase tracking-wider text-sm font-semibold">Get In Touch</span>
              <div className="h-px w-8 bg-red-500"></div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-red-200">
              Contact <span className="text-red-600">Us</span>
            </h1>
            <div className="mx-auto h-1 w-20 bg-gradient-to-r from-red-600 to-red-400 rounded-full mt-2"></div>
          </AnimatedElement>

          <AnimatedElement type="fadeIn" delay={0.3}>
            <div className="text-xl text-center text-gray-200 mt-8 mb-8 max-w-3xl mx-auto">
              <p className="leading-relaxed">
                Have a question about our programs or ready to begin your martial arts journey? We're here to help! Get
                in touch with us today.
              </p>
            </div>
          </AnimatedElement>

          {/* Top CTA with updated text */}
          <AnimatedElement type="fadeIn" delay={0.35}>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <a
                href="#"
                onClick={openModal}
                className="bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-medium py-3 px-8 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                View Our Schedule & Pricing Options <ChevronRight className="ml-2 h-4 w-4" />
              </a>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-red-600 text-white hover:bg-red-600/10 font-medium py-3 px-8 rounded-md transition-colors flex items-center justify-center"
              >
                Contact Us <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </AnimatedElement>

          {/* Countdown Timer */}
          <AnimatedElement type="fadeIn" delay={0.4}>
            <div className="bg-gradient-to-r from-red-900/80 to-red-700/80 rounded-lg p-4 max-w-2xl mx-auto mb-8 backdrop-blur-sm border border-red-500/30 shadow-lg">
              <h3 className="text-white font-bold mb-2">Limited Time Offer - New Student Special</h3>
              <p className="text-gray-200 mb-4">Sign up now and receive 50% off your first month of training!</p>
              <div className="flex justify-center space-x-4">
                <div className="flex flex-col items-center">
                  <div className="bg-black/50 text-white text-2xl font-bold rounded-md w-14 h-14 flex items-center justify-center">
                    {timeLeft.days}
                  </div>
                  <span className="text-xs mt-1 text-gray-300">Days</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-black/50 text-white text-2xl font-bold rounded-md w-14 h-14 flex items-center justify-center">
                    {timeLeft.hours}
                  </div>
                  <span className="text-xs mt-1 text-gray-300">Hours</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-black/50 text-white text-2xl font-bold rounded-md w-14 h-14 flex items-center justify-center">
                    {timeLeft.minutes}
                  </div>
                  <span className="text-xs mt-1 text-gray-300">Minutes</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-black/50 text-white text-2xl font-bold rounded-md w-14 h-14 flex items-center justify-center">
                    {timeLeft.seconds}
                  </div>
                  <span className="text-xs mt-1 text-gray-300">Seconds</span>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Form Section */}
          <AnimatedElement type="slideInLeft" delay={0.4} className="lg:col-span-2">
            <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-white mb-6 relative inline-block">
                  Send Us a Message
                  <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">Thank You!</h3>
                    <p className="text-gray-300 mb-6">
                      Your message has been sent successfully. We'll get back to you within 24-48 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white py-2 px-6 rounded-md transition-colors shadow-[0_4px_10px_rgba(220,38,38,0.3)] hover:shadow-[0_6px_15px_rgba(220,38,38,0.4)]"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-black/40 border border-red-900/30 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-black/40 border border-red-900/30 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-black/40 border border-red-900/30 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        />
                      </div>

                      <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-1">
                          Preferred Location
                        </label>
                        <select
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          className="w-full bg-black/40 border border-red-900/30 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        >
                          <option value="">Select a location</option>
                          <option value="evans">Evans, GA</option>
                          <option value="grovetown">Grovetown, GA</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="program" className="block text-sm font-medium text-gray-300 mb-1">
                        Program of Interest
                      </label>
                      <select
                        id="program"
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        className="w-full bg-black/40 border border-red-900/30 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      >
                        <option value="">Select a program</option>
                        <option value="kids">Kids Karate (5-12)</option>
                        <option value="teens">Teen Martial Arts (13-17)</option>
                        <option value="adults">Adult Karate</option>
                        <option value="kickboxing">Kickboxing</option>
                        <option value="private">Private Lessons</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-black/40 border border-red-900/30 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="Tell us about your martial arts goals or any questions you have..."
                      ></textarea>
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white py-3 px-6 rounded-md transition-colors flex items-center justify-center shadow-[0_4px_10px_rgba(220,38,38,0.3)] hover:shadow-[0_6px_15px_rgba(220,38,38,0.4)] ${
                          isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending Message...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </AnimatedElement>

          {/* Location Info - Business Hours Section Removed */}
          <AnimatedElement type="slideInRight" delay={0.5}>
            <div className="space-y-8">
              <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/5 rounded-full blur-xl"></div>

                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-white mb-4 relative inline-block">
                    Our Locations
                    <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
                  </h3>

                  <div className="space-y-6">
                    <div className="bg-black/30 rounded-lg p-4 border border-red-900/20 hover:border-red-600/30 transition-all duration-300">
                      <h4 className="font-medium text-red-500 mb-2 flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        Evans, GA
                      </h4>
                      <p className="text-gray-300 mb-1">4307 Washington Rd</p>
                      <p className="text-gray-300 mb-1">Evans, GA 30809</p>
                      <p className="text-gray-300 mb-3 flex items-center">
                        <Phone className="h-3 w-3 mr-1 text-red-500" />
                        (706) 524-3444
                      </p>
                      <Link
                        href="/locations/evans"
                        className="text-sm text-red-400 hover:text-red-300 flex items-center group"
                      >
                        View Details
                        <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>

                    <div className="bg-black/30 rounded-lg p-4 border border-red-900/20 hover:border-red-600/30 transition-all duration-300">
                      <h4 className="font-medium text-red-500 mb-2 flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        Grovetown, GA
                      </h4>
                      <p className="text-gray-300 mb-1">5159 Columbia Rd</p>
                      <p className="text-gray-300 mb-1">Grovetown, GA 30813</p>
                      <p className="text-gray-300 mb-3 flex items-center">
                        <Phone className="h-3 w-3 mr-1 text-red-500" />
                        (706) 524-5678
                      </p>
                      <Link
                        href="/locations/grovetown"
                        className="text-sm text-red-400 hover:text-red-300 flex items-center group"
                      >
                        View Details
                        <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours Section Removed */}

              <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/5 rounded-full blur-xl"></div>

                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-white mb-4 relative inline-block">
                    Connect With Us
                    <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
                  </h3>

                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-black/40 border border-red-900/30 flex items-center justify-center text-gray-300 hover:text-red-400 hover:border-red-600/50 transition-all duration-300 transform hover:scale-110"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-black/40 border border-red-900/30 flex items-center justify-center text-gray-300 hover:text-red-400 hover:border-red-600/50 transition-all duration-300 transform hover:scale-110"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-black/40 border border-red-900/30 flex items-center justify-center text-gray-300 hover:text-red-400 hover:border-red-600/50 transition-all duration-300 transform hover:scale-110"
                    >
                      <span className="sr-only">YouTube</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>

        {/* Map Section */}
        <AnimatedElement type="fadeIn" delay={0.6}>
          <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm p-6 relative overflow-hidden mb-16">
            <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-6 relative inline-block">
                Find Us
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
              </h2>

              <div className="h-96 rounded-lg overflow-hidden border border-red-900/30">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.1752836863326!2d-82.1292!3d33.5328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f9d6c1a3d5d1d3%3A0x5b8b9c5e5c5c5c5c!2sEvans%2C%20GA%2030809!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* FAQ Section */}
        <AnimatedElement type="fadeIn" delay={0.7}>
          <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm p-6 relative overflow-hidden mb-16">
            <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white mb-6 relative inline-block">
                Frequently Asked Questions
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
              </h2>

              <div className="space-y-4">
                <div className="bg-black/30 rounded-lg p-4 border border-red-900/20">
                  <h3 className="font-medium text-white mb-2">What age can my child start martial arts?</h3>
                  <p className="text-gray-300">
                    We offer programs for children as young as 4 years old. Our Little Dragons program is specifically
                    designed for children ages 4-6, focusing on basic motor skills, discipline, and fun.
                  </p>
                </div>

                <div className="bg-black/30 rounded-lg p-4 border border-red-900/20">
                  <h3 className="font-medium text-white mb-2">Do I need to be in shape to start martial arts?</h3>
                  <p className="text-gray-300">
                    Not at all! Our programs are designed for all fitness levels. You'll get in shape as you train, and
                    our instructors will help you progress at your own pace.
                  </p>
                </div>

                <div className="bg-black/30 rounded-lg p-4 border border-red-900/20">
                  <h3 className="font-medium text-white mb-2">How often should I train?</h3>
                  <p className="text-gray-300">
                    For beginners, we recommend 2-3 classes per week. This provides enough training to see progress while
                    allowing your body to recover between sessions.
                  </p>
                </div>

                <div className="bg-black/30 rounded-lg p-4 border border-red-900/20">
                  <h3 className="font-medium text-white mb-2">Do you offer trial classes?</h3>
                  <p className="text-gray-300">
                    Yes! We offer a free trial class for all new students. This allows you to experience our teaching
                    style and facility before making a commitment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* CTA Section */}
        <AnimatedElement type="fadeIn" delay={0.8}>
          <div className="relative rounded-xl overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-red-700"></div>
            <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-10 mix-blend-overlay"></div>

            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-600/20 rounded-full blur-3xl"></div>

            {/* Content */}
            <div className="relative z-10 p-10 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Begin Your Martial Arts Journey?</h2>
              <p className="text-lg text-gray-100 mb-8">
                Join our community and discover the transformative power of martial arts training.
              </p>

              <div className="flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-4">
                <a
                  href="#"
                  onClick={openModal}
                  className="bg-white text-red-700 font-bold py-3 px-8 rounded-md text-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center mx-0 sm:mr-3 mb-4 sm:mb-0"
                >
                  View Our Schedule & Pricing Options
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>

                <Link
                  href="/contact"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-md text-lg transition-all duration-300 flex items-center justify-center mx-0"
                >
                  Contact Us
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>

      {/* Modal Component */}
      <SchedulePricingModal isOpen={isModalOpen} onClose={closeModal} />
    </Template>
  )
}