import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Emergency from './components/Emergency';
import SoundLibrary from './components/SoundLibrary';
import Games from './components/Games';
import Community from './components/Community';
import Resources from './components/Resources';
import ChatSupport from './components/ChatSupport';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home setActiveSection={setActiveSection} />;
      case 'emergency':
        return <Emergency />;
      case 'sounds':
        return <SoundLibrary />;
      case 'games':
        return <Games />;
      case 'community':
        return <Community />;
      case 'resources':
        return <Resources />;
      case 'chat':
        return <ChatSupport />;
      default:
        return <Home setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {renderActiveSection()}
      </main>
    </div>
  );
}

export default App;