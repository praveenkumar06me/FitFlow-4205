import { motion } from 'framer-motion';
import { FaDumbbell, FaHeartbeat, FaUsers, FaMobileAlt } from 'react-icons/fa';

const features = [
  {
    icon: <FaDumbbell className="w-8 h-8" />,
    title: "Custom Workouts",
    description: "Personalized training plans tailored to your goals and fitness level"
  },
  {
    icon: <FaHeartbeat className="w-8 h-8" />,
    title: "Health Tracking",
    description: "Monitor your progress with detailed health and fitness metrics"
  },
  {
    icon: <FaUsers className="w-8 h-8" />,
    title: "Community Support",
    description: "Join a motivated community of fitness enthusiasts"
  },
  {
    icon: <FaMobileAlt className="w-8 h-8" />,
    title: "Mobile Access",
    description: "Access your workouts anywhere, anytime on any device"
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600">Everything you need to achieve your fitness goals</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-purple-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}