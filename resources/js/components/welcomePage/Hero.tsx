"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronRight, Star, Calendar, Award } from "lucide-react"
import { Link } from "@inertiajs/react"
import SchedulePricingModal from "@/components/SchedulePricingModal" // Import the modal component

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Animated component wrapper
import { ReactNode } from "react";

const AnimatedElement = ({ children, delay = 0, className = "", animation = "fadeIn" }: { children: ReactNode; delay?: number; className?: string; animation?: string }) => {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let animationProps = {}

    switch (animation) {
      case "fadeIn":
        animationProps = { opacity: 0, y: 0 }
        break
      case "slideUp":
        animationProps = { opacity: 0, y: 30 }
        break
      case "slideRight":
        animationProps = { opacity: 0, x: -20 }
        break
    }

    gsap.fromTo(el, animationProps, {
      opacity: 1,
      y: 0,
      x: 0,
      duration: 0.9,
      delay,
      ease: "power3.out",
    })
  }, [delay, animation])

  return (
    <div ref={ref} className={`opacity-0 ${className}`}>
      {children}
    </div>
  )
}

const Hero = () => {
  const heroRef = useRef(null)
  const imageRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    // Fade in the hero section
    gsap.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5, ease: "power2.inOut" })

    // Fade in the image with delay
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1.2, delay: 0.5, ease: "power3.out" },
    )
  }, [])

  return (
    <div ref={heroRef} className="py-32 text-white">
      <div className="container relative mx-auto px-4 z-10">
        <div className="flex flex-col items-center justify-between lg:flex-row gap-12">
          <div className="mb-10 max-w-2xl space-y-8 md:mb-0">
            <AnimatedElement delay={0.2} animation="slideUp">
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-px w-8 bg-red-500"></div>
                <span className="text-red-400 uppercase tracking-wider text-sm font-semibold">
                  Martial Arts School
                </span>
              </div>
              <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-red-200">
                Martial Arts{" "}
                <span className="block mt-1">
                  &amp; <span className="text-red-500">Fitness</span> for All
                </span>
              </h1>
            </AnimatedElement>

            <AnimatedElement delay={0.4} animation="slideUp">
              <p className="text-xl text-gray-300 leading-relaxed">
                At Seigler's Karate Center, we're passionate about using martial arts to help you live your best life.
                Our programs cater to all ages and skill levels.
              </p>
            </AnimatedElement>

            <AnimatedElement delay={0.6} animation="slideUp" className="flex flex-wrap gap-5">
              {/* Link to Programs page */}
              <Link
                href="/programs" // Link to the programs page
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="bg-gradient-to-r from-red-700 to-red-500 hover:from-red-600 hover:to-red-400 px-8 py-6 text-white font-medium shadow-[0_8px_30px_rgb(225,29,72,0.3)] rounded-xl text-lg transition-all duration-300 relative overflow-hidden group inline-flex items-center"
              >
                <span className="relative z-10 flex items-center">
                  Select a Program
                  <ChevronRight
                    className={`ml-2 transition-transform duration-300 ${isHovering ? "translate-x-1" : ""}`}
                    size={20}
                  />
                </span>
              </Link>
              
              {/* Button to open the registration modal */}
              <button
                onClick={() => setModalOpen(true)}
                className="border-red-500/30 px-8 py-6 text-lg text-white bg-black/30 backdrop-blur-sm hover:bg-red-600/20 hover:border-red-500/50 transition-all duration-300 rounded-xl inline-flex items-center border-2"
              >
                <Calendar className="mr-2" size={18} />
                View Schedule & Pricing
              </button>
            </AnimatedElement>

            <AnimatedElement delay={0.8} animation="slideUp">
              <div className="mt-8 flex flex-col sm:flex-row gap-6">
                <div className="flex items-center">
                  <div className="flex mr-2">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-300">
                    <span className="font-bold text-white">4.9</span> Rating (200+ reviews)
                  </span>
                </div>
                <div className="flex items-center">
                  <Award className="mr-2 text-red-500" size={20} />
                  <span className="text-gray-300">Award-winning instruction</span>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement delay={1} animation="slideUp">
              <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">15+</span>
                  <span className="text-gray-400">Years Experience</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">500+</span>
                  <span className="text-gray-400">Students Trained</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">All</span>
                  <span className="text-gray-400">Ages Welcome</span>
                </div>
              </div>
            </AnimatedElement>
          </div>

          <div ref={imageRef} className="w-full max-w-xl">
            <div className="relative">
              {/* YouTube Video - Without overlapping elements */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/SYzrc5-bImM?autoplay=1&mute=1"
                  title="Come behind the scenes with us on Black Belt Testing Day!"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 rounded-full bg-gradient-to-r from-red-600/20 to-red-500/5 blur-xl"></div>
              <div className="absolute -z-10 -bottom-8 -right-8 w-40 h-40 rounded-full bg-gradient-to-r from-red-600/10 to-yellow-500/5 blur-xl"></div>
              
              {/* ENHANCED & RESPONSIVE Video info section */}
              <div className="mt-3">
                <div className="bg-black/90 backdrop-blur-md rounded-xl border border-red-900/30 overflow-hidden">
                  <div className="flex flex-col xs:flex-row items-start xs:items-center">
                    {/* Watch Now Button - Full width on mobile, normal on larger screens */}
                    <div className="bg-red-600 text-white p-3 xs:py-2.5 xs:px-4 font-bold tracking-wide flex items-center justify-center xs:justify-start w-full xs:w-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                      </svg>
                      WATCH NOW
                    </div>
                    
                    {/* Video info - Centered on mobile, aligned left on larger screens */}
                    <div className="p-3 xs:py-2.5 xs:px-4 text-center xs:text-left w-full xs:w-auto">
                      <h3 className="font-bold text-white text-base xs:text-sm">Black Belt Testing</h3>
                      <p className="text-xs text-gray-400">Behind the scenes at our dojo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Import and use the SchedulePricingModal component */}
      <SchedulePricingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}

export default Hero