'use client';

import Header from '../../components/Header';

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Surinder Singh",
      role: "Chief Executive Officer",
      shortRole: "CEO",
      description: "Visionary leader with over 15 years of experience in technology consulting and digital transformation. Surinder drives CodeQube's strategic direction and ensures we deliver exceptional value to our clients.",
      image: "https://via.placeholder.com/256x256/FFD700/000000?text=SS",
      color: "yellow"
    },
    {
      id: 2,
      name: "Rachna Singh",
      role: "Managing Director",
      shortRole: "MD",
      description: "Strategic leader overseeing operations and client relationships. Rachna brings extensive expertise in business development and ensures CodeQube maintains the highest standards of service delivery.",
      image: "https://via.placeholder.com/256x256/FFD700/000000?text=RS",
      color: "yellow"
    },
    {
      id: 3,
      name: "Sachin Singh",
      role: "Full Stack Developer",
      shortRole: "Developer",
      description: "Experienced full-stack developer with expertise in modern web technologies. Sachin builds robust, scalable applications using cutting-edge frameworks and best practices.",
      image: "https://via.placeholder.com/256x256/F59E0B/000000?text=SS",
      color: "amber"
    },
    {
      id: 4,
      name: "Vikas Kumar",
      role: "Senior Developer",
      shortRole: "Senior Dev",
      description: "Senior developer with deep technical knowledge and leadership skills. Vikas mentors junior developers and ensures code quality across all projects.",
      image: "https://via.placeholder.com/256x256/F59E0B/000000?text=VK",
      color: "amber"
    },
    {
      id: 5,
      name: "Arjun Sharma",
      role: "Marketing Head",
      shortRole: "Marketing",
      description: "Creative marketing strategist driving brand awareness and lead generation. Arjun develops comprehensive digital marketing campaigns that deliver measurable results.",
      image: "https://via.placeholder.com/256x256/EA580C/000000?text=AS",
      color: "orange"
    },
    {
      id: 6,
      name: "Varun",
      role: "Sales Manager",
      shortRole: "Sales",
      description: "Results-driven sales professional with a proven track record of exceeding targets. Varun builds strong client relationships and drives business growth.",
      image: "https://via.placeholder.com/256x256/EA580C/000000?text=V",
      color: "orange"
    },
    {
      id: 7,
      name: "Erik Melena",
      role: "Sales Consultant",
      shortRole: "Consultant",
      description: "Experienced sales consultant specializing in technology solutions. Erik helps clients understand their needs and recommends the best digital transformation strategies.",
      image: "https://via.placeholder.com/256x256/FFD700/000000?text=EM",
      color: "yellow"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'yellow':
        return {
          bg: 'bg-gradient-to-br from-gray-50 to-yellow-50',
          border: 'border-yellow-200',
          hoverBorder: 'hover:border-yellow-300',
          iconBg: 'bg-yellow-400',
          badgeBg: 'bg-yellow-500',
          text: 'text-yellow-600'
        };
      case 'amber':
        return {
          bg: 'bg-gradient-to-br from-gray-50 to-amber-50',
          border: 'border-amber-200',
          hoverBorder: 'hover:border-amber-300',
          iconBg: 'bg-amber-400',
          badgeBg: 'bg-amber-500',
          text: 'text-amber-600'
        };
      case 'orange':
        return {
          bg: 'bg-gradient-to-br from-gray-50 to-orange-50',
          border: 'border-orange-200',
          hoverBorder: 'hover:border-orange-300',
          iconBg: 'bg-orange-400',
          badgeBg: 'bg-orange-500',
          text: 'text-orange-600'
        };
      default:
        return {
          bg: 'bg-gradient-to-br from-gray-50 to-yellow-50',
          border: 'border-yellow-200',
          hoverBorder: 'hover:border-yellow-300',
          iconBg: 'bg-yellow-400',
          badgeBg: 'bg-yellow-500',
          text: 'text-yellow-600'
        };
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-yellow-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Meet Our
            <span className="text-yellow-500 block">Amazing Team</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Dedicated professionals working together to deliver exceptional digital solutions 
            and transform businesses through technology innovation.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Team Members
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From leadership to development, each team member brings unique expertise and passion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => {
              const colors = getColorClasses(member.color);
              return (
                <div key={member.id} className={`${colors.bg} p-8 rounded-xl hover:shadow-lg transition-all duration-300 border ${colors.border} ${colors.hoverBorder} hover:scale-105`}>
                  <div className="text-center">
                    {/* Profile Picture */}
                    <div className="relative mb-6">
                      <div className={`w-32 h-32 mx-auto ${colors.iconBg} rounded-full flex items-center justify-center border-4 border-white shadow-lg overflow-hidden`}>
                        {/* AI-Generated Image Placeholder */}
                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                          <div className="text-center text-gray-600">
                            <div className="text-2xl mb-1">
                              👤
                            </div>
                            <div className="text-xs font-medium">
                              Profile
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 ${colors.badgeBg} text-black px-3 py-1 rounded-full text-sm font-semibold shadow-md`}>
                        {member.shortRole}
                      </div>
                    </div>
                    
                    {/* Name and Role */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className={`${colors.text} font-semibold mb-4`}>{member.role}</p>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Culture & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our team and shape our work environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Collaboration</h4>
              <p className="text-gray-600 text-sm">
                We work together as one team, sharing knowledge and supporting each other.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h4>
              <p className="text-gray-600 text-sm">
                We embrace new ideas and technologies to solve complex challenges.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h4>
              <p className="text-gray-600 text-sm">
                We strive for excellence in everything we do, from code to client service.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Passion</h4>
              <p className="text-gray-600 text-sm">
                We're passionate about technology and helping businesses succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-400 to-amber-400">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Join Our Growing Team
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            We're always looking for talented individuals who share our passion for innovation and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
              View Open Positions
            </button>
            <button className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
              Contact HR
            </button>
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
                <li><a href="/" className="hover:text-yellow-400 transition-colors">Home</a></li>
                <li><a href="/team" className="hover:text-yellow-400 transition-colors">Our Team</a></li>
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
