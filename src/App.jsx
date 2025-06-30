import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-xl font-bold">
                <span className="text-gray-900">HUNTER,</span>
                <span className="text-hc-red ml-2">HAWES & CO.</span>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-900 hover:text-hc-red font-medium transition-colors">Services</a>
              <a href="#about" className="text-gray-900 hover:text-hc-red font-medium transition-colors">About</a>
              <a href="#contact" className="text-gray-900 hover:text-hc-red font-medium transition-colors">Contact</a>
              <a href="#contact" className="bg-hc-red text-white px-6 py-2 rounded-full font-medium hover:bg-red-600 transition-all">
                Get Started
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-7xl md:text-8xl font-bold text-gray-900 mb-2 leading-tight">
              HUNTER
            </h1>
            <h2 className="text-7xl md:text-8xl font-bold text-hc-red mb-8 leading-tight">
              COATES & CO.
            </h2>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            M&A Advisory for the
            <span className="text-hc-red block">Creative Economy</span>
          </h3>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Black t-shirts, chinos, and leather trainers. We're part of the creative economy we serve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="bg-hc-red text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Journey
            </a>
            <a
              href="#about"
              className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We Speak Your Language
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand creative businesses because we're part of your world, not outsiders trying to understand it.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-hc-red rounded-2xl flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Creative Agency M&A</h3>
              <p className="text-gray-600 leading-relaxed">
                We understand the unique value drivers in creative businesses—talent, client relationships, 
                and creative IP. We help buyers see what makes your agency special.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-hc-red rounded-2xl flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Consultancy Exits</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional services firms have distinct valuation models. We know how to position 
                your expertise, methodologies, and client base for optimal outcomes.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-hc-red rounded-2xl flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Partnerships</h3>
              <p className="text-gray-600 leading-relaxed">
                Sometimes the best outcome isn't a sale. We help structure partnerships, 
                joint ventures, and strategic alliances that accelerate growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                We're Not Your Typical
                <span className="text-hc-red block">M&A Advisors</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                We understand the creative economy because we're part of it. No suits, no jargon, 
                no trying to fit your creative business into traditional financial models.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Based in London, we work with creative agencies, design studios, consultancies, 
                and professional services firms across the UK. We speak your language because 
                we share your culture.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-hc-red/20 text-hc-red px-4 py-2 rounded-full text-sm font-medium">
                  Creative Agencies
                </div>
                <div className="bg-hc-red/20 text-hc-red px-4 py-2 rounded-full text-sm font-medium">
                  Design Studios
                </div>
                <div className="bg-hc-red/20 text-hc-red px-4 py-2 rounded-full text-sm font-medium">
                  Consultancies
                </div>
                <div className="bg-hc-red/20 text-hc-red px-4 py-2 rounded-full text-sm font-medium">
                  Tech Startups
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-hc-red/20 to-transparent p-8 rounded-3xl">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-hc-red rounded-full mr-3"></div>
                      Sector-specific expertise
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-hc-red rounded-full mr-3"></div>
                      Cultural understanding
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-hc-red rounded-full mr-3"></div>
                      Authentic relationships
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-hc-red rounded-full mr-3"></div>
                      Optimal outcomes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Start?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let's have a conversation about your business and explore how we can help 
              you achieve your goals.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-hc-red rounded-xl flex items-center justify-center mr-4">
                    <div className="w-6 h-6 bg-white rounded"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">London Office</h4>
                    <p className="text-gray-600">Central London<br />United Kingdom</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-hc-red rounded-xl flex items-center justify-center mr-4">
                    <div className="w-6 h-6 bg-white rounded"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">hello@huntercoates.co</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-hc-red rounded-xl flex items-center justify-center mr-4">
                    <div className="w-6 h-6 bg-white rounded"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Response Time</h4>
                    <p className="text-gray-600">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hc-red focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hc-red focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hc-red focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hc-red focus:border-transparent"></textarea>
                </div>
                <button type="submit" className="w-full bg-hc-red text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-xl font-bold mb-4">
                <span className="text-white">HUNTER</span>
                <span className="text-hc-red ml-2">COATES & CO.</span>
              </div>
              <p className="text-gray-400">M&A Advisory for the Creative Economy</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2024 Hunter Coates and Co. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-2">
                London, United Kingdom
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

