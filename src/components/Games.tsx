import React, { useState, useEffect } from 'react';
import { GamepadIcon, Heart, Clock, Target } from 'lucide-react';

export default function Games() {
  const [activeGame, setActiveGame] = useState<string | null>(null);
  const [breathingPhase, setBreathingPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [breathingTimer, setBreathingTimer] = useState(0);
  const [isBreathingActive, setIsBreathingActive] = useState(false);

  // Breathing exercise logic
  useEffect(() => {
    if (!isBreathingActive) return;

    const interval = setInterval(() => {
      setBreathingTimer((prev) => {
        const nextTime = prev + 1;
        
        if (breathingPhase === 'inhale' && nextTime >= 4) {
          setBreathingPhase('hold');
          return 0;
        } else if (breathingPhase === 'hold' && nextTime >= 7) {
          setBreathingPhase('exhale');
          return 0;
        } else if (breathingPhase === 'exhale' && nextTime >= 8) {
          setBreathingPhase('inhale');
          return 0;
        }
        
        return nextTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isBreathingActive, breathingPhase]);

  const games = [
    {
      id: 'breathing',
      name: '4-7-8 Breathing',
      description: 'A calming breathing technique to reduce anxiety and promote relaxation',
      icon: Heart,
      color: 'blue'
    },
    {
      id: 'mindfulness',
      name: 'Mindfulness Bell',
      description: 'Practice mindful awareness with gentle bell sounds and guided prompts',
      icon: Target,
      color: 'green'
    },
    {
      id: 'progressive',
      name: 'Progressive Relaxation',
      description: 'Systematic muscle relaxation to release physical tension',
      icon: Clock,
      color: 'purple'
    }
  ];

  const getPhaseInstruction = () => {
    switch (breathingPhase) {
      case 'inhale':
        return 'Breathe In';
      case 'hold':
        return 'Hold';
      case 'exhale':
        return 'Breathe Out';
    }
  };

  const getPhaseColor = () => {
    switch (breathingPhase) {
      case 'inhale':
        return 'bg-blue-500';
      case 'hold':
        return 'bg-yellow-500';
      case 'exhale':
        return 'bg-green-500';
    }
  };

  const renderBreathingGame = () => (
    <div className="bg-white rounded-xl p-8 shadow-sm">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">4-7-8 Breathing Exercise</h3>
        <p className="text-gray-600 mb-8">
          Inhale for 4 seconds, hold for 7 seconds, exhale for 8 seconds
        </p>
        
        <div className="relative w-64 h-64 mx-auto mb-8">
          {/* Breathing Circle */}
          <div
            className={`absolute inset-0 rounded-full transition-all duration-1000 ${getPhaseColor()} ${
              isBreathingActive
                ? breathingPhase === 'inhale'
                  ? 'scale-100 opacity-70'
                  : breathingPhase === 'hold'
                  ? 'scale-100 opacity-90'
                  : 'scale-75 opacity-50'
                : 'scale-75 opacity-30'
            }`}
          />
          
          {/* Instructions */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <div className="text-3xl font-bold mb-2">
              {isBreathingActive ? getPhaseInstruction() : 'Ready?'}
            </div>
            <div className="text-xl">
              {isBreathingActive ? `${Math.max(0, (breathingPhase === 'inhale' ? 4 : breathingPhase === 'hold' ? 7 : 8) - breathingTimer)}` : ''}
            </div>
          </div>
        </div>
        
        <button
          onClick={() => {
            setIsBreathingActive(!isBreathingActive);
            if (!isBreathingActive) {
              setBreathingPhase('inhale');
              setBreathingTimer(0);
            }
          }}
          className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
            isBreathingActive
              ? 'bg-red-600 hover:bg-red-700 text-white'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          {isBreathingActive ? 'Stop' : 'Start Breathing Exercise'}
        </button>
      </div>
    </div>
  );

  const renderMindfulnessGame = () => (
    <div className="bg-white rounded-xl p-8 shadow-sm">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Mindfulness Bell</h3>
        <p className="text-gray-600 mb-8">
          Listen to the bell and focus on the present moment
        </p>
        
        <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
          <Target className="w-12 h-12 text-white" />
        </div>
        
        <div className="max-w-md mx-auto space-y-4 text-left">
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-green-800 font-medium">Notice your breathing</p>
            <p className="text-green-600 text-sm">Feel the air moving in and out of your body</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-800 font-medium">Observe your surroundings</p>
            <p className="text-blue-600 text-sm">What do you see, hear, and feel around you?</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <p className="text-purple-800 font-medium">Acknowledge your thoughts</p>
            <p className="text-purple-600 text-sm">Let thoughts come and go without judgment</p>
          </div>
        </div>
        
        <button className="mt-8 px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors">
          Ring Bell
        </button>
      </div>
    </div>
  );

  const renderProgressiveRelaxation = () => (
    <div className="bg-white rounded-xl p-8 shadow-sm">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Progressive Muscle Relaxation</h3>
        <p className="text-gray-600 mb-8">
          Tense and release different muscle groups to achieve deep relaxation
        </p>
        
        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'Feet & Toes', 'Calves', 'Thighs', 'Abdomen',
            'Hands & Arms', 'Shoulders', 'Face', 'Entire Body'
          ].map((bodyPart, index) => (
            <div
              key={index}
              className="p-4 border-2 border-purple-200 rounded-lg hover:border-purple-400 hover:bg-purple-50 transition-colors cursor-pointer"
            >
              <h4 className="font-semibold text-purple-900">{bodyPart}</h4>
              <p className="text-sm text-purple-600">Tense for 5s, then release</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 p-4 bg-purple-50 rounded-lg">
          <h4 className="font-semibold text-purple-900 mb-2">Instructions:</h4>
          <ol className="text-left text-sm text-purple-700 space-y-1">
            <li>1. Tense the muscle group for 5 seconds</li>
            <li>2. Notice the tension</li>
            <li>3. Release suddenly and completely</li>
            <li>4. Focus on the relaxation for 10-15 seconds</li>
            <li>5. Move to the next muscle group</li>
          </ol>
        </div>
        
        <button className="mt-6 px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors">
          Start Guided Session
        </button>
      </div>
    </div>
  );

  const renderGameContent = () => {
    switch (activeGame) {
      case 'breathing':
        return renderBreathingGame();
      case 'mindfulness':
        return renderMindfulnessGame();
      case 'progressive':
        return renderProgressiveRelaxation();
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <GamepadIcon className="w-16 h-16 text-purple-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Relaxation Games</h1>
          <p className="text-xl text-gray-600">
            Interactive exercises designed to help you relax and practice mindfulness
          </p>
        </div>

        {activeGame ? (
          <div>
            <button
              onClick={() => setActiveGame(null)}
              className="mb-6 px-4 py-2 text-purple-600 hover:text-purple-800 font-medium"
            >
              ← Back to Games
            </button>
            {renderGameContent()}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {games.map((game) => (
              <div
                key={game.id}
                onClick={() => setActiveGame(game.id)}
                className={`bg-white rounded-xl p-8 cursor-pointer transition-all hover:scale-105 hover:shadow-lg border-2 ${
                  game.color === 'blue' ? 'border-blue-200 hover:border-blue-400' :
                  game.color === 'green' ? 'border-green-200 hover:border-green-400' :
                  'border-purple-200 hover:border-purple-400'
                }`}
              >
                <game.icon className={`w-12 h-12 mb-4 ${
                  game.color === 'blue' ? 'text-blue-600' :
                  game.color === 'green' ? 'text-green-600' :
                  'text-purple-600'
                }`} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{game.name}</h3>
                <p className="text-gray-600">{game.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Benefits Section */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Benefits of Relaxation Exercises</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Reduces Stress</h3>
              <p className="text-sm text-gray-600">
                Lower cortisol levels and activate the body's relaxation response
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Improves Focus</h3>
              <p className="text-sm text-gray-600">
                Enhanced concentration and mental clarity through mindfulness
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Better Sleep</h3>
              <p className="text-sm text-gray-600">
                Relaxation techniques promote deeper, more restful sleep
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}