import { Head } from '@inertiajs/react';
import { useEffect, useRef } from 'react';
import Navbar from '@/components/welcomePage/Navbar';
import Footer from '@/components/welcomePage/Footer';
import { initScrollAnimations } from '@/utils/animations';
import AnimatedElement from '@/components/ui/animated-element';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Franchise() {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const subheaderRef = useRef<HTMLParagraphElement>(null);
  const downloadButtonRef = useRef<HTMLAnchorElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const insightsSectionRef = useRef<HTMLDivElement>(null);
  const fireParticlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize animations when component mounts
    initScrollAnimations();

    // Header animation
    if (headerRef.current) {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power3.out",
      });
    }

    // Subheader animation
    if (subheaderRef.current) {
      gsap.from(subheaderRef.current, {
        opacity: 0,
        y: -30,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });
    }

    // Download button animation with pulsing effect
    if (downloadButtonRef.current) {
      gsap.from(downloadButtonRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.6,
        ease: "back.out(1.7)",
      });

      // Subtle pulse effect for the download button
      gsap.to(downloadButtonRef.current, {
        scale: 1.05,
        boxShadow: "0 0 20px rgba(220, 38, 38, 0.5)",
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      });
    }

    // Franchise insights section reveal
    if (insightsSectionRef.current) {
      ScrollTrigger.create({
        trigger: insightsSectionRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(insightsSectionRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          });
        },
        once: true,
      });
    }

    // Create fire particles animation for the header
    if (fireParticlesRef.current) {
      const particles = fireParticlesRef.current;
      const colors = ["#ff4b4b", "#ff8c42", "#ffdc5e", "#ff6b6b", "#ff3333"];
      const particleInterval = setInterval(() => {
        const particle = document.createElement("div");
        const size = Math.random() * 8 + 2;
        const color = colors[Math.floor(Math.random() * colors.length)];

        particle.style.position = "absolute";
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.borderRadius = "50%";
        particle.style.backgroundColor = color;
        particle.style.opacity = "0.7";
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.bottom = "0";

        particles.appendChild(particle);

        gsap.to(particle, {
          x: Math.random() * 100 - 50,
          y: -(Math.random() * 100 + 50),
          opacity: 0,
          duration: 2 + Math.random() * 2,
          ease: "power1.out",
          onComplete: () => {
            if (particles.contains(particle)) {
              particles.removeChild(particle);
            }
          },
        });
      }, 100);

      return () => {
        if (particleInterval) {
          clearInterval(particleInterval);
        }
      };
    }
  }, []);

  return (
    <>
      <Head title="Franchise Opportunity | Seigler's Karate Center">
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
      </Head>

      <div className="flex min-h-screen flex-col bg-black text-white">
        <Navbar />

        {/* Main content */}
        <main className="flex-grow pt-16">
          {/* Hero Section */}
          <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black z-10"></div>
              <img
                // src="/Images/franchise-hero-bg.jpg"
                alt="Martial arts training"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Fire particles container */}
            <div
              ref={fireParticlesRef}
              className="absolute inset-x-0 bottom-0 h-40 pointer-events-none overflow-hidden z-20"
            ></div>

            {/* Hero Content */}
            <div className="container mx-auto px-4 z-20 relative">
              <div className="max-w-4xl">
                <h1
                  ref={headerRef}
                  className="text-5xl md:text-7xl font-bold mb-6 text-white"
                >
                  SEIZE THE SKC FRANCHISE OPPORTUNITY
                </h1>
                <p
                  ref={subheaderRef}
                  className="text-xl md:text-2xl mb-8 text-gray-200"
                >
                  A LONGSTANDING LEGACY, EXPERT LEADERSHIP, DIVERSE REVENUE STREAMS,
                  <br />AND A COMMITMENT TO COMMUNITY IMPACT
                </p>
                <a
                  ref={downloadButtonRef}
                  href="#download-brochure"
                  className="inline-block bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 px-8 py-4 rounded-md text-lg font-semibold text-white transition-all duration-300 shadow-[0_4px_15px_rgba(220,38,38,0.4)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.6)]"
                >
                  DOWNLOAD OUR BROCHURE
                </a>
              </div>
            </div>
          </section>

          {/* Discover Section */}
          <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-transparent z-0"></div>
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
              <AnimatedElement type="slideInLeft" delay={0.2}>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-tr from-red-600 to-red-900 rounded-lg blur-sm opacity-70"></div>
                  <img
                    // src="/Images/franchise-kids.jpg"
                    alt="SKC Students"
                    className="w-full h-auto object-cover rounded-lg relative z-10"
                  />
                </div>
              </AnimatedElement>

              <AnimatedElement type="slideInRight" delay={0.4}>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    DISCOVER THE SKC FRANCHISE OPPORTUNITY
                  </h2>
                  <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-lg border border-red-800/20">
                    <p className="text-gray-300 mb-4">
                      As Augusta's top martial arts school, SKC offers a supportive community where students of all ages can learn from expert instructors in a safe, exciting environment. Our diverse programs include karate, kickboxing and jiu-jitsu to ensure broad market appeal and consistent revenue streams.
                    </p>
                    <p className="text-gray-300 mb-4">
                      Since 1982, Seigler's Karate Center has built a legacy of excellence with sustained growth and profitability. Serving over 500 students and generating over $1 million annually for the past 14 years, SKC's proven business model and track record ensures long-term success and stability while reflecting constant market demand.
                    </p>
                    <p className="text-gray-300 mb-4">
                      Our philosophy of character-building, discipline, and development fosters a loyal, engaged student base. Our community focus enhances retention, positive word-of-mouth, and organic growth. Investing in an SKC Franchise is both rewarding and affordable, blending financial success with meaningful community impact.
                    </p>
                    <p className="text-gray-300">
                      Invest in a franchise with a rich history and a commitment to community impact. Join the SKC legacy to get into the business of changing lives and building leaders!
                    </p>
                  </div>
                  <div className="mt-8 text-center">
                    <a
                      href="#download-brochure"
                      className="inline-block bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 px-6 py-3 rounded-md font-semibold text-white transition-all duration-300 shadow-[0_4px_10px_rgba(220,38,38,0.3)] hover:shadow-[0_6px_15px_rgba(220,38,38,0.4)]"
                    >
                      DOWNLOAD OUR BROCHURE
                    </a>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </section>

          {/* Key Franchise Insights Section */}
          <section
            ref={insightsSectionRef}
            className="py-24 bg-gradient-to-b from-black via-red-950/10 to-black opacity-0 transform translate-y-10"
          >
            <div className="container mx-auto px-4">
              <AnimatedElement type="fadeIn" delay={0.2}>
                <div className="flex flex-col md:flex-row justify-between items-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-0">
                    KEY FRANCHISE<br />INSIGHTS
                  </h2>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="text-4xl md:text-5xl font-bold text-white mb-1">$40,000</div>
                      <div className="text-gray-300">Initial Franchise Fee</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl md:text-5xl font-bold text-white mb-1">$110,000</div>
                      <div className="text-gray-300">Minimum Estimated Cost</div>
                    </div>
                  </div>
                </div>
              </AnimatedElement>

              <div className="grid md:grid-cols-3 gap-8">
                <AnimatedElement type="fadeInUp" delay={0.3}>
                  <div className="bg-gradient-to-b from-gray-900 to-black rounded-xl overflow-hidden shadow-xl">
                    <div className="h-64 overflow-hidden">
                      <img
                        // src="/Images/franchise-support.jpg"
                        alt="SKC Support"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-red-500 mb-3">OUR SUPPORT</h3>
                      <p className="text-gray-300">
                        SKC provides continuous training and guidance ensuring franchisees are fully equipped to succeed. Our team of renowned experts fosters professional and personal growth, helping franchisees to develop leadership skills, discipline, and a sense of accomplishment.
                      </p>
                    </div>
                  </div>
                </AnimatedElement>

                <AnimatedElement type="fadeInUp" delay={0.5}>
                  <div className="bg-gradient-to-b from-gray-900 to-black rounded-xl overflow-hidden shadow-xl">
                    <div className="h-64 overflow-hidden">
                      <img
                        // src="/Images/franchise-mission.jpg"
                        alt="SKC Mission"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-red-500 mb-3">OUR MISSION</h3>
                      <p className="text-gray-300">
                        At SKC Franchise, we're driven by a mission to empower franchisees to excel in their business while fostering positive local change. Our goal is to cultivate a network of passionate leaders who are dedicated to advancing martial arts excellence and contributing to their communities.
                      </p>
                    </div>
                  </div>
                </AnimatedElement>

                <AnimatedElement type="fadeInUp" delay={0.7}>
                  <div className="bg-gradient-to-b from-gray-900 to-black rounded-xl overflow-hidden shadow-xl">
                    <div className="h-64 overflow-hidden">
                      <img
                        // src="/Images/franchise-qualities.jpg"
                        alt="Ideal Franchisee"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-red-500 mb-3">IDEAL SKC FRANCHISEE QUALITIES</h3>
                      <p className="text-gray-300">
                        SKC Franchise is seeking partners who are passionate about and have a background in martial arts. Ideal candidates should bring a genuine enthusiasm for the SKC culture and skills in building relationships and connecting with clients. If you're eager to grow with us and embrace our mission, we want you to join the SKC family!
                      </p>
                    </div>
                  </div>
                </AnimatedElement>
              </div>
            </div>
          </section>

          {/* Commitment Section */}
          <section className="py-24 bg-gray-900 relative overflow-hidden">
            {/* <div className="absolute inset-0 bg-[url('/Images/texture-bg.jpg')] opacity-10 mix-blend-overlay"></div> */}
            <div className="container mx-auto px-4 relative z-10">
              <AnimatedElement type="fadeIn" delay={0.2}>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
                  THE SKC COMMITMENT TO YOUR SUCCESS
                </h2>
              </AnimatedElement>

              <div className="grid md:grid-cols-3 gap-8">
                <AnimatedElement type="fadeInUp" delay={0.3}>
                  <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-red-900/20">
                    <h3 className="text-xl font-bold text-red-500 mb-4">OPERATIONAL SUPPORT</h3>
                    <p className="text-gray-300">
                      The SKC family provides robust support across all facets of your franchise operations. From day one, you'll receive ongoing assistance covering everything from the technical training to administrative procedures.
                    </p>
                    <div className="mt-6">
                      <img
                        // src="/Images/franchise-operational.jpg"
                        alt="Operational Support"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </AnimatedElement>

                <AnimatedElement type="fadeInUp" delay={0.5}>
                  <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-red-900/20">
                    <h3 className="text-xl font-bold text-red-500 mb-4">MARKETING SUPPORT</h3>
                    <p className="text-gray-300">
                      SKC Franchise provides advertising materials and strategies refined over years of experience to drive student enrollment and retention. This ensures our franchisees have the resources to effectively attract and engage clients.
                    </p>
                    <div className="mt-6">
                      <img
                        // src="/Images/franchise-marketing.jpg"
                        alt="Marketing Support"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </AnimatedElement>

                <AnimatedElement type="fadeInUp" delay={0.7}>
                  <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-red-900/20">
                    <h3 className="text-xl font-bold text-red-500 mb-4">COMPREHENSIVE TRAINING</h3>
                    <p className="text-gray-300">
                      Our program includes six weeks of initial hands-on and video instruction at our Georgia HQ. Upon opening, you'll receive an additional week of on-site coaching to ensure a smooth transition and continued success.
                    </p>
                    <div className="mt-6">
                      <img
                        // src="/Images/franchise-training.jpg"
                        alt="Comprehensive Training"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </AnimatedElement>
              </div>
            </div>
          </section>

          {/* Path to Ownership */}
          <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
              <AnimatedElement type="fadeIn" delay={0.2}>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
                  YOUR PATH TO SKC OWNERSHIP
                </h2>
              </AnimatedElement>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <AnimatedElement type="slideInLeft" delay={0.3}>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-tr from-red-600 to-red-900 rounded-lg blur-sm opacity-70"></div>
                    <img
                    //   src="/Images/franchise-path.jpg"
                      alt="SKC Path to Ownership"
                      className="w-full h-auto object-cover rounded-lg relative z-10"
                    />
                  </div>
                </AnimatedElement>

                <AnimatedElement type="slideInRight" delay={0.4}>
                  <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-red-900/20 shadow-xl">
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-red-500 mb-2">INTRODUCTION</h3>
                      <p className="text-gray-300">
                        Submit our contact form to express your interest in SKC Franchise and begin the conversation about a potential partnership.
                      </p>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-red-500 mb-2">KICK-OFF</h3>
                      <p className="text-gray-300">
                        We'll schedule an initial call to discuss our franchise in detail, answer any questions you have, and outline our process.
                      </p>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-red-500 mb-2">DISCOVERY DAY</h3>
                      <p className="text-gray-300">
                        Visit our headquarters to meet the team, tour our facilities, and gain deeper insights into SKC Franchise for a firsthand assessment.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-red-500 mb-2">FOUNDATIONAL KNOWLEDGE</h3>
                      <p className="text-gray-300">
                        We offer thorough training and support, including initial instruction, on-site guidance, and ongoing assistance to ensure your success.
                      </p>
                    </div>
                  </div>
                </AnimatedElement>
              </div>

              {/* Take the next step */}
              <AnimatedElement type="fadeIn" delay={0.6}>
                <div className="mt-16 text-center">
                  <h3 className="text-2xl font-bold text-red-500 mb-4">TAKE THE NEXT STEP</h3>
                  <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                    Ready to transform your future? Fill out our contact form today to start a conversation about how SKC can help you achieve your goals, create success, and benefit your community.
                  </p>
                  <a
                    href="#download-brochure"
                    className="inline-block bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 px-8 py-4 rounded-md text-lg font-semibold text-white transition-all duration-300 shadow-[0_4px_15px_rgba(220,38,38,0.4)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.6)]"
                  >
                    DOWNLOAD OUR BROCHURE BELOW ↓
                  </a>
                </div>
              </AnimatedElement>
            </div>
          </section>

          {/* Contact Form Section */}
          <section
            id="download-brochure"
            className="py-24 bg-gradient-to-b from-red-900 via-red-800 to-red-900 relative overflow-hidden"
            ref={formRef}
          >
            <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <AnimatedElement type="slideInLeft" delay={0.2}>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                      YOUR SUCCESS STORY <br />STARTS AT SKC
                    </h2>
                    <p className="text-gray-300 mb-8">
                      By choosing SKC Franchise, you are investing in a franchise that not only offers a proven and profitable business model but also prioritizes community impact and personal development for a more rewarding and sustainable business. Our experienced leadership team is offering you a spot in our life-changing legacy. Are you ready to make the next move?
                    </p>
                    <div className="text-xs text-gray-400 mt-12">
                      <p className="mb-2 font-bold">Legal Disclaimer:</p>
                      <p>This is not a franchise offering. A franchise offering can be made by us only in a state if we are first registered, excluded, exempted or otherwise qualified to offer franchises in that state, and only if we provide you with an appropriate franchise disclosure document. Follow-up or individualized responses to you that involve either effecting or attempting to effect the sale of a franchise will be made only if we are first in compliance with state registration requirements, or are covered by an applicable state exclusion or exemption.</p>
                    </div>
                  </div>
                </AnimatedElement>

                <AnimatedElement type="slideInRight" delay={0.4}>
                  <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-red-400/20 shadow-2xl">
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-3 bg-gray-900/70 border border-red-900/30 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                          />
                        </div>
                        <div>
                          <input
                            type="email"
                            placeholder="someone@example.com"
                            className="w-full px-4 py-3 bg-gray-900/70 border border-red-900/30 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full px-4 py-3 bg-gray-900/70 border border-red-900/30 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            placeholder="Desired State"
                            className="w-full px-4 py-3 bg-gray-900/70 border border-red-900/30 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                          />
                        </div>
                      </div>
                      <div>
                        <textarea
                          placeholder="Message"
                          rows={5}
                          className="w-full px-4 py-3 bg-gray-900/70 border border-red-900/30 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                        ></textarea>
                      </div>
                      <div>
                        <div className="g-recaptcha flex justify-center my-4"></div>
                      </div>
                      <div className="text-center">
                        <button
                          type="submit"
                          className="inline-block bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 px-8 py-4 rounded-md text-lg font-semibold text-white transition-all duration-300 shadow-[0_4px_15px_rgba(220,38,38,0.4)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.6)] w-full"
                        >
                          DOWNLOAD OUR BROCHURE
                        </button>
                      </div>
                    </form>
                  </div>
                </AnimatedElement>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
