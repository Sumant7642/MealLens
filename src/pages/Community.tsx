
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Book, Search } from 'lucide-react';

const Community = () => {
  const categories = [
    {
      id: 'healthy-eating',
      name: 'Healthy Eating',
      description: 'Nutritious recipes and wellness tips',
      icon: '🥗',
      members: 12500,
      posts: 2340
    },
    {
      id: 'quick-meals',
      name: 'Quick Meals',
      description: '30-minute meals for busy lifestyles',
      icon: '⚡',
      members: 8900,
      posts: 1890
    },
    {
      id: 'vegetarian',
      name: 'Vegetarian',
      description: 'Plant-based recipes and discussions',
      icon: '🌱',
      members: 15600,
      posts: 3120
    },
    {
      id: 'meal-prep',
      name: 'Meal Prep',
      description: 'Prepare meals in advance strategies',
      icon: '📦',
      members: 9800,
      posts: 1560
    },
    {
      id: 'international',
      name: 'International Cuisine',
      description: 'Flavors from around the world',
      icon: '🌍',
      members: 11200,
      posts: 2780
    },
    {
      id: 'desserts',
      name: 'Healthy Desserts',
      description: 'Guilt-free sweet treats',
      icon: '🍰',
      members: 7300,
      posts: 1120
    },
    {
      id: 'low-carb',
      name: 'Low Carb',
      description: 'Low carb and keto-friendly recipes',
      icon: '🥩',
      members: 13400,
      posts: 2890
    },
    {
      id: 'smoothies',
      name: 'Smoothies & Juices',
      description: 'Refreshing drinks and smoothie bowls',
      icon: '🥤',
      members: 6500,
      posts: 980
    }
  ];

  const featuredPosts = [
    {
      title: '10 Superfoods You Should Add to Your Diet',
      author: 'NutritionExpert',
      category: 'Healthy Eating',
      likes: 234,
      comments: 45,
      timeAgo: '2 hours ago'
    },
    {
      title: 'The Perfect Quinoa Buddha Bowl Recipe',
      author: 'PlantBasedChef',
      category: 'Vegetarian',
      likes: 189,
      comments: 32,
      timeAgo: '4 hours ago'
    },
    {
      title: 'Meal Prep Sunday: 5 Recipes for the Week',
      author: 'MealPrepPro',
      category: 'Meal Prep',
      likes: 345,
      comments: 67,
      timeAgo: '1 day ago'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Food Community</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect with fellow food enthusiasts, share recipes, and discover new culinary adventures.
          </p>
          <div className="inline-block px-4 py-2 bg-green-200 text-green-800 rounded-full text-sm font-medium">
            Join 50,000+ food lovers worldwide
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600">50K+</div>
              <div className="text-gray-600">Community Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600">25K+</div>
              <div className="text-gray-600">Recipes Shared</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600">100K+</div>
              <div className="text-gray-600">Helpful Comments</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Trending Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-sm text-green-600 mb-2">{post.category}</div>
                  <h3 className="font-semibold text-lg mb-3">{post.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>by {post.author}</span>
                    <span>{post.timeAgo}</span>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>❤️ {post.likes}</span>
                      <span>💬 {post.comments}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Communities</h2>
            <p className="text-xl text-gray-600">Find your perfect food community and start sharing</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.id} to={`/community/${category.id}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex items-center justify-center">
                        <Users className="h-4 w-4 mr-1" />
                        {category.members.toLocaleString()} members
                      </div>
                      <div className="flex items-center justify-center">
                        <Book className="h-4 w-4 mr-1" />
                        {category.posts.toLocaleString()} posts
                      </div>
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      Join Community
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Share Your Culinary Creations?</h2>
          <p className="text-xl text-green-100 mb-8">
            Join our vibrant community and start sharing your favorite recipes today.
          </p>
          <Link to="/my-recipes">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Share Your First Recipe
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Community;
