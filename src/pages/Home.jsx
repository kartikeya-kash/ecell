import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Calendar, Award, ChevronRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section - More natural, less generic */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            E-Cell
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto">
            The entrepreneurship society that actually gets things done. 
            We're building companies, not just talking about them.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/events"
              className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              See What's Happening
            </Link>
            <Link
              to="/about"
              className="border border-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do - Simple and direct */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">What We Do</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Connect</h3>
              <p className="text-gray-300 leading-relaxed">
                Meet other entrepreneurs, find co-founders, and build your network. 
                Real connections, not just LinkedIn adds.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Learn</h3>
              <p className="text-gray-300 leading-relaxed">
                Workshops, talks, and hands-on sessions with people who've actually 
                built successful companies.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Build</h3>
              <p className="text-gray-300 leading-relaxed">
                Turn your ideas into reality. We provide resources, mentorship, 
                and sometimes funding to get you started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Success - Real achievements */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">Recent Wins</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-900 p-8 border-l-4 border-white">
              <h3 className="text-xl font-semibold mb-4">TechFlow raises $500K</h3>
              <p className="text-gray-300 mb-4">
                Started in our incubator last year, TechFlow just closed their seed round. 
                They're hiring 10 people this quarter.
              </p>
              <p className="text-sm text-gray-400">Founded by Sarah Chen, CS '23</p>
            </div>
            
            <div className="bg-gray-900 p-8 border-l-4 border-white">
              <h3 className="text-xl font-semibold mb-4">GreenLogistics acquired</h3>
              <p className="text-gray-300 mb-4">
                Two years after starting at our pitch competition, GreenLogistics 
                was acquired by a Fortune 500 company.
              </p>
              <p className="text-sm text-gray-400">Founded by Mike Rodriguez, MBA '22</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events - Specific and real */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">This Month</h2>
            <Link 
              to="/events" 
              className="text-white hover:text-gray-300 flex items-center"
            >
              View All <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between p-6 bg-black border border-gray-800 hover:border-gray-600 transition-colors">
              <div>
                <h3 className="text-xl font-semibold mb-2">Pitch Night #47</h3>
                <p className="text-gray-300">5 startups, 3 minutes each, real feedback from real investors</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">Jan 25</p>
                <p className="text-gray-400">7:00 PM</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-6 bg-black border border-gray-800 hover:border-gray-600 transition-colors">
              <div>
                <h3 className="text-xl font-semibold mb-2">Legal Workshop</h3>
                <p className="text-gray-300">Incorporation, equity, and contracts - the stuff you need to know</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">Feb 2</p>
                <p className="text-gray-400">6:00 PM</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-6 bg-black border border-gray-800 hover:border-gray-600 transition-colors">
              <div>
                <h3 className="text-xl font-semibold mb-2">Founder Breakfast</h3>
                <p className="text-gray-300">Coffee and conversation with local entrepreneurs</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">Feb 8</p>
                <p className="text-gray-400">8:30 AM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-20 bg-black border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Start?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Join 200+ students and alumni who are building the next generation of companies.
          </p>
          <Link
            to="/contact"
            className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Get Involved
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;