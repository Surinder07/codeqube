'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-3">
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
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">
              Home
            </a>
            <a href="/#services" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">
              Services
            </a>
            <a href="/#about" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">
              About
            </a>
            <a href="/team" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">
              Team
            </a>
            <a href="/#projects" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">
              Projects
            </a>
            <a href="/#contact" className="text-gray-700 hover:text-yellow-600 px-3 py-2 text-sm font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-lg font-medium transition-colors">
              Get Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-yellow-600 focus:outline-none focus:text-yellow-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="/" className="text-gray-700 hover:text-yellow-600 block px-3 py-2 text-base font-medium">
                Home
              </a>
              <a href="/#services" className="text-gray-700 hover:text-yellow-600 block px-3 py-2 text-base font-medium">
                Services
              </a>
              <a href="/#about" className="text-gray-700 hover:text-yellow-600 block px-3 py-2 text-base font-medium">
                About
              </a>
              <a href="/team" className="text-gray-700 hover:text-yellow-600 block px-3 py-2 text-base font-medium">
                Team
              </a>
              <a href="/#projects" className="text-gray-700 hover:text-yellow-600 block px-3 py-2 text-base font-medium">
                Projects
              </a>
              <a href="/#contact" className="text-gray-700 hover:text-yellow-600 block px-3 py-2 text-base font-medium">
                Contact
              </a>
              <div className="pt-4">
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-lg font-medium transition-colors">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
