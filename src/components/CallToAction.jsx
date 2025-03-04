import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section className="bg-purple-900 py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Fitness Journey?</h2>
          <p className="text-xl mb-8 text-purple-200">Join thousands of others who have transformed their lives</p>
          <button className="bg-white text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition-colors">
            Start Free Trial
          </button>
        </motion.div>
      </div>
    </section>
  );
}