import Template from '../Programs/Template';
import AnimatedElement from '@/components/ui/animated-element';
import { Link } from '@inertiajs/react';

export default function VideoTestimonials() {
  // Video testimonials data
  const videoTestimonials = [
    {
      id: 1,
      name: "James Thompson",
      age: 12,
      program: "Kids Karate",
      years: 4,
      title: "From Bullied to Black Belt",
      description: "When James first came to us at age 8, he was being bullied at school and struggled with self-confidence. After 4 years of dedicated training, he not only earned his black belt but also developed the confidence to stand up for himself and others.",
      thumbnail: "https://images.unsplash.com/photo-1555597673-b21d5c3c8c9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      age: 34,
      program: "Adult Kempo",
      years: 2,
      title: "Finding Strength After Adversity",
      description: "After recovering from a serious injury, Sarah found both physical and mental healing through martial arts. Her journey at Seigler's Karate Center demonstrates how martial arts can help rebuild strength, confidence, and resilience.",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 3,
      name: "The Martinez Family",
      title: "A Family Transformed",
      description: "What started as karate lessons for their kids turned into a family activity that transformed the Martinez family. Hear how training together has strengthened their bonds and brought positive changes to all their lives.",
      thumbnail: "https://images.unsplash.com/photo-1591343395082-e120087004b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    },
    {
      id: 4,
      name: "Coach Mike",
      program: "Teens Karate",
      years: 10,
      title: "The Instructor's Perspective",
      description: "Coach Mike has been teaching at Seigler's for over a decade. In this video, he shares his most memorable moments seeing students transform and grow through martial arts training.",
      thumbnail: "https://images.unsplash.com/photo-1560233026-ad254f24676b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    },
  ];

  return (
    <Template title="Video Testimonials">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <AnimatedElement type="fadeIn" delay={0.2}>
          <h1 className="text-4xl font-bold text-center mb-4">Video Testimonials</h1>
        </AnimatedElement>

        <AnimatedElement type="fadeIn" delay={0.3}>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Watch inspiring videos from our students sharing their martial arts journey at Seigler's Karate Center.
          </p>
        </AnimatedElement>

        {/* Video Testimonials Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoTestimonials.map((video, index) => (
              <AnimatedElement key={video.id} type="fadeInUp" delay={0.4 + index * 0.1}>
                <div className="bg-gray-900 rounded-lg overflow-hidden h-full flex flex-col">
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <button className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                    <div className="mb-4">
                      <span className="text-gray-400">Featuring: {video.name}</span>
                      {video.age && <span className="text-gray-400"> | {video.age} years old</span>}
                      {video.program && <span className="text-gray-400"> | {video.program}</span>}
                      {video.years && <span className="text-gray-400"> | {video.years} {video.years === 1 ? 'year' : 'years'} of training</span>}
                    </div>
                    <p className="text-gray-300 mb-6 flex-grow">{video.description}</p>
                    <button className="self-start bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition-colors">
                      Watch Video
                    </button>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>

        {/* Featured Video Section */}
        <AnimatedElement type="fadeIn" delay={0.8}>
          <div className="bg-gray-900 rounded-lg overflow-hidden mb-16">
            <div className="md:flex">
              <div className="md:w-2/3 relative">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-20 h-20 text-red-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-300">Click to watch our student success highlights</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 p-8">
                <h3 className="text-2xl font-bold mb-4">Student Success Highlights</h3>
                <p className="text-gray-300 mb-6">
                  This compilation showcases some of our most inspiring student transformations over the past year.
                  From first-day beginners to competition champions, witness the journey our students take at
                  Seigler's Karate Center.
                </p>
                <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition-colors">
                  Watch Compilation
                </button>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* CTA */}
        <AnimatedElement type="fadeIn" delay={0.9}>
          <div className="bg-gradient-to-r from-red-700 to-red-900 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Be Our Next Success Story?</h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Join our community and start your martial arts journey at Seigler's Karate Center.
              Your transformation begins with a single step.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-red-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors"
              >
                Start with a Free Class
              </Link>
              <Link
                href="/success-stories"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-md transition-colors"
              >
                Back to All Success Stories
              </Link>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </Template>
  );
}
