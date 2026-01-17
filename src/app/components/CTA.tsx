import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative overflow-hidden rounded-3xl p-12 lg:p-20 text-center"
          style={{ backgroundColor: 'var(--coffee-dark)' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative elements */}
          <motion.div 
            className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
          <motion.div 
            className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, -30, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          ></motion.div>
          
          <div className="relative z-10">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="w-4 h-4 text-white" />
              </motion.div>
              <span className="text-white text-sm">Limited Time Offer</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl lg:text-6xl text-white mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Get 20% Off Your First Order
            </motion.h2>
            
            <motion.p 
              className="text-xl text-white/80 max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Join thousands of coffee lovers who've simplified their morning routine. 
              Try CofTab risk-free with our 30-day money-back guarantee.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <motion.button 
                className="px-8 py-4 rounded-full bg-white hover:bg-white/90 shadow-lg flex items-center gap-2"
                style={{ color: 'var(--coffee-dark)' }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 20px 40px rgba(255,255,255,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Shop Now</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>
              
              <motion.button 
                className="px-8 py-4 rounded-full border-2 border-white text-white"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
            
            <motion.div 
              className="mt-10 flex flex-wrap justify-center gap-8 text-white/80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              {["Free Shipping", "30-Day Guarantee", "Subscribe & Save 15%"].map((text, i) => (
                <motion.div 
                  key={i}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</div>
                  <span>{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}