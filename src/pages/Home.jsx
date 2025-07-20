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
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ignite Your <span className="text-blue-400">Entrepreneurial</span> Journey
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Join our thriving community of innovators, creators, and future business leaders. 
              Transform your ideas into successful ventures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/about"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-colors"
              >
                Join Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose E-Cell?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We provide the perfect ecosystem for nurturing entrepreneurial minds and turning innovative ideas into reality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-600">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Active Members</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Startups Launched</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
              <div className="text-blue-100">Industry Mentors</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Events Hosted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-300">
              Don't miss out on these exciting opportunities to learn and network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-semibold">
                    {event.date}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-300">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/events"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center shadow-lg"
            >
              <Calendar className="mr-2 h-5 w-5" />
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Entrepreneurial Journey?
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Join thousands of students who have transformed their ideas into successful ventures.
          </p>
          <Link
            to="/newsletter"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center shadow-lg"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Subscribe to Newsletter
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;