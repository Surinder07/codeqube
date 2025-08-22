import Header from '../components/Header';
import AboutUs from '../components/AboutUs';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-yellow-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Business with
            <span className="text-yellow-500 block">Digital Excellence</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We are a leading consulting firm specializing in digital transformation, 
            web development, mobile apps, and strategic technology solutions that drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
              Get Started
            </button>
            <button className="border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-black px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development */}
            <div className="bg-gradient-to-br from-gray-50 to-yellow-50 p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-200 hover:border-yellow-200">
              <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Web Development</h3>
              <p className="text-gray-600">
                Custom websites, e-commerce platforms, and web applications built with cutting-edge technologies.
              </p>
            </div>

            {/* Mobile Apps */}
            <div className="bg-gradient-to-br from-gray-50 to-amber-50 p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-200 hover:border-amber-200">
              <div className="w-16 h-16 bg-amber-400 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile Applications</h3>
              <p className="text-gray-600">
                Native and cross-platform mobile apps for iOS and Android that engage users and drive results.
              </p>
            </div>

            {/* SEO & Digital Marketing */}
            <div className="bg-gradient-to-br from-gray-50 to-orange-50 p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-200 hover:border-orange-200">
              <div className="w-16 h-16 bg-orange-400 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">SEO & Digital Marketing</h3>
              <p className="text-gray-600">
                Search engine optimization, content marketing, and digital strategies to boost your online presence.
              </p>
            </div>

            {/* Digital Consulting */}
            <div className="bg-gradient-to-br from-gray-50 to-yellow-50 p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-200 hover:border-yellow-200">
              <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital Consulting</h3>
              <p className="text-gray-600">
                Strategic guidance on digital transformation, technology adoption, and business process optimization.
              </p>
            </div>

            {/* Cloud Solutions */}
            <div className="bg-gradient-to-br from-gray-50 to-amber-50 p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-200 hover:border-amber-200">
              <div className="w-16 h-16 bg-amber-400 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cloud Solutions</h3>
              <p className="text-gray-600">
                Cloud infrastructure, migration, and optimization services for scalable and secure operations.
              </p>
            </div>

            {/* Data Analytics */}
            <div className="bg-gradient-to-br from-gray-50 to-orange-50 p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-200 hover:border-orange-200">
              <div className="w-16 h-16 bg-orange-400 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Analytics</h3>
              <p className="text-gray-600">
                Business intelligence, data visualization, and analytics solutions to drive informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-400 to-amber-400">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-black mb-2">500+</div>
              <div className="text-gray-800 font-medium">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">50+</div>
              <div className="text-gray-800 font-medium">Industries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">98%</div>
              <div className="text-gray-800 font-medium">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">24/7</div>
              <div className="text-gray-800 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      <AboutUs />
      
      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced leaders driving innovation and digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* CEO */}
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-yellow-100 to-amber-100 rounded-full flex items-center justify-center border-4 border-yellow-200">
                  <svg className="w-24 h-24 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    CEO
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Surinder Singh</h3>
              <p className="text-gray-600 mb-4">Chief Executive Officer</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Visionary leader with over 15 years of experience in technology consulting and digital transformation. 
                Surinder drives CodeQube's strategic direction and ensures we deliver exceptional value to our clients.
              </p>
            </div>
            
            {/* MD */}
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center border-4 border-amber-200">
                  <svg className="w-24 h-24 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    MD
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Rachna Singh</h3>
              <p className="text-gray-600 mb-4">Managing Director</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Strategic leader overseeing operations and client relationships. Rachna brings extensive expertise 
                in business development and ensures CodeQube maintains the highest standards of service delivery.
              </p>
            </div>
          </div>
          
          {/* Company Values */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h3>
              <p className="text-gray-600">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h4>
                <p className="text-gray-600">
                  We strive for excellence in every project, delivering solutions that exceed expectations.
                </p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h4>
                <p className="text-gray-600">
                  We embrace cutting-edge technologies and creative solutions to solve complex challenges.
                </p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Partnership</h4>
                <p className="text-gray-600">
                  We build lasting relationships with our clients, working as an extension of their team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Projects />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your digital goals
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">info@codeqube.io</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <div className="text-gray-600">+1 647-867-0848</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Office</div>
                    <div className="text-gray-600">Mississauga, ON</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="john@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                {/* CodeQube Logo in Footer */}
                <div className="grid grid-cols-2 gap-1 w-8 h-8">
                  <div className="bg-yellow-400 flex items-center justify-center">
                    <span className="text-black font-bold text-xs">C</span>
                  </div>
                  <div className="bg-yellow-400 flex items-center justify-center">
                    <span className="text-black font-bold text-xs">O</span>
                  </div>
                  <div className="bg-yellow-400 flex items-center justify-center">
                    <span className="text-black font-bold text-xs">D</span>
                  </div>
                  <div className="bg-yellow-400 flex items-center justify-center">
                    <span className="text-black font-bold text-xs">E</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-yellow-400">CodeQube</h3>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Your trusted partner for digital transformation, web development, and strategic technology consulting.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Mobile Apps</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Digital Consulting</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Cloud Solutions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} CodeQube. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
