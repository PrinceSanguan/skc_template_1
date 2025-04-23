import { Link } from '@inertiajs/react';
import AnimatedElement from '@/components/ui/animated-element';
import Template from './Template';

interface TeamMemberData {
  name: string;
  position: string;
  imageUrl: string;
  slug: string;
  certifications?: string[];
  longBio?: string;
}

interface TeamMemberProps {
  teamMember: TeamMemberData;
}

export default function TeamMember({ teamMember }: TeamMemberProps) {
  return (
    <Template title={teamMember.name}>
      {/* Hero Section */}
      <div className="relative bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center opacity-20"></div>
        <div className="relative container mx-auto px-4 py-16 md:py-24 z-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{teamMember.name}</h1>
          <p className="text-xl text-red-500 font-semibold mb-8">{teamMember.position}</p>
        </div>
      </div>

      {/* Biography Content */}
      <section className="bg-gray-950 py-12">
        <div className="container mx-auto">
          <AnimatedElement type="fadeIn" delay={0.2}>
            <div className="bg-gray-900 shadow-2xl mx-auto">
              <div className="px-4 py-4 md:px-8 md:py-6 border-b border-gray-800">
                <Link
                  href="/about/team"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Team
                </Link>
              </div>

              <div className="flex flex-col md:flex-row">
                {/* Image Section - Left Side */}
                <div className="w-full md:w-2/5 p-4 md:p-8">
                  <div className="overflow-hidden bg-gray-800">
                    <img
                      src={teamMember.imageUrl}
                      alt={teamMember.name}
                      className="w-full h-auto object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.classList.add('bg-gradient-to-br', 'from-gray-800', 'to-gray-900', 'flex', 'items-center', 'justify-center', 'h-96');
                          const span = document.createElement('span');
                          span.className = 'text-6xl font-bold text-gray-500';
                          span.textContent = teamMember.name.charAt(0);
                          parent.appendChild(span);
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Content Section - Right Side */}
                <div className="w-full md:w-3/5 p-4 md:p-8">
                  {teamMember.certifications && teamMember.certifications.length > 0 && (
                    <div className="mb-10">
                      <h2 className="text-xl font-bold text-white mb-4 uppercase relative">
                        CERTIFICATIONS
                        <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-red-600"></div>
                      </h2>
                      <div className="text-gray-300 mt-6 text-base">
                        <p>
                          {teamMember.certifications.join(' and ')}
                        </p>
                      </div>
                    </div>
                  )}

                  <div>
                    <h2 className="text-xl font-bold text-white mb-4 uppercase relative">
                      BIOGRAPHY
                      <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-red-600"></div>
                    </h2>
                    <div className="text-gray-300 space-y-5 mt-6 text-base leading-relaxed">
                      {teamMember.longBio ? (
                        teamMember.longBio.split('\n\n').map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))
                      ) : (
                        <p>Biography coming soon.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <AnimatedElement type="fadeIn" delay={0.2}>
            <div className="bg-gradient-to-r from-red-900 to-red-700 rounded-xl p-8 md:p-10 max-w-5xl mx-auto shadow-2xl">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Begin Your Martial Arts Journey?</h2>
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
