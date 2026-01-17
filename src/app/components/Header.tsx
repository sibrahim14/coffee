import { ShoppingCart } from "lucide-react";
import { motion } from "motion/react";
import { ScrollingTicker } from "./ScrollingTicker";

export function Header() {
  return (
    <>
      <ScrollingTicker />
      <motion.header 
        className="fixed top-8 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-8 h-8 rounded-full" 
                style={{ backgroundColor: 'var(--coffee-dark)' }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              ></motion.div>
              <span className="font-semibold text-xl" style={{ color: 'var(--coffee-dark)' }}>
                CofTab
              </span>
            </motion.div>
            
            <nav className="hidden md:flex items-center gap-8">
              {["Features", "How It Works", "Reviews"].map((item, index) => (
                <motion.a 
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-foreground/80 hover:text-foreground transition-colors"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
            
            <motion.button 
              className="flex items-center gap-2 px-6 py-2 rounded-full"
              style={{ backgroundColor: 'var(--coffee-dark)', color: 'white' }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ShoppingCart className="w-4 h-4" />
              </motion.div>
              <span>Shop Now</span>
            </motion.button>
          </div>
        </div>
      </motion.header>
    </>
  );
}