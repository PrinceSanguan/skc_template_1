import Template from './Template';
import AnimatedElement from '@/components/ui/animated-element';
import { Link } from '@inertiajs/react';

export default function Kickboxing() {
  // Sample class schedule
  const schedule = [
    { day: 'Tuesday', time: '7:00 PM - 8:00 PM' },
    { day: 'Thursday', time: '7:00 PM - 8:00 PM' },
    { day: 'Saturday', time: '10:00 AM - 11:00 AM' },
  ];

  // Program benefits
  const benefits = [
    {
      title: 'Full Body Workout',
      description: 'Burn calories, build muscle, and improve cardiovascular health through high-intensity training.',
      icon: (
        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: 'Stress Relief',
      description: 'Channel negative energy and daily stress into powerful strikes and combinations.',
      icon: (
        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Self-Defense Skills',
      description: 'Learn practical striking techniques that work in real-world self-defense situations.',
      icon: (
        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Confidence Building',
      description: 'Develop mental toughness and self-assurance through challenging training and skill development.',
      icon: (
        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <Template title="Kickboxing (14+)">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden mb-16 h-96">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Kickboxing Class"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container mx-auto px-4">
              <AnimatedElement type="fadeInUp" delay={0.2}>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Kickboxing Program</h1>
                <p className="text-xl text-gray-200 max-w-xl">
                  A high-energy martial arts fitness program combining boxing, kicks, and conditioning for ages 14 and up.
                </p>
              </AnimatedElement>
            </div>
          </div>
        </div>

        {/* Program Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <AnimatedElement type="slideInLeft" delay={0.3}>
            <div>
              <h2 className="text-3xl font-bold mb-6">Program Overview</h2>
              <p className="text-gray-300 mb-4">
                Our Kickboxing program at Seigler's Karate Center combines elements of boxing, Muay Thai, and
                traditional martial arts into an exciting, high-energy workout that develops functional striking
                skills while providing an exceptional cardiovascular training experience.
              </p>
              <p className="text-gray-300 mb-4">
                Whether you're looking to get in shape, learn practical self-defense, or simply enjoy a fun
                and challenging workout, our kickboxing classes offer something for everyone. No previous martial
                arts experience is required—just bring your enthusiasm and willingness to learn!
              </p>
              <p className="text-gray-300">
                Each class incorporates pad work, bag drills, partner exercises, and conditioning to create a
                comprehensive training session that will leave you feeling empowered and energized.
              </p>
            </div>
          </AnimatedElement>

          <AnimatedElement type="slideInRight" delay={0.4}>
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Class Schedule</h3>

              <div className="mb-6">
                <h4 className="font-medium text-gray-300 mb-2">Evans Location</h4>
                <div className="space-y-2">
                  {schedule.map((item, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-gray-800">
                      <span className="font-medium">{item.day}</span>
                      <span className="text-gray-400">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-300 mb-2">Grovetown Location</h4>
                <div className="space-y-2">
                  {schedule.map((item, index) => (
                    <div key={`g-${index}`} className="flex justify-between py-2 border-b border-gray-800">
                      <span className="font-medium">{item.day}</span>
                      <span className="text-gray-400">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>

        {/* Program Benefits */}
        <AnimatedElement type="fadeIn" delay={0.5}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Program Benefits</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>

        {/* Class Structure */}
        <AnimatedElement type="fadeIn" delay={0.6}>
          <div className="bg-gray-900 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6">Class Structure</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Typical Session</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Dynamic warm-up and joint mobility (10 min)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Technical training - proper striking form (15 min)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Combination work on pads/bags (15 min)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Partner drills and defensive techniques (10 min)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Conditioning exercises and cool-down (10 min)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">What to Bring</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Comfortable athletic clothing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Hand wraps (can be purchased at our pro shop)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Boxing gloves (16oz recommended, available for loan)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Water bottle</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Towel (optional)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Skill Levels */}
        <AnimatedElement type="fadeIn" delay={0.7}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Skill Levels</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-center">Beginner</h3>
                <p className="text-gray-400 mb-4">Perfect for those new to martial arts or kickboxing. Focus on fundamental techniques, basic combinations, and building fitness foundations.</p>
                <ul className="text-gray-400 space-y-2">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-red-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Learn proper stance and basic striking</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-red-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Develop coordination and balance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-red-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Build foundational fitness</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-center">Intermediate</h3>
                <p className="text-gray-400 mb-4">For students with some kickboxing experience who are ready to advance their skills and increase training intensity.</p>
                <ul className="text-gray-400 space-y-2">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-red-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>More complex striking combinations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-red-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Introduction to defensive techniques</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-red-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Higher intensity conditioning</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-center">Advanced</h3>
                <p className="text-gray-400 mb-4">For experienced practitioners looking to refine their skills and train at peak intensity.</p>
                <ul className="text-gray-400 space-y-2">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-red-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Advanced combination work and timing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-red-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Technical sparring (optional)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-red-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Performance-level conditioning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* CTA */}
        <AnimatedElement type="fadeIn" delay={0.8}>
          <div className="bg-gradient-to-r from-red-700 to-red-900 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Kickstart Your Fitness Journey?</h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Experience the ultimate full-body workout that builds strength, confidence, and real-world skills.
              Join us for a free introductory class today!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-red-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors"
              >
                Try Your First Class FREE
              </Link>
              <Link
                href="/programs"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-md transition-colors"
              >
                View All Programs
              </Link>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </Template>
  );
}
