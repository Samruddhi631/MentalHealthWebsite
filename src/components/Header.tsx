import React from 'react';
import { Heart, Phone, MessageCircle, Music, GamepadIcon, Users, BookOpen } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Heart className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">CampusWell</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => setActiveSection('home')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                activeSection === 'home' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <Heart className="w-4 h-4" />
              <span>Home</span>
            </button>
            
            <button
              onClick={() => setActiveSection('emergency')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                activeSection === 'emergency' ? 'bg-red-100 text-red-700' : 'text-gray-600 hover:text-red-600'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>Emergency</span>
            </button>
            
            <button
              onClick={() => setActiveSection('sounds')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                activeSection === 'sounds' ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:text-green-600'
              }`}
            >
              <Music className="w-4 h-4" />
              <span>Sounds</span>
            </button>
            
            <button
              onClick={() => setActiveSection('games')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                activeSection === 'games' ? 'bg-purple-100 text-purple-700' : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              <GamepadIcon className="w-4 h-4" />
              <span>Games</span>
            </button>
            
            <button
              onClick={() => setActiveSection('community')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                activeSection === 'community' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Community</span>
            </button>
            
            <button
              onClick={() => setActiveSection('resources')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                activeSection === 'resources' ? 'bg-teal-100 text-teal-700' : 'text-gray-600 hover:text-teal-600'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Resources</span>
            </button>
          </nav>
          
          <button
            onClick={() => setActiveSection('chat')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center space-x-2 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>24/7 Support</span>
          </button>
        </div>
      </div>
    </header>
  );
}