import { Button } from '@/components/ui/button';
import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';

// Animated component wrapper
interface AnimatedElementProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const AnimatedElement = ({ children, delay = 0, className = '' }: AnimatedElementProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, delay, ease: "power3.out" }
    );
  }, [delay]);

  return <div ref={ref} className={className}>{children}</div>;
};

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const selectBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Fade in the hero section
    gsap.fromTo(
      heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power2.inOut" }
    );

    // Fade in the image with delay
    gsap.fromTo(
      imageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" }
    );

    // Button hover effect
    if (selectBtnRef.current) {
      selectBtnRef.current.addEventListener('mouseenter', () => {
        gsap.to(selectBtnRef.current, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      selectBtnRef.current.addEventListener('mouseleave', () => {
        gsap.to(selectBtnRef.current, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    }

    // Create particles
    const particlesContainer = particlesRef.current;
    const colors = ['#ff4b4b', '#ffffff', '#ff8080'];
    let particleInterval: NodeJS.Timeout;

    if (particlesContainer) {
      particleInterval = setInterval(() => {
        const particle = document.createElement('div');
        const size = Math.random() * 8 + 2;
        const color = colors[Math.floor(Math.random() * colors.length)];

        particle.style.position = 'absolute';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.borderRadius = '50%';
        particle.style.backgroundColor = color;
        particle.style.opacity = '0.6';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        particlesContainer.appendChild(particle);

        gsap.to(particle, {
          x: Math.random() * 50 - 25,
          opacity: 0,
          duration: 3 + Math.random() * 2,
          ease: "power1.out",
          onComplete: () => {
            if (particlesContainer.contains(particle)) {
              particlesContainer.removeChild(particle);
            }
          }
        });
      }, 300);
    }

    return () => {
      if (particleInterval) {
        clearInterval(particleInterval);
      }

      // Clean up event listeners
      if (selectBtnRef.current) {
        selectBtnRef.current.removeEventListener('mouseenter', () => {});
        selectBtnRef.current.removeEventListener('mouseleave', () => {});
      }
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative bg-black py-32 text-white overflow-hidden"
    >
      {/* Particle effect container */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-red-900/30"></div>

      <div className="container relative mx-auto px-4 z-10">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-10 max-w-xl space-y-6 md:mb-0">
            <AnimatedElement delay={0.2}>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Augusta's Martial Arts & Fitness for All Ages
              </h1>
            </AnimatedElement>

            <AnimatedElement delay={0.4}>
              <p className="text-lg text-red-100">
                At Seigler's Karate Center, we're passionate about using martial arts to help you live your best life. Our programs cater to all ages and skill levels.
              </p>
            </AnimatedElement>

            <AnimatedElement delay={0.6} className="flex flex-wrap gap-4">
              <Button
                ref={selectBtnRef}
                variant="default"
                className="bg-red-600 px-6 py-3 text-white font-medium shadow-lg hover:bg-red-700 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Select a Program</span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
              <Button variant="outline" className="border-red-500 px-6 py-3 text-white bg-black/50 backdrop-blur-sm hover:bg-red-600 hover:border-red-600 transition-all duration-300">
                View Schedule & Pricing
              </Button>
            </AnimatedElement>

            <AnimatedElement delay={0.8}>
              <div className="mt-4">
                <span className="inline-flex items-center rounded-md bg-red-600/20 px-3 py-1 text-sm font-medium text-white">
                  <span className="mr-2 text-yellow-300">★★★★★</span>
                  4.7 Rating
                </span>
              </div>
            </AnimatedElement>
          </div>

          <div ref={imageRef} className="w-full max-w-md">
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-xl bg-gradient-to-br from-black to-red-900">
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="flex h-full items-center justify-center">
                <span className="text-2xl font-bold text-white">Martial Arts Classes</span>
              </div>
              <div className="absolute bottom-4 left-4 rounded-md bg-red-600 px-3 py-1 text-sm font-medium text-white">
                LIMITED TIME OFFER
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-10 w-20 h-20 bg-red-600/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-red-500/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default Hero;
