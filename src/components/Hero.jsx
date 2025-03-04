import { motion } from 'framer-motion';
import { FaPlay, FaDumbbell, FaHeartbeat } from 'react-icons/fa';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Transform Your Body, Transform Your Life</h1>
            <p className="text-xl mb-8 text-gray-300">Get fit, stay healthy, and achieve your goals with personalized workouts and expert guidance.</p>
            <div className="flex gap-4">
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all">
                <FaPlay className="w-4 h-4" />
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-900 transition-all">
                Learn More
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 mt-10 md:mt-0"
          >
            <img 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80" 
              alt="Fitness Training"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}