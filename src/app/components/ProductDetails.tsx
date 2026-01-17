import { motion } from "motion/react";
import { Check } from "lucide-react";
import { ImageWithFallback } from "./coffee/ImageWithFallback";

const productInfo = [
  "30 tablets per box",
  "Each tablet makes 6-8 oz of coffee",
  "Equivalent to 30 cups of coffee",
  "Shelf life: 24 months",
  "Vegan & Gluten-free",
  "Sugar-free option available",
  "3 flavors: Classic, Vanilla, Mocha",
];

export function ProductDetails() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <motion.div 
              className="absolute inset-0 rounded-3xl blur-3xl opacity-20"
              style={{ backgroundColor: 'var(--secondary)' }}
              animate={{
                scale: [1, 1.3, 1],
                x: [-10, 10, -10],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotate: 3,
                transition: { duration: 0.4 }
              }}
            >
              <ImageWithFallback
                src="src/assets/pexels-chevanon-312418.jpg"
                alt="Coffee cup"
                className="relative rounded-3xl shadow-2xl w-full"
                style={{ height: '500px' }}
              />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl lg:text-5xl mb-6">
              Premium Coffee, <br />
              <span style={{ color: 'var(--coffee-medium)' }}>Simplified</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Each box contains everything you need for a month of perfect coffee moments. 
              No equipment needed, no cleanup required.
            </p>

            <div className="space-y-4 mb-10">
              {productInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--coffee-dark)' }}
                  >
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg">{info}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
              <div className="flex items-baseline gap-2 mb-4">
                <motion.span 
                  className="text-5xl" 
                  style={{ color: 'var(--coffee-dark)' }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    delay: 0.2 
                  }}
                >
                  $24.99
                </motion.span>
                <span className="text-xl text-muted-foreground">/ box</span>
              </div>
              <p className="text-muted-foreground mb-6">
                That's just $0.83 per cup. Save up to 70% compared to coffee shops!
              </p>
              <motion.button 
                className="w-full py-4 rounded-full text-white shadow-lg"
                style={{ backgroundColor: 'var(--coffee-dark)' }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Add to Cart
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}