import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Server, Zap } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0px", amount: 0.1 });

  const highlights = [
    { icon: Code2, label: "Frontend", description: "React, Next.js, JavaScript" },
    { icon: Server, label: "Backend", description: "Node.js, Express, REST APIs" },
    { icon: Database, label: "Database", description: "MongoDB, Mongoose, Redis" },
    { icon: Zap, label: "DevOps", description: "Docker, AWS, CI/CD" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 section-bg-gradient" ref={ref}>
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-2 gap-16 items-start"
          >
            {/* Left column - Text */}
            <motion.div variants={containerVariants}>
              <motion.span
                variants={itemVariants}
                className="text-primary font-mono text-sm mb-4 block"
              >
                // About
              </motion.span>
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Building the web,<br />
                <span className="text-muted-foreground">one component at a time</span>
              </motion.h2>
              <motion.div
                variants={containerVariants}
                className="space-y-4 text-muted-foreground leading-relaxed"
              >
                <motion.p variants={itemVariants}>
                  I'm a passionate full-stack developer with 3+ years of experience
                  specializing in the MERN stack. I love creating performant,
                  accessible, and visually appealing web applications.
                </motion.p>
                <motion.p variants={itemVariants}>
                  My journey in web development started with curiosity and has
                  evolved into a deep understanding of modern JavaScript ecosystems.
                  I focus on writing clean, maintainable code that scales.
                </motion.p>
                <motion.p variants={itemVariants}>
                  When I'm not coding, you'll find me exploring new technologies,
                  contributing to open source, or sharing knowledge with the
                  developer community.
                </motion.p>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="flex gap-8 mt-8 pt-8 border-t border-border"
              >
                {[
                  { value: "3+", label: "Years Experience" },
                  { value: "50+", label: "Projects Completed" },
                  { value: "20+", label: "Happy Clients" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 100 }}
                  >
                    <motion.span
                      className="text-3xl font-bold text-gradient block"
                      whileHover={{ scale: 1.1 }}
                    >
                      {stat.value}
                    </motion.span>
                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right column - Highlight cards */}
            <motion.div
              variants={containerVariants}
              className="grid sm:grid-cols-2 gap-4"
            >
              {highlights.map((item) => (
                <motion.div
                  key={item.label}
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 40px -15px hsl(175 80% 50% / 0.2)",
                    borderColor: "hsl(175 80% 50% / 0.5)"
                  }}
                  className="card-glass p-6 rounded-xl group cursor-pointer"
                >
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="text-primary" size={24} />
                  </motion.div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
