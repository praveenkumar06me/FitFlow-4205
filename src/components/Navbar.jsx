import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-transparent">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80" 
              alt="FitLife Logo" 
              className="h-12 w-12 rounded-full object-cover border-2 border-purple-500"
            />
            <span className="text-white text-2xl font-bold ml-3">FitLife</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-purple-300 transition-colors">Home</a>
            <a href="#" className="text-white hover:text-purple-300 transition-colors">Features</a>
            <a href="#" className="text-white hover:text-purple-300 transition-colors">Workouts</a>
            <a href="#" className="text-white hover:text-purple-300 transition-colors">Pricing</a>
            <button className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition-colors">
              Sign Up
            </button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-white hover:text-purple-300 transition-colors">Home</a>
              <a href="#" className="text-white hover:text-purple-300 transition-colors">Features</a>
              <a href="#" className="text-white hover:text-purple-300 transition-colors">Workouts</a>
              <a href="#" className="text-white hover:text-purple-300 transition-colors">Pricing</a>
              <button className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}