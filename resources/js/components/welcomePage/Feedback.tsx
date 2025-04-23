import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Feedback = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const particles = particlesRef.current;
    const cards = cardsRef.current;

    // Title animation
    if (section) {
      gsap.fromTo(
        section.querySelector('.title-container'),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          }
        }
      );
    }

    // Cards animation
    if (cards) {
      gsap.fromTo(
        cards.querySelectorAll('.testimonial-card'),
        { opacity: 0 },
        {
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          scrollTrigger: {
            trigger: cards,
            start: 'top 80%',
          }
        }
      );

      // Floating effect removed
    }

    // Create particles
    if (particles) {
      const colors = ['#ff4b4b', '#ffffff', '#ff8080'];
      const particleInterval = setInterval(() => {
        const particle = document.createElement('div');
        const size = Math.random() * 6 + 2;
        const color = colors[Math.floor(Math.random() * colors.length)];

        particle.style.position = 'absolute';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.borderRadius = '50%';
        particle.style.backgroundColor = color;
        particle.style.opacity = '0.4';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        particles.appendChild(particle);

        gsap.to(particle, {
          x: Math.random() * 30 - 15,
          opacity: 0,
          duration: 3 + Math.random() * 2,
          ease: "power1.out",
          onComplete: () => {
            if (particles.contains(particle)) {
              particles.removeChild(particle);
            }
          }
        });
      }, 300);

      return () => {
        if (particleInterval) {
          clearInterval(particleInterval);
        }
      };
    }
  }, []);

  const testimonials = [
    {
      id: 1,
      content: "My son has been begging to take karate for two years. He was diagnosed with ADD, hyperactive type with sensory issue components. This summer I decided to try the intro 6 week class. We had our first class and the staff was wonderful. After one week, I can already tell his confidence is growing. So far we love Seigler's!",
      name: "Shanna Nelson Greene",
      position: "Parent",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      id: 2,
      content: "Accountability and an awesome workout! I had the knowledge of how to loose weight and get fit, but like so many of us, I needed that push to get me started! Having a scheduled class time and training with athletes at the top of their game has motivated me to crush my goals.",
      name: "Rachel Kimbrough-Eugene",
      position: "Member",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      id: 3,
      content: "Seigler's Karate Center is the BEST place to send your kids! A wonderful blend of Karate, leadership training and character building. Instructors know each child by name and are truly dedicated to their craft and the success of every child.",
      name: "Obambi A",
      position: "Parent",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg"
    }
  ];

  return (
    <section ref={sectionRef} id="feedback" className="relative bg-black py-16 text-white overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/90 to-black/80 z-0"></div>

      {/* Particle effect container */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-10"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-red-900/20 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-red-600/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-red-500/10 rounded-full blur-2xl z-0"></div>

      {/* Martial arts silhouette elements */}
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-contain bg-no-repeat bg-right-bottom z-0 opacity-20"
           style={{ backgroundImage: "url('https://cdn-icons-png.flaticon.com/512/2918/2918002.png')" }}></div>
      <div className="absolute top-10 left-10 w-48 h-48 bg-contain bg-no-repeat bg-left-top z-0 opacity-20"
           style={{ backgroundImage: "url('https://cdn-icons-png.flaticon.com/512/8198/8198075.png')" }}></div>

      <div className="container relative mx-auto px-4 z-20">
        <div className="title-container mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">What Our Members Say</h2>
          <div className="mx-auto h-1 w-20 bg-red-600"></div>
        </div>

        <div ref={cardsRef} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card rounded-xl bg-black/60 p-6 shadow-lg transition-all duration-300 backdrop-blur-sm border border-red-900/30 hover:border-red-600"
            >
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="mr-1 inline-block h-5 w-5 text-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="mb-6 text-gray-300">"{testimonial.content}"</p>

              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full border-2 border-red-500">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="rounded-md bg-red-600 px-6 py-3 text-white hover:bg-red-700 transition-all duration-300 shadow-lg transform hover:scale-105 relative group overflow-hidden">
            <span className="relative z-10">See More Reviews</span>
            <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
