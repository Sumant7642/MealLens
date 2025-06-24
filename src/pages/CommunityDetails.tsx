
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
import { Users, Book, Search, Heart, MessageSquare, Share2 } from 'lucide-react';

const CommunityDetails = () => {
  const { category } = useParams();
  const { isAuthenticated } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('recent');

  // Mock data - would come from API
  const categoryInfo = {
    'healthy-eating': { name: 'Healthy Eating', icon: '🥗', members: 12500 },
    'quick-meals': { name: 'Quick Meals', icon: '⚡', members: 8900 },
    'vegetarian': { name: 'Vegetarian', icon: '🌱', members: 15600 },
    'meal-prep': { name: 'Meal Prep', icon: '📦', members: 9800 },
    'international': { name: 'International Cuisine', icon: '🌍', members: 11200 },
    'desserts': { name: 'Healthy Desserts', icon: '🍰', members: 7300 },
    'low-carb': { name: 'Low Carb', icon: '🥩', members: 13400 },
    'smoothies': { name: 'Smoothies & Juices', icon: '🥤', members: 6500 }
  }[category as string] || { name: 'Community', icon: '🍽️', members: 0 };

  const posts = [
    {
      id: 1,
      title: 'Mediterranean Quinoa Power Bowl',
      author: 'HealthyFoodie23',
      content: 'This colorful bowl is packed with nutrients and flavor! Perfect for meal prep...',
      image: '🥗',
      likes: 124,
      comments: 18,
      shares: 5,
      timeAgo: '2 hours ago',
      tags: ['quinoa', 'mediterranean', 'healthy']
    },
    {
      id: 2,
      title: 'Quick 15-Minute Veggie Stir Fry',
      author: 'VeggieMaster',
      content: 'When you need something healthy and fast, this stir fry is my go-to recipe...',
      image: '🥬',
      likes: 89,
      comments: 12,
      shares: 8,
      timeAgo: '5 hours ago',
      tags: ['quick', 'vegetables', 'stir-fry']
    },
    {
      id: 3,
      title: 'Homemade Green Smoothie Recipe',
      author: 'SmoothieQueen',
      content: 'Start your day right with this nutrient-packed green smoothie that actually tastes amazing!',
      image: '🥤',
      likes: 76,
      comments: 9,
      shares: 3,
      timeAgo: '8 hours ago',
      tags: ['smoothie', 'breakfast', 'green']
    },
    {
      id: 4,
      title: 'The Best Avocado Toast Variations',
      author: 'BreakfastLover',
      content: '5 creative ways to upgrade your avocado toast game. Never get bored again!',
      image: '🥑',
      likes: 203,
      comments: 31,
      shares: 12,
      timeAgo: '1 day ago',
      tags: ['avocado', 'toast', 'breakfast']
    }
  ];

  const [postLikes, setPostLikes] = useState<{[key: number]: boolean}>({});

  const handleLike = (postId: number) => {
    if (!isAuthenticated) {
      alert('Please log in to like posts');
      return;
    }
    setPostLikes(prev => ({ ...prev, [postId]: !prev[postId] }));
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Community Header */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-4">{categoryInfo.icon}</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{categoryInfo.name}</h1>
            <div className="flex items-center justify-center space-x-6 text-gray-600">
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                {categoryInfo.members.toLocaleString()} members
              </div>
              <div className="flex items-center">
                <Book className="h-5 w-5 mr-2" />
                {filteredPosts.length} posts
              </div>
            </div>
            <div className="mt-6">
              <Button className="bg-green-600 hover:bg-green-700">
                {isAuthenticated ? 'Join Community' : 'Login to Join'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Sort */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              >
                <option value="recent">Most Recent</option>
                <option value="popular">Most Popular</option>
                <option value="discussed">Most Discussed</option>
              </select>
              {isAuthenticated && (
                <Button>Create Post</Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Posts Feed */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold">
                        {post.author.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="font-semibold text-gray-900">{post.author}</span>
                        <span className="text-gray-500 text-sm">•</span>
                        <span className="text-gray-500 text-sm">{post.timeAgo}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{post.content}</p>
                      
                      {/* Post Image Placeholder */}
                      <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-6xl">{post.image}</span>
                      </div>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Engagement Actions */}
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center space-x-6">
                          <button
                            onClick={() => handleLike(post.id)}
                            className={`flex items-center space-x-1 text-sm transition-colors ${
                              postLikes[post.id]
                                ? 'text-red-600'
                                : 'text-gray-500 hover:text-red-600'
                            }`}
                          >
                            <Heart className={`h-4 w-4 ${postLikes[post.id] ? 'fill-current' : ''}`} />
                            <span>{post.likes + (postLikes[post.id] ? 1 : 0)}</span>
                          </button>
                          <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-green-600 transition-colors">
                            <MessageSquare className="h-4 w-4" />
                            <span>{post.comments}</span>
                          </button>
                          <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-blue-600 transition-colors">
                            <Share2 className="h-4 w-4" />
                            <span>{post.shares}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityDetails;
