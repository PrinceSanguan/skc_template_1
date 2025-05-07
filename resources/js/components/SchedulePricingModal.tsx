"use client"

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
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      )
    }
    
    // Title animation
    if (isOpen && formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.2 }
      )
    }
    
    // Create subtle fire particles
    if (isOpen && particlesRef.current) {
      const particles = particlesRef.current;
      const colors = ["#ff9500", "#ff6a00", "#ff4d00", "#ff8800"];
      const particleInterval = setInterval(() => {
        const particle = document.createElement('div');
        const size = Math.random() * 4 + 1; // Smaller particles
        const color = colors[Math.floor(Math.random() * colors.length)];

        particle.style.position = 'absolute';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.borderRadius = '50%';
        particle.style.backgroundColor = color;
        particle.style.opacity = (0.2 + Math.random() * 0.2).toString(); // Lower opacity
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.bottom = '0';

        particles.appendChild(particle);

        // Gentle upward movement
        gsap.to(particle, {
          x: Math.random() * 30 - 15, // Less horizontal movement
          y: -(Math.random() * 100 + 50), // Less height
          opacity: 0,
          duration: 3 + Math.random() * 2,
          ease: "power1.out",
          onComplete: () => {
            if (particles.contains(particle)) {
              particles.removeChild(particle);
            }
          }
        });
      }, 300); // Less frequent particles

      return () => {
        if (particleInterval) {
          clearInterval(particleInterval);
        }
      };
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        ref={modalRef} 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-auto"
      >
        {/* Subtle particles container */}
        <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-5"></div>
        
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-white hover:text-red-200 transition-colors z-20"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        
        <div className="title-container mb-6 text-center">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="h-px w-8 bg-red-500"></div>
            <span className="text-red-400 uppercase tracking-wider text-sm font-semibold">Join Us</span>
            <div className="h-px w-8 bg-red-500"></div>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-white">Schedule & Pricing</h2>
          <p className="mx-auto max-w-2xl text-gray-300 mt-2">
            Get started with Seigler's Karate Center today. Fill out the form to request information.
          </p>
          <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
        </div>
        
        <div 
          ref={formRef} 
          className="flex flex-col rounded-2xl shadow-xl overflow-hidden border border-red-900/20"
        >
          <div className="relative w-full bg-black/80 backdrop-blur-sm p-8 text-white rounded-2xl">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-br from-red-900/30 to-red-800/10 opacity-50 rounded-2xl"></div>
            
            <div className="relative z-10">
              {formSubmitted ? (
                // Success message after form submission
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500 rounded-full mx-auto flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-gray-300 mb-4">
                    Your request has been received. We'll send our schedule and pricing details to you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="mb-6 text-2xl font-semibold">ONLINE EXCLUSIVE OFFER</h3>
                  
                  <div className="mb-6 rounded-lg bg-red-900/20 border border-red-900/30 p-4 shadow-lg">
                    <div className="mb-2 text-center text-xl font-semibold">Limited Time & Availability</div>
                    <p className="text-center text-gray-300">Get more information about our classes and schedule!</p>
                  </div>
                  
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <input
                        type="text"
                        placeholder="Full Name"
                        required
                        className="w-full rounded-md border border-red-900/30 bg-black/40 p-3 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email address for info"
                        required
                        className="w-full rounded-md border border-red-900/30 bg-black/40 p-3 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Mobile # for info via text"
                        required
                        className="w-full rounded-md border border-red-900/30 bg-black/40 p-3 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <select 
                        className="w-full rounded-md border border-red-900/30 bg-black/40 p-3 text-white focus:border-red-500 focus:ring-red-500"
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
                        className="w-full rounded-md border border-red-900/30 bg-black/40 p-3 text-white focus:border-red-500 focus:ring-red-500"
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
                      className={`w-full bg-gradient-to-r from-red-700 to-red-600 py-4 font-medium text-white hover:from-red-600 hover:to-red-500 transition-all duration-300 shadow-lg shadow-red-900/20 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'transform hover:scale-105'} relative group overflow-hidden`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          Get Information
                        </span>
                      )}
                    </Button>
                  </form>
                  <p className="mt-4 text-xs text-gray-400">
                    By opting into the web form above you are providing consent for Seigler's Karate Center to send you periodic text messages. Standard rates may apply. You can reply HELP at anytime to learn more. You may opt-out anytime by replying STOP.
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