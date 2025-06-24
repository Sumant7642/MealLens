
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Check, Star, Zap, Shield, Users } from 'lucide-react';

const Product = () => {
  const features = [
    {
      icon: '🔍',
      title: 'AI-Powered Food Scanning',
      description: 'Instantly identify any food item and get detailed nutritional information using advanced computer vision.',
      benefits: ['95%+ accuracy rate', 'Works with any food type', 'Instant results', 'Offline capability']
    },
    {
      icon: '📊',
      title: 'Detailed Nutrition Analysis',
      description: 'Get comprehensive nutritional breakdowns including macros, vitamins, minerals, and health insights.',
      benefits: ['Complete nutrient profiles', 'Health recommendations', 'Allergy warnings', 'Dietary tracking']
    },
    {
      icon: '🤝',
      title: 'Recipe Community',
      description: 'Connect with food enthusiasts worldwide, share recipes, and discover new culinary inspirations.',
      benefits: ['50K+ active members', 'Recipe rating system', 'Community challenges', 'Expert tips']
    },
    {
      icon: '📱',
      title: 'Personalized Experience',
      description: 'Tailored recommendations based on your dietary preferences, health goals, and eating patterns.',
      benefits: ['Custom meal plans', 'Goal tracking', 'Progress analytics', 'Smart reminders']
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: 'Scan',
      description: 'Point your camera at any food item',
      icon: '📸'
    },
    {
      step: 2,
      title: 'Analyze',
      description: 'Our AI processes and identifies the food',
      icon: '🧠'
    },
    {
      step: 3,
      title: 'Learn',
      description: 'Get instant nutrition insights and recommendations',
      icon: '📚'
    },
    {
      step: 4,
      title: 'Share',
      description: 'Connect with the community and share recipes',
      icon: '🌟'
    }
  ];

  const pricingPlans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for casual users',
      features: [
        'Basic food scanning',
        'Community access',
        'Recipe browsing',
        'Basic nutrition info',
        '10 scans per day'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Premium',
      price: '$9.99',
      period: 'month',
      description: 'Ideal for health enthusiasts',
      features: [
        'Unlimited AI food scanning',
        'Detailed nutrition analysis',
        'Personalized recommendations',
        'Meal planning tools',
        'Progress tracking',
        'Priority community features',
        'Export data'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Pro',
      price: '$19.99',
      period: 'month',
      description: 'For nutrition professionals',
      features: [
        'Everything in Premium',
        'Advanced analytics',
        'Client management tools',
        'Custom meal plans',
        'API access',
        'White-label options',
        'Priority support'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Nutrition Coach',
      content: 'FoodScan has revolutionized how I help my clients understand nutrition. The AI accuracy is incredible!',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Mike Chen',
      role: 'Fitness Enthusiast',
      content: 'I love how easy it is to track my macros. The community recipes have transformed my meal prep game.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Dr. Emily Davis',
      role: 'Registered Dietitian',
      content: 'The detailed nutritional analysis helps my patients make informed food choices. Highly recommended!',
      rating: 5,
      avatar: 'ED'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Smart Food Intelligence
            <span className="text-green-600"> at Your Fingertips</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform how you understand food with AI-powered scanning, detailed nutrition analysis, 
            and a vibrant community of food lovers.
          </p>
          <div className="inline-block px-4 py-2 bg-green-200 text-green-800 rounded-full text-sm font-medium mb-8">
            Trusted by 50,000+ users worldwide
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Start Free Trial
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Features & Benefits</h2>
            <p className="text-xl text-gray-600">Everything you need for a healthier relationship with food</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="h-5 w-5 text-green-600 mr-3" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
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
            <p className="text-xl text-gray-600">Four simple steps to food enlightenment</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <div className="text-4xl mb-3">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <div className="w-8 h-0.5 bg-green-200 mx-auto"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600">Start free, upgrade when you're ready</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden ${plan.popular ? 'ring-2 ring-green-500 shadow-lg' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-green-600 text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardContent className={`p-8 ${plan.popular ? 'pt-12' : 'pt-8'}`}>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600">/{plan.period}</span>
                    </div>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-green-600 hover:bg-green-700' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">All plans include a 7-day free trial. No credit card required.</p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-1" />
                <span>30-day money-back guarantee</span>
              </div>
              <div className="flex items-center">
                <Zap className="h-4 w-4 mr-1" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                <span>24/7 support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">Join thousands of satisfied users</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
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
          <p className="text-xl text-green-100 mb-8">
            Join 50,000+ users who've already discovered the power of AI-driven nutrition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Start Your Free Trial
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
