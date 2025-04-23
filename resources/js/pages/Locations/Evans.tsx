import Template from '../About/Template';
import AnimatedElement from '@/components/ui/animated-element';
import { Link } from '@inertiajs/react';

export default function Evans() {
  // Sample class schedule
  const classSchedule = [
    { day: 'Monday', classes: [
      { time: '4:00 PM - 4:45 PM', name: 'Little Dragons (Ages 4-6)' },
      { time: '5:00 PM - 5:45 PM', name: 'Junior Karate (Ages 7-12)' },
      { time: '6:00 PM - 7:00 PM', name: 'Teen & Adult Karate (Ages 13+)' },
      { time: '7:15 PM - 8:15 PM', name: 'Advanced Kata & Kumite' },
    ]},
    { day: 'Tuesday', classes: [
      { time: '4:00 PM - 4:45 PM', name: 'Little Dragons (Ages 4-6)' },
      { time: '5:00 PM - 5:45 PM', name: 'Junior Karate (Ages 7-12)' },
      { time: '6:00 PM - 7:00 PM', name: 'Teen & Adult Karate (Ages 13+)' },
      { time: '7:15 PM - 8:15 PM', name: 'Weapons Training' },
    ]},
    { day: 'Wednesday', classes: [
      { time: '4:00 PM - 4:45 PM', name: 'Little Dragons (Ages 4-6)' },
      { time: '5:00 PM - 5:45 PM', name: 'Junior Karate (Ages 7-12)' },
      { time: '6:00 PM - 7:00 PM', name: 'Teen & Adult Karate (Ages 13+)' },
      { time: '7:15 PM - 8:15 PM', name: 'Black Belt Club' },
    ]},
    { day: 'Thursday', classes: [
      { time: '4:00 PM - 4:45 PM', name: 'Little Dragons (Ages 4-6)' },
      { time: '5:00 PM - 5:45 PM', name: 'Junior Karate (Ages 7-12)' },
      { time: '6:00 PM - 7:00 PM', name: 'Teen & Adult Karate (Ages 13+)' },
      { time: '7:15 PM - 8:15 PM', name: 'Self-Defense Workshop' },
    ]},
    { day: 'Friday', classes: [
      { time: '4:00 PM - 4:45 PM', name: 'Little Dragons (Ages 4-6)' },
      { time: '5:00 PM - 5:45 PM', name: 'Junior Karate (Ages 7-12)' },
      { time: '6:00 PM - 7:00 PM', name: 'Teen & Adult Karate (Ages 13+)' },
      { time: '7:15 PM - 8:15 PM', name: 'Competition Team Training' },
    ]},
    { day: 'Saturday', classes: [
      { time: '9:00 AM - 9:45 AM', name: 'Little Dragons (Ages 4-6)' },
      { time: '10:00 AM - 10:45 AM', name: 'Junior Karate (Ages 7-12)' },
      { time: '11:00 AM - 12:00 PM', name: 'All Levels Open Training' },
      { time: '12:15 PM - 1:15 PM', name: 'Specialty Workshop (Varies)' },
    ]},
  ];

  return (
    <Template title="Evans Location">
      <div className="container mx-auto px-4 py-16">
        <AnimatedElement type="fadeIn" delay={0.2}>
          <h1 className="text-4xl font-bold text-center mb-4">Evans, GA Location</h1>
        </AnimatedElement>

        <AnimatedElement type="fadeIn" delay={0.3}>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Our premier Evans dojo provides state-of-the-art facilities and expert instruction
            for martial artists of all levels in Columbia County.
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
                  Our 5,000 square-foot facility features padded training areas,
                  specialized equipment, changing rooms, a viewing area for parents,
                  and a pro shop with quality martial arts supplies.
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
                        123 Martial Arts Way<br />
                        Evans, GA 30809
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
                      <p className="text-gray-400 mt-1">(706) 123-4567</p>
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
                      <p className="text-gray-400 mt-1">evans@sieglerskarate.com</p>
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
                  <h3 className="text-xl font-semibold text-white">John Seigler</h3>
                  <p className="text-red-600 mb-3">Head Instructor</p>
                  <p className="text-gray-400">
                    John has over 30 years of martial arts experience and is a 7th-degree black belt.
                    He specializes in traditional karate techniques and competition training.
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                <div className="h-64 bg-gray-700 flex items-center justify-center">
                  <span className="text-lg text-gray-400">Instructor Photo</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">Sarah Johnson</h3>
                  <p className="text-red-600 mb-3">Youth Program Director</p>
                  <p className="text-gray-400">
                    Sarah leads our youth programs with enthusiasm and patience. She has a special talent
                    for working with children and helping them develop confidence through martial arts.
                  </p>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                <div className="h-64 bg-gray-700 flex items-center justify-center">
                  <span className="text-lg text-gray-400">Instructor Photo</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">Michael Chen</h3>
                  <p className="text-red-600 mb-3">Weapons Specialist</p>
                  <p className="text-gray-400">
                    Michael brings his expertise in traditional weapons to our dojo. He teaches students
                    the art and discipline of weapons training with precision and respect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* CTA */}
        <AnimatedElement type="fadeIn" delay={0.7}>
          <div className="bg-gradient-to-r from-red-700 to-red-900 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Your Martial Arts Journey?</h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Join us at Seigler's Karate Center in Evans and discover the transformative power of
              martial arts training. We offer a free introductory class for new students!
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
                Explore Our Programs
              </Link>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </Template>
  );
}
