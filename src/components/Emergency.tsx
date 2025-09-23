import React from 'react';
import { Phone, MessageCircle, AlertTriangle, Clock, MapPin } from 'lucide-react';

export default function Emergency() {
  const emergencyContacts = [
    {
      name: 'National Suicide Prevention Lifeline',
      number: '988',
      description: '24/7, free and confidential support',
      type: 'call'
    },
    {
      name: 'Crisis Text Line',
      number: 'Text HOME to 741741',
      description: '24/7 crisis support via text',
      type: 'text'
    },
    {
      name: 'Campus Counseling Center',
      number: '(555) 123-4567',
      description: 'On-campus mental health services',
      type: 'call'
    },
    {
      name: 'Emergency Services',
      number: '911',
      description: 'Immediate emergency response',
      type: 'call'
    }
  ];

  const warningSigns = [
    'Thoughts of suicide or self-harm',
    'Feeling hopeless or trapped',
    'Severe depression or anxiety',
    'Substance abuse as coping',
    'Social withdrawal from friends/family',
    'Dramatic mood swings'
  ];

  return (
    <div className="min-h-screen bg-red-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Emergency Alert */}
        <div className="bg-red-600 text-white p-6 rounded-lg mb-8">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-8 h-8 flex-shrink-0 mt-1" />
            <div>
              <h1 className="text-2xl font-bold mb-2">Crisis Support & Emergency Resources</h1>
              <p className="text-red-100">
                If you're in immediate danger or having thoughts of self-harm, please reach out for help immediately. 
                You are not alone, and there are people who care about you.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Emergency Contacts */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Phone className="w-6 h-6 mr-2 text-red-600" />
              Emergency Contacts
            </h2>
            
            <div className="space-y-4">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{contact.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{contact.description}</p>
                      <div className="flex items-center space-x-2">
                        {contact.type === 'call' ? (
                          <Phone className="w-4 h-4 text-green-600" />
                        ) : (
                          <MessageCircle className="w-4 h-4 text-blue-600" />
                        )}
                        <span className="font-mono text-lg font-semibold text-gray-900">
                          {contact.number}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        if (contact.type === 'call') {
                          window.open(`tel:${contact.number.replace(/[^0-9]/g, '')}`);
                        }
                      }}
                      className={`px-4 py-2 rounded-md font-semibold transition-colors ${
                        contact.type === 'call'
                          ? 'bg-green-600 hover:bg-green-700 text-white'
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}
                    >
                      {contact.type === 'call' ? 'Call Now' : 'Text Now'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Warning Signs & Immediate Actions */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-2 text-yellow-600" />
                Warning Signs
              </h2>
              <ul className="space-y-2">
                {warningSigns.map((sign, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Clock className="w-6 h-6 mr-2 text-blue-600" />
                Immediate Self-Care
              </h2>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-900">Breathe deeply</p>
                  <p className="text-sm text-blue-700">Take slow, deep breaths for 5 minutes</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-semibold text-green-900">Reach out</p>
                  <p className="text-sm text-green-700">Call a trusted friend, family member, or counselor</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-semibold text-purple-900">Stay safe</p>
                  <p className="text-sm text-purple-700">Remove any means of self-harm from your environment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Campus Resources */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <MapPin className="w-6 h-6 mr-2 text-indigo-600" />
            Campus Mental Health Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 border border-indigo-200 rounded-lg">
              <h3 className="font-semibold text-indigo-900">Counseling Center</h3>
              <p className="text-sm text-gray-600 mb-2">Student Union Building, 2nd Floor</p>
              <p className="text-sm font-mono">(555) 123-4567</p>
              <p className="text-xs text-gray-500 mt-1">Mon-Fri: 8AM-5PM</p>
            </div>
            
            <div className="p-4 border border-green-200 rounded-lg">
              <h3 className="font-semibold text-green-900">Health Services</h3>
              <p className="text-sm text-gray-600 mb-2">Medical Center, 1st Floor</p>
              <p className="text-sm font-mono">(555) 123-4568</p>
              <p className="text-xs text-gray-500 mt-1">24/7 Emergency Services</p>
            </div>
            
            <div className="p-4 border border-purple-200 rounded-lg">
              <h3 className="font-semibold text-purple-900">Peer Support</h3>
              <p className="text-sm text-gray-600 mb-2">Wellness Center, 3rd Floor</p>
              <p className="text-sm font-mono">(555) 123-4569</p>
              <p className="text-xs text-gray-500 mt-1">Drop-in hours: Daily 2-6PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}