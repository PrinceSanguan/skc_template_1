import Template from './Template';
import AnimatedElement from '@/components/ui/animated-element';
import { Link } from '@inertiajs/react';

export default function AboutIndex() {
  return (
    <Template title="About Us">
      <div className="container mx-auto px-4 py-16">
        <AnimatedElement type="fadeIn" delay={0.2}>
          <h1 className="text-4xl font-bold text-center mb-4">About Seigler's Karate Center</h1>
        </AnimatedElement>

        <AnimatedElement type="fadeIn" delay={0.3}>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Building discipline, confidence, and character through traditional martial arts training since 1985.
          </p>
        </AnimatedElement>

        {/* Mission and Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <AnimatedElement type="slideInLeft" delay={0.4}>
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <div className="h-72 bg-gray-700 flex items-center justify-center">
                  <span className="text-lg text-gray-400">Dojo Image</span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-gray-400 mb-4">
                  At Seigler's Karate Center, our mission is to provide high-quality martial arts instruction
                  that develops the whole person - physically, mentally, and spiritually. We believe in
                  creating a supportive environment where students of all ages can grow, challenge themselves,
                  and achieve their personal best.
                </p>
                <p className="text-gray-400">
                  Through our traditional karate training, we instill the core values of respect, discipline,
                  perseverance, and integrity - values that extend beyond the dojo and into every aspect of life.
                </p>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement type="slideInRight" delay={0.4}>
            <div className="bg-gray-900 rounded-lg overflow-hidden h-full">
              <div className="aspect-w-16 aspect-h-9">
                <div className="h-72 bg-gray-700 flex items-center justify-center">
                  <span className="text-lg text-gray-400">Training Image</span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Our Philosophy</h2>
                <p className="text-gray-400 mb-4">
                  We believe martial arts training is about more than just learning physical techniques -
                  it's about developing mental strength, emotional resilience, and personal growth. Our
                  teaching philosophy combines traditional martial arts wisdom with modern educational approaches.
                </p>
                <p className="text-gray-400">
                  Each student's journey is unique, and we are committed to providing personalized guidance
                  and support along the way. Whether your goal is self-defense, physical fitness, competition,
                  or personal development, we have programs designed to help you succeed.
                </p>
              </div>
            </div>
          </AnimatedElement>
        </div>

        {/* History */}
        <AnimatedElement type="fadeIn" delay={0.5}>
          <div className="bg-gray-900 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Our History</h2>

            <div className="space-y-6">
              <p className="text-gray-300">
                Seigler's Karate Center was founded in 1985 by Grandmaster John Seigler, a dedicated
                martial artist with a vision to create a dojo that honored traditional karate while making
                it accessible to students of all ages and backgrounds.
              </p>

              <p className="text-gray-300">
                Beginning with just a handful of students in a small rented space, the center quickly
                grew as word spread about the quality of instruction and the positive impact it was having
                on students' lives. Over the years, we've expanded to multiple locations throughout Georgia,
                while maintaining the same commitment to excellence and personal attention that defined us
                from the beginning.
              </p>

              <p className="text-gray-300">
                Today, Seigler's Karate Center is recognized as one of the premier martial arts schools
                in the Southeast, with a reputation for producing skilled martial artists and compassionate
                leaders who make a difference in their communities.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="h-32 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-sm text-gray-500">Historic Image 1</span>
              </div>
              <div className="h-32 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-sm text-gray-500">Historic Image 2</span>
              </div>
              <div className="h-32 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-sm text-gray-500">Historic Image 3</span>
              </div>
              <div className="h-32 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-sm text-gray-500">Historic Image 4</span>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* What We Offer */}
        <AnimatedElement type="fadeIn" delay={0.6}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                <div className="h-48 bg-gray-700 flex items-center justify-center">
                  <span className="text-lg text-gray-400">Children's Programs</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Programs for All Ages</h3>
                  <p className="text-gray-400">
                    We offer specialized martial arts programs for children, teens, and adults,
                    ensuring everyone receives age-appropriate instruction that addresses their
                    specific needs and goals.
                  </p>
                  <Link
                    href="/programs"
                    className="mt-4 inline-flex items-center text-red-600 hover:text-red-500"
                  >
                    View Programs
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                <div className="h-48 bg-gray-700 flex items-center justify-center">
                  <span className="text-lg text-gray-400">Expert Instruction</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Expert Instruction</h3>
                  <p className="text-gray-400">
                    Our qualified instructors are not only skilled martial artists but also
                    experienced teachers who know how to motivate, challenge, and support students
                    at every level of their journey.
                  </p>
                  <Link
                    href="/about/team"
                    className="mt-4 inline-flex items-center text-red-600 hover:text-red-500"
                  >
                    Meet Our Team
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                <div className="h-48 bg-gray-700 flex items-center justify-center">
                  <span className="text-lg text-gray-400">Modern Facilities</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Modern Facilities</h3>
                  <p className="text-gray-400">
                    Our dojos are equipped with state-of-the-art training equipment and safety features,
                    creating an ideal environment for learning martial arts in a safe and comfortable setting.
                  </p>
                  <Link
                    href="/locations/evans"
                    className="mt-4 inline-flex items-center text-red-600 hover:text-red-500"
                  >
                    Visit Our Locations
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* CTA */}
        <AnimatedElement type="fadeIn" delay={0.7}>
          <div className="bg-gradient-to-r from-red-700 to-red-900 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Begin Your Martial Arts Journey Today</h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Experience the transformative power of traditional martial arts training at
              Seigler's Karate Center. Contact us to schedule your free introductory class.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-red-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/locations/evans"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-md transition-colors"
              >
                Find a Location
              </Link>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </Template>
  );
}
