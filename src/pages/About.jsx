import React from 'react';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-8">About E-Cell</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            We're the entrepreneurship society that focuses on results, not just meetings. 
            Since 2018, we've helped launch over 40 companies and raised more than $3M in funding.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">How We Started</h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  E-Cell began when a group of students got tired of business plan competitions 
                  that led nowhere. We wanted to build real companies, not just write about them.
                </p>
                <p>
                  What started as informal meetups in dorm rooms has grown into a community 
                  of over 200 active members, with alumni companies now employing hundreds of people.
                </p>
                <p>
                  We're not about theory. We're about getting your hands dirty, making mistakes, 
                  learning fast, and building something people actually want.
                </p>
              </div>
            </div>
            <div className="bg-gray-900 p-8">
              <h3 className="text-2xl font-semibold mb-6">By the Numbers</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Companies launched</span>
                  <span className="font-semibold">43</span>
                </div>
                <div className="flex justify-between">
                  <span>Total funding raised</span>
                  <span className="font-semibold">$3.2M</span>
                </div>
                <div className="flex justify-between">
                  <span>Active members</span>
                  <span className="font-semibold">200+</span>
                </div>
                <div className="flex justify-between">
                  <span>Jobs created</span>
                  <span className="font-semibold">150+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">What We Believe</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Target className="h-6 w-6 mr-3" />
                  Action Over Planning
                </h3>
                <p className="text-gray-300">
                  Perfect business plans don't exist. Great companies are built by people 
                  who start before they're ready and figure it out as they go.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Users className="h-6 w-6 mr-3" />
                  Community Matters
                </h3>
                <p className="text-gray-300">
                  Building a company is hard. Having a community of people who understand 
                  what you're going through makes all the difference.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Award className="h-6 w-6 mr-3" />
                  Learn by Doing
                </h3>
                <p className="text-gray-300">
                  You can't learn entrepreneurship from a textbook. You learn it by 
                  talking to customers, building products, and making sales.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <TrendingUp className="h-6 w-6 mr-3" />
                  Impact First
                </h3>
                <p className="text-gray-300">
                  The best companies solve real problems for real people. We focus on 
                  building businesses that make a meaningful difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">Current Leadership</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-800 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-semibold mb-2">Alex Chen</h3>
              <p className="text-gray-400 mb-4">President</p>
              <p className="text-gray-300 text-sm">
                Previously founded two companies. Currently building an AI startup 
                while finishing her CS degree.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-800 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-semibold mb-2">Jordan Kim</h3>
              <p className="text-gray-400 mb-4">VP Operations</p>
              <p className="text-gray-300 text-sm">
                Runs our incubator program. Has helped 15+ companies get their 
                first customers and funding.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-800 rounded-full mx-auto mb-6"></div>
              <h3 className="text-xl font-semibold mb-2">Sam Patel</h3>
              <p className="text-gray-400 mb-4">VP Events</p>
              <p className="text-gray-300 text-sm">
                Organizes our pitch nights and workshops. Previously worked at 
                a venture capital firm.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;