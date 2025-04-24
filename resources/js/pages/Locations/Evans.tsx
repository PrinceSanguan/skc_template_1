import Template from '../About/Template';
import AnimatedElement from '@/components/ui/animated-element';
import { Link } from '@inertiajs/react';

export default function Evans() {
  // Communities served
  const communitiesServed = [
    "Evans, GA", "Augusta, GA", "Martinez, GA", "Grovetown, GA",
    "Appling, GA", "Harlem, GA", "Fort Eisenhower, GA", "North Augusta, SC"
  ];

  // Reviews
  const reviews = [
    {
      name: "Mark Mills",
      content: "Absolutely one of the best martial arts facilities anywhere."
    },
    {
      name: "Kristine Gaylor Winning",
      content: "Best place to be a kid and even get to learn respect, self control, and discipline. Make it a family sport!!"
    },
    {
      name: "Sharnise Hill",
      content: "My son, Sebastien, really enjoys learning with the other children. As his mother I love how they keep his attention and focus on the class it's helped him a lot with focusing in preschool and at home. And for that I thank the Staff of SKC!!"
    },
    {
      name: "Crystal",
      content: "They're very informative, give clear descriptions of what the class consist of with structure. They have payment plans that are reasonable if you can't afford to pay it all at once. If you are a single mother that want to get your kid(s) focused, disciplined and full of confidence…than Seiglers Karate is the place to be. My kid has enjoyed this class and has been attending for a little over a month, plus they are very supportive for not just the kid but the parents."
    },
    {
      name: "Sarah Hemphill",
      content: "My son has been attending SKC for almost 2 yrs. He absolutely looks forward to his classes every week and loves the parties they have. He's started to set goals for himself over the year and it's a proud and exciting moment for both him and I to see him achieve them! The instructors are fantastic at what they do and seem to make an effort to focus on making your kid better even in a full class of students! I highly recommend SKC to anyone considering karate for their child!"
    },
    {
      name: "Kimberly Perry Sanderlin",
      content: "Just started but the journey has been AMAZING! Could see a difference in son's FOCUS and SELF-AWARENESS after the consult session! Received his Gi and starter packet today and he's excited about his next session! Thanks for developing such a comprehensive program! Definitely getting MORE than many face-to-face offerings!"
    },
    {
      name: "Braswell Tanksley",
      content: "This is an excellent program for children it helps boost confidence and increases their mental focus as well as discipline."
    }
  ];

  // Operating hours
  const operatingHours = [
    { day: 'Monday', hours: '1:00 PM – 9:00 PM' },
    { day: 'Tuesday', hours: '1:00 PM – 9:00 PM' },
    { day: 'Wednesday', hours: '1:00 PM – 9:00 PM' },
    { day: 'Thursday', hours: '1:00 PM – 9:00 PM' },
    { day: 'Friday', hours: '1:00 PM – 9:00 PM' },
    { day: 'Saturday', hours: 'Open for Special Events Only' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <Template title="Evans Location">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/50 to-black/60 rounded-xl transform -skew-y-1 z-0"></div>
          <div className="relative z-10 py-12 px-8">
            <AnimatedElement type="fadeIn" delay={0.2}>
              <h1 className="text-5xl font-bold text-center mb-4 text-white drop-shadow-md">Evans, GA Location</h1>
            </AnimatedElement>

            <AnimatedElement type="fadeIn" delay={0.3}>
              <p className="text-xl text-center text-gray-200 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
                Nestled in the Central Savannah River Area (CSRA), our premier Evans dojo provides
                state-of-the-art facilities and expert instruction for martial artists of all levels.
              </p>
            </AnimatedElement>
          </div>
        </div>

        {/* Location Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Facility Gallery */}
          <AnimatedElement type="slideInLeft" delay={0.4}>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700/30 transition-all duration-300 hover:shadow-red-900/20 hover:border-red-800/30">
              <div className="aspect-w-16 aspect-h-9">
                <div className="h-72 bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center">
                  <span className="text-lg text-gray-400">Facility Image</span>
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-white">Our Facility</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Our state-of-the-art facility features padded training areas,
                  specialized equipment, changing rooms, a viewing area for parents,
                  and a pro shop with quality martial arts supplies.
                </p>
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="h-24 bg-gray-800/70 rounded-lg flex items-center justify-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-700/70 cursor-pointer border border-gray-700/50">
                    <span className="text-sm text-gray-400">Image 1</span>
                  </div>
                  <div className="h-24 bg-gray-800/70 rounded-lg flex items-center justify-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-700/70 cursor-pointer border border-gray-700/50">
                    <span className="text-sm text-gray-400">Image 2</span>
                  </div>
                  <div className="h-24 bg-gray-800/70 rounded-lg flex items-center justify-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-700/70 cursor-pointer border border-gray-700/50">
                    <span className="text-sm text-gray-400">Image 3</span>
                  </div>
                  <div className="h-24 bg-gray-800/70 rounded-lg flex items-center justify-center transform transition-all duration-300 hover:scale-105 hover:bg-gray-700/70 cursor-pointer border border-gray-700/50">
                    <span className="text-sm text-gray-400">Image 4</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* Contact & Location */}
          <AnimatedElement type="slideInRight" delay={0.4}>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-2xl h-full border border-gray-700/30 transition-all duration-300 hover:shadow-red-900/20 hover:border-red-800/30">
              <div className="aspect-w-16 aspect-h-9">
                <div className="h-72 bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center">
                  <span className="text-lg text-gray-400">Map Location</span>
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-white">Location & Contact</h2>

                <div className="space-y-6">
                  <div className="flex items-start group">
                    <div className="bg-gradient-to-br from-red-600 to-red-700 p-3 rounded-full mr-4 shadow-lg group-hover:shadow-red-500/20 transition-all duration-300 group-hover:scale-110">
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Address</h3>
                      <p className="text-gray-300 mt-2 group-hover:text-gray-200 transition-colors duration-300">
                        4150 Washington Road, Suite 4<br />
                        Evans, GA 30809
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="bg-gradient-to-br from-red-600 to-red-700 p-3 rounded-full mr-4 shadow-lg group-hover:shadow-red-500/20 transition-all duration-300 group-hover:scale-110">
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Phone</h3>
                      <p className="text-gray-300 mt-2 group-hover:text-gray-200 transition-colors duration-300">(706) 855-5685</p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="bg-gradient-to-br from-red-600 to-red-700 p-3 rounded-full mr-4 shadow-lg group-hover:shadow-red-500/20 transition-all duration-300 group-hover:scale-110">
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Email</h3>
                      <p className="text-gray-300 mt-2 group-hover:text-gray-200 transition-colors duration-300">skc@goskc.com</p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="bg-gradient-to-br from-red-600 to-red-700 p-3 rounded-full mr-4 shadow-lg group-hover:shadow-red-500/20 transition-all duration-300 group-hover:scale-110">
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Hours</h3>
                      <div className="text-gray-300 mt-2 group-hover:text-gray-200 transition-colors duration-300 space-y-1">
                        {operatingHours.map((item, index) => (
                          <div key={index} className="flex justify-between">
                            <span className="font-medium w-32">{item.day}:</span>
                            <span>{item.hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="block w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-center font-medium py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-red-600/30 transform hover:-translate-y-1"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>

        {/* About Our Evans Location */}
        <AnimatedElement type="fadeIn" delay={0.5}>
          <div className="mb-20">
            <div className="flex flex-col items-center mb-10">
              <h2 className="text-3xl font-bold text-center mb-2">About Our Evans Location</h2>
              <div className="w-20 h-1 bg-red-600 rounded-full mb-2"></div>
              <div className="w-10 h-1 bg-red-600 rounded-full"></div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-10 shadow-2xl border border-gray-700/30">
              <p className="text-gray-200 mb-6 leading-relaxed">
                Nestled in the Central Savana River Area or CSRA, Seigler's Karate Center offers more than just martial arts training. It's a vibrant community where both kids and adults come together to build confidence, develop leadership skills, and embrace personal growth. Our focus goes beyond mastering punches and kicks; we're dedicated to fostering an environment where everyone can thrive and evolve.
              </p>

              <p className="text-gray-200 mb-6 leading-relaxed">
                Martial arts is far more than what you see in movies. It's a journey that instills discipline, respect, and perseverance—qualities that benefit every aspect of life. Augusta, with its dynamic and diverse community, perfectly complements our mission.
              </p>

              <p className="text-gray-200 mb-6 leading-relaxed">
                At SKC, we are committed to making a meaningful impact, helping our members grow into confident, compassionate, and wise individuals.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <span className="bg-red-600 p-2 rounded-full mr-3">
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </span>
                    For Children
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Martial arts provides a strong foundation in self-esteem and respect, essential in today's world. Facing challenges like bullying and peer pressure becomes easier with the confidence and skills gained from our classes. We teach kids that perseverance through tough times leads to growth, both in martial arts and in life.
                  </p>
                </div>

                <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <span className="bg-red-600 p-2 rounded-full mr-3">
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </span>
                    For Adults
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Adults find our school to be a sanctuary from the hustle and bustle of daily life. It's not just about getting fit; it's about joining a community committed to self-improvement. Our dojo offers a holistic approach to wellness, combining physical fitness with mental clarity and personal fulfillment.
                  </p>
                </div>
              </div>

              <p className="text-gray-200 mt-10 leading-relaxed">
                At SKC, we believe in the transformative power of martial arts to enhance every aspect of life. We focus on nurturing the whole person—body, mind, and spirit. Joining our dojo means taking on life's challenges with courage and an open heart. We're proud to be Augusta's premier destination for personal growth, where leaders are developed and the community becomes stronger every day.
              </p>
            </div>
          </div>
        </AnimatedElement>

        {/* Communities We Serve */}
        <AnimatedElement type="fadeIn" delay={0.5}>
          <div className="mb-20">
            <div className="flex flex-col items-center mb-10">
              <p className="uppercase text-sm font-bold tracking-wider text-red-500 mb-2">COMMUNITIES WE SERVE</p>
              <h2 className="text-3xl font-bold text-center mb-2">Providing High-Quality Martial Arts</h2>
              <div className="w-20 h-1 bg-red-600 rounded-full mb-2"></div>
              <div className="w-10 h-1 bg-red-600 rounded-full"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {communitiesServed.map((community, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-700/30 transform transition-all duration-300 hover:scale-105 hover:shadow-red-900/20 hover:border-red-800/30">
                  <div className="mx-auto mb-4 bg-gradient-to-br from-red-600 to-red-700 p-3 rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold text-lg">{community}</h4>
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>

        {/* Reviews & Testimonials */}
        <AnimatedElement type="fadeIn" delay={0.6}>
          <div className="mb-20">
            <div className="flex flex-col items-center mb-10">
              <p className="uppercase text-sm font-bold tracking-wider text-red-500 mb-2">REVIEWS & FEEDBACK</p>
              <h2 className="text-3xl font-bold text-center mb-2">Hear From Our Community</h2>
              <div className="w-20 h-1 bg-red-600 rounded-full mb-2"></div>
              <div className="w-10 h-1 bg-red-600 rounded-full mb-6"></div>
              <p className="text-gray-300 text-center max-w-3xl">
                See what our members are saying! Browse through the reviews to get a glimpse of the SKC experience straight from our community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.slice(0, 6).map((review, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-xl border border-gray-700/30 transform transition-all duration-300 hover:shadow-red-900/20 hover:border-red-800/30">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                        {review.name.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{review.name}</h4>
                      <div className="flex text-yellow-400 mt-1">
                        <span>★★★★★</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <svg className="absolute -top-4 -left-2 h-8 w-8 text-red-600/30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-gray-300 relative pl-6 leading-relaxed">
                      {review.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>

        {/* CTA */}
        <AnimatedElement type="fadeIn" delay={0.7}>
          <div className="bg-gradient-to-r from-red-800 to-red-900 rounded-xl p-10 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-pattern opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Martial Arts Journey?</h2>
              <p className="text-white text-lg mb-10 max-w-2xl mx-auto">
                Join us at Seigler's Karate Center in Evans and discover the transformative power of
                martial arts training. We offer a free introductory class for new students!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link
                  href="/contact"
                  className="bg-white text-red-700 hover:bg-gray-100 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:shadow-white/30 transform hover:-translate-y-1"
                >
                  Schedule a Free Class
                </Link>
                <Link
                  href="/programs"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:shadow-white/20 transform hover:-translate-y-1"
                >
                  Explore Our Programs
                </Link>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </Template>
  );
}
