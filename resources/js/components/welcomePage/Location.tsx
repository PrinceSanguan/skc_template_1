import { Button } from '@/components/ui/button';

const Location = () => {
  const locations = [
    {
      id: 1,
      name: 'Evans Location',
      address: '4150 Washington Road, Suite 4',
      city: 'Evans',
      state: 'GA',
      zip: '30809',
      phone: '(706) 855-5685',
      hours: 'Mon-Fri: 4pm-8pm, Sat: 9am-12pm',
      features: ['State-of-the-art dojo', 'Certified black belt instructors', 'Specialized youth programs', 'Adult martial arts classes']
    },
    {
      id: 2,
      name: 'Grovetown Location',
      address: '271 Meridian Drive',
      city: 'Grovetown',
      state: 'GA',
      zip: '30813',
      phone: '(706) 855-5685',
      hours: 'Mon-Fri: 4pm-8pm, Sat: 9am-12pm',
      features: ['Modern training facility', 'Family classes', 'After-school programs', 'Advanced belt training']
    },
    {
      id: 3,
      name: 'Augusta Location',
      address: 'Coming Soon',
      city: 'Augusta',
      state: 'GA',
      zip: '',
      phone: '(706) 855-5685',
      hours: 'Opening Fall 2023',
      features: ['Pre-registration available', 'Grand opening specials', 'All ages welcome', 'New student orientation']
    }
  ];

  return (
    <section id="locations" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Our Locations</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Find a Seigler's Karate Center near you and start your martial arts journey today.
          </p>
          <div className="mx-auto mt-4 h-1 w-20 bg-red-600"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {locations.map((location) => (
            <div key={location.id} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">{location.name}</h3>
              <div className="mb-4">
                <p className="text-gray-600">{location.address}</p>
                <p className="text-gray-600">{location.city}, {location.state} {location.zip}</p>
                <p className="mt-2 text-gray-600">Phone: {location.phone}</p>
                <p className="text-gray-600">Hours: {location.hours}</p>
              </div>

              <div className="mb-4">
                <h4 className="mb-2 font-medium text-gray-900">Features:</h4>
                <ul className="space-y-1">
                  {location.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="mr-2 h-4 w-4 text-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex space-x-3">
                <Button variant="default" className="flex-1 bg-black text-white hover:bg-gray-900">
                  Visit Location
                </Button>
                <Button variant="outline" className="flex-1 border-red-600 text-red-600 hover:bg-red-50">
                  Get Directions
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-gray-600">
            Email us at <a href="mailto:skc@goskc.com" className="text-red-600 hover:underline">skc@goskc.com</a> for more information or to schedule a tour.
          </p>
          <Button variant="outline" className="border-red-600 px-6 py-3 text-red-600 hover:bg-red-50">
            Contact Us About Locations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Location;
