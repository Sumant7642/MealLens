
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
import { Plus, Search, Edit, Trash2, Eye } from 'lucide-react';

const UserRecipes = () => {
  const { user, isAuthenticated } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newRecipe, setNewRecipe] = useState({
    title: '',
    description: '',
    ingredients: '',
    instructions: '',
    category: 'healthy-eating',
    prepTime: '',
    cookTime: '',
    servings: ''
  });

  // Mock user recipes data
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: 'My Famous Quinoa Salad',
      description: 'A refreshing and nutritious quinoa salad perfect for lunch',
      category: 'Healthy Eating',
      prepTime: '15 min',
      cookTime: '20 min',
      servings: 4,
      likes: 23,
      views: 156,
      status: 'published',
      createdAt: '2024-01-15',
      image: '🥗'
    },
    {
      id: 2,
      title: 'Green Smoothie Bowl',
      description: 'Energizing smoothie bowl with superfoods',
      category: 'Smoothies & Juices',
      prepTime: '10 min',
      cookTime: '0 min',
      servings: 2,
      likes: 45,
      views: 234,
      status: 'published',
      createdAt: '2024-01-10',
      image: '🥤'
    },
    {
      id: 3,
      title: 'Veggie Buddha Bowl',
      description: 'Colorful and nourishing Buddha bowl',
      category: 'Vegetarian',
      prepTime: '20 min',
      cookTime: '25 min',
      servings: 3,
      likes: 67,
      views: 345,
      status: 'draft',
      createdAt: '2024-01-08',
      image: '🥬'
    }
  ]);

  const handleCreateRecipe = (e: React.FormEvent) => {
    e.preventDefault();
    const recipe = {
      id: Date.now(),
      ...newRecipe,
      servings: parseInt(newRecipe.servings),
      likes: 0,
      views: 0,
      status: 'draft',
      createdAt: new Date().toISOString().split('T')[0],
      image: '🍽️'
    };
    setRecipes([recipe, ...recipes]);
    setNewRecipe({
      title: '',
      description: '',
      ingredients: '',
      instructions: '',
      category: 'healthy-eating',
      prepTime: '',
      cookTime: '',
      servings: ''
    });
    setShowCreateForm(false);
    alert('Recipe created successfully!');
  };

  const handleDeleteRecipe = (id: number) => {
    if (confirm('Are you sure you want to delete this recipe?')) {
      setRecipes(recipes.filter(recipe => recipe.id !== id));
    }
  };

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Please log in to manage your recipes</h1>
          <Button onClick={() => window.location.href = '/login'}>
            Go to Login
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">My Recipes</h1>
              <p className="text-gray-600">Manage and share your culinary creations</p>
            </div>
            <Button 
              onClick={() => setShowCreateForm(true)}
              className="bg-green-600 hover:bg-green-700"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add New Recipe
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{recipes.length}</div>
              <div className="text-gray-600">Total Recipes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">
                {recipes.filter(r => r.status === 'published').length}
              </div>
              <div className="text-gray-600">Published</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">
                {recipes.reduce((sum, r) => sum + r.likes, 0)}
              </div>
              <div className="text-gray-600">Total Likes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">
                {recipes.reduce((sum, r) => sum + r.views, 0)}
              </div>
              <div className="text-gray-600">Total Views</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search your recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </section>

      {/* Create Recipe Form */}
      {showCreateForm && (
        <section className="py-8 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Create New Recipe</h2>
                  <Button 
                    variant="outline" 
                    onClick={() => setShowCreateForm(false)}
                  >
                    Cancel
                  </Button>
                </div>
                
                <form onSubmit={handleCreateRecipe} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Recipe Title
                      </label>
                      <Input
                        value={newRecipe.title}
                        onChange={(e) => setNewRecipe({...newRecipe, title: e.target.value})}
                        placeholder="Enter recipe title"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Category
                      </label>
                      <select
                        value={newRecipe.category}
                        onChange={(e) => setNewRecipe({...newRecipe, category: e.target.value})}
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                      >
                        <option value="healthy-eating">Healthy Eating</option>
                        <option value="quick-meals">Quick Meals</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="meal-prep">Meal Prep</option>
                        <option value="international">International</option>
                        <option value="desserts">Desserts</option>
                        <option value="low-carb">Low Carb</option>
                        <option value="smoothies">Smoothies</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Description
                    </label>
                    <textarea
                      value={newRecipe.description}
                      onChange={(e) => setNewRecipe({...newRecipe, description: e.target.value})}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      rows={3}
                      placeholder="Brief description of your recipe"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Prep Time
                      </label>
                      <Input
                        value={newRecipe.prepTime}
                        onChange={(e) => setNewRecipe({...newRecipe, prepTime: e.target.value})}
                        placeholder="e.g., 15 min"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Cook Time
                      </label>
                      <Input
                        value={newRecipe.cookTime}
                        onChange={(e) => setNewRecipe({...newRecipe, cookTime: e.target.value})}
                        placeholder="e.g., 30 min"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Servings
                      </label>
                      <Input
                        type="number"
                        value={newRecipe.servings}
                        onChange={(e) => setNewRecipe({...newRecipe, servings: e.target.value})}
                        placeholder="4"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Ingredients
                    </label>
                    <textarea
                      value={newRecipe.ingredients}
                      onChange={(e) => setNewRecipe({...newRecipe, ingredients: e.target.value})}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      rows={6}
                      placeholder="List ingredients, one per line"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Instructions
                    </label>
                    <textarea
                      value={newRecipe.instructions}
                      onChange={(e) => setNewRecipe({...newRecipe, instructions: e.target.value})}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      rows={8}
                      placeholder="Step-by-step cooking instructions"
                      required
                    />
                  </div>
                  
                  <div className="flex justify-end space-x-3">
                    <Button type="submit" variant="outline">
                      Save as Draft
                    </Button>
                    <Button type="submit" className="bg-green-600 hover:bg-green-700">
                      Publish Recipe
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Recipes Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredRecipes.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🍽️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No recipes found</h3>
              <p className="text-gray-600 mb-4">
                {searchTerm ? 'Try a different search term' : 'Create your first recipe to get started'}
              </p>
              {!searchTerm && (
                <Button 
                  onClick={() => setShowCreateForm(true)}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Create Your First Recipe
                </Button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes.map((recipe) => (
                <Card key={recipe.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    {/* Recipe Image */}
                    <div className="h-48 bg-gray-100 flex items-center justify-center">
                      <span className="text-6xl">{recipe.image}</span>
                    </div>
                    
                    {/* Recipe Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-green-600">{recipe.category}</span>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          recipe.status === 'published' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {recipe.status}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{recipe.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{recipe.description}</p>
                      
                      <div className="grid grid-cols-3 gap-2 text-sm text-gray-500 mb-4">
                        <div>⏱️ {recipe.prepTime}</div>
                        <div>🔥 {recipe.cookTime}</div>
                        <div>🍽️ {recipe.servings}</div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span>❤️ {recipe.likes} likes</span>
                        <span>👁️ {recipe.views} views</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          Created {new Date(recipe.createdAt).toLocaleDateString()}
                        </span>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="ghost">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="ghost"
                            onClick={() => handleDeleteRecipe(recipe.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default UserRecipes;
