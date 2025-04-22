import { Button } from '@/components/ui/button';

const Booking = () => {
  const services = [
    {
      id: 1,
      name: 'Free Trial Class',
      description: 'Experience a martial arts class with no obligation to continue',
      duration: '45 min',
      price: 'FREE'
    },
    {
      id: 2,
      name: 'Beginner Package',
      description: '6-week introductory course including uniform and first belt test',
      duration: '2x weekly',
      price: '$149'
    },
    {
      id: 3,
      name: 'One-on-One Training',
      description: 'Private training session with a certified black belt instructor',
      duration: '30 min',
      price: '$49'
    },
    {
      id: 4,
      name: 'Family Program',
      description: 'Train together as a family with our special family pricing',
      duration: 'Ongoing',
      price: 'From $199/mo'
    }
  ];

  return (
    <section id="booking" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Schedule & Pricing</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Get started with Seigler's Karate Center today. Select a program and schedule your first class.
          </p>
          <div className="mx-auto mt-4 h-1 w-20 bg-red-600"></div>
        </div>

        <div className="flex flex-col rounded-2xl bg-white shadow-xl lg:flex-row">
          <div className="w-full p-8 lg:w-1/2">
            <h3 className="mb-6 text-2xl font-semibold text-gray-900">Select a Program</h3>

            <div className="space-y-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex cursor-pointer items-center rounded-lg border border-gray-200 p-4 transition-all hover:border-red-300 hover:shadow-sm"
                >
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{service.name}</h4>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                  <div className="ml-4 text-right">
                    <span className="block font-semibold text-gray-900">{service.price}</span>
                    <span className="text-sm text-gray-500">{service.duration}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button variant="default" className="w-full bg-red-600 px-6 py-3 text-white hover:bg-red-700">
                View More Options
              </Button>
            </div>
          </div>

          <div className="relative w-full bg-black p-8 text-white lg:w-1/2 lg:rounded-r-2xl">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-red-950/30 opacity-50 lg:rounded-r-2xl"></div>
            <div className="relative z-10">
              <h3 className="mb-6 text-2xl font-semibold">ONLINE EXCLUSIVE OFFER</h3>

              <div className="mb-6 rounded-lg bg-white/10 p-4">
                <div className="mb-2 text-center text-xl font-semibold">Limited Time & Availability</div>
                <p className="text-center text-gray-300">Get more information about our classes and schedule on the next page!</p>
              </div>

              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-md border-gray-700 bg-white/10 p-3 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email address for info"
                    className="w-full rounded-md border-gray-700 bg-white/10 p-3 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Mobile # for info via text"
                    className="w-full rounded-md border-gray-700 bg-white/10 p-3 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <select className="w-full rounded-md border-gray-700 bg-white/10 p-3 text-white">
                    <option value="">Select a Program</option>
                    <option value="lil-dragons">Lil Dragons (4-5)</option>
                    <option value="kids">Kids Karate (6-10)</option>
                    <option value="teens">Teens Karate (11-13)</option>
                    <option value="adults">Adult Kempo Karate (14+)</option>
                    <option value="kickboxing">Kickboxing (14+)</option>
                    <option value="jiu-jitsu">Jiu Jitsu (14+)</option>
                  </select>
                </div>
                <div>
                  <select className="w-full rounded-md border-gray-700 bg-white/10 p-3 text-white">
                    <option value="">Select Location</option>
                    <option value="evans">Evans, GA</option>
                    <option value="grovetown">Grovetown, GA</option>
                    <option value="augusta">Augusta, GA (Coming Soon)</option>
                  </select>
                </div>
                <Button className="w-full bg-red-600 py-3 font-medium text-white hover:bg-red-700">
                  Get Information
                </Button>
              </form>
              <p className="mt-4 text-xs text-gray-400">
                By opting into the web form above you are providing consent for Seigler's Karate Center to send you periodic text messages. Standard rates may apply. You can reply HELP at anytime to learn more. You may opt-out anytime by replying STOP.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
