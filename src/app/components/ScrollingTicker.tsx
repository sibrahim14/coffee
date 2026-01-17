import { motion } from "motion/react";

const messages = [
  "Free Shipping on Orders Over $50",
  "30-Day Money-Back Guarantee",
  "100% Natural Ingredients",
  "Ready in 30 Seconds",
  "Subscribe & Save 15%",
  "Award-Winning Coffee",
  "Trusted by 10,000+ Customers",
  "Carbon Neutral Shipping",
];

export function ScrollingTicker() {
  // Duplicate messages for seamless loop
  const duplicatedMessages = [...messages, ...messages];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full overflow-hidden py-2" style={{ backgroundColor: 'var(--coffee-dark)' }}>
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{
          x: [0, -50 + "%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {duplicatedMessages.map((message, index) => (
          <div key={index} className="flex items-center gap-2 text-white">
            <span className="text-sm">{message}</span>
            <span className="text-white/50">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}