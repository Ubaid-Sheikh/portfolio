import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiGraphql,
  SiDocker,
  SiGit,
  SiAmazon
} from "react-icons/si";

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
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px", amount: 0.3 });

  const technologies = [
    { name: "MongoDB", category: "Database", icon: SiMongodb },
    { name: "Express", category: "Backend", icon: SiExpress },
    { name: "React", category: "Frontend", icon: SiReact },
    { name: "Node.js", category: "Runtime", icon: SiNodedotjs },
    { name: "JavaScript", category: "Language", icon: SiJavascript },
    { name: "Next.js", category: "Framework", icon: SiNextdotjs },
    { name: "Tailwind CSS", category: "Styling", icon: SiTailwindcss },
    { name: "Redux", category: "State", icon: SiRedux },
    { name: "GraphQL", category: "API", icon: SiGraphql },
    { name: "Docker", category: "DevOps", icon: SiDocker },
    { name: "Git", category: "Version Control", icon: SiGit },
    { name: "AWS", category: "Cloud", icon: SiAmazon },
  ];

  const mernStack = [
    { name: "MongoDB", icon: SiMongodb, color: "hsl(142, 76%, 36%)" },
    { name: "Express", icon: SiExpress, color: "hsl(0, 0%, 40%)" },
    { name: "React", icon: SiReact, color: "hsl(193, 95%, 68%)" },
    { name: "Node.js", icon: SiNodedotjs, color: "hsl(97, 71%, 45%)" },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden section-bg-dots" ref={ref}>
      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.8 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <motion.span
              className="text-primary font-mono text-sm mb-4 block"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              // Tech Stack
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Technologies I Work With
            </motion.h2>
            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              A curated selection of tools and technologies I use to bring ideas to life
            </motion.p>
          </motion.div>

          {/* MERN Stack Spotlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            {/* Title */}
            <motion.div
              className="flex items-center justify-center gap-3 mb-8"
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <motion.span
                className="text-primary font-mono text-xl"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {"<"}
              </motion.span>
              <h3 className="text-2xl md:text-3xl font-bold">Core Tech Stack</h3>
              <motion.span
                className="text-primary font-mono text-xl"
                animate={{ rotate: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {" />"}
              </motion.span>
            </motion.div>

            {/* Tech Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {mernStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="group"
                >
                  <motion.div
                    className="relative"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Card */}
                    <div className="relative bg-background backdrop-blur-sm rounded-2xl p-6 border border-border/50 group-hover:border-primary/50 transition-all duration-300 overflow-hidden">
                      {/* Subtle gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-1 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Content */}
                      <div className="relative z-10 flex flex-col items-center text-center">
                        {/* Icon */}
                        <motion.div
                          className="w-16 h-16 mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="text-4xl text-primary flex items-center justify-center">
                            <tech.icon />
                          </div>
                        </motion.div>

                        {/* Name */}
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {tech.name}
                        </h4>

                        {/* Bottom accent line */}
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* All Technologies Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                className="group cursor-pointer"
              >
                <motion.div
                  className="bg-background backdrop-blur-sm rounded-xl p-5 text-center h-full border border-border/30 relative overflow-hidden"
                  whileHover={{
                    borderColor: "hsl(175 80% 50% / 0.5)",
                    boxShadow: "0 20px 40px -15px hsl(175 80% 50% / 0.3)",
                    backgroundColor: "hsl(220 18% 8% / 1)",
                  }}
                >
                  {/* Hover gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  {/* Icon badge */}
                  <motion.div
                    className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center font-mono font-bold text-primary relative overflow-hidden"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-primary/20"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 text-xl text-primary">
                      <tech.icon />
                    </span>
                  </motion.div>

                  {/* Category */}
                  <motion.div
                    className="text-[10px] text-primary/70 font-mono mb-2 uppercase tracking-wider"
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {tech.category}
                  </motion.div>

                  {/* Tech name */}
                  <div className="font-semibold text-sm group-hover:text-primary transition-colors duration-300">
                    {tech.name}
                  </div>

                  {/* Animated corner accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/0 group-hover:border-primary/50 rounded-tr-xl transition-all duration-300"
                  />
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
