
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-green-400 mb-4">FoodScan</div>
            <p className="text-gray-300 mb-4">
              Discover nutrition, share recipes, and build a healthier lifestyle with our AI-powered food platform.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">f</span>
              </div>
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">t</span>
              </div>
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">i</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-green-400 transition-colors">Home</Link></li>
              <li><Link to="/product" className="text-gray-300 hover:text-green-400 transition-colors">Product</Link></li>
              <li><Link to="/community" className="text-gray-300 hover:text-green-400 transition-colors">Community</Link></li>
              <li><Link to="/company" className="text-gray-300 hover:text-green-400 transition-colors">Company</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-300 hover:text-green-400 transition-colors">FAQ</Link></li>
              <li><Link to="/company" className="text-gray-300 hover:text-green-400 transition-colors">Contact</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">© 2024 FoodScan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
