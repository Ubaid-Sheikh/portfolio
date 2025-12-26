import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    { name: "MongoDB", category: "Database", color: "47A248" },
    { name: "Express", category: "Backend", color: "000000" },
    { name: "React", category: "Frontend", color: "61DAFB" },
    { name: "Node.js", category: "Runtime", color: "339933" },
    { name: "TypeScript", category: "Language", color: "3178C6" },
    { name: "Next.js", category: "Framework", color: "000000" },
    { name: "Tailwind CSS", category: "Styling", color: "06B6D4" },
    { name: "Redux", category: "State", color: "764ABC" },
    { name: "GraphQL", category: "API", color: "E10098" },
    { name: "Docker", category: "DevOps", color: "2496ED" },
    { name: "Git", category: "Version Control", color: "F05032" },
    { name: "AWS", category: "Cloud", color: "FF9900" },
  ];

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
            <span className="text-primary font-mono text-sm mb-4 block">// Tech Stack</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technologies I Work With
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A curated selection of tools and technologies I use to bring ideas to life
            </p>
          </motion.div>

          {/* MERN Highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-glass rounded-2xl p-8 mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-primary font-mono text-lg">{"<"}</span>
              <span className="text-xl font-bold">MERN Stack</span>
              <span className="text-primary font-mono text-lg">{"/>"}</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["MongoDB", "Express", "React", "Node.js"].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-background flex items-center justify-center border border-border group-hover:border-primary/50 transition-all duration-300 group-hover:glow-effect">
                    <span className="text-2xl font-bold font-mono text-gradient">
                      {tech[0]}
                    </span>
                  </div>
                  <span className="font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* All Technologies Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.03 }}
                className="group"
              >
                <div className="card-glass rounded-xl p-4 text-center hover-lift h-full">
                  <div className="text-xs text-primary font-mono mb-2">{tech.category}</div>
                  <div className="font-medium text-sm">{tech.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
