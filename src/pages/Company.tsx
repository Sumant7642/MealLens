
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Users, User } from 'lucide-react';

const Company = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    // In real app, this would send to backend
    alert('Thank you for your message! We\'ll get back to you soon.');
    setContactForm({ name: '', email: '', subject: '', message: '' });
  };

  const team = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      bio: 'Former nutrition scientist with 10+ years in food tech innovation.',
      avatar: 'AJ'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      bio: 'AI expert specializing in computer vision and machine learning.',
      avatar: 'SC'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Head of Product',
      bio: 'Product design leader passionate about health and wellness.',
      avatar: 'MR'
    },
    {
      name: 'Emily Watson',
      role: 'Community Manager',
      bio: 'Building connections between food lovers worldwide.',
      avatar: 'EW'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About FoodScan</h1>
          <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
            Empowering healthier lives through AI-driven food intelligence and community connection.
          </p>
          <div className="inline-block px-4 py-2 bg-green-200 text-green-800 rounded-full text-sm font-medium">
            Making nutrition accessible to everyone
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe that understanding what we eat shouldn't be complicated. Our mission is to democratize 
                nutrition information through cutting-edge AI technology, making it accessible to everyone, everywhere.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                By combining artificial intelligence with community-driven content, we're creating a platform where 
                food knowledge is shared, nutrition is simplified, and healthier choices become second nature.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">50K+</div>
                  <div className="text-gray-600">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">1M+</div>
                  <div className="text-gray-600">Foods Scanned</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">25K+</div>
                  <div className="text-gray-600">Recipes Shared</div>
                </div>
              </div>
            </div>
            <div className="bg-green-100 rounded-lg p-8">
              <Users className="h-16 w-16 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Transparency in nutrition information</li>
                <li>• Community-driven innovation</li>
                <li>• Accessibility for all backgrounds</li>
                <li>• Evidence-based recommendations</li>
                <li>• Privacy and data protection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The passionate minds behind FoodScan</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions, suggestions, or just want to say hello? We'd love to hear from you!
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600">hello@foodscan.com</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Office</h3>
                  <p className="text-gray-600">
                    123 Innovation Drive<br />
                    San Francisco, CA 94105<br />
                    United States
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Subject"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      rows={5}
                      placeholder="Your Message"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;
