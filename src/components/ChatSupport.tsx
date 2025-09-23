import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, Bot, User, Clock, Heart } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function ChatSupport() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm CampusWell Assistant, your 24/7 mental health support companion. How are you feeling today? I'm here to listen and provide support.",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Crisis keywords - prioritize these responses
    if (message.includes('suicide') || message.includes('kill myself') || message.includes('end it all')) {
      return "I'm very concerned about you. Please reach out for immediate help: Call 988 (Suicide Prevention Lifeline) or text 'HOME' to 741741. You can also contact our campus emergency line at (555) 123-4567. Your life has value and there are people who want to help you.";
    }
    
    if (message.includes('hurt myself') || message.includes('self harm')) {
      return "I'm worried about you and want you to be safe. Please consider reaching out to our campus counseling center at (555) 123-4567 or the Crisis Text Line by texting HOME to 741741. Would you like to talk about what's making you feel this way?";
    }
    
    // Anxiety responses
    if (message.includes('anxious') || message.includes('anxiety') || message.includes('panic')) {
      return "I hear that you're feeling anxious. That's really tough. Try this quick technique: Take 4 slow breaths - in for 4 counts, hold for 4, out for 4. Would you like to try our breathing exercises in the Games section? What's contributing to your anxiety today?";
    }
    
    // Depression responses
    if (message.includes('depressed') || message.includes('sad') || message.includes('hopeless')) {
      return "I'm sorry you're going through this difficult time. Depression can feel overwhelming, but you're not alone. Have you considered speaking with our campus counselors? They're available at (555) 123-4567. In the meantime, even small steps like getting some sunlight or connecting with a friend can help. What has helped you feel a little better before?";
    }
    
    // Stress responses
    if (message.includes('stressed') || message.includes('overwhelmed') || message.includes('pressure')) {
      return "Stress can feel really overwhelming, especially with everything you're juggling as a student. Let's break this down - what's the biggest source of stress right now? You might find our relaxation games helpful, or try listening to some calming sounds in our library. Remember, it's okay to ask for help.";
    }
    
    // Academic stress
    if (message.includes('exam') || message.includes('study') || message.includes('grade') || message.includes('school')) {
      return "Academic pressure is so common - you're definitely not alone in feeling this way. Have you tried breaking your work into smaller, manageable chunks? Our Academic Success Center (555) 123-4570 has great resources for study strategies. What specific academic challenge is bothering you most?";
    }
    
    // Sleep issues
    if (message.includes('sleep') || message.includes('tired') || message.includes('exhausted')) {
      return "Sleep problems can really impact your mental health. Try keeping a consistent sleep schedule, avoiding screens an hour before bed, and creating a relaxing bedtime routine. Check out our sleep resources in the Resources section. How long have you been having sleep difficulties?";
    }
    
    // Loneliness
    if (message.includes('lonely') || message.includes('alone') || message.includes('isolated')) {
      return "Feeling lonely is really hard, especially in a new environment like campus. Consider joining our peer community where you can connect with other students, or check out campus clubs and activities. Our counseling center also has support groups. What kinds of activities or people usually make you feel more connected?";
    }
    
    // Positive responses
    if (message.includes('good') || message.includes('better') || message.includes('happy')) {
      return "I'm so glad to hear you're feeling good! It's wonderful when we have those positive moments. What's contributing to you feeling this way today? It's great to recognize and celebrate these feelings.";
    }
    
    // Thank you responses
    if (message.includes('thank') || message.includes('thanks')) {
      return "You're very welcome! I'm here whenever you need support. Remember, reaching out is a sign of strength, not weakness. Is there anything else I can help you with today?";
    }
    
    // Default responses
    const defaultResponses = [
      "I hear you. Can you tell me more about what you're experiencing right now?",
      "Thank you for sharing that with me. How long have you been feeling this way?",
      "That sounds challenging. What kind of support would be most helpful for you right now?",
      "I'm here to listen. What's the most important thing you'd like me to know about how you're feeling?",
      "It takes courage to reach out. What would help you feel even a little bit better today?"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickResponses = [
    "I'm feeling anxious",
    "I'm overwhelmed with school",
    "I'm having trouble sleeping",
    "I feel lonely",
    "I'm stressed about exams"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <MessageCircle className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">24/7 Support Chat</h1>
          <p className="text-xl text-gray-600">
            Always available when you need someone to talk to
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
          <div className="flex items-start space-x-3">
            <Heart className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-red-900 mb-2">Important Notice</h3>
              <p className="text-red-800 text-sm">
                This AI assistant provides general support and guidance, but is not a replacement for professional mental health care. 
                If you're in crisis, please call 988 (Suicide Prevention Lifeline) or contact emergency services immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Chat Container */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Chat Header */}
          <div className="bg-blue-600 text-white p-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">CampusWell Assistant</h3>
                <p className="text-blue-100 text-sm">Always here to help • Online now</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map(message => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}>
                  <div className="flex items-start space-x-2">
                    {message.sender === 'bot' && (
                      <Bot className="w-4 h-4 mt-0.5 text-gray-600" />
                    )}
                    {message.sender === 'user' && (
                      <User className="w-4 h-4 mt-0.5 text-blue-200" />
                    )}
                    <div className="flex-1">
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-blue-200' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 px-4 py-3 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Bot className="w-4 h-4 text-gray-600" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Responses */}
          <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-2">Quick responses:</p>
            <div className="flex flex-wrap gap-2">
              {quickResponses.map((response, index) => (
                <button
                  key={index}
                  onClick={() => setInputMessage(response)}
                  className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  {response}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-6 border-t border-gray-200">
            <div className="flex space-x-3">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message here..."
                rows={3}
                className="flex-1 resize-none border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={sendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Send</span>
              </button>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Additional Support?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <h4 className="font-medium text-red-900">Crisis Support</h4>
              <p className="text-sm text-red-700 mb-2">If you're in immediate danger</p>
              <p className="font-mono text-lg text-red-800">988</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-900">Campus Counseling</h4>
              <p className="text-sm text-blue-700 mb-2">Professional counseling services</p>
              <p className="font-mono text-lg text-blue-800">(555) 123-4567</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <h4 className="font-medium text-green-900">Text Support</h4>
              <p className="text-sm text-green-700 mb-2">24/7 crisis text line</p>
              <p className="font-mono text-lg text-green-800">741741</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}