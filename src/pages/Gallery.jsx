import React, { useState } from 'react';
import { X, Calendar, Users, Award, Presentation } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: <Calendar className="h-5 w-5" /> },
    { id: 'events', name: 'Events', icon: <Calendar className="h-5 w-5" /> },
    { id: 'workshops', name: 'Workshops', icon: <Presentation className="h-5 w-5" /> },
    { id: 'competitions', name: 'Competitions', icon: <Award className="h-5 w-5" /> },
    { id: 'networking', name: 'Networking', icon: <Users className="h-5 w-5" /> }
  ];

  const images = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'events',
      title: 'Annual Entrepreneurship Summit 2024',
      description: 'Our biggest event bringing together 500+ entrepreneurs, investors, and students.'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'workshops',
      title: 'Startup Fundamentals Workshop',
      description: 'Interactive session covering business model canvas and lean startup methodology.'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'competitions',
      title: 'Pitch Perfect Competition',
      description: 'Students presenting their innovative startup ideas to a panel of expert judges.'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'networking',
      title: 'Founder Meet & Greet',
      description: 'Exclusive networking session with successful alumni entrepreneurs.'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/3183164/pexels-photo-3183164.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'workshops',
      title: 'Digital Marketing Masterclass',
      description: 'Hands-on workshop on building digital presence for startups.'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'events',
      title: 'Innovation Expo 2024',
      description: 'Showcasing cutting-edge projects and prototypes from our incubation program.'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'competitions',
      title: 'Hackathon Finals',
      description: '48-hour coding marathon resulting in innovative tech solutions.'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'networking',
      title: 'Industry Panel Discussion',
      description: 'Expert panel sharing insights on emerging market trends and opportunities.'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'workshops',
      title: 'Financial Planning for Startups',
      description: 'Essential workshop on fundraising, budgeting, and financial management.'
    }
  ];

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Photos from our events, workshops, and community gatherings. 
            See what we've been up to.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                  filter === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-shadow">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                      <p className="text-sm text-gray-200">{image.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="bg-white rounded-xl overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to Be Featured?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join our upcoming events and workshops to be part of our growing community 
            and get featured in our gallery!
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Join Our Next Event
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;