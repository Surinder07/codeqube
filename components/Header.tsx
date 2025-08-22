'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Company Name */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                {/* CodeQube Logo - 2x2 grid of yellow squares with CODE letters */}
                <div className="grid grid-cols-2 gap-1 w-10 h-10">
                  <div className="bg-yellow-400 flex items-center justify-center">
                    <span className="text-black font-bold text-sm">C</span>
                  </div>
                  <div className="bg-yellow-400 flex items-center justify-center">
                    <span className="text-black font-bold text-sm">O</span>
                  </div>
                  <div className="bg-yellow-400 flex items-center justify-center">
                    <span className="text-black font-bold text-sm">D</span>
                  </div>
                  <div className="bg-yellow-400 flex items-center justify-center">
                    <span className="text-black font-bold text-sm">E</span>
                  </div>
                </div>
                <h1 className="text-2xl font-bold text-gray-900">CodeQube</h1>
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">Home</Link>
            <Link href="/#services" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">Services</Link>
            <Link href="/#about" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">About</Link>
            <Link href="/team" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">Team</Link>
            <Link href="/#projects" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">Projects</Link>
            <Link href="/#contact" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">Contact</Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/quote" className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-lg font-semibold transition-colors">
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-yellow-600 p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
