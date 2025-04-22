import Template from './Template';
import AnimatedElement from '@/components/ui/animated-element';
import { Link } from '@inertiajs/react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  imageUrl: string;
  category: string;
}

export default function Blog() {
  // Sample blog data - you can replace with actual data
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Benefits of Martial Arts Training for Children',
      excerpt: 'Discover how martial arts can help children develop discipline, confidence, and physical fitness from an early age.',
      date: 'June 15, 2023',
      author: 'John Seigler',
      imageUrl: '/images/blog/kids-karate.jpg',
      category: 'Youth Programs'
    },
    {
      id: 2,
      title: 'Understanding Karate Belt Progression',
      excerpt: 'Learn about the journey from white to black belt, what each color represents, and the skills required to advance.',
      date: 'May 28, 2023',
      author: 'Sarah Johnson',
      imageUrl: '/images/blog/belt-progression.jpg',
      category: 'Training'
    },
    {
      id: 3,
      title: 'Martial Arts and Mental Health',
      excerpt: 'Explore how regular martial arts practice can reduce stress, improve focus, and contribute to better mental health.',
      date: 'April 10, 2023',
      author: 'Michael Chen',
      imageUrl: '/images/blog/mental-health.jpg',
      category: 'Wellness'
    },
    {
      id: 4,
      title: 'Competition Preparation Tips',
      excerpt: 'Essential advice for students preparing for tournaments, including training schedules and mental preparation.',
      date: 'March 22, 2023',
      author: 'Lisa Williams',
      imageUrl: '/images/blog/competition.jpg',
      category: 'Competitions'
    },
    {
      id: 5,
      title: 'The History and Philosophy of Karate',
      excerpt: 'A deep dive into the origins of karate, its evolution over centuries, and the core philosophical principles.',
      date: 'February 15, 2023',
      author: 'John Seigler',
      imageUrl: '/images/blog/karate-history.jpg',
      category: 'Education'
    },
    {
      id: 6,
      title: 'Adult Beginners: It\'s Never Too Late to Start',
      excerpt: 'Why starting martial arts as an adult can be rewarding and how to approach training as a beginner.',
      date: 'January 30, 2023',
      author: 'Sarah Johnson',
      imageUrl: '/images/blog/adult-beginners.jpg',
      category: 'Adult Programs'
    }
  ];

  return (
    <Template title="Blog">
      <div className="container mx-auto px-4 py-16">
        <AnimatedElement type="fadeIn" delay={0.2}>
          <h1 className="text-4xl font-bold text-center mb-4">Our Blog</h1>
        </AnimatedElement>

        <AnimatedElement type="fadeIn" delay={0.3}>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Insights, tips, and stories from our karate journey. Stay informed about
            techniques, events, and the martial arts lifestyle.
          </p>
        </AnimatedElement>

        {/* Categories */}
        <AnimatedElement type="fadeIn" delay={0.4}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition-colors">
              All Posts
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full transition-colors">
              Training
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full transition-colors">
              Youth Programs
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full transition-colors">
              Adult Programs
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full transition-colors">
              Wellness
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full transition-colors">
              Competitions
            </button>
          </div>
        </AnimatedElement>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {blogPosts.map((post, index) => (
            <AnimatedElement key={post.id} type="fadeInUp" delay={0.2 + index * 0.1}>
              <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
                <div className="aspect-w-16 aspect-h-9 w-full">
                  <div className="h-56 w-full bg-gray-700 flex items-center justify-center">
                    {/* You can replace this with actual images */}
                    <span className="text-lg text-gray-400">Featured Image</span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-red-600">{post.category}</span>
                    <span className="text-sm text-gray-400">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{post.title}</h3>
                  <p className="text-gray-400 mb-4 flex-grow">{post.excerpt}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-sm text-gray-400">By {post.author}</span>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-red-600 hover:text-red-500"
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <nav className="inline-flex">
            <button className="bg-gray-800 text-white py-2 px-4 rounded-l-md hover:bg-gray-700">
              Previous
            </button>
            <button className="bg-red-600 text-white py-2 px-4 hover:bg-red-700">
              1
            </button>
            <button className="bg-gray-800 text-white py-2 px-4 hover:bg-gray-700">
              2
            </button>
            <button className="bg-gray-800 text-white py-2 px-4 hover:bg-gray-700">
              3
            </button>
            <button className="bg-gray-800 text-white py-2 px-4 rounded-r-md hover:bg-gray-700">
              Next
            </button>
          </nav>
        </div>
      </div>
    </Template>
  );
}
