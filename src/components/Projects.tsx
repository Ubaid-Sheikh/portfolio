import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with real-time inventory, payment processing via Stripe, and admin dashboard. Built for scale with Redis caching.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, drag-and-drop interface, and team communication features using WebSockets.",
      tech: ["Next.js", "Express", "MongoDB", "Socket.io", "TypeScript"],
      github: "#",
      live: "#",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard aggregating data from multiple social platforms with interactive charts, scheduled reporting, and custom metrics.",
      tech: ["React", "Node.js", "GraphQL", "Chart.js", "JWT"],
      github: "#",
      live: "#",
    },
  ];

  const otherProjects = [
    { title: "Weather App", tech: ["React", "API Integration"] },
    { title: "Blog Platform", tech: ["Next.js", "MongoDB", "MDX"] },
    { title: "Chat Application", tech: ["Socket.io", "Express", "React"] },
    { title: "Portfolio Generator", tech: ["React", "Node.js", "PDF"] },
  ];

  return (
    <section id="projects" className="py-24 md:py-32" ref={ref}>
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <motion.span 
              className="text-primary font-mono text-sm mb-4 block"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              // Projects
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Featured Work
            </motion.h2>
            <motion.p 
              className="text-muted-foreground max-w-2xl"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              A selection of projects that showcase my skills and passion for building
            </motion.p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8 mb-16"
          >
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                variants={cardVariants}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 25px 50px -12px hsl(175 80% 50% / 0.15)",
                  borderColor: "hsl(175 80% 50% / 0.3)"
                }}
                className="card-glass rounded-2xl p-6 md:p-8 group border border-transparent cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <motion.div 
                      className="flex items-center gap-3 mb-4"
                      initial={{ x: -20, opacity: 0 }}
                      animate={isInView ? { x: 0, opacity: 1 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Folder className="text-primary" size={20} />
                      </motion.div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </motion.div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {project.tech.map((t, techIndex) => (
                        <motion.span
                          key={t}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.6 + index * 0.1 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.1, backgroundColor: "hsl(175 80% 50% / 0.2)" }}
                          className="px-3 py-1 text-xs font-mono rounded-full bg-secondary text-muted-foreground"
                        >
                          {t}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                  <div className="flex gap-3 md:flex-col">
                    <motion.a
                      href={project.github}
                      className="p-3 rounded-lg border border-border hover:border-primary/50 transition-colors"
                      aria-label="View source code"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={18} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="p-3 rounded-lg border border-border hover:border-primary/50 transition-colors"
                      aria-label="View live demo"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Other Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <motion.span 
                className="text-primary font-mono text-sm"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {">"}
              </motion.span>
              Other Noteworthy Projects
            </h3>
            <motion.div 
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02,
                    boxShadow: "0 20px 40px -15px hsl(175 80% 50% / 0.2)"
                  }}
                  className="card-glass rounded-xl p-5 group cursor-pointer border border-transparent hover:border-primary/30"
                >
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Folder className="text-primary mb-3" size={18} />
                  </motion.div>
                  <h4 className="font-medium mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs text-muted-foreground font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
