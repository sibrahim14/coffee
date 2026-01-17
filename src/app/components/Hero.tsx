import { motion } from "motion/react";
import { Clock, Droplets, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./coffee/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: 'var(--coffee-light)' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 left-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: 'var(--secondary)' }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.25, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block px-4 py-2 rounded-full bg-accent mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="text-sm" style={{ color: 'var(--coffee-dark)' }}>
                ☕ Premium Instant Coffee
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl lg:text-7xl mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Coffee in <br />
              <motion.span 
                style={{ color: 'var(--coffee-medium)' }}
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Seconds
              </motion.span>, <br />
              Not Minutes
            </motion.h1>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Experience the perfect cup of coffee instantly. Just drop a tablet in water, 
              and watch as premium coffee magic happens before your eyes.
            </motion.p>
            
            {/* Benefits */}
            <div className="flex flex-col sm:flex-row gap-6 mb-10">
              {[
                { icon: Clock, title: "30 Seconds", subtitle: "Ready to drink" },
                { icon: Droplets, title: "Just Add Water", subtitle: "Hot or cold" },
                { icon: Sparkles, title: "100% Natural", subtitle: "Pure ingredients" }
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  >
                    <motion.div 
                      className="w-10 h-10 rounded-full bg-accent flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-5 h-5" style={{ color: 'var(--coffee-dark)' }} />
                    </motion.div>
                    <div>
                      <div className="font-medium">{benefit.title}</div>
                      <div className="text-sm text-muted-foreground">{benefit.subtitle}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button 
                className="px-8 py-4 rounded-full text-white shadow-lg"
                style={{ backgroundColor: 'var(--coffee-dark)' }}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                Order Now - $24.99
              </motion.button>
              <motion.button 
                className="px-8 py-4 rounded-full border-2"
                style={{ borderColor: 'var(--coffee-dark)', color: 'var(--coffee-dark)' }}
                whileHover={{ scale: 1.05, backgroundColor: 'var(--accent)' }}
                whileTap={{ scale: 0.95 }}
              >
                See How It Works
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <motion.div 
                className="absolute inset-0 rounded-3xl blur-2xl opacity-30"
                style={{ backgroundColor: 'var(--coffee-medium)' }}
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1558550088-2ad78c66d7a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjB0YWJsZXQlMjBkaXNzb2x2aW5nJTIwd2F0ZXJ8ZW58MXx8fHwxNzY3ODYyMTA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Coffee tablet dissolving in water"
                  className="relative rounded-3xl shadow-2xl w-full"
                />
              </motion.div>
            </div>
            
            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ 
                scale: 1.1, 
                rotate: 5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
              }}
            >
              <div className="flex items-center gap-4">
                <motion.div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
                  style={{ backgroundColor: 'var(--accent)' }}
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ⭐
                </motion.div>
                <div>
                  <div className="font-semibold text-lg">4.9/5.0</div>
                  <div className="text-sm text-muted-foreground">2,300+ Reviews</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}