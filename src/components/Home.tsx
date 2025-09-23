import React from 'react';
import { Heart, Shield, Users, Headphones, GamepadIcon, MessageCircle } from 'lucide-react';

interface HomeProps {
  setActiveSection: (section: string) => void;
}

export default function Home({ setActiveSection }: HomeProps) {
  const features = [
    {
      icon: Shield,
      title: 'Emergency Support',
      description: 'Immediate access to crisis hotlines and emergency mental health resources',
      action: () => setActiveSection('emergency'),
      color: 'text-red-600',
      bg: 'bg-red-50 hover:bg-red-100'
    },
    {
      icon: Headphones,
      title: 'Calming Sounds',
      description: 'Curated library of soothing sounds and ambient music for relaxation',
      action: () => setActiveSection('sounds'),
      color: 'text-green-600',
      bg: 'bg-green-50 hover:bg-green-100'
    },
    {
      icon: GamepadIcon,
      title: 'Relaxation Games',
      description: 'Interactive breathing exercises and mindfulness activities',
      action: () => setActiveSection('games'),
      color: 'text-purple-600',
      bg: 'bg-purple-50 hover:bg-purple-100'
    },
    {
      icon: Users,
      title: 'Peer Community',
      description: 'Connect with fellow students and share positive mental health practices',
      action: () => setActiveSection('community'),
      color: 'text-indigo-600',
      bg: 'bg-indigo-50 hover:bg-indigo-100'
    },
    {
      icon: MessageCircle,
      title: '24/7 AI Support',
      description: 'Always-available chatbot for mental health guidance and support',
      action: () => setActiveSection('chat'),
      color: 'text-blue-600',
      bg: 'bg-blue-50 hover:bg-blue-100'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <Heart className="w-20 h-20 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Mental Health
            <span className="text-blue-600"> Matters</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A comprehensive platform designed specifically for students to support mental wellness, 
            connect with peers, and access immediate help when needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setActiveSection('emergency')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Emergency Help
            </button>
            <button
              onClick={() => setActiveSection('chat')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start 24/7 Support Chat
            </button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Comprehensive Support Tools
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={feature.action}
              className={`${feature.bg} p-8 rounded-xl cursor-pointer transition-all hover:scale-105 hover:shadow-lg`}
            >
              <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">60%</div>
              <div className="text-gray-600">of students experience overwhelming anxiety</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">support available when you need it most</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">1000+</div>
              <div className="text-gray-600">students already supported</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}