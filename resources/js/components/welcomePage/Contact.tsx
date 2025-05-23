import { useEffect, useRef } from "react"
import { Link } from "@inertiajs/react" // Using Inertia Link for navigation
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const infoRef = useRef(null)
  const particlesRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    const info = infoRef.current
    const particles = particlesRef.current

    // Title animation
    if (section) {
      gsap.fromTo(
        section.querySelector(".title-container"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        },
      )
    }

    // Info animation
    if (info) {
      gsap.fromTo(
        info,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: info,
            start: "top 80%",
          },
        },
      )
    }

    // Create subtle fire particles
    if (particles) {
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
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="relative py-20 text-white overflow-hidden">
      {/* Subtle particles container */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-5"></div>

      <div className="container relative mx-auto px-4 z-10">
        <div className="title-container mb-16 text-center">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="h-px w-8 bg-red-500"></div>
            <span className="text-red-400 uppercase tracking-wider text-sm font-semibold">Get In Touch</span>
            <div className="h-px w-8 bg-red-500"></div>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Contact Us</h2>
          <p className="mx-auto max-w-2xl text-gray-300 mt-4">
            Have questions about our martial arts programs? We're here to help. Reach out to us and we'll get back to
            you as soon as possible.
          </p>
          <div className="mx-auto mt-6 h-1 w-20 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
        </div>

        <div ref={infoRef} className="mx-auto max-w-4xl">
          {/* Main contact card */}
          <div className="bg-black/80 backdrop-blur-sm rounded-2xl shadow-xl border border-red-900/20 overflow-hidden">
            {/* Top section with decorative element */}
            <div className="relative h-24 bg-gradient-to-r from-red-900/40 to-red-700/40 flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('/placeholder.svg?key=fv3jo')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
              <h3 className="text-2xl font-bold text-white relative z-10">Seigler's Karate Center</h3>
            </div>

            {/* Main content */}
            <div className="p-8">
              {/* Location cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Evans Location */}
                <div className="bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-red-900/10 text-center hover:border-red-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/10">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-600/20">
                    <svg
                      className="h-6 w-6 text-red-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Evans Location</h4>
                  <p className="text-gray-300">4150 Washington Road, Suite 4</p>
                  <p className="text-gray-300 mb-4">Evans, GA 30809</p>
                  <div className="flex flex-col space-y-2">
                    <a
                      href="https://maps.google.com/?q=4150+Washington+Road+Suite+4+Evans+GA+30809"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center text-red-400 hover:text-red-300 transition-colors"
                    >
                      <span>View on Map</span>
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                    {/* Added Link to Contact page */}
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center text-white bg-red-600 hover:bg-red-500 transition-colors rounded-md px-3 py-1"
                    >
                      <span>Get Directions & More Info</span>
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Grovetown Location */}
                <div className="bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-red-900/10 text-center hover:border-red-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/10">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-600/20">
                    <svg
                      className="h-6 w-6 text-red-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Grovetown Location</h4>
                  <p className="text-gray-300">271 Meridian Drive</p>
                  <p className="text-gray-300 mb-4">Grovetown, GA 30813</p>
                  <div className="flex flex-col space-y-2">
                    <a
                      href="https://maps.google.com/?q=271+Meridian+Drive+Grovetown+GA+30813"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center text-red-400 hover:text-red-300 transition-colors"
                    >
                      <span>View on Map</span>
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                    {/* Added Link to Contact page */}
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center text-white bg-red-600 hover:bg-red-500 transition-colors rounded-md px-3 py-1"
                    >
                      <span>Get Directions & More Info</span>
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Phone */}
                <div className="bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-red-900/10 text-center hover:border-red-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/10">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-600/20">
                    <svg
                      className="h-6 w-6 text-red-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Phone</h4>
                  <a href="tel:7068555685" className="text-gray-300 hover:text-white transition-colors text-xl">
                    (706) 855-5685
                  </a>
                </div>

                {/* Email */}
                <div className="bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-red-900/10 text-center hover:border-red-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/10">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-600/20">
                    <svg
                      className="h-6 w-6 text-red-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Email</h4>
                  <a href="mailto:info@goskc.com" className="text-gray-300 hover:text-white transition-colors text-xl">
                    info@goskc.com
                  </a>
                </div>
              </div>

              {/* Social Media and Get More Info button */}
              <div className="text-center">
                <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
                <div className="flex justify-center space-x-6 mb-8">
                  <a
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600/20 transition-all duration-300 hover:bg-red-600/40 hover:scale-110"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600/20 transition-all duration-300 hover:bg-red-600/40 hover:scale-110"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.029 10.029 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600/20 transition-all duration-300 hover:bg-red-600/40 hover:scale-110"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600/20 transition-all duration-300 hover:bg-red-600/40 hover:scale-110"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.592 3.501H4.406c-.501 0-.902.401-.902.902v15.246c0 .5.401.901.902.901h15.186c.501 0 .908-.401.908-.901V4.403c0-.501-.407-.902-.908-.902zM8.592 17.201H6.13v-7.703h2.463v7.703zm-1.23-8.742a1.425 1.425 0 110-2.85 1.425 1.425 0 010 2.85zm10.399 8.742h-2.463v-3.967c0-.917-.018-2.1-1.28-2.1-1.279 0-1.475.999-1.475 2.033v4.034h-2.462V9.498h2.36v1.08h.035c.33-.623 1.132-1.28 2.326-1.28 2.493 0 2.953 1.637 2.953 3.76v4.143z" />
                    </svg>
                  </a>
                </div>
                
                {/* Added main contact page button */}
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-red-700 to-red-600 text-white font-semibold hover:from-red-600 hover:to-red-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>Visit Our Full Contact Page</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact