import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Users, TrendingUp, Calendar, Award, ChevronDown, ExternalLink } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Hero Section - Split Screen Design */}
      <section className="min-h-screen flex items-center relative">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-gray-800 rounded-full text-sm font-medium">
                  🚀 Building Tomorrow's Companies
                </div>
                <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                  Where Ideas
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                    Become Reality
                  </span>
                </h1>
                <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                  Join 200+ ambitious students turning startup dreams into million-dollar companies. 
                  No theory. Just results.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/events"
                  className="group bg-white text-black px-8 py-4 font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Join Next Event
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="group border-2 border-gray-600 px-8 py-4 font-bold hover:border-white transition-all duration-300 flex items-center justify-center">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Right Side - Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-900 p-8 border border-gray-800 hover:border-gray-600 transition-colors">
                <div className="text-4xl font-black mb-2">43</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Companies Launched</div>
              </div>
              <div className="bg-gray-900 p-8 border border-gray-800 hover:border-gray-600 transition-colors">
                <div className="text-4xl font-black mb-2">$3.2M</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Total Funding</div>
              </div>
              <div className="bg-gray-900 p-8 border border-gray-800 hover:border-gray-600 transition-colors">
                <div className="text-4xl font-black mb-2">200+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Active Members</div>
              </div>
              <div className="bg-gray-900 p-8 border border-gray-800 hover:border-gray-600 transition-colors">
                <div className="text-4xl font-black mb-2">150+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">Jobs Created</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </div>
      </section>

      {/* Featured Success Story - Full Width */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-black border border-gray-800 overflow-hidden">
            <div className="lg:flex">
              <div className="lg:w-1/2 p-12 lg:p-16">
                <div className="space-y-6">
                  <div className="inline-block px-3 py-1 bg-green-900 text-green-300 text-sm font-medium rounded">
                    SUCCESS STORY
                  </div>
                  <h2 className="text-4xl font-black">
                    From Dorm Room to $500K Funding
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Sarah Chen started TechFlow in our incubator last year. Today, she's hiring 10 people 
                    and just closed her seed round. Her advice? "Stop planning, start building."
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
                    <div>
                      <div className="font-semibold">Sarah Chen</div>
                      <div className="text-gray-400 text-sm">Founder, TechFlow</div>
                    </div>
                  </div>
                  <Link 
                    to="/about" 
                    className="inline-flex items-center text-white hover:text-gray-300 font-medium"
                  >
                    Read Full Story
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2 bg-gray-800 flex items-center justify-center p-16">
                <div className="text-center">
                  <TrendingUp className="h-24 w-24 text-gray-600 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-gray-400">Growth Trajectory</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Column Features */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">How We Work</h2>
            <p className="text-gray-400 text-lg">Three simple steps to launch your startup</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-gray-900 p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4">01. Connect</h3>
                <p className="text-gray-300 leading-relaxed">
                  Meet co-founders, find mentors, and join a community of builders. 
                  Real connections that lead to real partnerships.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-gray-900 p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Calendar className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4">02. Learn</h3>
                <p className="text-gray-300 leading-relaxed">
                  Weekly workshops with founders who've been there. Legal, funding, 
                  product - everything you need to know.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-gray-900 p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Award className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4">03. Launch</h3>
                <p className="text-gray-300 leading-relaxed">
                  Get funding, find customers, hire your team. We provide resources 
                  and connections to make it happen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events - Horizontal Scroll */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-black mb-2">This Month</h2>
              <p className="text-gray-400">Don't miss these upcoming events</p>
            </div>
            <Link 
              to="/events" 
              className="text-white hover:text-gray-300 font-medium flex items-center"
            >
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-black border border-gray-800 hover:border-gray-600 transition-colors group">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-white text-black px-3 py-1 text-sm font-bold">
                    JAN 25
                  </div>
                  <div className="text-gray-400 text-sm">7:00 PM</div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-gray-300 transition-colors">
                  Pitch Night #47
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  5 startups, 3 minutes each, real feedback from real investors
                </p>
                <div className="text-gray-500 text-xs">Main Auditorium</div>
              </div>
            </div>

            <div className="bg-black border border-gray-800 hover:border-gray-600 transition-colors group">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-white text-black px-3 py-1 text-sm font-bold">
                    FEB 2
                  </div>
                  <div className="text-gray-400 text-sm">6:00 PM</div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-gray-300 transition-colors">
                  Legal Workshop
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Incorporation, equity, contracts - the stuff you need to know
                </p>
                <div className="text-gray-500 text-xs">Conference Room A</div>
              </div>
            </div>

            <div className="bg-black border border-gray-800 hover:border-gray-600 transition-colors group">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-white text-black px-3 py-1 text-sm font-bold">
                    FEB 8
                  </div>
                  <div className="text-gray-400 text-sm">8:30 AM</div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-gray-300 transition-colors">
                  Founder Breakfast
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Coffee and conversation with local entrepreneurs
                </p>
                <div className="text-gray-500 text-xs">Student Center</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Wins - Side by Side */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black mb-16 text-center">Recent Wins</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gray-900 border border-gray-800 p-8 hover:border-gray-600 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-bold mb-3">TechFlow Raises $500K</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Started in our incubator last year, TechFlow just closed their seed round. 
                    They're hiring 10 people this quarter.
                  </p>
                  <div className="text-sm text-gray-500">Sarah Chen, CS '23</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 p-8 hover:border-gray-600 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-bold mb-3">GreenLogistics Acquired</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Two years after starting at our pitch competition, GreenLogistics 
                    was acquired by a Fortune 500 company.
                  </p>
                  <div className="text-sm text-gray-500">Mike Rodriguez, MBA '22</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Minimal */}
      <section className="py-20 bg-gray-900 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-6">Ready to Build?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Stop waiting for the perfect moment. Join 200+ students who are already building the future.
          </p>
          <Link
            to="/contact"
            className="bg-white text-black px-12 py-4 text-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Get Started Today
            <ArrowRight className="ml-3 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;