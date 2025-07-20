import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Tag, ChevronLeft, ChevronRight, Plus, Filter } from 'lucide-react';

const Events = () => {
  // State for calendar navigation - tracks current month/year
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // State for filtering events by category
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // State for selected date in calendar
  const [selectedDate, setSelectedDate] = useState(null);

  // Event categories for filtering - you can modify these
  const categories = [
    { id: 'all', name: 'All Events', color: 'bg-gray-500' },
    { id: 'workshop', name: 'Workshops', color: 'bg-blue-500' },
    { id: 'competition', name: 'Competitions', color: 'bg-red-500' },
    { id: 'networking', name: 'Networking', color: 'bg-green-500' },
    { id: 'seminar', name: 'Seminars', color: 'bg-purple-500' },
    { id: 'hackathon', name: 'Hackathons', color: 'bg-orange-500' }
  ];

  // Sample events data - replace with your actual events
  const events = [
    {
      id: 1,
      title: 'Startup Pitch Competition',
      date: '2025-01-25',
      time: '10:00 AM - 4:00 PM',
      location: 'Main Auditorium',
      category: 'competition',
      description: 'Present your startup ideas to a panel of investors and industry experts.',
      attendees: 150,
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'AI & Machine Learning Workshop',
      date: '2025-01-28',
      time: '2:00 PM - 6:00 PM',
      location: 'Tech Lab 101',
      category: 'workshop',
      description: 'Hands-on workshop covering the basics of AI and ML for entrepreneurs.',
      attendees: 80,
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Entrepreneur Networking Night',
      date: '2025-02-05',
      time: '6:00 PM - 9:00 PM',
      location: 'Student Center',
      category: 'networking',
      description: 'Connect with fellow entrepreneurs, mentors, and potential co-founders.',
      attendees: 200,
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'FinTech Innovation Seminar',
      date: '2025-02-12',
      time: '1:00 PM - 5:00 PM',
      location: 'Conference Hall A',
      category: 'seminar',
      description: 'Explore the latest trends and opportunities in financial technology.',
      attendees: 120,
      image: 'https://images.pexels.com/photos/3183164/pexels-photo-3183164.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'upcoming'
    },
    {
      id: 5,
      title: '48-Hour Innovation Hackathon',
      date: '2025-02-20',
      time: '9:00 AM - 9:00 PM (3 days)',
      location: 'Innovation Hub',
      category: 'hackathon',
      description: 'Build innovative solutions to real-world problems in 48 hours.',
      attendees: 300,
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400',
      status: 'upcoming'
    }
  ];

  // Filter events based on selected category
  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  // Calendar helper functions
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  // Navigation functions for calendar
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  // Check if a date has events
  const hasEvents = (day) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.some(event => event.date === dateStr);
  };

  // Get events for a specific date
  const getEventsForDate = (day) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.filter(event => event.date === dateStr);
  };

  // Format date for display
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Get category color class
  const getCategoryColor = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.color : 'bg-gray-500';
  };

  return (
    <div className="py-12 bg-gray-900 min-h-screen">
      {/* Hero Section with gradient background */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Upcoming <span className="text-blue-400">Events</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with our latest workshops, competitions, and networking events. 
            Join us in building the future of entrepreneurship.
          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column - Calendar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700 sticky top-8">
                {/* Calendar Header with navigation */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-white">
                    {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </h2>
                  <div className="flex space-x-2">
                    {/* Previous month button */}
                    <button
                      onClick={goToPreviousMonth}
                      className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    {/* Next month button */}
                    <button
                      onClick={goToNextMonth}
                      className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1 mb-4">
                  {/* Day headers */}
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-center text-sm font-medium text-gray-400 py-2">
                      {day}
                    </div>
                  ))}
                  
                  {/* Empty cells for days before month starts */}
                  {Array.from({ length: getFirstDayOfMonth(currentDate) }).map((_, index) => (
                    <div key={index} className="h-10"></div>
                  ))}
                  
                  {/* Calendar days */}
                  {Array.from({ length: getDaysInMonth(currentDate) }).map((_, index) => {
                    const day = index + 1;
                    const hasEvent = hasEvents(day);
                    const isSelected = selectedDate === day;
                    
                    return (
                      <button
                        key={day}
                        onClick={() => setSelectedDate(day)}
                        className={`h-10 w-10 rounded-lg text-sm font-medium transition-all duration-200 ${
                          isSelected
                            ? 'bg-blue-600 text-white'
                            : hasEvent
                            ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30'
                            : 'text-gray-300 hover:bg-gray-700'
                        }`}
                      >
                        {day}
                        {/* Event indicator dot */}
                        {hasEvent && !isSelected && (
                          <div className="w-1 h-1 bg-blue-400 rounded-full mx-auto mt-1"></div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Selected Date Events */}
                {selectedDate && (
                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Events on {selectedDate}
                    </h3>
                    {getEventsForDate(selectedDate).length > 0 ? (
                      <div className="space-y-2">
                        {getEventsForDate(selectedDate).map(event => (
                          <div key={event.id} className="bg-gray-700 p-3 rounded-lg">
                            <h4 className="font-medium text-white text-sm">{event.title}</h4>
                            <p className="text-gray-400 text-xs">{event.time}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-400 text-sm">No events scheduled</p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Events List */}
            <div className="lg:col-span-2">
              {/* Category Filter */}
              <div className="mb-8">
                <div className="flex items-center space-x-4 mb-4">
                  <Filter className="h-5 w-5 text-gray-400" />
                  <h3 className="text-lg font-semibold text-white">Filter by Category</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                        <span>{category.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Events List */}
              <div className="space-y-6">
                {filteredEvents.map(event => (
                  <div 
                    key={event.id} 
                    className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="md:flex">
                      {/* Event Image */}
                      <div className="md:w-1/3">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      
                      {/* Event Details */}
                      <div className="md:w-2/3 p-6">
                        {/* Category Badge */}
                        <div className="flex items-center space-x-3 mb-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(event.category)}`}>
                            {categories.find(cat => cat.id === event.category)?.name}
                          </span>
                          <span className="text-green-400 text-xs font-medium uppercase tracking-wide">
                            {event.status}
                          </span>
                        </div>

                        {/* Event Title */}
                        <h3 className="text-xl font-bold text-white mb-3 hover:text-blue-400 transition-colors">
                          {event.title}
                        </h3>

                        {/* Event Description */}
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {event.description}
                        </p>

                        {/* Event Meta Information */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center space-x-2 text-gray-400">
                            <Calendar className="h-4 w-4 text-blue-400" />
                            <span className="text-sm">{formatDate(event.date)}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-400">
                            <Clock className="h-4 w-4 text-blue-400" />
                            <span className="text-sm">{event.time}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-400">
                            <MapPin className="h-4 w-4 text-blue-400" />
                            <span className="text-sm">{event.location}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-400">
                            <Users className="h-4 w-4 text-blue-400" />
                            <span className="text-sm">{event.attendees} attendees</span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-3">
                          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                            Register Now
                          </button>
                          <button className="border border-gray-600 text-gray-300 px-6 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* No Events Message */}
              {filteredEvents.length === 0 && (
                <div className="text-center py-12">
                  <Calendar className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-400 mb-2">
                    No events found
                  </h3>
                  <p className="text-gray-500">
                    Try selecting a different category or check back later for new events.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Want to Host an Event?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Have an idea for a workshop, seminar, or networking event? 
            We'd love to help you bring it to life!
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
            <Plus className="mr-2 h-5 w-5" />
            Propose an Event
          </button>
        </div>
      </section>
    </div>
  );
};

export default Events;