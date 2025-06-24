
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const faqCategories = [
    {
      title: 'Getting Started',
      questions: [
        {
          question: 'How do I create an account?',
          answer: 'Creating an account is easy! Click the "Sign Up" button in the top right corner, enter your email and password, and you\'ll be ready to start scanning food and exploring our community.'
        },
        {
          question: 'Is FoodScan free to use?',
          answer: 'Yes! FoodScan offers a free tier that includes basic food scanning and community access. Premium features like advanced AI insights require a subscription.'
        },
        {
          question: 'How accurate is the food scanning?',
          answer: 'Our AI technology is highly accurate, with over 95% accuracy for common foods. We continuously improve our algorithms based on user feedback and new data.'
        }
      ]
    },
    {
      title: 'Food Scanning',
      questions: [
        {
          question: 'What types of food can I scan?',
          answer: 'You can scan virtually any food item - fresh produce, packaged foods, restaurant meals, and homemade dishes. Our AI recognizes thousands of food items.'
        },
        {
          question: 'Do I need a premium subscription to scan food?',
          answer: 'Basic food scanning is available to all users. Premium subscribers get advanced nutritional insights, personalized recommendations, and detailed analysis.'
        },
        {
          question: 'Can I scan multiple items at once?',
          answer: 'Currently, our scanning works best with one food item at a time. We\'re working on multi-item scanning for future updates.'
        }
      ]
    },
    {
      title: 'Community & Recipes',
      questions: [
        {
          question: 'How do I share a recipe?',
          answer: 'Go to your "My Recipes" page and click "Add Recipe". Fill in the details, add photos, and share with the community. You can also categorize your recipes for better discovery.'
        },
        {
          question: 'Can I save recipes from other users?',
          answer: 'Yes! You can save any public recipe to your personal collection by clicking the bookmark icon. Saved recipes appear in your "My Recipes" section.'
        },
        {
          question: 'How do I report inappropriate content?',
          answer: 'We take community guidelines seriously. Use the report button on any post or recipe, and our moderation team will review it within 24 hours.'
        }
      ]
    },
    {
      title: 'Subscription & Billing',
      questions: [
        {
          question: 'What\'s included in the premium subscription?',
          answer: 'Premium includes unlimited AI food scanning, detailed nutritional analysis, personalized recommendations, meal planning tools, and priority community features.'
        },
        {
          question: 'Can I cancel my subscription anytime?',
          answer: 'Absolutely! You can cancel your subscription at any time from your account settings. You\'ll continue to have premium access until the end of your billing period.'
        },
        {
          question: 'Do you offer refunds?',
          answer: 'We offer a 7-day money-back guarantee for new subscribers. If you\'re not satisfied, contact our support team for a full refund.'
        }
      ]
    },
    {
      title: 'Technical Support',
      questions: [
        {
          question: 'The app isn\'t working properly. What should I do?',
          answer: 'First, try refreshing the page or restarting the app. If issues persist, check our status page or contact support with details about the problem.'
        },
        {
          question: 'How do I reset my password?',
          answer: 'Click "Forgot Password" on the login page, enter your email, and we\'ll send you reset instructions. Check your spam folder if you don\'t see the email.'
        },
        {
          question: 'Is my data secure?',
          answer: 'Yes! We use industry-standard encryption and never share your personal data with third parties. Your privacy and security are our top priorities.'
        }
      ]
    }
  ];

  const allQuestions = faqCategories.flatMap((category, categoryIndex) =>
    category.questions.map((q, questionIndex) => ({
      ...q,
      id: categoryIndex * 100 + questionIndex,
      category: category.title
    }))
  );

  const filteredQuestions = allQuestions.filter(
    item =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">FAQs & Help Center</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Find answers to commonly asked questions and get the help you need.
          </p>
          <div className="inline-block px-4 py-2 bg-green-200 text-green-800 rounded-full text-sm font-medium">
            We're here to help you succeed
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Search for Answers</h2>
            <div className="max-w-md mx-auto">
              <Input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {searchTerm ? (
            // Search Results
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Search Results ({filteredQuestions.length})
              </h3>
              <div className="space-y-4">
                {filteredQuestions.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <Button
                        variant="ghost"
                        className="w-full p-6 text-left hover:bg-gray-50 flex justify-between items-center"
                        onClick={() => toggleExpanded(item.id)}
                      >
                        <div>
                          <div className="font-semibold text-gray-900">{item.question}</div>
                          <div className="text-sm text-green-600 mt-1">{item.category}</div>
                        </div>
                        <div className="text-2xl text-gray-400">
                          {expandedItems.includes(item.id) ? '−' : '+'}
                        </div>
                      </Button>
                      {expandedItems.includes(item.id) && (
                        <div className="px-6 pb-6 text-gray-600 border-t bg-gray-50">
                          <p className="pt-4">{item.answer}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            // Categorized FAQs
            <div>
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h3>
                  <div className="space-y-4">
                    {category.questions.map((item, questionIndex) => {
                      const itemId = categoryIndex * 100 + questionIndex;
                      return (
                        <Card key={itemId} className="overflow-hidden">
                          <CardContent className="p-0">
                            <Button
                              variant="ghost"
                              className="w-full p-6 text-left hover:bg-gray-50 flex justify-between items-center"
                              onClick={() => toggleExpanded(itemId)}
                            >
                              <div className="font-semibold text-gray-900">{item.question}</div>
                              <div className="text-2xl text-gray-400">
                                {expandedItems.includes(itemId) ? '−' : '+'}
                              </div>
                            </Button>
                            {expandedItems.includes(itemId) && (
                              <div className="px-6 pb-6 text-gray-600 border-t bg-gray-50">
                                <p className="pt-4">{item.answer}</p>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Still Need Help?</h2>
          <p className="text-xl text-green-100 mb-8">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Contact Support
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
