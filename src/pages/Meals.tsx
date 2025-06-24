import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Heart, Clock, Users, Star } from 'lucide-react';

interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  calories: number;
  rating: number;
  likes: number;
  category: string;
  cuisine: string;
  mainIngredient: string;
  occasion: string;
  difficulty: string;
  tags: string[];
}

const Meals = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('relevance');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [cuisineFilter, setCuisineFilter] = useState('all');
  const [ingredientFilter, setIngredientFilter] = useState('all');
  const [occasionFilter, setOccasionFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [displayedRecipes, setDisplayedRecipes] = useState(15);

  // Mock data for 25 recipes
  const allRecipes: Recipe[] = [
    {
      id: 1,
      title: 'Mediterranean Quinoa Bowl',
      description: 'A healthy and colorful bowl packed with quinoa, fresh vegetables, and Mediterranean flavors.',
      image: '🥗',
      prepTime: 15,
      cookTime: 20,
      servings: 4,
      calories: 320,
      rating: 4.8,
      likes: 234,
      category: 'main',
      cuisine: 'mediterranean',
      mainIngredient: 'quinoa',
      occasion: 'lunch',
      difficulty: 'easy',
      tags: ['healthy', 'vegetarian', 'gluten-free']
    },
    {
      id: 2,
      title: 'Avocado Toast Supreme',
      description: 'Elevated avocado toast with poached egg, cherry tomatoes, and everything seasoning.',
      image: '🥑',
      prepTime: 10,
      cookTime: 5,
      servings: 2,
      calories: 280,
      rating: 4.6,
      likes: 189,
      category: 'breakfast',
      cuisine: 'american',
      mainIngredient: 'avocado',
      occasion: 'breakfast',
      difficulty: 'easy',
      tags: ['healthy', 'vegetarian', 'quick']
    },
    {
      id: 3,
      title: 'Thai Green Curry',
      description: 'Authentic Thai green curry with coconut milk, vegetables, and aromatic herbs.',
      image: '🍛',
      prepTime: 20,
      cookTime: 25,
      servings: 6,
      calories: 420,
      rating: 4.9,
      likes: 567,
      category: 'main',
      cuisine: 'thai',
      mainIngredient: 'coconut',
      occasion: 'dinner',
      difficulty: 'medium',
      tags: ['spicy', 'vegetarian', 'dairy-free']
    },
    {
      id: 4,
      title: 'Chocolate Chip Cookies',
      description: 'Classic homemade chocolate chip cookies that are crispy on the outside and chewy inside.',
      image: '🍪',
      prepTime: 15,
      cookTime: 12,
      servings: 24,
      calories: 150,
      rating: 4.7,
      likes: 345,
      category: 'dessert',
      cuisine: 'american',
      mainIngredient: 'chocolate',
      occasion: 'snack',
      difficulty: 'easy',
      tags: ['sweet', 'baking', 'comfort']
    },
    {
      id: 5,
      title: 'Green Smoothie Bowl',
      description: 'Nutrient-packed smoothie bowl with spinach, banana, and tropical fruits.',
      image: '🥤',
      prepTime: 10,
      cookTime: 0,
      servings: 2,
      calories: 220,
      rating: 4.5,
      likes: 156,
      category: 'breakfast',
      cuisine: 'american',
      mainIngredient: 'spinach',
      occasion: 'breakfast',
      difficulty: 'easy',
      tags: ['healthy', 'vegan', 'raw']
    },
    {
      id: 6,
      title: 'Italian Margherita Pizza',
      description: 'Traditional Neapolitan pizza with fresh mozzarella, basil, and San Marzano tomatoes.',
      image: '🍕',
      prepTime: 30,
      cookTime: 15,
      servings: 4,
      calories: 380,
      rating: 4.8,
      likes: 789,
      category: 'main',
      cuisine: 'italian',
      mainIngredient: 'tomato',
      occasion: 'dinner',
      difficulty: 'medium',
      tags: ['vegetarian', 'comfort', 'classic']
    },
    {
      id: 7,
      title: 'Caesar Salad',
      description: 'Crisp romaine lettuce with homemade Caesar dressing, croutons, and parmesan.',
      image: '🥬',
      prepTime: 15,
      cookTime: 0,
      servings: 4,
      calories: 180,
      rating: 4.4,
      likes: 123,
      category: 'starter',
      cuisine: 'american',
      mainIngredient: 'lettuce',
      occasion: 'lunch',
      difficulty: 'easy',
      tags: ['fresh', 'vegetarian', 'classic']
    },
    {
      id: 8,
      title: 'Mango Lassi',
      description: 'Refreshing Indian yogurt drink blended with sweet mango and cardamom.',
      image: '🥭',
      prepTime: 5,
      cookTime: 0,
      servings: 2,
      calories: 160,
      rating: 4.6,
      likes: 98,
      category: 'drink',
      cuisine: 'indian',
      mainIngredient: 'mango',
      occasion: 'snack',
      difficulty: 'easy',
      tags: ['refreshing', 'vegetarian', 'summer']
    },
    {
      id: 9,
      title: 'Beef Tacos',
      description: 'Seasoned ground beef tacos with fresh toppings and homemade salsa.',
      image: '🌮',
      prepTime: 20,
      cookTime: 15,
      servings: 6,
      calories: 290,
      rating: 4.7,
      likes: 456,
      category: 'main',
      cuisine: 'mexican',
      mainIngredient: 'beef',
      occasion: 'dinner',
      difficulty: 'easy',
      tags: ['spicy', 'protein', 'family']
    },
    {
      id: 10,
      title: 'French Onion Soup',
      description: 'Classic French soup with caramelized onions, beef broth, and melted Gruyère cheese.',
      image: '🍲',
      prepTime: 15,
      cookTime: 45,
      servings: 4,
      calories: 320,
      rating: 4.8,
      likes: 234,
      category: 'starter',
      cuisine: 'french',
      mainIngredient: 'onion',
      occasion: 'dinner',
      difficulty: 'medium',
      tags: ['comfort', 'warm', 'classic']
    },
    {
      id: 11,
      title: 'Sushi Rolls',
      description: 'Fresh sushi rolls with cucumber, avocado, and your choice of fish.',
      image: '🍣',
      prepTime: 45,
      cookTime: 0,
      servings: 4,
      calories: 250,
      rating: 4.9,
      likes: 678,
      category: 'main',
      cuisine: 'japanese',
      mainIngredient: 'rice',
      occasion: 'lunch',
      difficulty: 'hard',
      tags: ['fresh', 'healthy', 'raw']
    },
    {
      id: 12,
      title: 'Banana Pancakes',
      description: 'Fluffy pancakes made with ripe bananas and a hint of cinnamon.',
      image: '🥞',
      prepTime: 10,
      cookTime: 15,
      servings: 4,
      calories: 280,
      rating: 4.5,
      likes: 345,
      category: 'breakfast',
      cuisine: 'american',
      mainIngredient: 'banana',
      occasion: 'breakfast',
      difficulty: 'easy',
      tags: ['sweet', 'comfort', 'family']
    },
    {
      id: 13,
      title: 'Greek Salad',
      description: 'Traditional Greek salad with feta cheese, olives, and olive oil dressing.',
      image: '🫒',
      prepTime: 15,
      cookTime: 0,
      servings: 4,
      calories: 200,
      rating: 4.6,
      likes: 189,
      category: 'starter',
      cuisine: 'greek',
      mainIngredient: 'feta',
      occasion: 'lunch',
      difficulty: 'easy',
      tags: ['fresh', 'vegetarian', 'mediterranean']
    },
    {
      id: 14,
      title: 'Chicken Tikka Masala',
      description: 'Creamy Indian curry with tender chicken in a rich tomato-based sauce.',
      image: '🍛',
      prepTime: 30,
      cookTime: 40,
      servings: 6,
      calories: 450,
      rating: 4.8,
      likes: 567,
      category: 'main',
      cuisine: 'indian',
      mainIngredient: 'chicken',
      occasion: 'dinner',
      difficulty: 'medium',
      tags: ['spicy', 'protein', 'comfort']
    },
    {
      id: 15,
      title: 'Iced Coffee',
      description: 'Refreshing cold brew coffee served over ice with a splash of milk.',
      image: '☕',
      prepTime: 5,
      cookTime: 0,
      servings: 1,
      calories: 50,
      rating: 4.3,
      likes: 123,
      category: 'drink',
      cuisine: 'american',
      mainIngredient: 'coffee',
      occasion: 'breakfast',
      difficulty: 'easy',
      tags: ['refreshing', 'caffeinated', 'cold']
    },
    {
      id: 16,
      title: 'Ramen Bowl',
      description: 'Authentic Japanese ramen with rich broth, noodles, and traditional toppings.',
      image: '🍜',
      prepTime: 20,
      cookTime: 30,
      servings: 4,
      calories: 380,
      rating: 4.9,
      likes: 789,
      category: 'main',
      cuisine: 'japanese',
      mainIngredient: 'noodles',
      occasion: 'dinner',
      difficulty: 'medium',
      tags: ['comfort', 'warm', 'umami']
    },
    {
      id: 17,
      title: 'Apple Pie',
      description: 'Classic American apple pie with flaky crust and cinnamon-spiced filling.',
      image: '🥧',
      prepTime: 45,
      cookTime: 60,
      servings: 8,
      calories: 420,
      rating: 4.7,
      likes: 456,
      category: 'dessert',
      cuisine: 'american',
      mainIngredient: 'apple',
      occasion: 'dessert',
      difficulty: 'medium',
      tags: ['sweet', 'baking', 'traditional']
    },
    {
      id: 18,
      title: 'Hummus & Pita',
      description: 'Creamy homemade hummus served with warm pita bread and vegetables.',
      image: '🫓',
      prepTime: 15,
      cookTime: 0,
      servings: 6,
      calories: 180,
      rating: 4.4,
      likes: 234,
      category: 'snack',
      cuisine: 'middle-eastern',
      mainIngredient: 'chickpeas',
      occasion: 'snack',
      difficulty: 'easy',
      tags: ['healthy', 'vegan', 'protein']
    },
    {
      id: 19,
      title: 'Paella Valenciana',
      description: 'Traditional Spanish rice dish with saffron, vegetables, and seafood.',
      image: '🥘',
      prepTime: 30,
      cookTime: 45,
      servings: 8,
      calories: 380,
      rating: 4.8,
      likes: 567,
      category: 'main',
      cuisine: 'spanish',
      mainIngredient: 'rice',
      occasion: 'dinner',
      difficulty: 'hard',
      tags: ['seafood', 'traditional', 'festive']
    },
    {
      id: 20,
      title: 'Smoothie Bowl',
      description: 'Acai smoothie bowl topped with granola, berries, and coconut flakes.',
      image: '🍓',
      prepTime: 10,
      cookTime: 0,
      servings: 2,
      calories: 280,
      rating: 4.6,
      likes: 345,
      category: 'breakfast',
      cuisine: 'american',
      mainIngredient: 'acai',
      occasion: 'breakfast',
      difficulty: 'easy',
      tags: ['healthy', 'vegan', 'antioxidants']
    },
    {
      id: 21,
      title: 'Fish and Chips',
      description: 'British classic with beer-battered fish and crispy chips.',
      image: '🍟',
      prepTime: 20,
      cookTime: 25,
      servings: 4,
      calories: 520,
      rating: 4.5,
      likes: 289,
      category: 'main',
      cuisine: 'british',
      mainIngredient: 'fish',
      occasion: 'dinner',
      difficulty: 'medium',
      tags: ['comfort', 'fried', 'traditional']
    },
    {
      id: 22,
      title: 'Gazpacho',
      description: 'Cold Spanish soup made with fresh tomatoes, peppers, and herbs.',
      image: '🍅',
      prepTime: 20,
      cookTime: 0,
      servings: 6,
      calories: 120,
      rating: 4.3,
      likes: 156,
      category: 'starter',
      cuisine: 'spanish',
      mainIngredient: 'tomato',
      occasion: 'lunch',
      difficulty: 'easy',
      tags: ['cold', 'fresh', 'summer']
    },
    {
      id: 23,
      title: 'Pad Thai',
      description: 'Thai stir-fried noodles with tamarind, fish sauce, and peanuts.',
      image: '🍝',
      prepTime: 25,
      cookTime: 15,
      servings: 4,
      calories: 420,
      rating: 4.7,
      likes: 678,
      category: 'main',
      cuisine: 'thai',
      mainIngredient: 'noodles',
      occasion: 'dinner',
      difficulty: 'medium',
      tags: ['spicy', 'sweet', 'umami']
    },
    {
      id: 24,
      title: 'Tiramisu',
      description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone.',
      image: '🍰',
      prepTime: 30,
      cookTime: 0,
      servings: 8,
      calories: 380,
      rating: 4.9,
      likes: 789,
      category: 'dessert',
      cuisine: 'italian',
      mainIngredient: 'coffee',
      occasion: 'dessert',
      difficulty: 'medium',
      tags: ['sweet', 'coffee', 'elegant']
    },
    {
      id: 25,
      title: 'Protein Shake',
      description: 'Post-workout protein shake with banana, berries, and protein powder.',
      image: '🥤',
      prepTime: 5,
      cookTime: 0,
      servings: 1,
      calories: 250,
      rating: 4.2,
      likes: 123,
      category: 'drink',
      cuisine: 'american',
      mainIngredient: 'protein',
      occasion: 'snack',
      difficulty: 'easy',
      tags: ['healthy', 'protein', 'fitness']
    }
  ];

  // Filter and sort recipes
  const filteredRecipes = allRecipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = categoryFilter === 'all' || recipe.category === categoryFilter;
    const matchesCuisine = cuisineFilter === 'all' || recipe.cuisine === cuisineFilter;
    const matchesIngredient = ingredientFilter === 'all' || recipe.mainIngredient === ingredientFilter;
    const matchesOccasion = occasionFilter === 'all' || recipe.occasion === occasionFilter;

    return matchesSearch && matchesCategory && matchesCuisine && matchesIngredient && matchesOccasion;
  });

  // Sort recipes
  const sortedRecipes = [...filteredRecipes].sort((a, b) => {
    switch (sortBy) {
      case 'likes':
        return b.likes - a.likes;
      case 'rating':
        return b.rating - a.rating;
      case 'calories':
        return a.calories - b.calories;
      case 'prepTime':
        return a.prepTime - b.prepTime;
      default:
        return 0; // relevance - keep original order
    }
  });

  const recipesToShow = sortedRecipes.slice(0, displayedRecipes);
  const hasMoreRecipes = displayedRecipes < sortedRecipes.length;

  const handleShowMore = () => {
    setDisplayedRecipes(prev => Math.min(prev + 10, sortedRecipes.length));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Discover Delicious Meals</h1>
          <p className="text-xl text-gray-600 mb-8">
            Find the perfect recipe for any occasion with our curated collection
          </p>
          <div className="inline-block px-4 py-2 bg-green-200 text-green-800 rounded-full text-sm font-medium">
            {allRecipes.length} recipes available
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Sort and Filter Toggle */}
            <div className="flex items-center space-x-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="likes">Likes</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="calories">Calories</SelectItem>
                  <SelectItem value="prepTime">Prep Time</SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </div>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="starter">Starter</SelectItem>
                    <SelectItem value="main">Main</SelectItem>
                    <SelectItem value="dessert">Dessert</SelectItem>
                    <SelectItem value="snack">Snack</SelectItem>
                    <SelectItem value="breakfast">Breakfast</SelectItem>
                    <SelectItem value="drink">Drink</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Cuisine</label>
                <Select value={cuisineFilter} onValueChange={setCuisineFilter}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Cuisines</SelectItem>
                    <SelectItem value="american">American</SelectItem>
                    <SelectItem value="italian">Italian</SelectItem>
                    <SelectItem value="mexican">Mexican</SelectItem>
                    <SelectItem value="thai">Thai</SelectItem>
                    <SelectItem value="indian">Indian</SelectItem>
                    <SelectItem value="japanese">Japanese</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                    <SelectItem value="greek">Greek</SelectItem>
                    <SelectItem value="spanish">Spanish</SelectItem>
                    <SelectItem value="british">British</SelectItem>
                    <SelectItem value="middle-eastern">Middle Eastern</SelectItem>
                    <SelectItem value="mediterranean">Mediterranean</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Main Ingredient</label>
                <Select value={ingredientFilter} onValueChange={setIngredientFilter}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Ingredients</SelectItem>
                    <SelectItem value="chicken">Chicken</SelectItem>
                    <SelectItem value="beef">Beef</SelectItem>
                    <SelectItem value="fish">Fish</SelectItem>
                    <SelectItem value="quinoa">Quinoa</SelectItem>
                    <SelectItem value="rice">Rice</SelectItem>
                    <SelectItem value="noodles">Noodles</SelectItem>
                    <SelectItem value="avocado">Avocado</SelectItem>
                    <SelectItem value="tomato">Tomato</SelectItem>
                    <SelectItem value="spinach">Spinach</SelectItem>
                    <SelectItem value="chocolate">Chocolate</SelectItem>
                    <SelectItem value="coffee">Coffee</SelectItem>
                    <SelectItem value="coconut">Coconut</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Occasion</label>
                <Select value={occasionFilter} onValueChange={setOccasionFilter}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Occasions</SelectItem>
                    <SelectItem value="breakfast">Breakfast</SelectItem>
                    <SelectItem value="lunch">Lunch</SelectItem>
                    <SelectItem value="dinner">Dinner</SelectItem>
                    <SelectItem value="snack">Snack</SelectItem>
                    <SelectItem value="dessert">Dessert</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {recipesToShow.length} of {sortedRecipes.length} recipes
          </div>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {recipesToShow.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No recipes found</h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recipesToShow.map((recipe) => (
                  <Card key={recipe.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      {/* Recipe Image */}
                      <div className="h-48 bg-gray-100 flex items-center justify-center">
                        <span className="text-6xl">{recipe.image}</span>
                      </div>
                      
                      {/* Recipe Content */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {recipe.category}
                          </Badge>
                          <div className="flex items-center text-sm text-gray-500">
                            <Star className="h-4 w-4 text-yellow-400 mr-1" />
                            {recipe.rating}
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{recipe.title}</h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{recipe.description}</p>
                        
                        <div className="grid grid-cols-3 gap-2 text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {recipe.prepTime}m
                          </div>
                          <div className="flex items-center">
                            <Users className="h-3 w-3 mr-1" />
                            {recipe.servings}
                          </div>
                          <div className="text-xs">
                            {recipe.calories} cal
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-1 mb-4">
                          {recipe.tags.slice(0, 3).map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <Heart className="h-4 w-4 mr-1" />
                            {recipe.likes}
                          </div>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            View Recipe
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Show More Button */}
              {hasMoreRecipes && (
                <div className="text-center mt-8">
                  <Button 
                    onClick={handleShowMore}
                    variant="outline"
                    size="lg"
                  >
                    Show More Recipes ({sortedRecipes.length - displayedRecipes} remaining)
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Meals;