import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, Download, Heart } from 'lucide-react';

export default function SoundLibrary() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
  const [volume, setVolume] = useState(0.5);
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({});

  const soundCategories = [
    {
      name: 'Nature Sounds',
      color: 'green',
      sounds: [
        { id: 'rain', name: 'Gentle Rain', duration: '1:00:00', url: 'https://www.soundjay.com/misc/rain-03.wav' },
        { id: 'ocean', name: 'Ocean Waves', duration: '45:00', url: 'https://www.soundjay.com/nature/ocean-01.wav' },
        { id: 'forest', name: 'Forest Ambience', duration: '30:00', url: 'https://www.soundjay.com/nature/forest-01.wav' },
        { id: 'birds', name: 'Morning Birds', duration: '25:00', url: 'https://www.soundjay.com/nature/birds-01.wav' }
      ]
    },
    {
      name: 'White Noise',
      color: 'blue',
      sounds: [
        { id: 'white', name: 'Pure White Noise', duration: '2:00:00', url: '#' },
        { id: 'pink', name: 'Pink Noise', duration: '2:00:00', url: '#' },
        { id: 'brown', name: 'Brown Noise', duration: '2:00:00', url: '#' },
        { id: 'fan', name: 'Fan Sound', duration: '1:30:00', url: '#' }
      ]
    },
    {
      name: 'Meditation',
      color: 'purple',
      sounds: [
        { id: 'bells', name: 'Tibetan Bowls', duration: '20:00', url: '#' },
        { id: 'chimes', name: 'Wind Chimes', duration: '35:00', url: '#' },
        { id: 'meditation', name: 'Meditation Ambient', duration: '1:15:00', url: '#' },
        { id: 'om', name: 'Om Chanting', duration: '10:00', url: '#' }
      ]
    },
    {
      name: 'Urban Ambience',
      color: 'indigo',
      sounds: [
        { id: 'cafe', name: 'Coffee Shop', duration: '1:00:00', url: '#' },
        { id: 'library', name: 'Quiet Library', duration: '45:00', url: '#' },
        { id: 'fireplace', name: 'Crackling Fire', duration: '2:00:00', url: '#' },
        { id: 'thunder', name: 'Distant Thunder', duration: '1:20:00', url: '#' }
      ]
    }
  ];

  const playSound = (soundId: string, url: string) => {
    // Stop currently playing sound
    if (currentlyPlaying && audioRefs.current[currentlyPlaying]) {
      audioRefs.current[currentlyPlaying].pause();
      audioRefs.current[currentlyPlaying].currentTime = 0;
    }

    if (currentlyPlaying === soundId) {
      setCurrentlyPlaying(null);
      return;
    }

    // For demo purposes, we'll create a simple audio context for some sounds
    if (!audioRefs.current[soundId]) {
      // Create placeholder audio for demo
      const audio = new Audio();
      audio.loop = true;
      audio.volume = volume;
      audioRefs.current[soundId] = audio;
    }

    setCurrentlyPlaying(soundId);
    // In a real implementation, you'd load and play the actual audio file
    console.log(`Playing sound: ${soundId}`);
  };

  const stopAllSounds = () => {
    Object.values(audioRefs.current).forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    });
    setCurrentlyPlaying(null);
  };

  const updateVolume = (newVolume: number) => {
    setVolume(newVolume);
    Object.values(audioRefs.current).forEach(audio => {
      audio.volume = newVolume;
    });
  };

  const getColorClasses = (color: string) => {
    const colors = {
      green: 'text-green-600 bg-green-50 border-green-200 hover:bg-green-100',
      blue: 'text-blue-600 bg-blue-50 border-blue-200 hover:bg-blue-100',
      purple: 'text-purple-600 bg-purple-50 border-purple-200 hover:bg-purple-100',
      indigo: 'text-indigo-600 bg-indigo-50 border-indigo-200 hover:bg-indigo-100'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Volume2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Calming Sound Library</h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover peaceful sounds to help you relax, focus, and find your center
          </p>

          {/* Volume Control */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Volume2 className="w-5 h-5 text-gray-600" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => updateVolume(parseFloat(e.target.value))}
              className="w-32 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-sm text-gray-600">{Math.round(volume * 100)}%</span>
            {currentlyPlaying && (
              <button
                onClick={stopAllSounds}
                className="ml-4 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
              >
                Stop All
              </button>
            )}
          </div>
        </div>

        {soundCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.name}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.sounds.map((sound, soundIndex) => (
                <div
                  key={sound.id}
                  className={`border-2 rounded-xl p-6 transition-all hover:scale-105 cursor-pointer ${
                    currentlyPlaying === sound.id
                      ? 'bg-white border-green-400 shadow-lg'
                      : `${getColorClasses(category.color)} border-2`
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{sound.name}</h3>
                      <p className="text-sm text-gray-600">{sound.duration}</p>
                    </div>
                    <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => playSound(sound.id, sound.url)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                        currentlyPlaying === sound.id
                          ? 'bg-green-600 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {currentlyPlaying === sound.id ? (
                        <>
                          <Pause className="w-4 h-4" />
                          <span>Pause</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4" />
                          <span>Play</span>
                        </>
                      )}
                    </button>
                    
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {currentlyPlaying === sound.id && (
                    <div className="mt-4">
                      <div className="w-full bg-gray-200 rounded-full h-1">
                        <div className="bg-green-600 h-1 rounded-full w-1/3 animate-pulse"></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Usage Tips */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use Sound Therapy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Volume2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Find Your Volume</h3>
              <p className="text-sm text-gray-600">
                Set volume to a comfortable level that masks distracting sounds without being overwhelming
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Regular Practice</h3>
              <p className="text-sm text-gray-600">
                Use sounds daily for 15-30 minutes to develop a consistent relaxation routine
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Play className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Combine Activities</h3>
              <p className="text-sm text-gray-600">
                Use with studying, meditation, or before sleep for enhanced benefits
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}