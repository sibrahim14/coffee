import { motion } from "motion/react";
import { ImageWithFallback } from "./coffee/ImageWithFallback";

const steps = [
  {
    number: "01",
    title: "Drop the Tablet",
    description: "Simply drop one CofTab tablet into your favorite cup or glass.",
  },
  {
    number: "02",
    title: "Add Water",
    description: "Pour in hot or cold water (6-8 oz). Watch the magic happen!",
  },
  {
    number: "03",
    title: "Stir & Enjoy",
    description: "Give it a quick stir and enjoy your perfect cup of coffee in seconds.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to your perfect cup
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex gap-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ x: 10, transition: { duration: 0.3 } }}
              >
                <motion.div 
                  className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl text-white"
                  style={{ backgroundColor: 'var(--coffee-medium)' }}
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.1,
                    transition: { duration: 0.5 }
                  }}
                >
                  {step.number}
                </motion.div>
                <div>
                  <h3 className="text-2xl mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div 
              className="absolute inset-0 rounded-3xl blur-3xl opacity-20"
              style={{ backgroundColor: 'var(--coffee-medium)' }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            ></motion.div>
            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotate: -2,
                transition: { duration: 0.3 }
              }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1764575502236-78c3f7fa1a74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0YW50JTIwY29mZmVlJTIwcHJlcGFyYXRpb258ZW58MXx8fHwxNzY3ODYyMTA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Coffee preparation"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}