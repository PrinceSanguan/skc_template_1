import Template from '../About/Template';
import AnimatedElement from '@/components/ui/animated-element';
import { Link } from '@inertiajs/react';

export default function Grovetown() {
  // Sample class schedule
  const classSchedule = [
    { day: 'Monday', classes: [
      { time: '4:00 PM - 4:45 PM', name: 'Little Dragons (Ages 4-6)' },
      { time: '5:00 PM - 5:45 PM', name: 'Junior Karate (Ages 7-12)' },
      { time: '6:00 PM - 7:00 PM', name: 'Teen & Adult Karate (Ages 13+)' },
      { time: '7:15 PM - 8:15 PM', name: 'Competition Training' },
    ]},
    { day: 'Tuesday', classes: [
      { time: '4:00 PM - 4:45 PM', name: 'Little Dragons (Ages 4-6)' },
      { time: '5:00 PM - 5:45 PM', name: 'Junior Karate (Ages 7-12)' },
      { time: '6:00 PM - 7:00 PM', name: 'Teen & Adult Karate (Ages 13+)' },
      { time: '7:15 PM - 8:15 PM', name: 'Self-Defense Basics' },
    ]},
    { day: 'Wednesday', classes: [
      { time: '4:00 PM - 4:45 PM', name: 'Little Dragons (Ages 4-6)' },
      { time: '5:00 PM - 5:45 PM', name: 'Junior Karate (Ages 7-12)' },
      { time: '6:00 PM - 7:00 PM', name: 'Teen & Adult Karate (Ages 13+)' },
      { time: '7:15 PM - 8:15 PM', name: 'Advanced Kata' },
    ]},
    { day: 'Thursday', classes: [
      { time: '4:00 PM - 4:45 PM', name: 'Little Dragons (Ages 4-6)' },
      { time: '5:00 PM - 5:45 PM', name: 'Junior Karate (Ages 7-12)' },
      { time: '6:00 PM - 7:00 PM', name: 'Teen & Adult Karate (Ages 13+)' },
      { time: '7:15 PM - 8:15 PM', name: 'Weapons Training' },
    ]},
    { day: 'Friday', classes: [
      { time: '4:00 PM - 4:45 PM', name: 'Little Dragons (Ages 4-6)' },
      { time: '5:00 PM - 5:45 PM', name: 'Junior Karate (Ages 7-12)' },
      { time: '6:00 PM - 7:00 PM', name: 'Teen & Adult Karate (Ages 13+)' },
      { time: '7:15 PM - 8:15 PM', name: 'Black Belt Club' },
    ]},
    { day: 'Saturday', classes: [
      { time: '9:00 AM - 9:45 AM', name: 'Little Dragons (Ages 4-6)' },
      { time: '10:00 AM - 10:45 AM', name: 'Junior Karate (Ages 7-12)' },
      { time: '11:00 AM - 12:00 PM', name: 'All Levels Open Training' },
      { time: '12:15 PM - 1:15 PM', name: 'Family Class' },
    ]},
  ];

  return (
    <Template title="Grovetown Location">
      <div className="container mx-auto px-4 py-16">
        <AnimatedElement type="fadeIn" delay={0.2}>
          <h1 className="text-4xl font-bold text-center mb-4">Grovetown, GA Location</h1>
        </AnimatedElement>

        <AnimatedElement type="fadeIn" delay={0.3}>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Our Grovetown dojo is a modern training facility offering comprehensive martial arts instruction
            and a welcoming community atmosphere.
          </p>
        </AnimatedElement>

        {/* Location Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Facility Gallery */}
          <AnimatedElement type="slideInLeft" delay={0.4}>
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <div className="h-72 bg-gray-700 flex items-center justify-center">
                  <span className="text-lg text-gray-400">Facility Image</span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Our Facility</h2>
                <p className="text-gray-400 mb-4">
                  Located in the heart of Grovetown, our 4,000 square-foot facility includes
                  modern training areas, a pro shop, comfortable waiting area, and
                  full changing facilities for students.
                </p>
                <div className="grid grid-cols-2 gap-2 mt-6">
                  <div className="h-24 bg-gray-800 rounded flex items-center justify-center">
                    <span className="text-sm text-gray-500">Image 1</span>
                  </div>
                  <div className="h-24 bg-gray-800 rounded flex items-center justify-center">
                    <span className="text-sm text-gray-500">Image 2</span>
                  </div>
                  <div className="h-24 bg-gray-800 rounded flex items-center justify-center">
                    <span className="text-sm text-gray-500">Image 3</span>
                  </div>
                  <div className="h-24 bg-gray-800 rounded flex items-center justify-center">
                    <span className="text-sm text-gray-500">Image 4</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* Contact & Location */}
          <AnimatedElement type="slideInRight" delay={0.4}>
            <div className="bg-gray-900 rounded-lg overflow-hidden h-full">
              <div className="aspect-w-16 aspect-h-9">
                <div className="h-72 bg-gray-700 flex items-center justify-center">
                  <span className="text-lg text-gray-400">Map Location</span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Location & Contact</h2>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-red-600 p-2 rounded-full mr-3">
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Address</h3>
                      <p className="text-gray-400 mt-1">
                        456 Karate Avenue<br />
                        Grovetown, GA 30813
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-600 p-2 rounded-full mr-3">
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Phone</h3>
                      <p className="text-gray-400 mt-1">(706) 456-7890</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-600 p-2 rounded-full mr-3">
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Email</h3>
                      <p className="text-gray-400 mt-1">grovetown@sieglerskarate.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-600 p-2 rounded-full mr-3">
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">Hours</h3>
                      <p className="text-gray-400 mt-1">
                        Monday - Friday: 3:30 PM - 9:00 PM<br />
                        Saturday: 9:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="block w-full bg-red-600 hover:bg-red-700 text-white text-center font-medium py-3 px-4 rounded-md transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>

        {/* Class Schedule */}
        <AnimatedElement type="fadeIn" delay={0.5}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Class Schedule</h2>

            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-gray-700">
                        Day
                      </th>
                      <th className="py-3 px-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider border-b border-gray-700">
                        Classes
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {classSchedule.map((day) => (
                      <tr key={day.day}>
                        <td className="py-4 px-4 whitespace-nowrap text-sm font-medium text-white bg-gray-800">
                          {day.day}
                        </td>
                        <td className="py-4 px-4">
                          <div className="space-y-3">
                            {day.classes.map((cls, index) => (
                              <div key={index} className="flex flex-col sm:flex-row sm:items-center">
                                <span className="font-medium text-red-500 sm:w-48">{cls.time}</span>
                                <span className="text-gray-300">{cls.name}</span>
                              </div>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Instructors */}
        <AnimatedElement type="fadeIn" delay={0.6}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Instructors</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                <div className="h-64 bg-gray-700 flex items-center justify-center">
                  <span className="text-lg text-gray-400">Instructor Photo</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">David Thompson</h3>
                  <p className="text-red-600 mb-3">Head Instructor</p>
                  <p className="text-gray-400">
                    David brings 20 years of martial arts experience to the Grovetown dojo.
                    His teaching focuses on traditional karate principles with practical applications.
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                <div className="h-64 bg-gray-700 flex items-center justify-center">
                  <span className="text-lg text-gray-400">Instructor Photo</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">Michelle Rodriguez</h3>
                  <p className="text-red-600 mb-3">Children's Program Director</p>
                  <p className="text-gray-400">
                    Michelle specializes in teaching martial arts to children, creating engaging classes
                    that develop focus, confidence, and coordination in young students.
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                <div className="h-64 bg-gray-700 flex items-center justify-center">
                  <span className="text-lg text-gray-400">Instructor Photo</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">James Wilson</h3>
                  <p className="text-red-600 mb-3">Competition Coach</p>
                  <p className="text-gray-400">
                    James is our competition specialist with numerous tournament wins. He prepares
                    students for competitions and teaches advanced techniques for competitive karate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* CTA */}
        <AnimatedElement type="fadeIn" delay={0.7}>
          <div className="bg-gradient-to-r from-red-700 to-red-900 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Begin Your Martial Arts Journey Today!</h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Experience the benefits of traditional karate training at our Grovetown location.
              We welcome students of all ages and abilities with a free introductory class.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-red-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors"
              >
                Try a Free Class
              </Link>
              <Link
                href="/programs"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-md transition-colors"
              >
                View Programs
              </Link>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </Template>
  );
}
