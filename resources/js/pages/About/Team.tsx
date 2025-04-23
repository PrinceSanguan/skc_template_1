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
      {/* Hero Section */}
      <div className="relative bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/dojo-background.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container relative mx-auto px-4 py-24 z-20">
          <AnimatedElement type="fadeIn" delay={0.2}>
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 text-white tracking-tight">
              <span className="text-red-600">Expert</span> Instructors
            </h1>
          </AnimatedElement>

          <AnimatedElement type="fadeIn" delay={0.3}>
            <div className="text-xl text-center text-gray-200 mb-8 max-w-3xl mx-auto">
              <p className="leading-relaxed">
                Since 1982, Seigler's Karate Center has empowered kids, teens & adults through martial arts excellence.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </div>

      {/* Team Introduction */}
      <section className="bg-gray-950 py-16">
        <div className="container mx-auto px-4">
          <AnimatedElement type="fadeIn" delay={0.3}>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white relative inline-block">
                Meet Our Team
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-red-600"></div>
              </h2>
              <p className="text-lg text-gray-300 mb-12 leading-relaxed">
                Meet our dedicated team of martial arts instructors! Each member of our staff brings a unique set of skills and a deep passion for martial arts, committed to providing exceptional training and fostering a supportive, empowering community for all our students.
              </p>
            </div>
          </AnimatedElement>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-12">
            {teamMembers.map((member, index) => (
              <AnimatedElement key={member.name} type="fadeInUp" delay={0.2 + index * 0.1}>
                <div className="group bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl overflow-hidden shadow-xl border border-gray-800 hover:border-red-600 transition-all duration-300 flex flex-col h-full transform hover:-translate-y-2">
                  <div className="w-full">
                    <div className="relative pb-[100%] overflow-hidden">
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.classList.add('bg-gradient-to-br', 'from-gray-800', 'to-gray-900', 'flex', 'items-center', 'justify-center');
                            const span = document.createElement('span');
                            span.className = 'text-6xl font-bold text-gray-500';
                            span.textContent = member.name.charAt(0);
                            parent.appendChild(span);
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-red-500 transition-colors duration-300">{member.name}</h3>
                      <div className="w-12 h-0.5 bg-red-600 mb-3"></div>
                      <p className="text-red-500 font-semibold mb-3">{member.position}</p>
                      {member.bio && <p className="text-gray-400">{member.bio}</p>}
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Our Legacy Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/legacy-background.jpg')] bg-cover bg-fixed opacity-10"></div>
        <div className="container mx-auto px-4 relative z-20">
          <AnimatedElement type="fadeIn" delay={0.2}>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 relative inline-block">
                Seigler's Karate Center
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-red-600"></div>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Since 1982, Seigler's Karate Center has empowered kids, teens & adults through martial arts. We instill life skills like focus, discipline & respect, helping students achieve success on and off the mat.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Locations Section */}
      <section className="bg-gray-950 py-16">
        <div className="container mx-auto px-4">
          <AnimatedElement type="fadeIn" delay={0.4}>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 relative inline-block">
              Our Locations
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-red-600"></div>
            </h2>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {locations.map((location, index) => (
              <AnimatedElement key={location.name} type="fadeInUp" delay={0.3 + index * 0.1}>
                <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl p-8 shadow-xl border border-gray-800 hover:border-red-600 transition-all duration-300 transform hover:-translate-y-2">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {location.name}
                  </h3>
                  <div className="w-12 h-0.5 bg-red-600 mb-4"></div>
                  <p className="text-gray-300 mb-1">{location.address}</p>
                  <p className="text-gray-300 mb-4">{location.city}, GA {location.zip}</p>
                  <p className="text-gray-300 mb-1 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {location.phone}
                  </p>
                  <p className="text-gray-300 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {location.email}
                  </p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <AnimatedElement type="fadeIn" delay={0.2}>
            <div className="bg-gradient-to-r from-red-900 to-red-700 rounded-xl p-10 max-w-5xl mx-auto shadow-2xl">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Begin Your Martial Arts Journey?</h2>
                <p className="text-lg text-gray-100 mb-8">Join our community and discover the transformative power of martial arts training.</p>
                <button className="bg-white text-red-700 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1">
                  Start Your Training Today
                </button>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </Template>
  );
}
