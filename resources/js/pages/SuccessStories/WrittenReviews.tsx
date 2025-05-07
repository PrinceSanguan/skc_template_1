"use client"

import type React from "react"

import Template from "../Programs/Template"
import AnimatedElement from "@/components/ui/animated-element"
import { Link } from "@inertiajs/react"
import { useState, useEffect } from "react"
import SchedulePricingModal from "@/components/SchedulePricingModal"

export default function WrittenReviews() {
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const defaultProfilePicture = "/images/team/Default-Profile-Picture-PNG-Image-Transparent-Background.png"
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    // Set images as loaded after component mounts to prevent hydration issues
    setImagesLoaded(true)
  }, [])

  // Add countdown timer state and logic
  // Add this after the existing useState and useEffect hooks
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set promotion end date (7 days from now)
    const promotionEndDate = new Date()
    promotionEndDate.setDate(promotionEndDate.getDate() + 7)

    const timer = setInterval(() => {
      const now = new Date()
      const difference = promotionEndDate.getTime() - now.getTime()

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

  // Handle image error by replacing with default profile picture
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = defaultProfilePicture
  }

  // Updated reviews data with Google reviews content
  const reviews = [
    {
      id: 1,
      name: "Victoria Dickason",
      via: "via Google",
      achievement: "SKC Center Family",
      quote:
        "My son recently joined the SKC center family! He has enjoyed everything since day one. The administrative staff is so polite and accommodating! His instructors shows attention to every student and finds creative ways to teach the students the fundamentals. I look forward to my son continuing his training and lessons at SKC.",
      imagePlaceholder: "/Images/team/Victoria-Dickason.png",
    },
    {
      id: 2,
      name: "Omega Hammerling",
      via: "via Google",
      achievement: "Incredible Growth",
      quote:
        "The whole team at SKC has been incredible to work with for the past year, and we've seen such incredible growth in our daughter's confidence, discipline, focus, and respect since she started coming to SKC. She genuinely looks forward to her classes, and loves to tell everyone she knows just how great it is! She's on a quest for her black belt, and we're excited to have the team at SKC supporting and teaching her along the way.",
      imagePlaceholder: "/Images/team/Omega-Hammerling.png",
    },
    {
      id: 3,
      name: "Jodeva",
      via: "via Google",
      achievement: "Children's Interest",
      quote:
        "This place is awesome! The initial focus class really sparked my children's interest. Now that my children are actively participating in SKC they enjoy it very much! They look forward to practice days and SKC events. Also, the senseis and coaches at SKC are amazing! They have a special way to interact and teach kids of all ages! I highly recommend this place!",
      imagePlaceholder: "/Images/team/Jodeva.png",
    },
    {
      id: 4,
      name: "Deborah Hayes",
      via: "via Google",
      achievement: "Proper Learning",
      quote:
        "We absolutely love this place everyone is amazing and friendly and makes sure all the kids learn to do karate correctly and teach the kids respect",
      imagePlaceholder: "/Images/team/Deborah-Hayes.png",
    },
    {
      id: 5,
      name: "Stephanie Skipper",
      via: "via Google",
      achievement: "Patient Teaching",
      quote: "I love how patient they are with the children. Maddison loves her sensei and enjoys her classes.",
      imagePlaceholder: "/Images/team/Stephanie-Skipper.png",
    },
  ]

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  return (
    <Template title="Written Reviews">
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Particle animation with more particles and varied sizes */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full">
            {Array.from({ length: 40 }).map((_, index) => (
              <div
                key={index}
                className="particle absolute bg-red-500/20 rounded-full"
                style={{
                  width: `${Math.random() * 8 + 2}px`,
                  height: `${Math.random() * 8 + 2}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 15 + 10}s linear infinite`,
                  opacity: Math.random() * 0.5 + 0.3,
                }}
              />
            ))}
          </div>
        </div>

        {/* More decorative blurs with varied sizes and positions */}
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-red-600/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-red-600/20 rounded-full filter blur-3xl" />
        <div className="absolute top-3/4 left-1/3 w-40 h-40 bg-red-600/10 rounded-full filter blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-red-600/10 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section - Enhanced */}
        <AnimatedElement type="fadeIn" delay={0.2}>
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-red-600"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-center px-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 tracking-tight">
              Written Reviews
            </h1>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-red-600"></div>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-red-700 to-red-500 mx-auto mb-6 rounded-full shadow-sm"></div>
        </AnimatedElement>

        <AnimatedElement type="fadeIn" delay={0.3}>
          <p className="text-xl md:text-2xl text-center text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            Read real stories from our students about how training at Seigler's Karate Center has positively impacted
            their lives.
          </p>
        </AnimatedElement>

        {/* Japanese-inspired decorative element */}
        <div className="flex justify-center mb-16">
          <div className="w-16 h-16 relative">
            <div className="absolute inset-0 border-2 border-red-600 rounded-full"></div>
            <div className="absolute inset-2 border border-red-600/50 rounded-full"></div>
            <div className="absolute inset-4 border border-red-600/30 rounded-full"></div>
            <div className="absolute inset-6 border border-red-600/20 rounded-full"></div>
          </div>
        </div>
        <AnimatedElement type="fadeIn" delay={0.35}>
          <div className="rounded-xl border border-red-900/30 bg-black/60 shadow-xl backdrop-blur-sm p-4 sm:p-6 md:p-8 mb-8 sm:mb-12 md:mb-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5 mix-blend-overlay"></div>
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-900/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center space-x-2 mb-4 justify-center">
                <div className="h-px w-8 bg-red-500"></div>
                <span className="text-red-400 uppercase tracking-wider text-sm font-semibold">Limited Time Offer</span>
                <div className="h-px w-8 bg-red-500"></div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4">Special Promotion Ending Soon!</h2>
              <p className="text-base sm:text-xl text-gray-300 mb-4 sm:mb-6 max-w-3xl mx-auto px-2">
                Sign up now and receive 50% off your first month plus a free uniform! Don't miss this opportunity.
              </p>

              {/* Countdown Timer */}
              <div className="flex justify-center gap-2 sm:gap-4 mb-4 sm:mb-8">
                <div className="bg-red-900/50 backdrop-blur-sm p-2 sm:p-4 rounded-lg w-16 sm:w-20 border border-red-500/30">
                  <div className="text-2xl sm:text-3xl font-bold text-white">{timeLeft.days}</div>
                  <div className="text-xs text-gray-300 uppercase">Days</div>
                </div>
                <div className="bg-red-900/50 backdrop-blur-sm p-2 sm:p-4 rounded-lg w-16 sm:w-20 border border-red-500/30">
                  <div className="text-2xl sm:text-3xl font-bold text-white">{timeLeft.hours}</div>
                  <div className="text-xs text-gray-300 uppercase">Hrs</div>
                </div>
                <div className="bg-red-900/50 backdrop-blur-sm p-2 sm:p-4 rounded-lg w-16 sm:w-20 border border-red-500/30">
                  <div className="text-2xl sm:text-3xl font-bold text-white">{timeLeft.minutes}</div>
                  <div className="text-xs text-gray-300 uppercase">Mins</div>
                </div>
                <div className="bg-red-900/50 backdrop-blur-sm p-2 sm:p-4 rounded-lg w-16 sm:w-20 border border-red-500/30">
                  <div className="text-2xl sm:text-3xl font-bold text-white">{timeLeft.seconds}</div>
                  <div className="text-xs text-gray-300 uppercase">Secs</div>
                </div>
              </div>

              <Link
                href="/contact"
                onClick={openModal}
                className="bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center text-base sm:text-lg font-medium"
              >
                View Our Schedule & Pricing Options
              </Link>
            </div>
          </div>
        </AnimatedElement>

        {/* Written Reviews Grid - Enhanced */}
        <div className="mb-24">
          <div className="grid grid-cols-1 gap-10">
            {reviews.map((review, index) => (
              <AnimatedElement
                key={review.id}
                type={index % 2 === 0 ? "slideInLeft" : "slideInRight"}
                delay={0.4 + index * 0.1}
              >
                <div className="rounded-2xl overflow-hidden mb-6 border border-red-900/50 bg-black/70 backdrop-blur-md shadow-[0_0_25px_rgba(0,0,0,0.7)] transition-all duration-500 hover:shadow-[0_0_35px_rgba(139,0,0,0.3)] transform hover:-translate-y-1">
                  <div className="p-6">
                    <div className="flex items-start mb-4">
                      <div className="mr-4 flex-shrink-0">
                        {imagesLoaded && (
                          <img
                            src={
                              review.imagePlaceholder ||
                              `/focused-fighter.png?key=${review.id || "/placeholder.svg"}&height=50&width=50&query=profile ${review.name}`
                            }
                            alt={review.name}
                            className="w-16 h-16 rounded-full object-cover border-2 border-red-500/30"
                            onError={handleImageError}
                          />
                        )}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-1 tracking-tight">{review.name}</h3>
                        <div className="flex items-center mb-2">
                          <p className="text-gray-400 text-sm">{review.via}</p>
                        </div>
                        <div className="flex mb-3">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current mr-1" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="bg-black/30 p-5 rounded-lg border border-red-900/20 mb-4">
                      <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                        <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-red-600">
                          <path d="M50,0 C77.6,0 100,22.4 100,50 C100,77.6 77.6,100 50,100 C22.4,100 0,77.6 0,50 C0,22.4 22.4,0 50,0 Z M50,20 C33.4,20 20,33.4 20,50 C20,66.6 33.4,80 50,80 C66.6,80 80,66.6 80,50 C80,33.4 66.6,20 50,20 Z" />
                        </svg>
                      </div>
                      <p className="text-gray-300 italic text-lg leading-relaxed relative z-10">"{review.quote}"</p>
                    </div>

                    <div className="bg-gradient-to-r from-red-700 to-red-900 text-white text-sm font-semibold px-4 py-2 rounded-lg inline-block shadow-lg border border-red-600/30">
                      {review.achievement}
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>

        {/* Japanese-inspired decorative element */}
        <div className="flex justify-center mb-16">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
        </div>

        {/* CTA - Enhanced */}
        <AnimatedElement type="fadeIn" delay={0.9}>
          {/* Make the bottom CTA section more responsive */}
          {/* Replace the bottom CTA div with this updated version */}
          <div className="rounded-2xl overflow-hidden relative mb-10">
            {/* Enhanced background with gradient only */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-950 z-0"></div>

            {/* Enhanced decorative elements */}
            <div className="absolute top-0 left-0 w-60 h-60 bg-red-600/30 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-red-600/30 rounded-full filter blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-600/10 rounded-full filter blur-3xl"></div>

            <div className="relative z-10 p-6 sm:p-8 md:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                Ready to Write Your Own Review?
              </h2>
              <p className="text-white text-base sm:text-xl mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
                Join the hundreds of students who have transformed their lives through martial arts training at
                Seigler's Karate Center. Your journey begins with a single step.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                <Link
                  href="/contact"
                  onClick={openModal}
                  className="bg-white text-red-700 hover:bg-gray-100 font-medium py-3 sm:py-4 px-6 sm:px-10 rounded-lg shadow-lg transition-all duration-300 text-base sm:text-lg border border-white/30 hover:scale-105 transform"
                >
                  View Our Schedule & Pricing Options
                </Link>
                <Link
                  href="/success-stories"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 sm:py-4 px-6 sm:px-10 rounded-lg shadow-lg transition-all duration-300 text-base sm:text-lg hover:scale-105 transform"
                >
                  Back to All Success Stories
                </Link>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
      <SchedulePricingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Template>
  )
}
