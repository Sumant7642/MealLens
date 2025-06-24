import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { Camera, Users, BookOpen, Heart, TrendingUp, Clock } from 'lucide-react';

const UserDashboard = () => {
  const { user } = useAuth();

  const stats = [
    { title: 'Scans This Month', value: '24', icon: Camera, color: 'text-blue-600' },
    { title: 'Recipes Shared', value: '8', icon: BookOpen, color: 'text-green-600' },
    { title: 'Community Likes', value: '156', icon: Heart, color: 'text-red-600' },
    { title: 'Following', value: '43', icon: Users, color: 'text-purple-600' },
  ];

  const recentActivity = [
    { action: 'Scanned Organic Banana', time: '2 hours ago', type: 'scan' },
    { action: 'Shared "Healthy Smoothie Recipe"', time: '1 day ago', type: 'recipe' },
    { action: 'Liked "Vegan Pasta Recipe"', time: '2 days ago', type: 'like' },
    { action: 'Followed @healthy_chef', time: '3 days ago', type: 'follow' },
    { action: 'Scanned Greek Yogurt', time: '4 days ago', type: 'scan' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
          <p className="text-gray-600 mt-2">Here's what's happening with your FoodScan journey</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Recent Activity
              </CardTitle>
              <CardDescription>Your latest actions on FoodScan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${
                      activity.type === 'scan' ? 'bg-blue-500' :
                      activity.type === 'recipe' ? 'bg-green-500' :
                      activity.type === 'like' ? 'bg-red-500' : 'bg-purple-500'
                    }`} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Quick Actions
              </CardTitle>
              <CardDescription>Jump into your favorite activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Camera className="h-4 w-4 mr-2" />
                  Scan New Food Item
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Share New Recipe
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Browse Community
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Heart className="h-4 w-4 mr-2" />
                  View Favorites
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
