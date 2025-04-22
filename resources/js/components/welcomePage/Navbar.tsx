import { Link } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import AnimatedElement from '@/components/ui/animated-element';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const [isMainContactDropdownOpen, setIsMainContactDropdownOpen] = useState(false);
  const [isProgramsDropdownOpen, setIsProgramsDropdownOpen] = useState(false);
  const [isSuccessStoriesDropdownOpen, setIsSuccessStoriesDropdownOpen] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);
  const navbarBgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Navbar animation on mount
    gsap.from(navbarRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    });

    // Navbar scroll animation
    const handleScroll = () => {
      if (window.scrollY > 50) {
        gsap.to(navbarBgRef.current, {
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          duration: 0.3
        });
      } else {
        gsap.to(navbarBgRef.current, {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          boxShadow: 'none',
          duration: 0.3
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Add CSS styles directly to the head for the hover behavior
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .contact-dropdown:hover .contact-submenu {
        display: block !important;
        opacity: 1 !important;
        visibility: visible !important;
      }
      .contact-submenu {
        display: none;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.2s;
      }
      .programs-dropdown:hover .programs-submenu {
        display: block !important;
        opacity: 1 !important;
        visibility: visible !important;
      }
      .programs-submenu {
        display: none;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.2s;
      }
      .success-stories-dropdown:hover .success-stories-submenu {
        display: block !important;
        opacity: 1 !important;
        visibility: visible !important;
      }
      .success-stories-submenu {
        display: none;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.2s;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <nav ref={navbarRef} className="fixed top-0 w-full z-50">
      <div ref={navbarBgRef} className="bg-black bg-opacity-70 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-shrink-0">
              <AnimatedElement type="fadeIn" delay={0.1} scrollTrigger={false}>
                <span className="text-xl font-bold text-red-600">Seigler's Karate Center</span>
              </AnimatedElement>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-6">
                <AnimatedElement as="div" type="fadeInDown" delay={0.2} scrollTrigger={false}>
                  <Link
                    href="/"
                    className="rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-600 transition-colors"
                  >
                    Home
                  </Link>
                </AnimatedElement>
                <AnimatedElement as="div" type="fadeInDown" delay={0.3} scrollTrigger={false}>
                  <div
                    className="relative"
                    onMouseEnter={() => setIsAboutDropdownOpen(true)}
                    onMouseLeave={() => setIsAboutDropdownOpen(false)}
                  >
                    <Link
                      href="/about"
                      className="rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-600 transition-colors flex items-center"
                    >
                      About Us
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                    {isAboutDropdownOpen && (
                      <div className="absolute left-0 mt-2 w-48 bg-black bg-opacity-90 rounded-md shadow-lg overflow-hidden z-10">
                        <Link
                          href="/about/team"
                          className="block px-4 py-2 text-sm text-white hover:bg-red-600 transition-colors"
                        >
                          Our Team
                        </Link>
                        <Link
                          href="/about/blog"
                          className="block px-4 py-2 text-sm text-white hover:bg-red-600 transition-colors"
                        >
                          Blog
                        </Link>
                        <div className="contact-dropdown">
                          <Link
                            href="/contact"
                            className="flex justify-between items-center px-4 py-2 text-sm text-white hover:bg-red-600 transition-colors"
                          >
                            <span>Contact</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                          <div className="contact-submenu absolute left-full top-0 w-48 bg-black bg-opacity-90 rounded-md shadow-lg overflow-hidden">
                            <Link
                              href="/locations/evans"
                              className="block px-4 py-2 text-sm text-white hover:bg-red-600 transition-colors"
                            >
                              Evans, GA
                            </Link>
                            <Link
                              href="/locations/grovetown"
                              className="block px-4 py-2 text-sm text-white hover:bg-red-600 transition-colors"
                            >
                              Grovetown, GA
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </AnimatedElement>
                <AnimatedElement as="div" type="fadeInDown" delay={0.4} scrollTrigger={false}>
                  <div
                    className="relative programs-dropdown"
                    onMouseEnter={() => setIsProgramsDropdownOpen(true)}
                    onMouseLeave={() => setIsProgramsDropdownOpen(false)}
                  >
                    <Link
                      href="/programs"
                      className="rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-600 transition-colors flex items-center"
                    >
                      Programs
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                    <div className="programs-submenu absolute left-0 mt-2 w-60 bg-black bg-opacity-90 rounded-md shadow-lg overflow-hidden z-10">
                      <Link
                        href="/programs/lil-dragons"
                        className="block px-4 py-2 text-sm text-white hover:bg-red-600 transition-colors"
                      >
                        Lil Dragons (4 — 5)
                      </Link>
                      <Link
                        href="/programs/kids-karate"
                        className="block px-4 py-2 text-sm text-white hover:bg-red-600 transition-colors"
                      >
                        Kids Karate (6 — 10)
                      </Link>
                      <Link
                        href="/programs/teens-karate"
                        className="block px-4 py-2 text-sm text-white hover:bg-red-600 transition-colors"
                      >
                        Teens Karate (11 — 13)
                      </Link>
                      <Link
                        href="/programs/adult-kempo"
                        className="block px-4 py-2 text-sm text-white hover:bg-red-600 transition-colors"
                      >
                        Adult Kempo Karate (14+)
                      </Link>
                      <Link
                        href="/programs/kickboxing"
                        className="block px-4 py-2 text-sm text-white hover:bg-red-600 transition-colors"
                      >
                        Kickboxing (14+)
                      </Link>
                      <Link
                        href="/programs/jiu-jitsu"
                        className="block px-4 py-2 text-sm text-white hover:bg-red-600 transition-colors"
                      >
                        Jiu Jitsu (14+)
                      </Link>
                    </div>
                  </div>
                </AnimatedElement>
                <AnimatedElement as="div" type="fadeInDown" delay={0.5} scrollTrigger={false}>
                  <div
                    className="relative success-stories-dropdown"
                    onMouseEnter={() => setIsSuccessStoriesDropdownOpen(true)}
                    onMouseLeave={() => setIsSuccessStoriesDropdownOpen(false)}
                  >
                    <Link
                      href="/success-stories"
                      className="rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-600 transition-colors flex items-center"
                    >
                      Success Stories
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                    <div className="success-stories-submenu absolute left-0 mt-2 w-48 bg-black bg-opacity-90 rounded-md shadow-lg overflow-hidden z-10">
                      <Link
                        href="/success-stories/written-reviews"
                        className="block px-4 py-2 text-sm text-white hover:bg-red-600 transition-colors"
                      >
                        Written Reviews
                      </Link>
                      <Link
                        href="/success-stories/video-testimonials"
                        className="block px-4 py-2 text-sm text-white hover:bg-red-600 transition-colors"
                      >
                        Video Testimonials
                      </Link>
                    </div>
                  </div>
                </AnimatedElement>
                <AnimatedElement as="div" type="fadeInDown" delay={0.6} scrollTrigger={false}>
                  <Link
                    href="/franchise"
                    className="rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-600 transition-colors"
                  >
                    Franchise Info
                  </Link>
                </AnimatedElement>
                <AnimatedElement as="div" type="fadeInDown" delay={0.7} scrollTrigger={false}>
                  <div
                    className="relative"
                    onMouseEnter={() => setIsMainContactDropdownOpen(true)}
                    onMouseLeave={() => setIsMainContactDropdownOpen(false)}
                  >
                    <Link
                      href="/contact"
                      className="rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700 transition-colors flex items-center"
                    >
                      Select Location
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                    {isMainContactDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-black bg-opacity-90 rounded-md shadow-lg overflow-hidden z-10">
                        <Link
                          href="/locations/evans"
                          className="block px-4 py-2 text-sm text-white hover:bg-red-600 transition-colors"
                        >
                          Evans, GA
                        </Link>
                        <Link
                          href="/locations/grovetown"
                          className="block px-4 py-2 text-sm text-white hover:bg-red-600 transition-colors"
                        >
                          Grovetown, GA
                        </Link>
                      </div>
                    )}
                  </div>
                </AnimatedElement>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
              >
                <span className="sr-only">{isMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:text-red-600"
            >
              Home
            </Link>
            <div>
              <button
                onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                className="flex justify-between w-full rounded-md px-3 py-2 text-base font-medium text-white hover:text-red-600"
              >
                <span>About Us</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transition-transform ${isAboutDropdownOpen ? 'transform rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isAboutDropdownOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link
                    href="/about"
                    className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-600"
                  >
                    About Us Home
                  </Link>
                  <Link
                    href="/about/team"
                    className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-600"
                  >
                    Our Team
                  </Link>
                  <Link
                    href="/about/blog"
                    className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-600"
                  >
                    Blog
                  </Link>
                  <div>
                    <button
                      onClick={() => setIsContactDropdownOpen(!isContactDropdownOpen)}
                      className="flex justify-between w-full rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-600"
                    >
                      <span>Contact</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 transition-transform ${isContactDropdownOpen ? 'transform rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isContactDropdownOpen && (
                      <div className="pl-4 space-y-1 mt-1">
                        <Link
                          href="/locations/evans"
                          className="block rounded-md px-3 py-2 text-xs font-medium text-white hover:text-red-600"
                        >
                          Evans, GA
                        </Link>
                        <Link
                          href="/locations/grovetown"
                          className="block rounded-md px-3 py-2 text-xs font-medium text-white hover:text-red-600"
                        >
                          Grovetown, GA
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => setIsProgramsDropdownOpen(!isProgramsDropdownOpen)}
                className="flex justify-between w-full rounded-md px-3 py-2 text-base font-medium text-white hover:text-red-600"
              >
                <span>Programs</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transition-transform ${isProgramsDropdownOpen ? 'transform rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isProgramsDropdownOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link
                    href="/programs/lil-dragons"
                    className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-600"
                  >
                    Lil Dragons (4 — 5)
                  </Link>
                  <Link
                    href="/programs/kids-karate"
                    className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-600"
                  >
                    Kids Karate (6 — 10)
                  </Link>
                  <Link
                    href="/programs/teens-karate"
                    className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-600"
                  >
                    Teens Karate (11 — 13)
                  </Link>
                  <Link
                    href="/programs/adult-kempo"
                    className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-600"
                  >
                    Adult Kempo Karate (14+)
                  </Link>
                  <Link
                    href="/programs/kickboxing"
                    className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-600"
                  >
                    Kickboxing (14+)
                  </Link>
                  <Link
                    href="/programs/jiu-jitsu"
                    className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-600"
                  >
                    Jiu Jitsu (14+)
                  </Link>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => setIsSuccessStoriesDropdownOpen(!isSuccessStoriesDropdownOpen)}
                className="flex justify-between w-full rounded-md px-3 py-2 text-base font-medium text-white hover:text-red-600"
              >
                <span>Success Stories</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transition-transform ${isSuccessStoriesDropdownOpen ? 'transform rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isSuccessStoriesDropdownOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link
                    href="/success-stories"
                    className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-600"
                  >
                    All Success Stories
                  </Link>
                  <Link
                    href="/success-stories/written-reviews"
                    className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-600"
                  >
                    Written Reviews
                  </Link>
                  <Link
                    href="/success-stories/video-testimonials"
                    className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-600"
                  >
                    Video Testimonials
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/franchise"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:text-red-600"
            >
              Franchise Info
            </Link>
            <div>
              <button
                onClick={() => setIsMainContactDropdownOpen(!isMainContactDropdownOpen)}
                className="flex justify-between w-full rounded-md px-3 py-2 text-base font-medium text-white hover:text-red-600 bg-red-600 hover:bg-red-700 mt-4"
              >
                <span>Select Location</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transition-transform ${isMainContactDropdownOpen ? 'transform rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isMainContactDropdownOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  <Link
                    href="/locations/evans"
                    className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-600"
                  >
                    Evans, GA
                  </Link>
                  <Link
                    href="/locations/grovetown"
                    className="block rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-600"
                  >
                    Grovetown, GA
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
