import React, { useState } from 'react';
import { BookOpen, ExternalLink, Download, Search, Filter, Clock, Users, Brain, Heart } from 'lucide-react';

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Resources', icon: BookOpen },
    { id: 'academic', name: 'Academic Stress', icon: Brain },
    { id: 'anxiety', name: 'Anxiety & Depression', icon: Heart },
    { id: 'relationships', name: 'Relationships', icon: Users },
    { id: 'sleep', name: 'Sleep & Wellness', icon: Clock }
  ];

  const resources = [
    {
      id: '1',
      title: 'Managing Academic Stress: A Student Guide',
      description: 'Comprehensive strategies for handling coursework pressure, time management, and exam anxiety.',
      category: 'academic',
      type: 'article',
      readTime: '8 min read',
      url: '#',
      featured: true
    },
    {
      id: '2',
      title: 'Understanding Anxiety in College Students',
      description: 'Evidence-based information about anxiety disorders, symptoms, and treatment options.',
      category: 'anxiety',
      type: 'guide',
      readTime: '12 min read',
      url: '#',
      featured: true
    },
    {
      id: '3',
      title: 'Building Healthy Relationships on Campus',
      description: 'Tips for maintaining friendships, romantic relationships, and family connections while in college.',
      category: 'relationships',
      type: 'article',
      readTime: '6 min read',
      url: '#',
      featured: false
    },
    {
      id: '4',
      title: 'The College Student\'s Guide to Better Sleep',
      description: 'Science-backed sleep hygiene practices tailored for student schedules and dorm living.',
      category: 'sleep',
      type: 'guide',
      readTime: '10 min read',
      url: '#',
      featured: true
    },
    {
      id: '5',
      title: 'Mindfulness Meditation for Beginners',
      description: 'Step-by-step introduction to mindfulness practices that can reduce stress and improve focus.',
      category: 'anxiety',
      type: 'video',
      readTime: '15 min watch',
      url: '#',
      featured: false
    },
    {
      id: '6',
      title: 'Time Management Techniques That Actually Work',
      description: 'Practical strategies for balancing academics, work, and personal life without burnout.',
      category: 'academic',
      type: 'worksheet',
      readTime: '20 min activity',
      url: '#',
      featured: false
    }
  ];

  const professionalResources = [
    {
      name: 'Campus Counseling Center',
      description: 'Free individual and group counseling for students',
      phone: '(555) 123-4567',
      location: 'Student Union Building, 2nd Floor',
      hours: 'Mon-Fri: 8AM-5PM'
    },
    {
      name: 'Student Health Services',
      description: 'Medical care including psychiatric services',
      phone: '(555) 123-4568',
      location: 'Health Center, Main Campus',
      hours: '24/7 Emergency, Mon-Fri: 8AM-6PM'
    },
    {
      name: 'Peer Support Groups',
      description: 'Student-led support groups for various topics',
      phone: '(555) 123-4569',
      location: 'Wellness Center, 3rd Floor',
      hours: 'Various times - see schedule'
    },
    {
      name: 'Academic Success Center',
      description: 'Study skills, time management, and academic coaching',
      phone: '(555) 123-4570',
      location: 'Library, 1st Floor',
      hours: 'Mon-Thu: 8AM-10PM, Fri: 8AM-5PM'
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getTypeColor = (type: string) => {
    const colors = {
      article: 'bg-blue-100 text-blue-800',
      guide: 'bg-green-100 text-green-800',
      video: 'bg-purple-100 text-purple-800',
      worksheet: 'bg-orange-100 text-orange-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <BookOpen className="w-16 h-16 text-teal-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Mental Health Resources</h1>
          <p className="text-xl text-gray-600">
            Comprehensive guides, articles, and professional support to help you thrive
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-teal-100 text-teal-800'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.filter(resource => resource.featured).map(resource => (
              <div key={resource.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(resource.type)}`}>
                    {resource.type}
                  </span>
                  <ExternalLink className="w-5 h-5 text-gray-400" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{resource.readTime}</span>
                  <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Resources</h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {filteredResources.map((resource, index) => (
              <div key={resource.id} className={`p-6 ${index !== filteredResources.length - 1 ? 'border-b border-gray-200' : ''}`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{resource.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}>
                        {resource.type}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-2">{resource.description}</p>
                    <span className="text-sm text-gray-500">{resource.readTime}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 ml-4">
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                    <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Support */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Support on Campus</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {professionalResources.map((resource, index) => (
              <div key={index} className="border border-teal-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-teal-900 mb-2">{resource.name}</h3>
                <p className="text-gray-600 mb-3">{resource.description}</p>
                
                <div className="space-y-1 text-sm text-gray-700">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">Phone:</span>
                    <span className="font-mono">{resource.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">Location:</span>
                    <span>{resource.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">Hours:</span>
                    <span>{resource.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Tips */}
        <div className="mt-12 bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Quick Mental Health Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Daily Routine</h3>
              <p className="text-sm">Maintain consistent sleep and meal schedules</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Stay Connected</h3>
              <p className="text-sm">Regular contact with friends and family</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Move Your Body</h3>
              <p className="text-sm">Even 15 minutes of daily activity helps</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Practice Gratitude</h3>
              <p className="text-sm">Write down 3 things you're grateful for daily</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}