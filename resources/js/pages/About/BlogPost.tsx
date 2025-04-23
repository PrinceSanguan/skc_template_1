import Template from './Template';
import AnimatedElement from '@/components/ui/animated-element';
import { Link } from '@inertiajs/react';
import { useEffect } from 'react';

// Blog post content interface
interface BlogPostDetail {
  id: number;
  title: string;
  content: string[];
  date: string;
  author: {
    name: string;
    title: string;
    bio: string[];
    image?: string;
  };
  category: string;
  featuredImage?: string;
}

// Props interface
interface Props {
  id?: string;
}

export default function BlogPost({ id = '1' }: Props) {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // In a real application, you would fetch the post data based on the id
  // For demonstration purposes, we're using hardcoded data
  // This would normally come from an API call like: const post = await fetchPostById(id);

  // Post data for "At What Age Should Kids Start Martial Arts?"
  const post: BlogPostDetail = {
    id: parseInt(id),
    title: 'At What Age Should Kids Start Martial Arts?',
    date: 'April 3, 2025',
    category: 'Kids Martial Arts',
    content: [
      'One of the most common questions parents ask about martial arts is, "At what age should my child start training?" Martial arts is one of the most beneficial activities for children, offering physical fitness, mental discipline, and emotional growth. While the exact age to begin depends on the individual child, most kids are ready to start martial arts as early as 4 or 5 years old.',
      'At Seigler\'s Karate Center in Martinez, GA, we\'ve designed programs specifically for young children to introduce them to martial arts in a way that\'s fun, engaging, and age-appropriate. Starting early allows kids to build a foundation of skills and habits that will benefit them for years to come.',
      '## Why Ages 4 to 5 Are Ideal for Beginners',
      'Kids between the ages of 4 and 5 are at a stage of rapid development, making it the perfect time to introduce them to kids martial arts. Their natural curiosity and high energy levels, combined with their developing motor skills like balance and coordination, make this an excellent age to start.',
      'Programs tailored for younger children, like the Lil Dragons classes, focus on basic movements taught in a playful and supportive environment. These short, structured sessions are designed to hold their attention while improving physical fitness, listening skills, and the ability to follow directions. Young children also learn essential skills like working well with others and building confidence, setting the foundation for future success.',
      'This approach ensures their first experience with fitness and training is positive and enjoyable. The confidence they gain from mastering simple techniques encourages them to stay engaged and eager to keep learning.',
      '## The Advantages of Starting Early',
      'Starting kids martial arts training at a young age provides tremendous benefits in fitness, focus, and skill development. Physically, it builds strength, flexibility, and coordination. Children who start early often show improved posture, better balance, and enhanced body awareness. These physical skills carry over into other activities like sports, dance, or even everyday play, contributing to a healthier and more active lifestyle.',
      'Mentally, martial arts challenges children to concentrate, follow instructions, and master sequences. This process fosters perseverance and teaches the value of consistent effort. As they progress, they see tangible improvements in their abilities, boosting self-esteem and inspiring them to set and achieve personal goals.',
      'Emotionally, programs help children build resilience and self-control. They learn to manage frustration when tasks don\'t come easily and to celebrate successes when they achieve something new. The process of earning belts and advancing levels instills patience and teaches the importance of goal setting, skills they\'ll carry with them throughout life.',
      'These advantages make kids martial arts an ideal activity for young learners in Martinez, GA, who are eager to grow physically, mentally, and emotionally.',
      '## Programs for Ages 6 to 10: A Time for Growth',
      'For kids aged 6 to 10, martial arts becomes even more impactful as they develop a deeper understanding of setting and achieving goals. At this stage, children are ready to take on more advanced techniques and concepts, which keep them engaged and motivated to improve.',
      'Programs like Kids Karate build on earlier foundations, introducing more complex movements and combinations. Training continues to emphasize discipline, teamwork, and respect, creating a structured environment that provides a positive outlet for their energy. This helps kids build a strong work ethic and develop healthy habits.',
      'In addition to the physical and mental benefits, children in this age group gain valuable social skills. Training alongside their peers teaches them to cooperate, support one another, and handle competition constructively. These experiences strengthen friendships and enhance their communication abilities, helping them succeed both on and off the mat.',
      'By enrolling in kids martial arts programs tailored for their developmental stage, children in Martinez, GA, gain the skills, fitness, and confidence needed to thrive in all areas of life.',
      '## How Training Supports Academic and Social Success',
      'One of the most significant advantages of kids martial arts is the way it positively impacts a child\'s academic and social life. Many parents notice improvements in their child\'s behavior, focus, and confidence within just a few months of training.',
      'In school, children often excel because they\'ve developed the ability to concentrate and manage their time effectively. Discipline learned in class translates to responsible approaches toward homework and assignments. Additionally, the confidence gained from training encourages kids to participate in classroom discussions and take on leadership roles.',
      'Socially, students learn how to interact respectfully with their peers. They build skills like teamwork, the ability to celebrate others\' achievements, and conflict resolution. These lessons are invaluable as kids navigate friendships and social situations in school and their communities.',
      '## Why It\'s Never Too Late to Start',
      'Starting fitness training at an early age offers many benefits, but it\'s important to know that it\'s never too late to begin. Kids who start later—at ages 8, 9, or even 10—can still gain incredible value from the experience.',
      'Older children often have greater focus and maturity, allowing them to progress more quickly. They are also better able to grasp the mental and emotional aspects of training, such as building resilience, practicing respect, and developing self-confidence. Programs are designed to meet kids at their current skill level, ensuring every participant feels welcome and supported as they grow.',
      '## Choosing the Right Program for Your Child',
      'Each child has unique needs, and the best kids martial arts program depends on their personality, interests, and developmental stage. A variety of classes are available to meet them where they are and help them grow.',
      'For younger kids, introductory classes like the Lil Dragons program provide a fun and engaging start. These sessions are designed to help children aged 4 to 5 build confidence, improve coordination, and enjoy the process of learning new skills.',
      'For children aged 6 to 10, programs such as Kids Karate offer a more structured approach. These classes focus on skill development while teaching critical life lessons like discipline, respect, and teamwork. Kids in these programs gain the tools they need to succeed, not just in training but also in school, social settings, and beyond.',
      '## Why Seigler\'s Karate Center is the Best Choice',
      'For decades, this training school in Martinez, GA, has been a trusted resource for teaching essential skills. Known for its welcoming atmosphere, experienced instructors, and age-appropriate programs, the school is dedicated to helping children build confidence, discipline, and a lifelong love of learning.',
      'Classes are thoughtfully designed to be both challenging and supportive, creating an environment where every child feels motivated to excel. Children who are just beginning their training or those aiming to refine their skills will find expert guidance and a clear path to success.',
      '## Get Started Today',
      'If you\'re considering martial arts for your child, there\'s no better time to begin. Starting young allows kids to develop essential skills and habits that will benefit them for life. At Seigler\'s Karate Center, we\'re here to help your child take that first step with programs designed for every age and ability level.',
      'Contact us today at (706) 855-5685 or visit our website at goskc.com to learn more about our classes and schedule your child\'s first session. Let\'s work together to help your child build confidence, focus, and a love for martial arts.'
    ],
    author: {
      name: 'Jennifer Seigler Waters',
      title: 'Executive Sensei of Seigler\'s Karate Center',
      bio: [
        'Jennifer Waters is the Executive Sensei of Seigler\'s Karate Center, the daughter of Tommy Seigler and wife to Head Sensei, Titus Waters.',
        'Mrs. Jennifer, as her students call her, has grown up in the martial arts world, starting her training at the early age of 3! Now, Mrs. Jennifer leads her team of instructors and staff at SKC to help change lives on a daily basis!',
        'Additionally, she is an avid athlete and has earned a 5th Degree Kempo Karate Black Belt and is a Purple Belt in Brazilian Jiu-Jitsu under Professor Carlos Machado.',
        'She also is the IKF US Amateur Kickboxing Champion and is now a professional kickboxer and MMA fighter. Although she is a well established martial artist, her passion lies in helping others succeed at changing their life through martial arts.'
      ],
      image: '/images/team/jennifer-waters.jpg'
    }
  };

  // Helper function to parse content with markdown-like headings
  const renderContent = (content: string) => {
    if (content.startsWith('## ')) {
      const heading = content.substring(3);
      return <h2 className="text-2xl font-bold text-white mt-8 mb-4">{heading}</h2>;
    }
    return <p className="text-gray-300 mb-4">{content}</p>;
  };

  return (
    <Template title={post.title}>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <AnimatedElement type="fadeIn" delay={0.2}>
            {/* Back button */}
            <Link
              href="/about/blog"
              className="inline-flex items-center text-red-600 hover:text-red-500 mb-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>

            {/* Category and date */}
            <div className="mb-4">
              <span className="text-sm text-red-600 mr-4">{post.category}</span>
              <span className="text-sm text-gray-400">{post.date}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-white mb-6">{post.title}</h1>

            {/* Featured Image */}
            <div className="w-full h-96 bg-gray-800 mb-8 rounded-lg overflow-hidden">
              {post.featuredImage ? (
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-xl text-gray-500">Featured Image</span>
                </div>
              )}
            </div>
          </AnimatedElement>

          {/* Article content */}
          <AnimatedElement type="fadeIn" delay={0.3}>
            <div className="prose prose-lg prose-invert max-w-none">
              {post.content.map((paragraph, index) => (
                <div key={index}>{renderContent(paragraph)}</div>
              ))}
            </div>
          </AnimatedElement>

          {/* Author bio */}
          <AnimatedElement type="fadeIn" delay={0.4}>
            <div className="mt-12 pt-8 border-t border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-4">About {post.author.name}</h3>
              <div className="flex flex-col md:flex-row gap-6">
                {post.author.image && (
                  <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={post.author.image}
                      alt={post.author.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">{post.author.name}</h4>
                  <p className="text-red-600 mb-3">{post.author.title}</p>
                  {post.author.bio.map((paragraph, index) => (
                    <p key={index} className="text-gray-300 mb-3">{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* Call to action */}
          <AnimatedElement type="fadeIn" delay={0.5}>
            <div className="mt-12 bg-gray-900 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">
                Give your child the gift of martial arts training at Seigler's Karate Center.
                Our programs are designed for children of all ages and skill levels.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition-colors"
              >
                Schedule a Free Trial Class
              </Link>
            </div>
          </AnimatedElement>

          {/* Related posts */}
          <AnimatedElement type="fadeIn" delay={0.6}>
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-white mb-6">You May Also Like</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* These would typically be dynamically generated */}
                <div className="bg-gray-900 rounded-lg overflow-hidden">
                  <div className="h-48 bg-gray-800"></div>
                  <div className="p-4">
                    <span className="text-sm text-red-600 block mb-2">Kids Martial Arts</span>
                    <h4 className="text-lg font-semibold text-white mb-2">Benefits of Martial Arts for Kids Aged 4 to 10</h4>
                    <Link
                      href="/about/blog/4"
                      className="text-red-600 hover:text-red-500 text-sm inline-flex items-center"
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
                <div className="bg-gray-900 rounded-lg overflow-hidden">
                  <div className="h-48 bg-gray-800"></div>
                  <div className="p-4">
                    <span className="text-sm text-red-600 block mb-2">Kids Martial Arts</span>
                    <h4 className="text-lg font-semibold text-white mb-2">How Martial Arts Training Boosts Focus and Discipline in Children</h4>
                    <Link
                      href="/about/blog/6"
                      className="text-red-600 hover:text-red-500 text-sm inline-flex items-center"
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
                <div className="bg-gray-900 rounded-lg overflow-hidden">
                  <div className="h-48 bg-gray-800"></div>
                  <div className="p-4">
                    <span className="text-sm text-red-600 block mb-2">Kids Martial Arts</span>
                    <h4 className="text-lg font-semibold text-white mb-2">Building Self-Respect in Today's Youth Through Martial Arts</h4>
                    <Link
                      href="/about/blog/9"
                      className="text-red-600 hover:text-red-500 text-sm inline-flex items-center"
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
            </div>
          </AnimatedElement>
        </div>
      </div>
    </Template>
  );
}
