"use client"

import type React from "react"

import Template from "@/pages/Programs/Template"
import AnimatedElement from "@/components/ui/animated-element"
import { Link } from "@inertiajs/react"
import { useState, useEffect, useRef } from "react"

export default function SuccessStories() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null)
  const videoRef = useRef<HTMLIFrameElement>(null)

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Default profile picture path
  const defaultProfilePicture = "/images/team/Default-Profile-Picture-PNG-Image-Transparent-Background.png"

  useEffect(() => {
    // Set images as loaded after component mounts to prevent hydration issues
    setImagesLoaded(true)
  }, [])

  // Countdown timer effect
  useEffect(() => {
    // Set the end date to 7 days from now
    const endDate = new Date()
    endDate.setDate(endDate.getDate() + 7)

    const calculateTimeLeft = () => {
      const difference = endDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    // Initial calculation
    calculateTimeLeft()

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000)

    // Clear interval on component unmount
    return () => clearInterval(timer)
  }, [])

  const handlePlayVideo = (videoId: string) => {
    setActiveVideoId(videoId)
  }

  // Handle image error by using the default profile picture
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = defaultProfilePicture
  }

  // Featured success stories (updated with YouTube videos)
  const featuredStories = [
    {
      id: 1,
      title: "Jiujitsu Black Belt Brenden Visits",
      description: "Watch the inspiring story of Brenden, a Jiujitsu Black Belt who visited Seigler's Karate Center to share his expertise and journey with our students.",
      videoId: "4U0jaooca4k",
      thumbnailUrl: `https://img.youtube.com/vi/4U0jaooca4k/maxresdefault.jpg`,
    },
    {
      id: 2,
      title: "Parent Testimonial - Character Development",
      description: "Hear from a parent about how SKC has helped develop their child's character, discipline, and confidence both in and out of the dojo.",
      videoId: "zmM6JWcqLJ8",
      thumbnailUrl: `https://img.youtube.com/vi/zmM6JWcqLJ8/maxresdefault.jpg`,
    },
    {
      id: 3,
      title: "Self-Defense Skills Transforming Lives",
      description: "Discover how learning practical self-defense skills at Seigler's Karate Center has transformed our students' confidence and safety awareness.",
      videoId: "lvRNBuRcDOU",
      thumbnailUrl: `https://img.youtube.com/vi/lvRNBuRcDOU/maxresdefault.jpg`,
    },
  ]

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "David Johnson",
      role: "Adult Kempo Student, 2 Years",
      quote:
        "I joined Seigler's at 42 years old, thinking I was too old to start martial arts. Two years later, I'm in the best shape of my life and have skills I never thought possible.",
      image: "/martial-arts-student-david.png",
    },
    {
      id: 2,
      name: "Maria Gonzalez",
      role: "Parent of Lil Dragons Student",
      quote:
        "My son has transformed from a shy 4-year-old to a confident 5-year-old with amazing focus. His preschool teacher even asked what changed. The answer? Seigler's Karate Center!",
      image: "/martial-arts-student-maria.jpg",
    },
    {
      id: 3,
      name: "Robert Smith",
      role: "Kickboxing Student, 1 Year",
      quote:
        "I've lost 35 pounds since joining the kickboxing program. The instructors push you to your limits but are incredibly supportive. The community here is what keeps me coming back.",
      image: "/martial-arts-student-robert.jpg",
    },
    {
      id: 4,
      name: "Amanda Taylor",
      role: "Jiu Jitsu Student, 3 Years",
      quote:
        "As a woman, learning self-defense has been empowering. The skills I've gained at Seigler's have given me confidence that extends to every area of my life.",
      image: "/martial-arts-student-amanda.jpg",
    },
  ]

  // Stats
  const stats = [
    { label: "Active Students", value: "500+", icon: "👥" },
    { label: "Black Belts Awarded", value: "120+", icon: "🥋" },
    { label: "Years of Operation", value: "15+", icon: "🏆" },
    { label: "Competitions Won", value: "200+", icon: "🏅" },
  ]

  return (
    <Template title="Success Stories">
      {/* Enhanced decorative elements - removed background images */}
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
        {/* Success Stories Navigation - Enhanced */}
        <AnimatedElement type="fadeIn" delay={0.1}>
          <div className="mb-16">
            <div className="relative max-w-xs mx-auto md:mx-0">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex justify-between items-center bg-gradient-to-r from-red-700 to-red-900 hover:from-red-800 hover:to-red-950 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 border border-red-600/30"
              >
                <span className="text-lg tracking-wider">SUCCESS STORIES</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? "transform rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute z-20 w-full mt-2 bg-black/90 backdrop-blur-md rounded-lg shadow-lg overflow-hidden border border-red-900/50 transform transition-all duration-300 origin-top">
                  <Link
                    href="/success-stories/written-reviews"
                    className="block px-6 py-3 text-white hover:bg-red-900/50 transition-colors border-b border-red-900/30 font-medium"
                  >
                    Written Reviews
                  </Link>
                  <Link
                    href="/success-stories/video-testimonials"
                    className="block px-6 py-3 text-white hover:bg-red-900/50 transition-colors font-medium"
                  >
                    Video Testimonials
                  </Link>
                </div>
              )}
            </div>
          </div>
        </AnimatedElement>

        {/* Hero Section - Enhanced */}
        <AnimatedElement type="fadeIn" delay={0.2}>
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-red-600"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-center px-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 tracking-tight">
              Success Stories & Testimonials
            </h1>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-red-600"></div>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-red-700 to-red-500 mx-auto mb-6 rounded-full shadow-sm"></div>
        </AnimatedElement>

        <AnimatedElement type="fadeIn" delay={0.3}>
          <p className="text-xl md:text-2xl text-center text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            Discover how martial arts training at Seigler's Karate Center has transformed the lives of our students,
            building confidence, discipline, and skills that last a lifetime.
          </p>
        </AnimatedElement>

        {/* Promotional Countdown Section */}
        <AnimatedElement type="fadeIn" delay={0.35}>
          <div className="rounded-2xl overflow-hidden mb-16 border border-red-900/50 bg-gradient-to-r from-red-900/80 to-red-950/80 backdrop-blur-md shadow-[0_0_25px_rgba(0,0,0,0.7)]">
            <div className="p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Limited Time Special Offer!</h2>
              <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
                Sign up now and receive 50% off your first month of training. Don't miss this opportunity!
              </p>

              <div className="flex justify-center space-x-4 mb-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-lg bg-black/50 backdrop-blur-sm flex items-center justify-center text-2xl font-bold text-white border border-red-500/30">
                    {timeLeft.days}
                  </div>
                  <span className="text-sm text-gray-300 mt-2">Days</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-lg bg-black/50 backdrop-blur-sm flex items-center justify-center text-2xl font-bold text-white border border-red-500/30">
                    {timeLeft.hours}
                  </div>
                  <span className="text-sm text-gray-300 mt-2">Hours</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-lg bg-black/50 backdrop-blur-sm flex items-center justify-center text-2xl font-bold text-white border border-red-500/30">
                    {timeLeft.minutes}
                  </div>
                  <span className="text-sm text-gray-300 mt-2">Minutes</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-lg bg-black/50 backdrop-blur-sm flex items-center justify-center text-2xl font-bold text-white border border-red-500/30">
                    {timeLeft.seconds}
                  </div>
                  <span className="text-sm text-gray-300 mt-2">Seconds</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-block bg-white text-red-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg shadow-lg transition-all duration-300 text-lg border border-white/30 hover:scale-105 transform"
              >
                View Our Schedule & Pricing Options
              </Link>
            </div>
          </div>
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

        {/* Featured Success Stories - YouTube Videos */}
        <div className="mb-24">
          <AnimatedElement type="fadeIn" delay={0.4}>
            <div className="flex items-center justify-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 tracking-tight">
                Featured Success Stories
              </h2>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-red-700 to-red-500 mx-auto mb-16 rounded-full shadow-sm"></div>
          </AnimatedElement>

          {featuredStories.map((story, index) => (
            <AnimatedElement
              key={story.id}
              type={index % 2 === 0 ? "slideInLeft" : "slideInRight"}
              delay={0.5 + index * 0.1}
            >
              <div className="rounded-2xl overflow-hidden mb-16 border border-red-900/50 bg-black/70 backdrop-blur-md shadow-[0_0_25px_rgba(0,0,0,0.7)] transition-all duration-500 hover:shadow-[0_0_35px_rgba(139,0,0,0.3)] transform hover:-translate-y-1">
                <div className="md:flex">
                  <div className="md:w-1/2 relative bg-gradient-to-br from-red-900/40 to-black/60" style={{ minHeight: "350px" }}>
                    {activeVideoId === story.videoId ? (
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${story.videoId}?autoplay=1`}
                        title={story.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0"
                      ></iframe>
                    ) : (
                      <>
                        {imagesLoaded && (
                          <img
                            src={story.thumbnailUrl}
                            alt={story.title}
                            className="w-full h-full object-cover absolute inset-0"
                            onError={handleImageError}
                          />
                        )}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div 
                            className="w-24 h-24 rounded-full bg-red-600/30 backdrop-blur-sm flex items-center justify-center border border-red-600/50 cursor-pointer hover:bg-red-600/40 transition-all duration-300 shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)] group"
                            onClick={() => handlePlayVideo(story.videoId)}
                          >
                            <svg
                              className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 relative">
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                      <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-red-600">
                        <path d="M50,0 C77.6,0 100,22.4 100,50 C100,77.6 77.6,100 50,100 C22.4,100 0,77.6 0,50 C0,22.4 22.4,0 50,0 Z M50,20 C33.4,20 20,33.4 20,50 C20,66.6 33.4,80 50,80 C66.6,80 80,66.6 80,50 C80,33.4 66.6,20 50,20 Z" />
                      </svg>
                    </div>

                    <h3 className="text-3xl font-bold mb-5 tracking-tight">{story.title}</h3>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-red-700 to-red-500 mb-6"></div>
                    
                    <p className="text-gray-300 mb-8 text-lg leading-relaxed">{story.description}</p>
                    
                    <button
                      onClick={() => handlePlayVideo(story.videoId)}
                      className="inline-flex items-center bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 text-white py-3 px-6 rounded-lg transition-all duration-300 shadow-lg border border-red-600/30 transform hover:-translate-y-1"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      Watch Video
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Japanese-inspired decorative element */}
        <div className="flex justify-center mb-16">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 border border-red-600/30 transform rotate-45"></div>
            <div className="absolute inset-4 border border-red-600/50 transform rotate-45"></div>
            <div className="absolute inset-8 border border-red-600/70 transform rotate-45"></div>
            <div className="absolute inset-0 border border-red-600/30 transform rotate-[135deg]"></div>
            <div className="absolute inset-4 border border-red-600/50 transform rotate-[135deg]"></div>
            <div className="absolute inset-8 border border-red-600/70 transform rotate-[135deg]"></div>
          </div>
        </div>

        {/* Impact Stats - Enhanced */}
        <AnimatedElement type="fadeIn" delay={0.7}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-2xl border border-red-900/50 bg-black/70 backdrop-blur-md p-8 text-center shadow-[0_0_25px_rgba(0,0,0,0.7)] transition-all duration-500 hover:shadow-[0_0_35px_rgba(139,0,0,0.3)] transform hover:-translate-y-1 hover:scale-105"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedElement>

        {/* Google Reviews - Enhanced */}
        <div className="mb-24">
          <AnimatedElement type="fadeIn" delay={0.8}>
            <div className="flex items-center justify-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 tracking-tight">
                Google Reviews
              </h2>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-red-700 to-red-500 mx-auto mb-16 rounded-full shadow-sm"></div>
          </AnimatedElement>

          <div className="grid grid-cols-1 gap-10">
            {[
               {
                id: 1,
                name: "Victoria Dickason",
                via: "via Google",
                achievement: "SKC Center Family",
                quote:
                  "My son recently joined the SKC center family! He has enjoyed everything since day one. The administrative staff is so polite and accommodating! His instructors shows attention to every student and finds creative ways to teach the students the fundamentals. I look forward to my son continuing his training and lessons at SKC.",
                imagePlaceholder: "/Images/team/Victoria-Dickason.png"
              },
              {
                id: 2,
                name: "Omega Hammerling",
                via: "via Google",
                achievement: "Incredible Growth",
                quote:
                  "The whole team at SKC has been incredible to work with for the past year, and we've seen such incredible growth in our daughter's confidence, discipline, focus, and respect since she started coming to SKC. She genuinely looks forward to her classes, and loves to tell everyone she knows just how great it is! She's on a quest for her black belt, and we're excited to have the team at SKC supporting and teaching her along the way.",
                imagePlaceholder: "/Images/team/Omega-Hammerling.png"
              },
              {
                id: 3,
                name: "Jodeva",
                via: "via Google",
                achievement: "Children's Interest",
                quote:
                  "This place is awesome! The initial focus class really sparked my children's interest. Now that my children are actively participating in SKC they enjoy it very much! They look forward to practice days and SKC events. Also, the senseis and coaches at SKC are amazing! They have a special way to interact and teach kids of all ages! I highly recommend this place!",
                imagePlaceholder: "/Images/team/Jodeva.png"
              },
              {
                id: 4,
                name: "Deborah Hayes",
                via: "via Google",
                achievement: "Proper Learning",
                quote:
                  "We absolutely love this place everyone is amazing and friendly and makes sure all the kids learn to do karate correctly and teach the kids respect",
                imagePlaceholder: "/Images/team/Deborah-Hayes.png"
              },
              {
                id: 5,
                name: "Stephanie Skipper",
                via: "via Google",
                achievement: "Patient Teaching",
                quote:
                  "I love how patient they are with the children. Maddison loves her sensei and enjoys her classes.",
                imagePlaceholder: "/Images/team/Stephanie-Skipper.png"
              },
            ].map((review, index) => (
              <AnimatedElement
                key={review.id}
                type={index % 2 === 0 ? "slideInLeft" : "slideInRight"}
                delay={0.9 + index * 0.1}
              >
                <div className="rounded-2xl overflow-hidden mb-6 border border-red-900/50 bg-black/70 backdrop-blur-md shadow-[0_0_25px_rgba(0,0,0,0.7)] transition-all duration-500 hover:shadow-[0_0_35px_rgba(139,0,0,0.3)] transform hover:-translate-y-1">
                  <div className="p-6">
                    <div className="flex items-start mb-4">
                      <div className="mr-4 flex-shrink-0">
                        {imagesLoaded && (
                          <img
                            src={review.imagePlaceholder || `/focused-fighter.png?key=${review.id}&height=50&width=50&query=profile ${review.name}`}
                            alt={review.name}
                            className="w-16 h-16 rounded-full object-cover border-2 border-red-500/30"
                            onError={handleImageError}
                          />
                        )}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-1 tracking-tight">{review.name}</h3>
                        <div className="flex items-center mb-2">
                          <p className="text-gray-400 text-sm">
                            {review.via}
                          </p>
                        </div>
                        <div className="flex mb-3">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i} 
                              className="w-5 h-5 text-yellow-400 fill-current mr-1" 
                              viewBox="0 0 24 24"
                            >
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

        {/* CTA - Enhanced - Removed background images */}
        <AnimatedElement type="fadeIn" delay={1.2}>
          <div className="rounded-2xl overflow-hidden relative mb-10">
            {/* Enhanced background with gradient only */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-950 z-0"></div>

            {/* Enhanced decorative elements */}
            <div className="absolute top-0 left-0 w-60 h-60 bg-red-600/30 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-red-600/30 rounded-full filter blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-600/10 rounded-full filter blur-3xl"></div>

            <div className="relative z-10 p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Write Your Success Story?</h2>
              <p className="text-white text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Join the hundreds of students who have transformed their lives through martial arts training at
                Seigler's Karate Center. Your journey begins with a single step.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link
                  href="/contact"
                  className="bg-white text-red-700 hover:bg-gray-100 font-medium py-4 px-10 rounded-lg shadow-lg transition-all duration-300 text-lg border border-white/30 hover:scale-105 transform"
                >
                  View Our Schedule & Pricing Options
                </Link>
                <Link
                  href="/programs"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-4 px-10 rounded-lg shadow-lg transition-all duration-300 text-lg hover:scale-105 transform"
                >
                  Explore Our Programs
                </Link>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </Template>
  )
}