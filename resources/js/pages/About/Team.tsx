import Template from './Template';
import AnimatedElement from '@/components/ui/animated-element';

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  imageUrl: string;
}

export default function Team() {
  // Sample team data - you can replace with actual data
  const teamMembers: TeamMember[] = [
    {
      name: 'John Seigler',
      position: 'Founder & Head Instructor',
      bio: 'John has over 30 years of martial arts experience and founded Seigler\'s Karate Center with a vision to empower students through traditional karate training.',
      imageUrl: '/images/team/john-seigler.jpg'
    },
    {
      name: 'Sarah Johnson',
      position: 'Lead Instructor',
      bio: 'Sarah is a 4th-degree black belt with extensive competition experience. She specializes in teaching children and developing youth programs.',
      imageUrl: '/images/team/sarah-johnson.jpg'
    },
    {
      name: 'Michael Chen',
      position: 'Instructor',
      bio: 'Michael brings a unique perspective to our teaching staff with his background in multiple martial arts disciplines including Karate, Judo, and Aikido.',
      imageUrl: '/images/team/michael-chen.jpg'
    },
    {
      name: 'Lisa Williams',
      position: 'Operations Manager',
      bio: 'Lisa ensures our dojo runs smoothly and efficiently. She handles scheduling, membership, and creates a welcoming environment for everyone.',
      imageUrl: '/images/team/lisa-williams.jpg'
    }
  ];

  return (
    <Template title="Our Team">
      <div className="container mx-auto px-4 py-16">
        <AnimatedElement type="fadeIn" delay={0.2}>
          <h1 className="text-4xl font-bold text-center mb-4">Our Team</h1>
        </AnimatedElement>

        <AnimatedElement type="fadeIn" delay={0.3}>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Meet the dedicated instructors and staff who make Seigler's Karate Center
            a place of growth, discipline, and achievement.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {teamMembers.map((member, index) => (
            <AnimatedElement key={member.name} type="fadeInUp" delay={0.2 + index * 0.1}>
              <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-w-1 aspect-h-1 w-full">
                  <div className="h-80 w-full bg-gray-700 flex items-center justify-center">
                    {/* You can replace this with actual images */}
                    <span className="text-4xl">{member.name.charAt(0)}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-red-600 mb-3">{member.position}</p>
                  <p className="text-gray-400">{member.bio}</p>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </Template>
  );
}
