import { Link } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import AnimatedElement from '@/components/ui/animated-element';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
                  <Link
                    href="/about"
                    className="rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-600 transition-colors"
                  >
                    About Us
                  </Link>
                </AnimatedElement>
                <AnimatedElement as="div" type="fadeInDown" delay={0.4} scrollTrigger={false}>
                  <Link
                    href="/programs"
                    className="rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-600 transition-colors"
                  >
                    Programs
                  </Link>
                </AnimatedElement>
                <AnimatedElement as="div" type="fadeInDown" delay={0.5} scrollTrigger={false}>
                  <Link
                    href="/success-stories"
                    className="rounded-md px-3 py-2 text-sm font-medium text-white hover:text-red-600 transition-colors"
                  >
                    Success Stories
                  </Link>
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
                  <Link
                    href="/contact"
                    className="rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700 transition-colors"
                  >
                    Select Location
                  </Link>
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
            <Link
              href="/about"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:text-red-600"
            >
              About Us
            </Link>
            <Link
              href="/programs"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:text-red-600"
            >
              Programs
            </Link>
            <Link
              href="/success-stories"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:text-red-600"
            >
              Success Stories
            </Link>
            <Link
              href="/franchise"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:text-red-600"
            >
              Franchise Info
            </Link>
            <Link
              href="/contact"
              className="block rounded-md bg-red-600 px-3 py-2 text-base font-medium text-white hover:bg-red-700 mt-4"
            >
              Select Location
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
