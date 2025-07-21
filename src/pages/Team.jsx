import React from 'react';
import { Mail, Linkedin, ExternalLink } from 'lucide-react';

const Team = () => {
  // Executive team with real-sounding backgrounds
  const executives = [
    {
      name: 'Alex Chen',
      role: 'President',
      bio: 'CS senior who started two companies before college. Currently building an AI platform for small businesses.',
      email: 'alex@ecell.edu',
      linkedin: '#',
      achievements: ['Founded 2 companies', 'Raised $200K seed funding']
    },
    {
      name: 'Jordan Kim',
      role: 'VP Operations',
      bio: 'Business major with internship experience at Goldman Sachs. Runs our incubator program.',
      email: 'jordan@ecell.edu', 
      linkedin: '#',
      achievements: ['15+ companies mentored', 'Ex-Goldman Sachs']
    },
    {
      name: 'Sam Patel',
      role: 'VP Events',
      bio: 'Engineering student who previously worked at Andreessen Horowitz. Organizes our pitch nights.',
      email: 'sam@ecell.edu',
      linkedin: '#', 
      achievements: ['Ex-a16z analyst', '50+ events organized']
    },
    {
      name: 'Maya Rodriguez',
      role: 'VP Marketing',
      bio: 'Communications major who grew our Instagram to 10K followers. Handles all our external communications.',
      email: 'maya@ecell.edu',
      linkedin: '#',
      achievements: ['10K+ social following', 'PR & Communications']
    }
  ];

  // Team leads for different areas
  const teamLeads = [
    {
      department: 'Incubator Program',
      lead: 'David Park',
      members: ['Lisa Wang', 'James Miller', 'Sofia Garcia'],
      description: 'Helps early-stage startups get their first customers and funding'
    },
    {
      department: 'Events & Workshops', 
      lead: 'Priya Sharma',
      members: ['Mark Wilson', 'Anna Lee', 'Carlos Santos'],
      description: 'Organizes pitch nights, workshops, and networking events'
    },
    {
      department: 'Alumni Relations',
      lead: 'Ryan Kumar', 
      members: ['Rachel Green', 'Tom Davis', 'Nisha Patel'],
      description: 'Maintains connections with successful alumni founders'
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-8">Our Team</h1>
          <p className="text-xl text-gray-300">
            The people behind E-Cell. We're students, founders, and builders 
            who are passionate about helping others start companies.
          </p>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">Executive Team</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {executives.map((member, index) => (
              <div key={index} className="bg-gray-900 p-8 border border-gray-800">
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-gray-700 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-gray-400 mb-4 font-medium">{member.role}</p>
                    <p className="text-gray-300 mb-4 leading-relaxed">{member.bio}</p>
                    
                    {/* Achievements */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.achievements.map((achievement, idx) => (
                        <span 
                          key={idx}
                          className="bg-gray-800 text-gray-300 text-xs px-3 py-1 border border-gray-700"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                    
                    {/* Contact */}
                    <div className="flex space-x-4">
                      <a 
                        href={`mailto:${member.email}`}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                      <a 
                        href={member.linkedin}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Leads */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">Team Leads</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamLeads.map((team, index) => (
              <div key={index} className="bg-black p-8 border border-gray-800">
                <h3 className="text-xl font-semibold mb-4">{team.department}</h3>
                <p className="text-gray-300 mb-6 text-sm">{team.description}</p>
                
                <div className="mb-4">
                  <p className="text-gray-400 text-sm mb-2">Team Lead:</p>
                  <p className="font-medium">{team.lead}</p>
                </div>
                
                <div>
                  <p className="text-gray-400 text-sm mb-2">Team Members:</p>
                  <div className="space-y-1">
                    {team.members.map((member, memberIndex) => (
                      <p key={memberIndex} className="text-gray-300 text-sm">
                        {member}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team */}
      <section className="py-20 bg-black border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Join Our Team</h2>
          <p className="text-xl text-gray-300 mb-12">
            We're always looking for motivated students who want to help build 
            the entrepreneurship community on campus.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:team@ecell.edu"
              className="bg-white text-black px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              <Mail className="mr-2 h-5 w-5" />
              Apply to Join
            </a>
            <a
              href="/contact"
              className="border border-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-black transition-colors inline-flex items-center justify-center"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;