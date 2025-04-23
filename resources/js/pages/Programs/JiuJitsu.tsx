import React from 'react';
import Template from './Template';
import AnimatedElement from '@/components/ui/animated-element';
import { Link } from '@inertiajs/react';

export default function JiuJitsu() {
  // Sample class schedule
  const schedule = [
    { day: 'Monday', time: '7:30 PM - 8:30 PM' },
    { day: 'Wednesday', time: '7:30 PM - 8:30 PM' },
    { day: 'Saturday', time: '1:30 PM - 2:30 PM' },
  ];

  // Program benefits
  const benefits = [
    {
      title: 'Effective Self-Defense',
      description: 'Learn techniques that allow smaller individuals to defend against larger, stronger opponents.',
      icon: (
        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Full-Body Conditioning',
      description: 'Develop functional strength, flexibility, and cardiovascular endurance through grappling movements.',
      icon: (
        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Mental Discipline',
      description: 'Enhance focus, problem-solving skills, and strategic thinking through live training scenarios.',
      icon: (
        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Stress Relief',
      description: 'Experience the meditative benefits of training that helps clear your mind and reduce anxiety.',
      icon: (
        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  // Belt progression
  const beltProgression = [
    {
      color: 'White',
      description: 'The beginning of your journey. Focus on basic positions, escapes, and fundamental techniques.'
    },
    {
      color: 'Blue',
      description: 'Develop a solid defensive game while expanding your offensive techniques and transitions.'
    },
    {
      color: 'Purple',
      description: 'Begin developing your personal style and exploring advanced techniques and combinations.'
    },
    {
      color: 'Brown',
      description: 'Refine your technical skills and develop deeper strategic understanding of the art.'
    },
    {
      color: 'Black',
      description: 'The journey continues as you master the nuances of the art and perhaps begin teaching others.'
    },
  ];

  return (
    <Template title="Jiu Jitsu (14+)">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden mb-16 h-96">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1577998474517-7eeeed4e448a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Jiu Jitsu Class"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container mx-auto px-4">
              <AnimatedElement type="fadeInUp" delay={0.2}>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Jiu Jitsu Program</h1>
                <p className="text-xl text-gray-200 max-w-xl">
                  A comprehensive ground-fighting martial art system focused on leverage and technique over strength.
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
                Our Jiu Jitsu program teaches the "gentle art" of ground fighting, focusing on leverage, technique,
                and strategy rather than strength and power. This martial art enables practitioners to subdue larger,
                stronger opponents through efficient use of energy and body mechanics.
              </p>
              <p className="text-gray-300 mb-4">
                Classes are structured to provide a safe, supportive learning environment where students progress at
                their own pace. Each session includes a variety of drills, technical instruction, positional training,
                and live rolling (sparring) under the guidance of experienced instructors.
              </p>
              <p className="text-gray-300">
                Whether your goal is self-defense, competition, fitness, or personal growth, our Jiu Jitsu program
                offers a path to achievement that challenges both mind and body while building confidence and resilience.
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

        {/* Belt Progression */}
        <AnimatedElement type="fadeIn" delay={0.6}>
          <div className="bg-gray-900 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Belt Progression</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {beltProgression.map((belt, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg flex flex-col items-center text-center">
                  <div
                    className="w-20 h-6 mb-4 rounded"
                    style={{
                      backgroundColor: belt.color.toLowerCase() === 'white' ? '#f9fafb' :
                                      belt.color.toLowerCase() === 'blue' ? '#3b82f6' :
                                      belt.color.toLowerCase() === 'purple' ? '#8b5cf6' :
                                      belt.color.toLowerCase() === 'brown' ? '#92400e' : '#111827',
                      border: belt.color.toLowerCase() === 'white' ? '1px solid #e5e7eb' : 'none'
                    }}
                  ></div>
                  <h3 className="text-xl font-semibold mb-2">{belt.color}</h3>
                  <p className="text-gray-400">{belt.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>

        {/* Class Structure */}
        <AnimatedElement type="fadeIn" delay={0.7}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Class Structure</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Training Elements</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-medium">Warm-up (15 min)</span>
                      <p className="text-sm text-gray-400 mt-1">Mobility exercises, movement drills, and fundamental movements that prepare the body.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-medium">Technical Instruction (20 min)</span>
                      <p className="text-sm text-gray-400 mt-1">Detailed breakdown of specific techniques with guided practice and instructor feedback.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-medium">Positional Training (15 min)</span>
                      <p className="text-sm text-gray-400 mt-1">Focused drills starting from specific positions to develop competence in various scenarios.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-medium">Live Training (20 min)</span>
                      <p className="text-sm text-gray-400 mt-1">Controlled sparring sessions where techniques are applied against a resisting opponent.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Required Equipment</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-medium">BJJ Gi (uniform)</span>
                      <p className="text-sm text-gray-400 mt-1">White, blue, or black gi for traditional training (available at our pro shop).</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-medium">Rash guard and shorts</span>
                      <p className="text-sm text-gray-400 mt-1">For no-gi training days (typically once per week).</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-medium">Mouthguard</span>
                      <p className="text-sm text-gray-400 mt-1">Highly recommended for protection during live training.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="font-medium">Other accessories</span>
                      <p className="text-sm text-gray-400 mt-1">Water bottle, towel, and athletic tape (optional).</p>
                    </div>
                  </li>
                </ul>
                <p className="mt-4 text-gray-400 text-sm">Rental gis are available for beginners until they purchase their own.</p>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* CTA */}
        <AnimatedElement type="fadeIn" delay={0.8}>
          <div className="bg-gradient-to-r from-red-700 to-red-900 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Begin Your Jiu Jitsu Journey</h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Experience the art that has transformed the martial arts world and develop skills that last a lifetime.
              Start with a free introductory class today.
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
