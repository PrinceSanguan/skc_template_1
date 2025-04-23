import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Communities = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const cards = cardsRef.current;
    const particles = particlesRef.current;

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
        cards.querySelectorAll('.community-card'),
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

  const communities = [
    {
      id: 1,
      title: 'Augusta, GA',
      description: 'Our flagship location serving the Augusta area with comprehensive martial arts programs for all ages and skill levels.',
      members: 'Core Location',
      image: 'https://images.unsplash.com/photo-1581866069016-ab30b5109172?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      title: 'Martinez, GA',
      description: 'Serving the Martinez community with our signature martial arts training and character development programs.',
      members: 'Growing Community',
      image: 'https://images.unsplash.com/photo-1569418603365-a8cfd4e4f138?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      title: 'Grovetown, GA',
      description: '271 Meridian Drive Grovetown, GA 30813 - Our newest location bringing martial arts excellence to the Grovetown area.',
      members: 'New Location',
      image: 'https://images.unsplash.com/photo-1573126617899-41f1dffb196c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      title: 'Evans, GA',
      description: '4150 Washington Road, Suite 4, Evans, GA, 30809 - Serving Evans with professional martial arts instruction for all ages.',
      members: 'Main Dojo',
      image: 'https://images.unsplash.com/photo-1579722820248-91892d01c4b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];

  return (
    <section id="communities" ref={sectionRef} className="relative bg-black py-16 text-white overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585952535429-144995e9a172?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/90 to-black/80 z-0"></div>

      {/* Particle effect container */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-40 h-40 bg-red-600/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-red-600/30 rounded-full blur-2xl z-0"></div>

      {/* Martial arts silhouette elements */}
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-contain bg-no-repeat bg-right-bottom z-0 opacity-20"
           style={{ backgroundImage: "url('https://cdn-icons-png.flaticon.com/512/3043/3043918.png')" }}></div>
      <div className="absolute top-10 left-10 w-48 h-48 bg-contain bg-no-repeat bg-left-top z-0 opacity-20"
           style={{ backgroundImage: "url('https://cdn-icons-png.flaticon.com/512/7179/7179787.png')" }}></div>

      <div className="container relative mx-auto px-4 z-20">
        <div className="title-container mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Communities We Serve</h2>
          <p className="mx-auto max-w-2xl text-gray-300">
            Providing high-quality martial arts instruction throughout the CSRA area. Find a location near you and start your martial arts journey today.
          </p>
          <div className="mx-auto mt-4 h-1 w-20 bg-red-600"></div>
        </div>

        <div ref={cardsRef} className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {communities.map((community) => (
            <div
              key={community.id}
              className="community-card group overflow-hidden rounded-xl bg-black/60 shadow-lg transition-all backdrop-blur-sm border border-red-900/30 hover:border-red-600"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={community.image}
                  alt={community.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-3 left-3 rounded-full bg-red-600 px-3 py-1 text-xs font-medium text-white">
                  {community.members}
                </div>
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-xl font-semibold text-white">{community.title}</h3>
                <p className="mb-4 text-gray-300">{community.description}</p>
                <Button variant="outline" className="w-full border-red-600 text-red-500 hover:bg-red-900/20 transition-all">
                  Get Directions
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-gray-300">
              We also proudly serve: North Augusta, SC, Appling, GA, Harlem, GA, Fort Eisenhower, GA, and surrounding areas.
            </p>
          </div>
          <Button variant="default" className="bg-red-600 px-6 py-3 text-white hover:bg-red-700 transition-all duration-300 shadow-lg transform hover:scale-105 relative group overflow-hidden">
            <span className="relative z-10">Contact Us For More Locations</span>
            <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Communities;
