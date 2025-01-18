import { motion } from "framer-motion";
import { Code2, Users, Zap, BookOpen } from "lucide-react";
const features = [
  {
    icon: Code2,
    title: "Real-time Code Sharing",
    description: "Share and edit code in real-time with developers around the world.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Join a thriving community of developers helping each other grow.",
  },
  {
    icon: Zap,
    title: "Instant Feedback",
    description: "Get immediate feedback on your code from experienced developers.",
  },
  {
    icon: BookOpen,
    title: "Learning Resources",
    description: "Access curated learning materials and improve your skills.",
  },
];
export const Features = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tight mb-4"
          >
            Everything you need to code better
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground"
          >
            Powerful features to help you take your coding skills to the next level
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-6 bg-background rounded-lg shadow-sm border transition-shadow hover:shadow-md"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};