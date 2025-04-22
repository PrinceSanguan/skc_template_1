import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Contact Us</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Have questions about our martial arts programs? We're here to help. Reach out to us and we'll get back to you as soon as possible.
          </p>
          <div className="mx-auto mt-4 h-1 w-20 bg-red-600"></div>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col overflow-hidden rounded-2xl shadow-xl lg:flex-row">
            <div className="w-full bg-black px-8 py-12 text-white lg:w-1/3">
              <h3 className="mb-6 text-2xl font-bold">Get in Touch</h3>

              <div className="mb-8 space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Evans Location</p>
                    <p className="mt-1 text-gray-300">4150 Washington Road, Suite 4</p>
                    <p className="text-gray-300">Evans, GA 30809</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Grovetown Location</p>
                    <p className="mt-1 text-gray-300">271 Meridian Drive</p>
                    <p className="text-gray-300">Grovetown, GA 30813</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="mt-1 text-gray-300">(706) 855-5685</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="mt-1 text-gray-300">skc@goskc.com</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mb-4 text-lg font-medium">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition-colors hover:bg-white/30">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition-colors hover:bg-white/30">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.029 10.029 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                    </svg>
                  </a>
                  <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition-colors hover:bg-white/30">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition-colors hover:bg-white/30">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.592 3.501H4.406c-.501 0-.902.401-.902.902v15.246c0 .5.401.901.902.901h15.186c.501 0 .908-.401.908-.901V4.403c0-.501-.407-.902-.908-.902zM8.592 17.201H6.13v-7.703h2.463v7.703zm-1.23-8.742a1.425 1.425 0 110-2.85 1.425 1.425 0 010 2.85zm10.399 8.742h-2.463v-3.967c0-.917-.018-2.1-1.28-2.1-1.279 0-1.475.999-1.475 2.033v4.034h-2.462V9.498h2.36v1.08h.035c.33-.623 1.132-1.28 2.326-1.28 2.493 0 2.953 1.637 2.953 3.76v4.143z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full bg-white px-8 py-12 lg:w-2/3">
              <form>
                <div className="mb-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="first_name" className="mb-2 block text-sm font-medium text-gray-900">First Name</label>
                    <input
                      type="text"
                      id="first_name"
                      className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-red-500 focus:ring-red-500"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="last_name" className="mb-2 block text-sm font-medium text-gray-900">Last Name</label>
                    <input
                      type="text"
                      id="last_name"
                      className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-red-500 focus:ring-red-500"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-red-500 focus:ring-red-500"
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-900">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-red-500 focus:ring-red-500"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="program" className="mb-2 block text-sm font-medium text-gray-900">Interested Program</label>
                  <select
                    id="program"
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-red-500 focus:ring-red-500"
                    required
                  >
                    <option value="">Select a program</option>
                    <option value="lil-dragons">Lil Dragons (4-5)</option>
                    <option value="kids">Kids Karate (6-10)</option>
                    <option value="teens">Teens Karate (11-13)</option>
                    <option value="adults">Adult Kempo Karate (14+)</option>
                    <option value="kickboxing">Kickboxing (14+)</option>
                    <option value="jiu-jitsu">Jiu Jitsu (14+)</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-900">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-red-500 focus:ring-red-500"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>

                <Button type="submit" variant="default" className="w-full bg-red-600 px-6 py-3 text-white hover:bg-red-700">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
