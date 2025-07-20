import React from 'react';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: 'The Future of Startup Funding: Trends to Watch in 2025',
    excerpt: 'Explore the evolving landscape of startup financing, from traditional VCs to emerging funding models like revenue-based financing and crypto investments.',
    author: 'Sarah Johnson',
    date: 'March 10, 2025',
    readTime: '8 min read',
    category: 'Funding',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800'
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Building a Sustainable Startup: Environmental Considerations',
      excerpt: 'How modern entrepreneurs are integrating sustainability into their business models from day one.',
      author: 'Michael Chen',
      date: 'March 8, 2025',
      readTime: '6 min read',
      category: 'Sustainability',
      image: 'https://images.pexels.com/photos/3183164/pexels-photo-3183164.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'From Idea to MVP: A Step-by-Step Guide',
      excerpt: 'Learn how to transform your startup idea into a minimum viable product that users will love.',
      author: 'Emma Rodriguez',
      date: 'March 6, 2025',
      readTime: '10 min read',
      category: 'Development',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      title: 'Networking Strategies for Young Entrepreneurs',
      excerpt: 'Effective techniques to build meaningful professional relationships in the startup ecosystem.',
      author: 'David Park',
      date: 'March 4, 2025',
      readTime: '5 min read',
      category: 'Networking',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      title: 'AI and Machine Learning in Startups: Getting Started',
      excerpt: 'A beginner-friendly guide to incorporating AI technologies into your startup without breaking the bank.',
      author: 'Alex Thompson',
      date: 'March 2, 2025',
      readTime: '7 min read',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      title: 'Customer Discovery: Understanding Your Market',
      excerpt: 'Essential techniques for validating your business idea and understanding customer needs.',
      author: 'Priya Patel',
      date: 'February 28, 2025',
      readTime: '9 min read',
      category: 'Market Research',
      image: 'https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 7,
      title: 'Legal Considerations for First-Time Founders',
      excerpt: 'Navigate the legal landscape of starting a business with confidence and avoid common pitfalls.',
      author: 'Jordan Brown',
      date: 'February 26, 2025',
      readTime: '8 min read',
      category: 'Legal',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const categories = ['All', 'Funding', 'Development', 'Marketing', 'Legal', 'Technology', 'Sustainability'];

  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            E-Cell <span className="text-blue-600">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, stories, and resources from the entrepreneurship community. 
            Stay updated with the latest trends, success stories, and practical advice.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Article
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-lg">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600 text-sm">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600 text-sm">{featuredPost.date}</span>
                    </div>
                  </div>
                  
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-sm font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600">
              Fresh insights and valuable content from our community of entrepreneurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                      <Tag className="inline h-3 w-3 mr-1" />
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {post.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </span>
                    </div>
                    
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                      Read
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Never Miss an Update
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest articles, insights, 
            and entrepreneurship resources delivered to your inbox.
          </p>
          <a
            href="/newsletter"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Subscribe Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Blog;