import { motion } from "motion/react";
import { Zap, Heart, Leaf, Package, Globe, Award } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Preparation",
    description: "Ready in just 30 seconds. No brewing, no mess, no waiting. Perfect for busy mornings.",
  },
  {
    icon: Heart,
    title: "Premium Quality",
    description: "Made from 100% Arabica beans, carefully sourced from sustainable farms worldwide.",
  },
  {
    icon: Leaf,
    title: "All Natural",
    description: "No artificial flavors, colors, or preservatives. Just pure, delicious coffee.",
  },
  {
    icon: Package,
    title: "Travel Friendly",
    description: "Compact and portable. Perfect for travel, camping, office, or home.",
  },
  {
    icon: Globe,
    title: "Hot or Cold",
    description: "Works with any temperature water. Make hot coffee in winter or iced coffee in summer.",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Winner of 2025 Best Coffee Innovation Award. Trusted by coffee lovers globally.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl mb-4">
            Why Choose <span style={{ color: 'var(--coffee-medium)' }}>CofTab</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience coffee innovation that fits your lifestyle
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'var(--accent)' }}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                >
                  <Icon className="w-7 h-7" style={{ color: 'var(--coffee-dark)' }} />
                </motion.div>
                <h3 className="text-xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}