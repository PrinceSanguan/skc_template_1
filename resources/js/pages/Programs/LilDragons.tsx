import Template from './Template';
import AnimatedElement from '@/components/ui/animated-element';
import { Link } from '@inertiajs/react';

export default function LilDragons() {
  // Sample class schedule
  const schedule = [
    { day: 'Monday', time: '4:30 PM - 5:15 PM' },
    { day: 'Wednesday', time: '4:30 PM - 5:15 PM' },
    { day: 'Saturday', time: '9:00 AM - 9:45 AM' },
  ];

  // Program benefits
  const benefits = [
    {
      title: 'Improved Focus',
      description: 'Activities designed to improve attention span and listening skills in young children.',
      icon: (
        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Motor Skills Development',
      description: 'Fun exercises that enhance coordination, balance, and agility in a safe environment.',
      icon: (
        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Social Skills',
      description: 'Encouraging teamwork, respect, and positive interaction with peers and instructors.',
      icon: (
        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: 'Confidence Building',
      description: 'Age-appropriate challenges that build self-esteem and a sense of accomplishment.',
      icon: (
        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
    },
  ];

  return (
    <Template title="Lil Dragons (4-5)">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden mb-16 h-96">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Lil Dragons Karate Class"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container mx-auto px-4">
              <AnimatedElement type="fadeInUp" delay={0.2}>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Lil Dragons Program</h1>
                <p className="text-xl text-gray-200 max-w-xl">
                  A fun and engaging martial arts program designed especially for children ages 4-5.
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
                The Lil Dragons program at Seigler's Karate Center is specifically designed for young children
                aged 4-5, focusing on developing essential life skills through martial arts in a fun, engaging environment.
              </p>
              <p className="text-gray-300 mb-4">
                Our experienced instructors understand how young children learn and have created age-appropriate
                classes that capture their attention while teaching valuable skills that will benefit them
                throughout their lives.
              </p>
              <p className="text-gray-300">
                Through games, activities, and basic martial arts techniques, children develop coordination,
                balance, focus, and social skills while having a great time. Our supportive environment ensures
                every child feels successful and builds confidence with each class.
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
            <h2 className="text-3xl font-bold text-center mb-12">Benefits for Your Child</h2>

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

        {/* What to Expect */}
        <AnimatedElement type="fadeIn" delay={0.6}>
          <div className="bg-gray-900 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6">What to Expect in Class</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Class Structure</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Warm-up games and exercises</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Basic martial arts techniques</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Coordination and balance activities</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Focus and listening exercises</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Fun cool-down activities</span>
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
                    <span>Comfortable clothing for first class (uniform can be purchased later)</span>
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
                    <span>Positive attitude and willingness to have fun!</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* CTA */}
        <AnimatedElement type="fadeIn" delay={0.7}>
          <div className="bg-gradient-to-r from-red-700 to-red-900 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Give Your Child the Gift of Martial Arts?</h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Start your child's martial arts journey with a free introductory class at Seigler's Karate Center.
              See firsthand how our Lil Dragons program can benefit your child's development.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-red-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors"
              >
                Schedule a Free Class
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
