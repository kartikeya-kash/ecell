import React from 'react';
import { Linkedin, Twitter, Mail, Users, Star, Award, ChevronRight } from 'lucide-react';

const Team = () => {
  const leadership = [
    {
      name: 'Sarah Johnson',
      role: 'President',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Computer Science senior with experience in fintech startups. Led our team to national recognition.',
      linkedin: '#',
      twitter: '#',
      email: 'sarah@ecell.edu',
      achievements: ['National E-Cell Award Winner', '3 Startups Founded']
    },
    {
      name: 'Michael Chen',
      role: 'Vice President',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Business Administration major specializing in venture capital and startup ecosystem development.',
      linkedin: '#',
      twitter: '#',
      email: 'michael@ecell.edu',
      achievements: ['$500K Funding Raised', 'VC Network Builder']
    },
    {
      name: 'Emma Rodriguez',
      role: 'Secretary',
      image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Engineering student passionate about social entrepreneurship and sustainable business models.',
      linkedin: '#',
      twitter: '#',
      email: 'emma@ecell.edu',
      achievements: ['Social Impact Leader', 'Sustainability Expert']
    },
    {
      name: 'David Park',
      role: 'Treasurer',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Finance major with expertise in startup funding, financial planning, and investor relations.',
      linkedin: '#',
      twitter: '#',
      email: 'david@ecell.edu',
      achievements: ['Financial Strategy Expert', 'Investor Relations']
    }
  ];

  const departments = [
    {
      title: 'Events & Operations',
      lead: 'Alex Thompson',
      members: ['Lisa Wang', 'James Miller', 'Sofia Garcia', 'Ryan Kumar'],
      icon: <Users className="h-8 w-8 text-blue-400" />,
      description: 'Organizing world-class events and managing day-to-day operations',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Marketing & Outreach',
      lead: 'Priya Patel',
      members: ['Mark Wilson', 'Anna Lee', 'Carlos Santos', 'Maya Singh'],
      icon: <Star className="h-8 w-8 text-purple-400" />,
      description: 'Building brand awareness and community engagement',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Incubation & Mentorship',
      lead: 'Jordan Brown',
      members: ['Rachel Green', 'Tom Davis', 'Nisha Sharma', 'Kevin Liu'],
      icon: <Award className="h-8 w-8 text-green-400" />,
      description: 'Nurturing startups and connecting with industry mentors',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="py-12 bg-gray-900 min-h-screen">
      {/* Hero Section with Animation */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-in-left">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Dream Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-in-right animation-delay-300">
              The passionate visionaries driving innovation and entrepreneurship forward. 
              Together, we're building a community that transforms ideas into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team with Enhanced Cards */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-400">
              The visionaries leading our entrepreneurship community to new heights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <div 
                key={index} 
                className="group bg-gray-800 rounded-2xl shadow-2xl overflow-hidden hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 border border-gray-700 hover:border-blue-500/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-semibold mb-3 text-sm uppercase tracking-wide">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  {/* Achievements */}
                  <div className="mb-4">
                    {member.achievements.map((achievement, idx) => (
                      <span 
                        key={idx}
                        className="inline-block bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 text-xs px-2 py-1 rounded-full mr-2 mb-1 border border-blue-500/30"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex space-x-3">
                    <a 
                      href={member.linkedin} 
                      className="text-gray-500 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a 
                      href={member.twitter} 
                      className="text-gray-500 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a 
                      href={`mailto:${member.email}`} 
                      className="text-gray-500 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Teams with Modern Cards */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Departments
            </h2>
            <p className="text-xl text-gray-400">
              Specialized teams working together to deliver exceptional experiences and results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div 
                key={index} 
                className="group relative bg-gray-900 rounded-2xl shadow-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-gray-600 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Icon and Title */}
                  <div className="text-center mb-6">
                    <div className="bg-gray-800 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-gray-600">
                      {dept.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {dept.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">{dept.description}</p>
                    <p className="text-blue-400 font-semibold text-sm">
                      Lead: {dept.lead}
                    </p>
                  </div>
                  
                  {/* Team Members */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-white mb-3 flex items-center">
                      <Users className="h-4 w-4 mr-2 text-blue-400" />
                      Team Members:
                    </h4>
                    {dept.members.map((member, memberIndex) => (
                      <div 
                        key={memberIndex} 
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-300 group/member"
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full group-hover/member:scale-150 transition-transform duration-300"></div>
                        <span className="text-gray-300 group-hover/member:text-white transition-colors duration-300">
                          {member}
                        </span>
                        <ChevronRight className="h-3 w-3 text-gray-600 ml-auto opacity-0 group-hover/member:opacity-100 transition-opacity duration-300" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA with Animation */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              We're always looking for passionate individuals who want to make a difference 
              in the entrepreneurship community. Join us and help shape the future!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:recruitment@ecell.edu"
                className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Apply Now
              </a>
              <a
                href="/contact"
                className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 transform shadow-lg"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out forwards;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </div>
  );
};

export default Team;