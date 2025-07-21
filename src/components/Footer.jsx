import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-8 w-8 text-white" />
              <span className="text-2xl font-black tracking-tight">E-CELL</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Where visionaries are forged and empires are born. 
              Building tomorrow's industry leaders, today.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-500 hover:text-white cursor-pointer transition-all duration-300 hover:scale-125" />
              <Twitter className="h-6 w-6 text-gray-500 hover:text-white cursor-pointer transition-all duration-300 hover:scale-125" />
              <Instagram className="h-6 w-6 text-gray-500 hover:text-white cursor-pointer transition-all duration-300 hover:scale-125" />
              <Linkedin className="h-6 w-6 text-gray-500 hover:text-white cursor-pointer transition-all duration-300 hover:scale-125" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 tracking-wide">QUICK ACCESS</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300 font-medium">About Us</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-white transition-colors duration-300 font-medium">Our Team</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors duration-300 font-medium">Gallery</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors duration-300 font-medium">Blog</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 tracking-wide">CONNECT</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-white" />
                <span className="text-gray-400 font-medium">ecell@university.edu</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-white" />
                <span className="text-gray-400 font-medium">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-white" />
                <span className="text-gray-400 font-medium">University Campus, Block A</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 font-medium">
            © 2025 E-CELL. ALL RIGHTS RESERVED. BUILT FOR THE AMBITIOUS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;