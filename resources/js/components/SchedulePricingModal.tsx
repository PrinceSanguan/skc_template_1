"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import { X } from "lucide-react"
import gsap from "gsap"

interface SchedulePricingModalProps {
  isOpen: boolean
  onClose: () => void
}

const SchedulePricingModal = ({ isOpen, onClose }: SchedulePricingModalProps) => {
  const modalRef = useRef(null)
  const formRef = useRef(null)
  const particlesRef = useRef<HTMLDivElement | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormSubmitted(false)
        onClose()
      }, 3000)
    }, 1500)
  }

  useEffect(() => {
    // Animation for opening the modal
    if (isOpen && modalRef.current) {
      gsap.fromTo(modalRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" })
    }

    // Title animation
    if (isOpen && formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.2 },
      )
    }

    // Create subtle fire particles
    if (isOpen && particlesRef.current) {
      const particles = particlesRef.current
      const colors = ["#ff9500", "#ff6a00", "#ff4d00", "#ff8800"]
      const particleInterval = setInterval(() => {
        const particle = document.createElement("div")
        const size = Math.random() * 4 + 1 // Smaller particles
        const color = colors[Math.floor(Math.random() * colors.length)]

        particle.style.position = "absolute"
        particle.style.width = `${size}px`
        particle.style.height = `${size}px`
        particle.style.borderRadius = "50%"
        particle.style.backgroundColor = color
        particle.style.opacity = (0.2 + Math.random() * 0.2).toString() // Lower opacity
        particle.style.left = `${Math.random() * 100}%`
        particle.style.bottom = "0"

        particles.appendChild(particle)

        // Gentle upward movement
        gsap.to(particle, {
          x: Math.random() * 30 - 15, // Less horizontal movement
          y: -(Math.random() * 100 + 50), // Less height
          opacity: 0,
          duration: 3 + Math.random() * 2,
          ease: "power1.out",
          onComplete: () => {
            if (particles.contains(particle)) {
              particles.removeChild(particle)
            }
          },
        })
      }, 300) // Less frequent particles

      return () => {
        if (particleInterval) {
          clearInterval(particleInterval)
        }
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Enhanced background with gradient and pattern */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md">
        {/* Background pattern overlay */}
        <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-10 mix-blend-overlay"></div>

        {/* Decorative gradient blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-red-600/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-red-600/20 rounded-full filter blur-3xl"></div>
          <div className="absolute top-3/4 left-1/3 w-60 h-60 bg-red-600/10 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-red-600/10 rounded-full filter blur-3xl"></div>
        </div>
      </div>

      <div ref={modalRef} className="relative w-full max-w-2xl max-h-[90vh] overflow-auto z-10">
        {/* Subtle particles container */}
        <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-5"></div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-3 sm:right-4 top-3 sm:top-4 text-white hover:text-red-200 transition-colors z-20 bg-red-900/30 p-1.5 rounded-full backdrop-blur-sm"
          aria-label="Close modal"
        >
          <X size={20} className="sm:w-6 sm:h-6" />
        </button>

        <div className="title-container mb-4 sm:mb-6 text-center px-4">
          <div className="inline-flex items-center space-x-2 mb-3 sm:mb-4">
            <div className="h-px w-6 sm:w-8 bg-red-500"></div>
            <span className="text-red-400 uppercase tracking-wider text-xs sm:text-sm font-semibold">Join Us</span>
            <div className="h-px w-6 sm:w-8 bg-red-500"></div>
          </div>
          <h2 className="mb-2 sm:mb-4 text-2xl sm:text-3xl font-bold text-white">Schedule & Pricing</h2>
          <p className="mx-auto max-w-2xl text-gray-300 mt-2 text-sm sm:text-base">
            Get started with Seigler's Karate Center today. Fill out the form to request information.
          </p>
          <div className="mx-auto mt-3 sm:mt-4 h-1 w-16 sm:w-20 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
        </div>

        <div ref={formRef} className="flex flex-col rounded-2xl shadow-xl overflow-hidden border border-red-900/20">
          <div className="relative w-full p-4 sm:p-6 md:p-8 text-white rounded-2xl">
            {/* Enhanced background with multiple layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-black/80 backdrop-blur-md rounded-2xl"></div>
            <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay rounded-2xl"></div>
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-br from-red-900/30 to-red-800/10 opacity-50 rounded-2xl"></div>

            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-red-900/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-red-900/10 rounded-full filter blur-3xl"></div>

            <div className="relative z-10">
              {formSubmitted ? (
                // Success message after form submission
                <div className="text-center py-6 sm:py-8">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-500 rounded-full mx-auto flex items-center justify-center mb-4">
                    <svg
                      className="w-7 h-7 sm:w-8 sm:h-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-gray-300 text-sm sm:text-base mb-4">
                    Your request has been received. We'll send our schedule and pricing details to you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-semibold">ONLINE EXCLUSIVE OFFER</h3>

                  <div className="mb-4 sm:mb-6 rounded-lg bg-red-900/20 border border-red-900/30 p-3 sm:p-4 shadow-lg">
                    <div className="mb-1 sm:mb-2 text-center text-lg sm:text-xl font-semibold">
                      Limited Time & Availability
                    </div>
                    <p className="text-center text-gray-300 text-sm sm:text-base">
                      Get more information about our classes and schedule!
                    </p>
                  </div>

                  <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <input
                        type="text"
                        placeholder="Full Name"
                        required
                        className="w-full rounded-md border border-red-900/30 bg-black/40 p-2.5 sm:p-3 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email address for info"
                        required
                        className="w-full rounded-md border border-red-900/30 bg-black/40 p-2.5 sm:p-3 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Mobile # for info via text"
                        required
                        className="w-full rounded-md border border-red-900/30 bg-black/40 p-2.5 sm:p-3 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500 text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <select
                        className="w-full rounded-md border border-red-900/30 bg-black/40 p-2.5 sm:p-3 text-white focus:border-red-500 focus:ring-red-500 text-sm sm:text-base"
                        required
                      >
                        <option value="">Select a Program</option>
                        <option value="lil-dragons">Lil Dragons (4-5)</option>
                        <option value="kids">Kids Karate (6-10)</option>
                        <option value="teens">Teens Karate (11-13)</option>
                        <option value="adults">Adult Kempo Karate (14+)</option>
                        <option value="kickboxing">Kickboxing (14+)</option>
                        <option value="jiu-jitsu">Jiu Jitsu (14+)</option>
                      </select>
                    </div>
                    <div>
                      <select
                        className="w-full rounded-md border border-red-900/30 bg-black/40 p-2.5 sm:p-3 text-white focus:border-red-500 focus:ring-red-500 text-sm sm:text-base"
                        required
                      >
                        <option value="">Select Location</option>
                        <option value="evans">Evans, GA</option>
                        <option value="grovetown">Grovetown, GA</option>
                        <option value="augusta">Augusta, GA (Coming Soon)</option>
                      </select>
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-gradient-to-r from-red-700 to-red-600 py-3 sm:py-4 font-medium text-white hover:from-red-600 hover:to-red-500 transition-all duration-300 shadow-lg shadow-red-900/20 ${isSubmitting ? "opacity-75 cursor-not-allowed" : "transform hover:scale-105"} relative group overflow-hidden text-sm sm:text-base`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin mr-2 h-4 w-4 sm:h-5 sm:w-5"
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
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <svg
                            className="mr-2 h-4 w-4 sm:h-5 sm:w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                          Get Information
                        </span>
                      )}
                    </Button>
                  </form>
                  <p className="mt-3 sm:mt-4 text-xs text-gray-400">
                    By opting into the web form above you are providing consent for Seigler's Karate Center to send you
                    periodic text messages. Standard rates may apply. You can reply HELP at anytime to learn more. You
                    may opt-out anytime by replying STOP.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SchedulePricingModal
