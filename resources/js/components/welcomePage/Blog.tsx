import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Blog = () => {
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
        cards.querySelectorAll('.blog-card'),
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

  const blogs = [
    {
      id: 1,
      title: 'The Benefits of Martial Arts for Children',
      excerpt: 'Discover how martial arts training can help children develop discipline, confidence, and physical fitness.',
      date: 'June 15, 2023',
      author: 'Sensei Michael',
      image: 'https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Youth Programs'
    },
    {
      id: 2,
      title: 'Karate vs Taekwondo: Understanding the Differences',
      excerpt: 'A comprehensive comparison of two popular martial arts styles and their unique approaches to self-defense.',
      date: 'May 28, 2023',
      author: 'Master Chen',
      image: 'https://images.unsplash.com/photo-1595229068232-c7b423950463?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Martial Arts Styles'
    },
    {
      id: 3,
      title: 'Preparing for Your First Belt Test',
      excerpt: 'Essential tips and mental preparation strategies to help you succeed in your upcoming belt examination.',
      date: 'April 12, 2023',
      author: 'Sensei Sarah',
      image: 'https://images.unsplash.com/photo-1621457590600-35c1e9b48b7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: 'Student Guidance'
    }
  ];

  return (
    <section id="blog" ref={sectionRef} className="relative bg-black py-16 text-white overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1621356986575-1e01d152453b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/90 to-black/80 z-0"></div>

      {/* Particle effect container */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-40 h-40 bg-red-600/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-red-600/30 rounded-full blur-2xl z-0"></div>

      {/* Martial arts silhouette elements */}
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-contain bg-no-repeat bg-right-bottom z-0 opacity-20"
           style={{ backgroundImage: "url('https://cdn-icons-png.flaticon.com/512/2503/2503401.png')" }}></div>
      <div className="absolute top-10 left-10 w-48 h-48 bg-contain bg-no-repeat bg-left-top z-0 opacity-20"
           style={{ backgroundImage: "url('https://cdn-icons-png.flaticon.com/512/1756/1756743.png')" }}></div>

      <div className="container relative mx-auto px-4 z-20">
        <div className="title-container mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Latest from Our Blog</h2>
          <p className="mx-auto max-w-2xl text-gray-300">
            Insights, tips, and stories from our martial arts community. Stay informed with the latest trends and techniques.
          </p>
          <div className="mx-auto mt-4 h-1 w-20 bg-red-600"></div>
        </div>

        <div ref={cardsRef} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="blog-card group overflow-hidden rounded-xl bg-black/60 shadow-lg transition-all backdrop-blur-sm border border-red-900/30 hover:border-red-600"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-3 left-3 rounded-full bg-red-600 px-3 py-1 text-xs font-medium text-white">
                  {blog.category}
                </div>
              </div>
              <div className="p-4">
                <div className="mb-3 flex items-center text-sm text-gray-400">
                  <span>{blog.date}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.author}</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white group-hover:text-red-500 transition-colors">
                  {blog.title}
                </h3>
                <p className="mb-4 text-gray-300">{blog.excerpt}</p>
                <Button variant="outline" className="w-full border-red-600 text-red-500 hover:bg-red-900/20 transition-all">
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="default" className="bg-red-600 px-6 py-3 text-white hover:bg-red-700 transition-all duration-300 shadow-lg transform hover:scale-105 relative group overflow-hidden">
            <span className="relative z-10">View All Articles</span>
            <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;


