import Template from '../Programs/Template';
import AnimatedElement from '@/components/ui/animated-element';
import { Link } from '@inertiajs/react';

export default function WrittenReviews() {
  // Written reviews data
  const reviews = [
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
    {
      id: 3,
      name: "David Johnson",
      age: 42,
      program: "Adult Kempo",
      years: 2,
      achievement: "Physical Transformation",
      quote: "I joined Seigler's at 42 years old, thinking I was too old to start martial arts. Two years later, I'm in the best shape of my life and have skills I never thought possible. The instructors make everyone feel welcome regardless of age or fitness level.",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    {
      id: 4,
      name: "Emma Rodriguez",
      age: 13,
      program: "Teens Karate",
      years: 4,
      achievement: "Competition Winner",
      quote: "I've won three regional tournaments this year alone! The training at Seigler's is intense but always fun. My coaches know exactly how to push me to be my best while keeping my technique perfect. I've made so many friends here too.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
    },
    {
      id: 5,
      name: "Robert Smith",
      age: 35,
      program: "Kickboxing",
      years: 1,
      achievement: "Weight Loss Journey",
      quote: "I've lost 35 pounds since joining the kickboxing program. The instructors push you to your limits but are incredibly supportive. The community here is what keeps me coming back, and I've never felt stronger or healthier in my life.",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ];

  return (
    <Template title="Written Reviews">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <AnimatedElement type="fadeIn" delay={0.2}>
          <h1 className="text-4xl font-bold text-center mb-4">Written Reviews</h1>
        </AnimatedElement>

        <AnimatedElement type="fadeIn" delay={0.3}>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Read real stories from our students about how training at Seigler's Karate Center has positively impacted their lives.
          </p>
        </AnimatedElement>

        {/* Written Reviews Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-1 gap-10">
            {reviews.map((review, index) => (
              <AnimatedElement key={review.id} type={index % 2 === 0 ? "slideInLeft" : "slideInRight"} delay={0.4 + index * 0.1}>
                <div className="bg-gray-900 rounded-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-full h-full object-cover md:h-auto"
                        style={{ minHeight: "300px" }}
                      />
                    </div>
                    <div className="md:w-2/3 p-8">
                      <div className="bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                        {review.achievement}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{review.name}</h3>
                      <p className="text-gray-400 mb-4">
                        {review.age} years old | {review.program} | {review.years} {review.years === 1 ? 'year' : 'years'} of training
                      </p>
                      <p className="text-gray-300 mb-6 italic">"{review.quote}"</p>
                      {review.parent && (
                        <p className="text-gray-400 text-sm">— {review.parent}</p>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>

        {/* CTA */}
        <AnimatedElement type="fadeIn" delay={0.9}>
          <div className="bg-gradient-to-r from-red-700 to-red-900 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Write Your Own Review?</h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              Join the hundreds of students who have transformed their lives through martial arts training
              at Seigler's Karate Center. Start your journey today.
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
