"use client"

import type React from "react"

import Template from "../About/Template"
import AnimatedElement from "@/components/ui/animated-element"
import { Link } from "@inertiajs/react"
import { ChevronRight } from "lucide-react"
import { useRef, useEffect, useState } from "react"
import gsap from "gsap"
import SchedulePricingModal from "@/components/SchedulePricingModal"

export default function AdultKempo() {
  const particlesRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

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

  // Program benefits
  const benefits = [
    {
      title: "Self-Defense Skills",
      description: "Learn practical and effective self-defense techniques applicable to real-world situations.",
      icon: (
        <svg
          className="w-10 h-10 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Physical Fitness",
      description: "Comprehensive full-body workout that builds strength, flexibility, endurance, and coordination.",
      icon: (
        <svg
          className="w-10 h-10 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Stress Relief",
      description: "Release tension and stress through disciplined physical activity and mindfulness training.",
      icon: (
        <svg
          className="w-10 h-10 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      title: "Mental Discipline",
      description: "Develop focus, concentration, and mental resilience that transfers to all areas of life.",
      icon: (
        <svg
          className="w-10 h-10 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
  ]

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
    <Template title="Adult Kempo Karate (14+)">
      {/* Hero Section - Modified to remove overlay and improve image visibility */}
      <div ref={heroRef} className="relative overflow-hidden min-h-[70vh] flex items-center">
        {/* Particle effect container */}
        <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-10"></div>

        {/* Background decorative elements */}
        <div className="absolute top-1/4 -right-10 w-40 h-40 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-red-600/15 rounded-full blur-2xl"></div>
        <div className="absolute right-0 top-1/2 w-24 h-24 bg-red-500/10 rounded-full blur-xl"></div>

        <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>

        {/* Hero image - Overlay removed to see image more clearly */}
        <div className="absolute inset-0 z-0">
          <img
            src="/Images/team/ADULTKEMPO.jpg"
            alt="Adult Kempo Karate Class"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent"></div>
        </div>

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
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="h-px w-8 bg-red-500"></div>
              <span className="text-red-400 uppercase tracking-wider text-sm font-semibold">Ages 14+</span>
              <div className="h-px w-8 bg-red-500"></div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-red-200">
              Adult <span className="text-red-600">Kempo</span> Karate
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-red-600 to-red-400 rounded-full mt-2 mb-6"></div>
          </AnimatedElement>

          <AnimatedElement type="fadeIn" delay={0.3}>
            <p className="text-xl text-gray-200 max-w-xl leading-relaxed">
              A comprehensive martial arts program designed for teens and adults ages 14 and up, focusing on practical
              self-defense and personal development.
            </p>
          </AnimatedElement>
        </div>
      </div>

      {/* Top CTA with Countdown */}
      <AnimatedElement type="fadeIn" delay={0.35}>
        <div className="mb-16 rounded-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-950 z-0"></div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-60 h-60 bg-red-600/30 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-red-600/30 rounded-full filter blur-3xl"></div>

          <div className="relative z-10 p-4 sm:p-6 md:p-8 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">Limited Time Offer!</h3>
            <p className="text-white text-base sm:text-lg mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
              Sign up now and receive 50% off your first month of training!
            </p>

            {/* Countdown Timer */}
            <div className="flex justify-center space-x-2 sm:space-x-4 mb-4 sm:mb-6">
              <div className="flex flex-col items-center">
                <div className="bg-black/50 text-white text-lg sm:text-2xl font-bold rounded-md w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center border border-red-500/30">
                  {timeLeft.days}
                </div>
                <span className="text-xs mt-1 text-gray-300">Days</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-black/50 text-white text-lg sm:text-2xl font-bold rounded-md w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center border border-red-500/30">
                  {timeLeft.hours}
                </div>
                <span className="text-xs mt-1 text-gray-300">Hrs</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-black/50 text-white text-lg sm:text-2xl font-bold rounded-md w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center border border-red-500/30">
                  {timeLeft.minutes}
                </div>
                <span className="text-xs mt-1 text-gray-300">Mins</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-black/50 text-white text-lg sm:text-2xl font-bold rounded-md w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center border border-red-500/30">
                  {timeLeft.seconds}
                </div>
                <span className="text-xs mt-1 text-gray-300">Secs</span>
              </div>
            </div>

            <a
              href="#"
              onClick={openModal}
              className="bg-white text-red-700 hover:bg-gray-100 font-medium py-2 sm:py-3 px-4 sm:px-8 rounded-lg shadow-lg transition-all duration-300 text-sm sm:text-lg border border-white/30 hover:scale-105 transform inline-block"
            >
              View Our Schedule & Pricing Options
            </a>
          </div>
        </div>
      </AnimatedElement>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Program Description - Single column after removing schedule */}
        <div className="mb-20">
          <AnimatedElement type="fadeIn" delay={0.4}>
            <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-6 relative inline-block">
                  Program Overview
                  <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
                </h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Our Adult Kempo Karate program at Seigler's Karate Center offers a traditional yet practical approach
                  to martial arts training. This program combines striking techniques, blocks, kicks, and ground defense
                  in a comprehensive system suitable for beginners and experienced practitioners alike.
                </p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Whether you're looking to learn self-defense, improve fitness, reduce stress, or challenge yourself
                  with a new discipline, our experienced instructors will guide you through a structured curriculum that
                  develops your skills progressively.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Our classes emphasize both the physical and philosophical aspects of martial arts, helping students
                  develop not just fighting techniques, but also mental resilience, focus, and discipline that extends
                  beyond the dojo into everyday life.
                </p>
              </div>
            </div>
          </AnimatedElement>
        </div>

        {/* Program Benefits */}
        <AnimatedElement type="fadeIn" delay={0.5}>
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 mb-4 justify-center">
                <div className="h-px w-8 bg-red-500"></div>
                <span className="text-red-400 uppercase tracking-wider text-sm font-semibold">Skills Development</span>
                <div className="h-px w-8 bg-red-500"></div>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 relative inline-block">
                Program Benefits
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm p-6 hover:border-red-600/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_6px_15px_rgba(220,38,38,0.2)] relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-red-600/5 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-red-600/5 rounded-full blur-xl"></div>

                  <div className="relative z-10">
                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>

        {/* What to Expect */}
        <AnimatedElement type="fadeIn" delay={0.6}>
          <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm p-8 mb-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>

            {/* Martial arts silhouette */}
            <div
              className="absolute bottom-0 right-0 w-64 h-64 bg-contain bg-no-repeat bg-right-bottom opacity-10"
              style={{ backgroundImage: "url('/karate-silhouette-1.png')" }}
            ></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-8 relative inline-block">
                What to Expect in Class
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-700 to-red-600 flex items-center justify-center mr-3 shadow-lg">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                    </div>
                    Class Structure
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Dynamic warm-up and conditioning</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Technical training (strikes, blocks, kicks)</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Forms (kata) practice</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Self-defense applications</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Partner drills and controlled sparring</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-700 to-red-600 flex items-center justify-center mr-3 shadow-lg">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                        />
                      </svg>
                    </div>
                    What to Bring
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Comfortable workout clothes for first class</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Water bottle</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Towel (optional)</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Open mind and willingness to learn</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* CTA */}
        <AnimatedElement type="fadeIn" delay={0.7}>
          <div className="relative rounded-xl overflow-hidden mb-8">
            {/* Background with overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-red-700"></div>
            <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-10 mix-blend-overlay"></div>

            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-600/20 rounded-full blur-3xl"></div>

            {/* Martial arts silhouettes */}
            <div
              className="absolute bottom-0 right-0 w-64 h-64 bg-contain bg-no-repeat bg-right-bottom opacity-10"
              style={{ backgroundImage: "url('/karate-silhouette-1.png')" }}
            ></div>

            {/* Content */}
            <div className="relative z-10 p-6 sm:p-8 md:p-10 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                Ready to Begin Your Martial Arts Journey?
              </h2>
              <p className="text-base sm:text-lg text-gray-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
                Whether you're completely new to martial arts or looking to continue your training, our adult program
                offers something for everyone. Start with a free introductory class.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-4 gap-y-4 sm:gap-y-0">
                <a
                  href="#"
                  onClick={openModal}
                  className="bg-white text-red-700 hover:bg-gray-100 font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-md text-sm sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center mx-auto sm:mx-0"
                >
                  View Our Schedule & Pricing Options
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
                <Link
                  href="/programs"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-md text-sm sm:text-lg transition-all duration-300 flex items-center justify-center mx-auto sm:mx-0"
                >
                  View All Programs
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>

      {/* Schedule & Pricing Modal */}
      <SchedulePricingModal isOpen={isModalOpen} onClose={closeModal} />
    </Template>
  )
}
