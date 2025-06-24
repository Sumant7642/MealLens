
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Search, Users, Book } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Search,
      title: 'AI Food Scanning',
      description: 'Scan any food item and get instant nutritional information powered by advanced AI technology.'
    },
    {
      icon: Users,
      title: 'Recipe Community',
      description: 'Share your favorite recipes and discover new ones from our vibrant community of food lovers.'
    },
    {
      icon: Book,
      title: 'Personalized Insights',
      description: 'Get personalized nutrition recommendations based on your dietary preferences and health goals.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Nutrition Enthusiast',
      content: 'FoodScan has revolutionized how I track my nutrition. The AI scanning is incredibly accurate!',
      avatar: 'SJ'
    },
    {
      name: 'Mike Chen',
      role: 'Home Chef',
      content: 'The recipe community is amazing. I\'ve discovered so many healthy recipes that my family loves.',
      avatar: 'MC'
    },
    {
      name: 'Emily Davis',
      role: 'Fitness Coach',
      content: 'I recommend FoodScan to all my clients. It makes nutrition tracking effortless and fun.',
      avatar: 'ED'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Discover Food with
            <span className="text-green-600"> AI Power</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Scan your food, get instant nutrition insights, and connect with a community of food lovers. 
            Transform your relationship with food through technology and community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Get Started Free
              </Button>
            </Link>
            <Link to="/product">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-xl text-gray-600">Everything you need for a healthier lifestyle</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to unlock food insights</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Scan Your Food</h3>
              <p className="text-gray-600">Take a photo of any food item using our AI-powered scanner</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Insights</h3>
              <p className="text-gray-600">Receive detailed nutritional information and health recommendations</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Share & Connect</h3>
              <p className="text-gray-600">Share recipes and connect with our community of food enthusiasts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">Join thousands of satisfied users</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-6">
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Food Journey?</h2>
          <p className="text-xl text-green-100 mb-8">Join our community today and start discovering the power of AI-driven nutrition.</p>
          <Link to="/register">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Start Your Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
