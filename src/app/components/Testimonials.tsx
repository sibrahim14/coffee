import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Busy Professional",
    rating: 5,
    text: "Game changer! I used to spend 10 minutes making coffee every morning. Now it takes 30 seconds. The taste is surprisingly amazing!",
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Digital Nomad",
    rating: 5,
    text: "Perfect for traveling! I've taken these tablets to 12 countries. No more searching for good coffee shops. Just add water!",
    avatar: "MC",
  },
  {
    name: "Emma Davis",
    role: "Coffee Enthusiast",
    rating: 5,
    text: "I was skeptical at first, but the quality is incredible. It tastes like freshly brewed coffee. Now I always keep a box at my desk.",
    avatar: "ED",
  },
  {
    name: "James Wilson",
    role: "Outdoor Adventurer",
    rating: 5,
    text: "Essential for camping trips! Lightweight, no mess, and tastes great even with cold water. My hiking buddies all want some now!",
    avatar: "JW",
  },
  {
    name: "Lisa Martinez",
    role: "Fitness Coach",
    rating: 5,
    text: "Love the all-natural ingredients. No sugar, no artificial stuff. Just pure coffee. Perfect pre-workout boost!",
    avatar: "LM",
  },
  {
    name: "David Brown",
    role: "Entrepreneur",
    rating: 5,
    text: "Saves me so much time and money. $0.83 per cup vs $5 at Starbucks? Easy choice. Plus it's always consistent quality.",
    avatar: "DB",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl mb-4">
            Loved by Coffee Enthusiasts
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who've switched to CofTab
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-xl transition-all duration-300"
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
                className="flex gap-1 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: 0.4 + index * 0.1 + i * 0.05,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    <Star 
                      className="w-5 h-5 fill-current" 
                      style={{ color: 'var(--secondary)' }}
                    />
                  </motion.div>
                ))}
              </motion.div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <motion.div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: 'var(--coffee-medium)' }}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.2,
                    transition: { duration: 0.6 }
                  }}
                >
                  {testimonial.avatar}
                </motion.div>
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}