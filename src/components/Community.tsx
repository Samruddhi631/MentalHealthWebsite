import React, { useState } from 'react';
import { Users, MessageSquare, Heart, ThumbsUp, Share, Filter, Plus } from 'lucide-react';

interface Post {
  id: string;
  author: string;
  avatar: string;
  title: string;
  content: string;
  category: string;
  likes: number;
  comments: number;
  timeAgo: string;
  isAnonymous: boolean;
}

export default function Community() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showCreatePost, setShowCreatePost] = useState(false);

  const categories = [
    { id: 'all', name: 'All Posts', color: 'gray' },
    { id: 'coping', name: 'Coping Strategies', color: 'blue' },
    { id: 'success', name: 'Success Stories', color: 'green' },
    { id: 'support', name: 'Need Support', color: 'yellow' },
    { id: 'tips', name: 'Daily Tips', color: 'purple' },
    { id: 'resources', name: 'Resources', color: 'indigo' }
  ];

  const samplePosts: Post[] = [
    {
      id: '1',
      author: 'Sarah M.',
      avatar: '🌟',
      title: 'Meditation helped me through finals week',
      content: 'I started doing 10 minutes of meditation every morning during finals week and it made such a difference. My anxiety decreased significantly and I felt more focused during exams. The headspace app has some great guided sessions for beginners!',
      category: 'success',
      likes: 24,
      comments: 8,
      timeAgo: '2 hours ago',
      isAnonymous: false
    },
    {
      id: '2',
      author: 'Anonymous',
      avatar: '🌸',
      title: 'Struggling with social anxiety - any tips?',
      content: 'I\'ve been having a really hard time with social situations lately. Even simple things like going to the dining hall or participating in class discussions feel overwhelming. Has anyone found techniques that help with this?',
      category: 'support',
      likes: 12,
      comments: 15,
      timeAgo: '4 hours ago',
      isAnonymous: true
    },
    {
      id: '3',
      author: 'Mike Chen',
      avatar: '🌿',
      title: 'Daily gratitude practice - game changer!',
      content: 'I\'ve been writing down 3 things I\'m grateful for every night before bed. It\'s such a simple practice but it\'s really helped me focus on the positive aspects of my day instead of ruminating on problems.',
      category: 'tips',
      likes: 31,
      comments: 6,
      timeAgo: '6 hours ago',
      isAnonymous: false
    },
    {
      id: '4',
      author: 'Anonymous',
      avatar: '🌙',
      title: 'Sleep hygiene resources that actually work',
      content: 'After struggling with insomnia for months, I found these evidence-based sleep tips that actually made a difference: no screens 1 hour before bed, consistent sleep schedule, cool room temperature, and white noise. The campus sleep study group also has great resources!',
      category: 'resources',
      likes: 18,
      comments: 4,
      timeAgo: '1 day ago',
      isAnonymous: true
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? samplePosts 
    : samplePosts.filter(post => post.category === selectedCategory);

  const getCategoryColor = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    const colors = {
      gray: 'bg-gray-100 text-gray-800',
      blue: 'bg-blue-100 text-blue-800',
      green: 'bg-green-100 text-green-800',
      yellow: 'bg-yellow-100 text-yellow-800',
      purple: 'bg-purple-100 text-purple-800',
      indigo: 'bg-indigo-100 text-indigo-800'
    };
    return colors[category?.color as keyof typeof colors] || colors.gray;
  };

  const renderCreatePost = () => (
    <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Share Your Experience</h3>
      
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Post title..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        
        <textarea
          placeholder="Share your thoughts, experiences, or ask for support..."
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
        
        <div className="flex flex-col sm:flex-row gap-4">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="">Select category</option>
            {categories.slice(1).map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
          
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded text-blue-600" />
            <span className="text-sm text-gray-600">Post anonymously</span>
          </label>
        </div>
        
        <div className="flex justify-end space-x-3">
          <button
            onClick={() => setShowCreatePost(false)}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
          >
            Cancel
          </button>
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
            Post
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Users className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Peer Community</h1>
          <p className="text-xl text-gray-600">
            Connect with fellow students, share experiences, and support each other's mental health journey
          </p>
        </div>

        {/* Category Filter */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? getCategoryColor(category.id)
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setShowCreatePost(!showCreatePost)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>New Post</span>
            </button>
          </div>
        </div>

        {/* Create Post Form */}
        {showCreatePost && renderCreatePost()}

        {/* Community Guidelines */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <h3 className="font-semibold text-blue-900 mb-2">Community Guidelines</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Be respectful and supportive of others</li>
            <li>• Share experiences, not medical advice</li>
            <li>• Respect privacy and anonymity choices</li>
            <li>• Report concerning posts to moderators</li>
            <li>• Seek professional help for crisis situations</li>
          </ul>
        </div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {filteredPosts.map(post => (
            <div key={post.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-2xl">
                  {post.avatar}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold text-gray-900">
                      {post.isAnonymous ? 'Anonymous' : post.author}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                      {categories.find(cat => cat.id === post.category)?.name}
                    </span>
                    <span className="text-sm text-gray-500">{post.timeAgo}</span>
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">{post.title}</h4>
                  <p className="text-gray-700 mb-4 leading-relaxed">{post.content}</p>
                  
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                      <MessageSquare className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-green-500 transition-colors">
                      <Share className="w-4 h-4" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors">
            Load More Posts
          </button>
        </div>
      </div>
    </div>
  );
}