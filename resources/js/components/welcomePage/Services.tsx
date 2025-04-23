import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const particles = particlesRef.current;

    if (section) {
      // Title animation
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

      // Cards animation
      gsap.fromTo(
        section.querySelectorAll('.program-card'),
        { opacity: 0 },
        {
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
          }
        }
      );

      // Floating cards animation removed
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

  const services = [
    {
      id: 1,
      title: 'Lil Dragons (4 – 5)',
      description: 'Empower your child with our Lil Dragons martial arts classes. Designed to channel their boundless curiosity and energy, our expert instructors provide vibrant, engaging lessons that are both educational and fun.',
      icon: (
        <svg className="h-10 w-10 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Kids Karate (6 – 10)',
      description: 'Our kids martial arts classes provide children with valuable benefits such as increased confidence, discipline, resilience, and self-defense skills.',
      icon: (
        <svg className="h-10 w-10 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Teens Karate (11 – 13)',
      description: 'Ignite your teenager\'s journey from youth to adulthood with our martial arts classes. Enhance their emotional intelligence and empower them to unlock their full potential.',
      icon: (
        <svg className="h-10 w-10 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Adult Kempo Karate (14+)',
      description: 'Discover our adult martial arts classes—a dynamic fusion of fitness, self-defense, and fun. Join us to boost your health, learn practical self-defense skills, and enjoy every step of your journey.',
      icon: (
        <svg className="h-10 w-10 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: 5,
      title: 'Kickboxing (14+)',
      description: 'Experience the transformative power of Kickboxing! Each class brings you closer to mastering techniques, building strength, and boosting confidence.',
      icon: (
        <svg className="h-10 w-10 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
        </svg>
      ),
    },
    {
      id: 6,
      title: 'Jiu Jitsu (14+)',
      description: 'Ready to enhance your life and well-being? Discover the physical, mental, and social benefits of Tetsu Shin Ryu Jiu-Jitsu and transform your fitness, resilience, and community connections.',
      icon: (
        <svg className="h-10 w-10 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
  ];

  return (
    <section id="programs" className="relative bg-black py-16 text-white overflow-hidden" ref={sectionRef}>
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1592205644721-2fe5214762ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/80 z-0"></div>

      {/* Particle effect container */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-40 h-40 bg-red-600/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-red-600/30 rounded-full blur-2xl z-0"></div>
      <div className="absolute right-1/3 top-1/4 w-20 h-20 bg-red-500/20 rounded-full blur-xl z-0"></div>

      {/* Martial arts silhouette elements */}
      <div className="absolute top-10 right-10 w-48 h-48 bg-contain bg-no-repeat bg-right-top z-0 opacity-20"
           style={{ backgroundImage: "url('https://cdn-icons-png.flaticon.com/512/4144/4144733.png')" }}></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-contain bg-no-repeat bg-left-bottom z-0 opacity-20"
           style={{ backgroundImage: "url('https://cdn-icons-png.flaticon.com/512/5044/5044737.png')" }}></div>

      <div className="container relative mx-auto px-4 z-20">
        <div className="title-container mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Our Programs</h2>
          <p className="mx-auto max-w-2xl text-gray-300">
            Discover the perfect martial arts class at SKC! Our diverse programs cater to kids, teens, and adults, ensuring everyone finds a class that suits their needs and skill level.
          </p>
          <div className="mx-auto mt-4 h-1 w-20 bg-red-600"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="program-card rounded-lg bg-black/60 p-6 shadow-lg transition-all duration-300 backdrop-blur-sm border border-red-900/30 hover:border-red-600"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="mb-3 text-xl font-semibold text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
              <button className="mt-4 text-sm font-medium text-red-500 hover:text-red-400 transition-colors duration-300 flex items-center group">
                View Program
                <svg className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="rounded-md bg-red-600 px-6 py-3 text-white hover:bg-red-700 transition-all duration-300 shadow-lg transform hover:scale-105 relative group overflow-hidden">
            <span className="relative z-10">Browse All Programs</span>
            <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
