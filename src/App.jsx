import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="text-xl font-bold text-gray-900">HUNTER, HAWES & CO.</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-red-600 font-medium border-b-2 border-red-600 pb-1">Home</a>
                <a href="#about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">About</a>
                <a href="#services" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Services</a>
                <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 mb-6 tracking-tight">
              HUNTER, HAWES
              <br />
              <span className="text-gray-900">& CO.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
              M&A Advisory for the Creative Economy
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              We're not your typical M&A advisors. Black t-shirts, chinos, and leather trainers. 
              We're part of the creative economy we serve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-105">
                Get Started
              </button>
              <button className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-50 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Specialized M&A advisory for creative, consulting, and professional services firms</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Buy Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Buy</h3>
              <p className="text-gray-600 mb-6">
                Identifying and acquiring target companies that align with your strategic vision and growth objectives.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Target identification & screening</li>
                <li>• Due diligence management</li>
                <li>• Valuation & negotiation</li>
                <li>• Deal structuring & closing</li>
              </ul>
            </div>

            {/* Sell Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sell</h3>
              <p className="text-gray-600 mb-6">
                Divesting businesses for maximum value through strategic positioning and expert negotiation.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Business valuation & positioning</li>
                <li>• Buyer identification & outreach</li>
                <li>• Process management</li>
                <li>• Value maximization strategies</li>
              </ul>
            </div>

            {/* Advisory Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advisory</h3>
              <p className="text-gray-600 mb-6">
                Strategic guidance and transaction support for complex M&A situations and growth planning.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Strategic planning & analysis</li>
                <li>• Market intelligence</li>
                <li>• Transaction structuring</li>
                <li>• Post-merger integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                We're Not Your Typical M&A Advisors
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We specialize in M&A advisory for creative, consulting, and professional services firms 
                with revenues under £20 million. Based in London, we understand the unique challenges 
                and opportunities in the creative economy.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our approach is different. We're part of the creative economy we serve - we understand 
                the culture, the challenges, and what drives value in these businesses because we live it every day.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">Sector-specific expertise in creative services</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">London-based with UK market focus</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">Under £20M revenue specialization</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">Contemporary approach to traditional M&A</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 lg:p-12">
              <blockquote className="text-xl text-gray-700 italic mb-6">
                "Finally, M&A advisors who actually understand our business. They speak our language 
                and get the creative economy in a way traditional advisors never could."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">JD</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Jane Doe</div>
                  <div className="text-gray-600">Founder, Creative Agency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300">
              Let's discuss how we can help with your M&A objectives
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 text-red-400 mr-4">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <span className="text-gray-300">hello@hunterhawes.co</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 text-red-400 mr-4">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <span className="text-gray-300">+44 20 7123 4567</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 text-red-400 mr-4">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <span className="text-gray-300">London, United Kingdom</span>
                </div>
              </div>
            </div>
            
            <div>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-red-500 focus:outline-none"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-red-500 focus:outline-none"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Tell us about your M&A objectives..." 
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-red-500 focus:outline-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-white font-bold">HUNTER, HAWES & CO.</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 Hunter, Hawes & Co. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

