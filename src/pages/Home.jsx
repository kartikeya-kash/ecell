import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Users, TrendingUp, Calendar, Award, ChevronDown, ExternalLink, Sparkles, Zap, Target } from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState({});
  const [currentStat, setCurrentStat] = useState(0);

  // Intersection Observer for fade animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Rotating stats animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { number: '500+', label: 'Active Members', color: 'text-blue-600' },
    { number: '50+', label: 'Startups Launched', color: 'text-green-600' },
    { number: '$2M+', label: 'Funding Raised', color: 'text-purple-600' },
    { number: '100+', label: 'Events Hosted', color: 'text-orange-600' }
  ];

  return (
    <div className="bg-black text-gray-900 overflow-hidden min-h-screen">
      {/* Animated Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white rounded-3xl py-16 px-8 shadow-2xl relative overflow-hidden">
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/30 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-white/10 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 right-1/4 w-5 h-5 bg-white/25 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 left-1/2 w-8 h-8 bg-white/15 rounded-full animate-pulse"></div>
        </div>

        <div className="relative z-10">
          <div className="text-center">
            {/* Animated title */}
            <div className="opacity-0 animate-[fadeInUp_1s_ease-out_0.2s_forwards]">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Build the Future with{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent animate-pulse">
                    E-Cell
                  </span>
                  <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-yellow-300 animate-spin" />
                </span>
              </h1>
            </div>

            {/* Animated subtitle */}
            <div className="opacity-0 animate-[fadeInUp_1s_ease-out_0.4s_forwards]">
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Join the entrepreneurship revolution. Connect with like-minded innovators, 
                learn from industry experts, and turn your ideas into reality.
              </p>
            </div>

            {/* Animated buttons */}
            <div className="opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards]">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/events"
                  className="group bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 hover:shadow-2xl"
                >
                  <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Join Next Event
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="group border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Animated scroll indicator */}
            <div className="opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards] mt-16">
              <ChevronDown className="h-8 w-8 mx-auto text-blue-200 animate-bounce cursor-pointer" />
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section 
        id="stats" 
        data-animate
        className={`py-20 transition-all duration-1000 ${
          isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl py-16 px-8 shadow-2xl border border-gray-200">
          {/* Rotating featured stat */}
          <div className="text-center mb-12">
            <div className="inline-block p-10 bg-white rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105 border border-gray-100">
              <div className={`text-6xl font-bold mb-2 transition-colors duration-500 ${stats[currentStat].color}`}>
                {stats[currentStat].number}
              </div>
              <div className="text-gray-600 text-lg font-medium">{stats[currentStat].label}</div>
            </div>
          </div>

          {/* All stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`transform transition-all duration-500 hover:scale-110 ${
                  isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2 hover:animate-pulse">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Animated Features Section */}
      <section 
        id="features" 
        data-animate
        className={`py-20 bg-white transition-all duration-1000 ${
          isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl py-16 px-8 shadow-2xl border border-gray-200">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-[fadeInUp_1s_ease-out]">
              Why Choose E-Cell?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-[fadeInUp_1s_ease-out_0.2s_forwards]">
              We provide everything you need to transform your entrepreneurial dreams into successful ventures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8 text-blue-600" />,
                title: 'Community',
                description: 'Connect with passionate entrepreneurs, mentors, and industry experts who share your vision.',
                delay: '0s'
              },
              {
                icon: <Calendar className="h-8 w-8 text-blue-600" />,
                title: 'Events',
                description: 'Regular workshops, pitch competitions, and networking events to accelerate your growth.',
                delay: '0.2s'
              },
              {
                icon: <Award className="h-8 w-8 text-blue-600" />,
                title: 'Recognition',
                description: 'Showcase your innovations and get recognized for your entrepreneurial achievements.',
                delay: '0.4s'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`group text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 ${
                  isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: feature.delay }}
              >
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Animated Upcoming Events */}
      <section 
        id="events" 
        data-animate
        className={`py-20 transition-all duration-1000 ${
          isVisible.events ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50/95 backdrop-blur-sm rounded-3xl py-16 px-8 shadow-2xl border border-gray-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600">
              Don't miss out on these exciting opportunities to learn and network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                date: '25',
                month: 'January',
                title: 'Startup Pitch Competition',
                description: 'Present your ideas to investors and win exciting prizes.',
                time: '7:00 PM - Main Auditorium',
                delay: '0s'
              },
              {
                date: '02',
                month: 'February',
                title: 'AI & Innovation Workshop',
                description: 'Learn how AI is transforming the startup landscape.',
                time: '2:00 PM - Tech Lab',
                delay: '0.2s'
              },
              {
                date: '15',
                month: 'February',
                title: 'Networking Night',
                description: 'Connect with fellow entrepreneurs and industry leaders.',
                time: '6:00 PM - Student Center',
                delay: '0.4s'
              }
            ].map((event, index) => (
              <div 
                key={index}
                className={`group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 ${
                  isVisible.events ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: event.delay }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 group-hover:from-blue-700 group-hover:to-blue-800 transition-all duration-300 rounded-t-3xl">
                  <div className="text-3xl font-bold">{event.date}</div>
                  <div className="text-blue-100">{event.month}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                    <span>{event.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${
            isVisible.events ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Link
              to="/events"
              className="group bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-all duration-300 inline-flex items-center transform hover:scale-105 hover:shadow-xl"
            >
              View All Events
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          </div>
        </div>
      </section>

      {/* Animated Success Stories */}
      <section 
        id="success" 
        data-animate
        className={`py-20 bg-white transition-all duration-1000 ${
          isVisible.success ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl py-16 px-8 shadow-2xl border border-gray-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Meet some of our successful alumni who turned their ideas into thriving businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Founder, TechStart Inc.',
                image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
                quote: 'E-Cell provided me with the network, mentorship, and resources I needed to launch my startup. Today, TechStart Inc. has raised $2M in funding and employs 25 people.',
                delay: '0s'
              },
              {
                name: 'Michael Chen',
                role: 'CEO, InnovateNow',
                image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
                quote: 'The pitch competitions and workshops at E-Cell helped me refine my business model. InnovateNow is now a leading player in the fintech space.',
                delay: '0.3s'
              }
            ].map((story, index) => (
              <div 
                key={index}
                className={`group bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-3xl hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-blue-100 ${
                  isVisible.success ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: story.delay }}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-white group-hover:ring-blue-200 transition-all duration-300 shadow-lg"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                      {story.name}
                    </h3>
                    <p className="text-blue-600 font-medium">{story.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  "{story.quote}"
                </p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Animated CTA Section */}
      <section 
        id="cta" 
        data-animate
        className={`py-20 transition-all duration-1000 ${
          isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white relative overflow-hidden rounded-3xl py-16 shadow-2xl border border-blue-500">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/10 rounded-full animate-bounce"></div>
              <Target className="absolute top-1/3 right-1/3 h-16 w-16 text-white/10 animate-spin" />
            </div>

            <div className="text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-[fadeInUp_1s_ease-out]">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto animate-[fadeInUp_1s_ease-out_0.2s_forwards]">
                Join our community of innovators and entrepreneurs. Your next big idea could change the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[fadeInUp_1s_ease-out_0.4s_forwards]">
                <Link
                  to="/contact"
                  className="group bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105 hover:shadow-2xl"
                >
                  <Sparkles className="mr-2 h-5 w-5 group-hover:animate-spin" />
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="group border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center transform hover:scale-105"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;