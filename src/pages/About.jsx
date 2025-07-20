import React from 'react';
import { Target, Eye, Award, Users2, Lightbulb, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-blue-600" />,
      title: 'Innovation',
      description: 'We foster creative thinking and encourage innovative solutions to contemporary challenges.'
    },
    {
      icon: <Users2 className="h-8 w-8 text-blue-600" />,
      title: 'Collaboration',
      description: 'Building strong partnerships and networks within the entrepreneurial ecosystem.'
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'Excellence',
      description: 'Striving for the highest standards in everything we do and supporting others to achieve the same.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: 'Growth',
      description: 'Continuous learning and development to stay ahead in the rapidly evolving business landscape.'
    }
  ];

  const achievements = [
    '50+ successful startups launched by our members',
    'Over $2M in funding raised by alumni companies',
    'Partnerships with leading incubators and VCs',
    'Winner of National Best E-Cell Award 2023',
    '500+ active members across various disciplines',
    'International collaboration with 15+ universities'
  ];

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-blue-400">E-Cell</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are the premier entrepreneurship cell dedicated to nurturing the next generation 
            of innovators, creators, and business leaders. Our mission is to transform ideas into impactful ventures.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
              <div className="flex items-center mb-6">
                <Target className="h-10 w-10 text-blue-400 mr-4" />
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                To create a vibrant ecosystem that empowers students and young professionals 
                to develop entrepreneurial skills, turn innovative ideas into sustainable businesses, 
                and contribute to economic growth through job creation and technological advancement.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
              <div className="flex items-center mb-6">
                <Eye className="h-10 w-10 text-blue-400 mr-4" />
                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                To be the leading entrepreneurship cell that produces globally competitive 
                entrepreneurs and innovative startups, fostering a culture of creativity, 
                risk-taking, and sustainable business practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300">
              The principles that guide everything we do and shape our community culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-blue-100">
              Milestones that showcase our impact and growth over the years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-4 bg-blue-700 p-4 rounded-lg border border-blue-500">
                <div className="w-2 h-2 bg-blue-300 rounded-full flex-shrink-0"></div>
                <span className="text-lg">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;