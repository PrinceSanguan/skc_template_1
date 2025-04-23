import Template from './Template';
import AnimatedElement from '@/components/ui/animated-element';

interface TeamMember {
  name: string;
  position: string;
  bio?: string;
  imageUrl: string;
}

interface Location {
  name: string;
  address: string;
  city: string;
  zip: string;
  phone: string;
  email: string;
}

export default function Team() {
  // Actual team members
  const teamMembers: TeamMember[] = [
    {
      name: 'Mr. Tommy Seigler',
      position: 'Founder/Owner',
      imageUrl: '/images/team/tommy-seigler.jpg'
    },
    {
      name: 'Mrs. Jennifer Seigler Waters',
      position: 'Executive Sensei',
      imageUrl: '/images/team/jennifer-waters.jpg'
    },
    {
      name: 'Mrs. Lisa Corley',
      position: 'Chief of Operations',
      imageUrl: '/images/team/lisa-corley.jpg'
    },
    {
      name: 'Mr. Titus Waters',
      position: 'Instructor',
      imageUrl: '/images/team/titus-waters.jpg'
    },
    {
      name: 'Mr. Daniel Corley',
      position: 'Instructor',
      imageUrl: '/images/team/daniel-corley.jpg'
    },
    {
      name: 'Ms. Cameron Corley',
      position: 'Instructor',
      imageUrl: '/images/team/cameron-corley.jpg'
    }
  ];

  const locations: Location[] = [
    {
      name: 'Evans, GA',
      address: '4150 Washington Road, Suite 4',
      city: 'Evans',
      zip: '30809',
      phone: '(706) 855-5685',
      email: 'skc@goskc.com'
    },
    {
      name: 'Grovetown, GA',
      address: '271 Meridian Drive',
      city: 'Grovetown',
      zip: '30813',
      phone: '(706) 855-5685',
      email: 'skc@goskc.com'
    }
  ];

  return (
    <Template title="Our Team">
      <div className="container mx-auto px-4 py-16">
        <AnimatedElement type="fadeIn" delay={0.2}>
          <h1 className="text-4xl font-bold text-center mb-4">Expert Instructors</h1>
        </AnimatedElement>

        <AnimatedElement type="fadeIn" delay={0.3}>
          <div className="text-xl text-center text-gray-300 mb-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Meet our team</h2>
            <p className="mb-6">
              Meet our dedicated team of martial arts instructors! Each member of our staff brings a unique set of skills and a deep passion for martial arts, committed to providing exceptional training and fostering a supportive, empowering community for all our students.
            </p>
            <h2 className="text-2xl font-bold mb-4">Seigler's Karate Center</h2>
            <p>
              Since 1982, Seigler's Karate Center has empowered kids, teens & adults through martial arts. We instill life skills like focus, discipline & respect, helping students achieve success on and off the mat.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {teamMembers.map((member, index) => (
            <AnimatedElement key={member.name} type="fadeInUp" delay={0.2 + index * 0.1}>
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-red-600 transition-all duration-300 flex flex-col">
                <div className="w-full">
                  <div className="relative pb-[100%] overflow-hidden">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.classList.add('bg-gray-700', 'flex', 'items-center', 'justify-center');
                          const span = document.createElement('span');
                          span.className = 'text-5xl font-bold text-gray-500';
                          span.textContent = member.name.charAt(0);
                          parent.appendChild(span);
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-red-500 font-semibold mb-3">{member.position}</p>
                    {member.bio && <p className="text-gray-400">{member.bio}</p>}
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <div className="mt-16">
          <AnimatedElement type="fadeIn" delay={0.4}>
            <h2 className="text-3xl font-bold text-center mb-8">Our Locations</h2>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <AnimatedElement key={location.name} type="fadeInUp" delay={0.3 + index * 0.1}>
                <div className="bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-800 hover:border-red-600 transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-white mb-4">{location.name}</h3>
                  <p className="text-gray-300">{location.address}</p>
                  <p className="text-gray-300 mb-4">{location.city}, GA {location.zip}</p>
                  <p className="text-gray-300">Phone: {location.phone}</p>
                  <p className="text-gray-300">Email: {location.email}</p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
    </Template>
  );
}
