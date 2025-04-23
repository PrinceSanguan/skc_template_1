import Template from './Template';
import AnimatedElement from '@/components/ui/animated-element';
import { Link } from '@inertiajs/react';

export default function ProgramsIndex() {
  const programs = [
    {
      id: 'lil-dragons',
      title: 'Lil Dragons (4 — 5)',
      description: 'A fun and engaging program designed specifically for young children aged 4-5, focusing on basic motor skills, coordination, and social skills through martial arts activities.',
      image: 'https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      link: '/programs/lil-dragons'
    },
    {
      id: 'kids-karate',
      title: 'Kids Karate (6 — 10)',
      description: 'Empowering children ages 6-10 with focus, discipline, and confidence while teaching practical self-defense techniques and traditional karate values.',
      image: 'https://images.unsplash.com/photo-1599586120252-4c0b2893abd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      link: '/programs/kids-karate'
    },
    {
      id: 'teens-karate',
      title: 'Teens Karate (11 — 13)',
      description: 'A dynamic program tailored for teens that builds mental strength, physical fitness, and leadership skills while navigating the challenges of adolescence.',
      image: 'https://images.unsplash.com/photo-1599586120380-910c76c5f50b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      link: '/programs/teens-karate'
    },
    {
      id: 'adult-kempo',
      title: 'Adult Kempo Karate (14+)',
      description: 'A comprehensive martial arts system for adults, teaching practical self-defense, traditional forms, and physical conditioning in a supportive environment.',
      image: 'https://images.unsplash.com/photo-1555597673-b21d5c3c8c9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      link: '/programs/adult-kempo'
    },
    {
      id: 'kickboxing',
      title: 'Kickboxing (14+)',
      description: 'High-energy cardio workouts combined with authentic martial arts techniques, providing an excellent way to improve fitness, reduce stress, and learn striking skills.',
      image: 'https://images.unsplash.com/photo-1549824506-bfeba95ef151?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      link: '/programs/kickboxing'
    },
    {
      id: 'jiu-jitsu',
      title: 'Jiu Jitsu (14+)',
      description: 'Focused on ground fighting and submission techniques, our Jiu Jitsu program emphasizes leverage and technique over strength, making it an effective martial art for practitioners of all sizes.',
      image: 'https://images.unsplash.com/photo-1558304970-cb2878c1a42b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      link: '/programs/jiu-jitsu'
    }
  ];

  return (
    <Template title="Programs">
      <div className="container mx-auto px-4 py-16">
        <AnimatedElement type="fadeIn" delay={0.2}>
          <h1 className="text-4xl font-bold text-center mb-4">Our Martial Arts Programs</h1>
        </AnimatedElement>

        <AnimatedElement type="fadeIn" delay={0.3}>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            At Seigler's Karate Center, we offer a variety of martial arts programs tailored to different ages and skill levels.
            Discover the perfect class for you or your child.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <AnimatedElement key={program.id} type="fadeInUp" delay={0.4 + index * 0.1}>
              <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
                <div className="h-56 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h2 className="text-2xl font-semibold mb-3">{program.title}</h2>
                  <p className="text-gray-400 mb-4">
                    {program.description}
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    href={program.link}
                    className="inline-block bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement type="fadeIn" delay={0.7}>
          <div className="bg-gradient-to-r from-red-700 to-red-900 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Not Sure Which Program Is Right for You?</h2>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
              We invite you to visit one of our locations for a free trial class. Our instructors will help you
              find the perfect program based on your age, experience, and goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-red-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors"
              >
                Schedule a Free Class
              </Link>
              <Link
                href="/locations/evans"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-md transition-colors"
              >
                Visit a Location
              </Link>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </Template>
  );
}
