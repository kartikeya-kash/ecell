import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Lightbulb, Trophy, Target, Calendar, BookOpen } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
      title: 'Innovation Hub',
      description: 'Foster creative thinking and innovative solutions to real-world problems.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Community Building',
      description: 'Connect with like-minded entrepreneurs and build lasting partnerships.'
    },
    {
      icon: <Trophy className="h-8 w-8 text-blue-600" />,
      title: 'Competitions',
      description: 'Participate in hackathons, pitch competitions, and startup challenges.'
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: 'Mentorship',
      description: 'Get guidance from industry experts and successful entrepreneurs.'
    }
  ];

  const events = [
    {
      date: 'Mar 15',
      title: 'Startup Pitch Competition',
      description: 'Present your startup ideas to investors and industry experts.'
    },
    {
      date: 'Mar 22',
      title: 'Entrepreneurship Workshop',
      description: 'Learn the fundamentals of starting and scaling a business.'
    },
    {
      date: 'Apr 5',
      title: 'Tech Innovators Meetup',
      description: 'Network with tech entrepreneurs and discuss emerging trends.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-black text-white py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-transparent to-gray-800"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
              BUILD THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">FUTURE</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Where ambitious minds converge to create tomorrow's most impactful companies. 
              Join the entrepreneurial revolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/about"
                className="bg-white text-black px-10 py-4 font-bold hover:bg-gray-200 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 shadow-2xl"
              >
                DISCOVER MORE
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-10 py-4 font-bold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                JOIN THE MOVEMENT
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              WHAT SETS US APART
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              More than just a club. We're a launchpad for the next generation of industry leaders.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <div key={index} className="bg-black border border-gray-800 p-8 hover:border-gray-600 transition-all duration-500 group hover:transform hover:scale-105">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <div className="text-black">{feature.icon}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-wide">{feature.title.toUpperCase()}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
              IMPACT BY NUMBERS
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-6xl md:text-7xl font-black mb-4">500+</div>
              <div className="text-gray-600 font-semibold tracking-wide">ACTIVE MEMBERS</div>
            </div>
            <div>
              <div className="text-6xl md:text-7xl font-black mb-4">50+</div>
              <div className="text-gray-600 font-semibold tracking-wide">STARTUPS LAUNCHED</div>
            </div>
            <div>
              <div className="text-6xl md:text-7xl font-black mb-4">25+</div>
              <div className="text-gray-600 font-semibold tracking-wide">INDUSTRY MENTORS</div>
            </div>
            <div>
              <div className="text-6xl md:text-7xl font-black mb-4">100+</div>
              <div className="text-gray-600 font-semibold tracking-wide">EVENTS HOSTED</div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              WHAT'S NEXT
            </h2>
            <p className="text-xl text-gray-400">
              Exclusive opportunities for the ambitious few.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {events.map((event, index) => (
              <div key={index} className="bg-gray-950 border border-gray-800 p-8 hover:border-gray-600 transition-all duration-500 group hover:transform hover:scale-105">
                <div className="flex items-start space-x-6">
                  <div className="bg-white text-black px-4 py-3 font-black text-sm tracking-wide">
                    {event.date}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{event.title.toUpperCase()}</h3>
                    <p className="text-gray-400 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/events"
              className="bg-white text-black px-10 py-4 font-bold hover:bg-gray-200 transition-all duration-300 inline-flex items-center transform hover:scale-105 shadow-2xl"
            >
              <Calendar className="mr-2 h-5 w-5" />
              VIEW ALL EVENTS
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-950 text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            READY TO MAKE HISTORY?
          </h2>
          <p className="text-xl mb-12 text-gray-400 max-w-3xl mx-auto">
            The future belongs to those bold enough to build it. Your journey starts here.
          </p>
          <Link
            to="/newsletter"
            className="bg-white text-black px-10 py-4 font-bold hover:bg-gray-200 transition-all duration-300 inline-flex items-center transform hover:scale-105 shadow-2xl"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            JOIN THE ELITE
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;