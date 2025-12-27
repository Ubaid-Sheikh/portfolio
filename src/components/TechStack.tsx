import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    { name: "MongoDB", category: "Database" },
    { name: "Express", category: "Backend" },
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Runtime" },
    { name: "TypeScript", category: "Language" },
    { name: "Next.js", category: "Framework" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Redux", category: "State" },
    { name: "GraphQL", category: "API" },
    { name: "Docker", category: "DevOps" },
    { name: "Git", category: "Version Control" },
    { name: "AWS", category: "Cloud" },
  ];

  const mernStack = ["MongoDB", "Express", "React", "Node.js"];

  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.span
              className="text-primary font-mono text-sm mb-4 block"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              // Tech Stack
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Technologies I Work With
            </motion.h2>
            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              A curated selection of tools and technologies I use to bring ideas to life
            </motion.p>
          </motion.div>

          {/* MERN Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-glass rounded-2xl p-8 mb-12 overflow-hidden relative"
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative z-10">
              <motion.div
                className="flex items-center justify-center gap-2 mb-6"
                initial={{ opacity: 0, y: -10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <motion.span
                  className="text-primary font-mono text-lg"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {"<"}
                </motion.span>
                <span className="text-xl font-bold">Core Tech Stack</span>
                <motion.span
                  className="text-primary font-mono text-lg"
                  animate={{ rotate: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {"/>"}
                </motion.span>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {mernStack.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 30, rotateX: -90 }}
                    animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.15, type: "spring" }}
                    className="text-center group"
                  >
                    <motion.div
                      className="w-28 h-20 mx-auto mb-4 rounded-xl bg-background flex items-center justify-center border border-border relative overflow-hidden"
                      whileHover={{
                        scale: 1.1,
                        borderColor: "hsl(175 80% 50%)",
                        boxShadow: "0 0 30px hsl(175 80% 50% / 0.3)"
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-primary/10"
                        initial={{ y: "100%" }}
                        whileHover={{ y: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.span
                        className="text-2xl font-bold font-mono text-gradient relative z-10"
                        whileHover={{ scale: 1.2 }}
                      >
                        {tech[0]}
                      </motion.span>
                    </motion.div>
                    <motion.span
                      className="font-medium"
                      whileHover={{ color: "hsl(175 80% 50%)" }}
                    >
                      {tech}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* All Technologies Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className="group cursor-pointer"
              >
                <motion.div
                  className="card-glass rounded-xl p-4 text-center h-full border border-transparent"
                  whileHover={{
                    borderColor: "hsl(175 80% 50% / 0.3)",
                    boxShadow: "0 10px 30px -10px hsl(175 80% 50% / 0.2)"
                  }}
                >
                  <motion.div
                    className="text-xs text-primary font-mono mb-2"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {tech.category}
                  </motion.div>
                  <div className="font-medium text-sm group-hover:text-primary transition-colors">
                    {tech.name}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
