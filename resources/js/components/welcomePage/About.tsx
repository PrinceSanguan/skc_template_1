import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;
    const stats = statsRef.current;
    const particles = particlesRef.current;

    if (section && image && content && stats) {
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

      // Image animation
      gsap.fromTo(
        image,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.3,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          }
        }
      );

      // Text content animation
      gsap.fromTo(
        content.querySelectorAll('h3, p'),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          delay: 0.5,
          scrollTrigger: {
            trigger: content,
            start: 'top 80%',
          }
        }
      );

      // Stats animation
      gsap.fromTo(
        stats.querySelectorAll('.stat-item'),
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.8,
          scrollTrigger: {
            trigger: stats,
            start: 'top 90%',
          }
        }
      );

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
            duration: 4 + Math.random() * 3,
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
    }
  }, []);

  return (
    <section id="about" className="relative bg-black py-16 text-white overflow-hidden" ref={sectionRef}>
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80 z-0"></div>

      {/* Particle effect container */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 -right-10 w-40 h-40 bg-red-600/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-red-600/30 rounded-full blur-2xl z-0"></div>
      <div className="absolute right-0 top-1/2 w-24 h-24 bg-red-500/20 rounded-full blur-xl z-0"></div>

      {/* Martial arts silhouette elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-contain bg-no-repeat bg-right-bottom z-0 opacity-20"
           style={{ backgroundImage: "url('https://cdn-icons-png.flaticon.com/512/2790/2790802.png')" }}></div>
      <div className="absolute top-0 left-0 w-48 h-48 bg-contain bg-no-repeat bg-left-top z-0 opacity-20"
           style={{ backgroundImage: "url('https://cdn-icons-png.flaticon.com/512/5229/5229467.png')" }}></div>

      <div className="container relative mx-auto px-4 z-20">
        <div className="title-container mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">About Us</h2>
          <div className="mx-auto h-1 w-20 bg-red-600"></div>
        </div>

        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="w-full md:w-1/2" ref={imageRef}>
            <div className="relative h-96 w-full overflow-hidden rounded-xl shadow-xl">
              <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-tr from-red-600/30 to-black/70"></div>
              <div className="absolute left-0 top-0 h-full w-full bg-black opacity-20"></div>
              <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600881333259-5aa1d0935dcf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80')" }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-white drop-shadow-lg">Since 1982</span>
              </div>
            </div>
          </div>

          <div className="w-full space-y-6 md:w-1/2" ref={contentRef}>
            <h3 className="text-2xl font-semibold text-white">Our Story</h3>
            <p className="text-gray-300">
              Since 1982, Seigler's Karate Center has empowered kids, teens & adults through martial arts. We instill life skills like focus, discipline & respect, helping students achieve success on and off the mat.
            </p>
            <p className="text-gray-300">
              Searching for the perfect martial arts school can feel like a challenge. At SKC, we make it easy for you and your family to find your best selves through martial arts. Our skilled instructors are committed to understanding your goals and guiding you towards success in a dynamic, engaging, and supportive atmosphere.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4" ref={statsRef}>
              <div className="stat-item rounded-lg border border-red-900/30 bg-black/60 p-4 text-center shadow-lg backdrop-blur-sm hover:border-red-600/50 transition-all duration-300">
                <span className="block text-3xl font-bold text-red-500">40+</span>
                <span className="text-sm text-gray-400">Years Experience</span>
              </div>
              <div className="stat-item rounded-lg border border-red-900/30 bg-black/60 p-4 text-center shadow-lg backdrop-blur-sm hover:border-red-600/50 transition-all duration-300">
                <span className="block text-3xl font-bold text-red-500">1000+</span>
                <span className="text-sm text-gray-400">Happy Students</span>
              </div>
              <div className="stat-item rounded-lg border border-red-900/30 bg-black/60 p-4 text-center shadow-lg backdrop-blur-sm hover:border-red-600/50 transition-all duration-300">
                <span className="block text-3xl font-bold text-red-500">2+</span>
                <span className="text-sm text-gray-400">Locations</span>
              </div>
              <div className="stat-item rounded-lg border border-red-900/30 bg-black/60 p-4 text-center shadow-lg backdrop-blur-sm hover:border-red-600/50 transition-all duration-300">
                <span className="block text-3xl font-bold text-red-500">6+</span>
                <span className="text-sm text-gray-400">Programs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
