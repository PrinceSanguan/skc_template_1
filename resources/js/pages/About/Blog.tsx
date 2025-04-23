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
  // Actual blog data
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'At What Age Should Kids Start Martial Arts?',
      excerpt: 'One of the most common questions parents ask about martial arts is, "At what age should my child start training?" Martial arts is one of the most beneficial activities for children, offering physical fitness, mental discipline, and emotional growth.',
      date: 'April 3, 2025',
      author: 'John Seigler',
      imageUrl: '/images/blog/kids-martial-arts.jpg',
      category: 'Kids Martial Arts'
    },
    {
      id: 2,
      title: 'Why Adults Should Consider Martial Arts for Fitness',
      excerpt: 'Finding the right fitness routine as an adult can be a challenge. With busy schedules, work commitments, and family responsibilities, many adults struggle to carve out time for themselves. Even when they do, traditional fitness programs often feel repetitive and uninspiring.',
      date: 'March 3, 2025',
      author: 'Sarah Johnson',
      imageUrl: '/images/blog/adult-fitness.jpg',
      category: 'Adult Martial Arts'
    },
    {
      id: 3,
      title: 'How Martial Arts Boosts Self-Defense for Teens',
      excerpt: 'Teenagers face a variety of challenges as they navigate the world, from handling peer pressure to managing social interactions. One of the most critical skills they can learn during this time is how to stay safe.',
      date: 'February 3, 2025',
      author: 'Michael Chen',
      imageUrl: '/images/blog/teen-defense.jpg',
      category: 'Adult Martial Arts'
    },
    {
      id: 4,
      title: 'Benefits of Martial Arts for Kids Aged 4 to 10',
      excerpt: 'Kids between the ages of 4 and 10 are in a pivotal phase of growth, where they\'re developing foundational life skills, forming habits, and exploring their sense of self. Martial arts serves as a powerful activity during this time, promoting physical, mental, and emotional development.',
      date: 'January 3, 2025',
      author: 'Lisa Williams',
      imageUrl: '/images/blog/kids-benefits.jpg',
      category: 'Kids Martial Arts'
    },
    {
      id: 5,
      title: 'Techniques vs. Principles: The Core of Martial Arts Mastery',
      excerpt: 'In martial arts, the distinction between techniques and principles often defines a student\'s journey from novice to master. Many new students begin their martial arts journey seeking practical techniques—such as powerful kicks, precise strikes, or swift defenses—but soon realize that the real depth of martial arts comes from understanding its core principles.',
      date: 'December 16, 2024',
      author: 'John Seigler',
      imageUrl: '/images/blog/techniques-principles.jpg',
      category: 'Adult Martial Arts'
    },
    {
      id: 6,
      title: 'How Martial Arts Training Boosts Focus and Discipline in Children',
      excerpt: 'In today\'s fast-paced world, children are exposed to numerous distractions, from digital screens to an overwhelming array of activities. With attention spans becoming shorter, many parents are seeking ways to help their children develop better focus and concentration skills.',
      date: 'December 2, 2024',
      author: 'Sarah Johnson',
      imageUrl: '/images/blog/kids-focus.jpg',
      category: 'Kids Martial Arts'
    },
    {
      id: 7,
      title: 'How Respect and Etiquette Shape Your Martial Arts Journey',
      excerpt: 'Martial arts is far more than just physical techniques and self-defense. At its core, it is about building character, instilling discipline, and fostering respect. At Seigler\'s Karate Center, we emphasize the importance of respect and etiquette in every class, regardless of age or skill level.',
      date: 'November 15, 2024',
      author: 'Michael Chen',
      imageUrl: '/images/blog/respect-etiquette.jpg',
      category: 'Adult Martial Arts'
    },
    {
      id: 8,
      title: 'Mastering Mental Fortitude: How Martial Arts Builds Inner Strength',
      excerpt: 'When we think about martial arts, the immediate images that often come to mind are those of swift kicks, powerful punches, and mastering self-defense techniques. However, beyond the physical discipline lies an equally vital benefit: the development of mental fortitude.',
      date: 'November 1, 2024',
      author: 'Lisa Williams',
      imageUrl: '/images/blog/mental-fortitude.jpg',
      category: 'Adult Martial Arts'
    },
    {
      id: 9,
      title: 'Building Self-Respect in Today\'s Youth Through Martial Arts',
      excerpt: 'In today\'s fast-paced, technology-driven world, building self-respect among youth has become more important than ever. Between social pressures and the constant digital influence, it can be challenging for children and teens to develop a strong sense of self-worth.',
      date: 'October 15, 2024',
      author: 'John Seigler',
      imageUrl: '/images/blog/youth-self-respect.jpg',
      category: 'Kids Martial Arts'
    },
    {
      id: 10,
      title: 'The Enduring Influence of Ancient Philosophies on Modern Martial Arts',
      excerpt: 'Martial arts, often viewed as a means of self-defense and physical fitness, have deep-rooted philosophies that date back thousands of years. These ancient principles not only shaped the way martial arts are practiced today at Seigler\'s Karate Center but also emphasize character development, discipline, and respect—values that transcend the practice floor and permeate everyday life.',
      date: 'October 1, 2024',
      author: 'Sarah Johnson',
      imageUrl: '/images/blog/ancient-philosophies.jpg',
      category: 'Adult Martial Arts'
    }
  ];

  // Categories for the filter buttons
  const categories = ['All Posts', 'Kids Martial Arts', 'Adult Martial Arts'];

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
            {categories.map((category, index) => (
              <button
                key={index}
                className={`${index === 0 ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-800 hover:bg-gray-700'} text-white px-4 py-2 rounded-full transition-colors`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedElement>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {blogPosts.map((post, index) => (
            <AnimatedElement key={post.id} type="fadeInUp" delay={0.2 + index * 0.1}>
              <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
                <Link href={`/about/blog/${post.id}`} target="_blank">
                  <div className="aspect-w-16 aspect-h-9 w-full">
                    <div className="h-56 w-full bg-gray-700 flex items-center justify-center">
                      {/* You can replace this with actual images */}
                      <span className="text-lg text-gray-400">Featured Image</span>
                    </div>
                  </div>
                </Link>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-red-600">{post.category}</span>
                    <span className="text-sm text-gray-400">{post.date}</span>
                  </div>
                  <Link href={`/about/blog/${post.id}`} target="_blank">
                    <h3 className="text-xl font-semibold text-white mb-3 hover:text-red-500 transition-colors">{post.title}</h3>
                  </Link>
                  <p className="text-gray-400 mb-4 flex-grow">{post.excerpt}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-sm text-gray-400">By {post.author}</span>
                    <Link
                      href={`/about/blog/${post.id}`}
                      className="inline-flex items-center text-red-600 hover:text-red-500"
                      target="_blank"
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

        {/* Categories and Recent Posts Sidebar */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.slice(1).map((category, index) => (
                <li key={index}>
                  <Link
                    href={`#${category.replace(/\s+/g, '-').toLowerCase()}`}
                    className="text-gray-300 hover:text-red-500 transition-colors"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Recent Posts</h3>
            <ul className="space-y-3">
              {blogPosts.slice(0, 5).map((post) => (
                <li key={post.id}>
                  <Link
                    href={`/about/blog/${post.id}`}
                    className="text-gray-300 hover:text-red-500 transition-colors"
                    target="_blank"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Template>
  );
}
