import Template from './Programs/Template';
import AnimatedElement from '@/components/ui/animated-element';
import { Link } from '@inertiajs/react';

export default function SuccessStories() {
  // Featured success stories
  const featuredStories = [
    {
      id: 1,
      name: "Michael Chen",
      age: 15,
      program: "Teens Karate",
      years: 3,
      achievement: "Black Belt Achievement",
      quote: "When I started at Seigler's, I was shy and struggled with confidence. The instructors believed in me when I didn't believe in myself. Now I'm a black belt and assistant instructor, helping others find their strength.",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    },
    {
      id: 2,
      name: "Sophia Williams",
      age: 8,
      program: "Kids Karate",
      years: 2,
      achievement: "Improved Focus & Confidence",
      quote: "Before karate, Sophia struggled with focus in school and was often anxious in new situations. Since joining Seigler's, her teachers have noticed dramatic improvements in her attention and confidence.",
      image: "https://images.unsplash.com/photo-1595492706802-69dde6b23eff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      parent: "Jennifer Williams, Sophia's mother",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "David Johnson",
      role: "Adult Kempo Student, 2 Years",
      quote: "I joined Seigler's at 42 years old, thinking I was too old to start martial arts. Two years later, I'm in the best shape of my life and have skills I never thought possible.",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    {
      id: 2,
      name: "Maria Gonzalez",
      role: "Parent of Lil Dragons Student",
      quote: "My son has transformed from a shy 4-year-old to a confident 5-year-old with amazing focus. His preschool teacher even asked what changed. The answer? Seigler's Karate Center!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 3,
      name: "Robert Smith",
      role: "Kickboxing Student, 1 Year",
      quote: "I've lost 35 pounds since joining the kickboxing program. The instructors push you to your limits but are incredibly supportive. The community here is what keeps me coming back.",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 4,
      name: "Amanda Taylor",
      role: "Jiu Jitsu Student, 3 Years",
      quote: "As a woman, learning self-defense has been empowering. The skills I've gained at Seigler's have given me confidence that extends to every area of my life.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
    },
  ];

  // Stats
  const stats = [
    { label: "Active Students", value: "500+" },
    { label: "Black Belts Awarded", value: "120+" },
    { label: "Years of Operation", value: "15+" },
    { label: "Competitions Won", value: "200+" },
  ];

  return (
    <Template title="Success Stories">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <AnimatedElement type="fadeIn" delay={0.2}>
          <h1 className="text-4xl font-bold text-center mb-4">Success Stories & Testimonials</h1>
        </AnimatedElement>

        <AnimatedElement type="fadeIn" delay={0.3}>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Discover how martial arts training at Seigler's Karate Center has transformed the lives of our students,
            building confidence, discipline, and skills that last a lifetime.
          </p>
        </AnimatedElement>

        {/* Featured Success Stories */}
        <div className="mb-20">
          <AnimatedElement type="fadeIn" delay={0.4}>
            <h2 className="text-3xl font-bold text-center mb-12">Featured Success Stories</h2>
          </AnimatedElement>

          {featuredStories.map((story, index) => (
            <AnimatedElement key={story.id} type={index % 2 === 0 ? "slideInLeft" : "slideInRight"} delay={0.5 + index * 0.1}>
              <div className="bg-gray-900 rounded-lg overflow-hidden mb-10">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover md:h-auto"
                      style={{ minHeight: "300px" }}
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      {story.achievement}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{story.name}</h3>
                    <p className="text-gray-400 mb-4">
                      {story.age} years old | {story.program} | {story.years} {story.years === 1 ? 'year' : 'years'} of training
                    </p>
                    <p className="text-gray-300 mb-6 italic">"{story.quote}"</p>
                    {story.parent && (
                      <p className="text-gray-400 text-sm">— {story.parent}</p>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Impact Stats */}
        <AnimatedElement type="fadeIn" delay={0.7}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-r from-red-700 to-red-900 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedElement>

        {/* Testimonials */}
        <div className="mb-20">
          <AnimatedElement type="fadeIn" delay={0.8}>
            <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedElement key={testimonial.id} type="fadeInUp" delay={0.9 + index * 0.1}>
                <div className="bg-gray-900 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>

        {/* Video Testimonial Section */}
        <AnimatedElement type="fadeIn" delay={1.1}>
          <div className="bg-gray-900 rounded-lg overflow-hidden mb-20">
            <div className="md:flex">
              <div className="md:w-1/2 bg-gray-800 flex items-center justify-center p-8" style={{ minHeight: "400px" }}>
                <div className="text-center">
                  <svg className="w-20 h-20 text-red-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-300">Click to watch James' transformation story</p>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold mb-4">From Bullied to Black Belt: James' Story</h3>
                <p className="text-gray-300 mb-6">
                  When James first came to us at age 8, he was being bullied at school and struggled with
                  self-confidence. After 4 years of dedicated training, he not only earned his black belt
                  but also developed the confidence to stand up for himself and others.
                </p>
                <p className="text-gray-300 mb-6">
                  James is now one of our student leaders, mentoring younger kids who face the same challenges
                  he once did. His journey exemplifies the transformative power of martial arts beyond just
                  physical techniques.
                </p>
                <Link href="/contact" className="inline-block bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition-colors">
                  Start Your Journey
                </Link>
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* CTA */}
        <AnimatedElement type="fadeIn" delay={1.2}>
          <div className="bg-gradient-to-r from-red-700 to-red-900 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Write Your Success Story?</h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Join the hundreds of students who have transformed their lives through martial arts training
              at Seigler's Karate Center. Your journey begins with a single step.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-red-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors"
              >
                Start with a Free Class
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
