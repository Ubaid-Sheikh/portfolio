import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Folder, Code2 } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0px", amount: 0.1 });

  const featuredProjects = [
    {
      title: "AI-Based Code Analyzer",
      description:
        "AI-powered code analysis tool that detects bugs, security vulnerabilities, and code quality issues. Features real-time analysis, automated suggestions, and integration with popular IDEs.",
      tech: ["React", "Python", "OpenAI", "MongoDB", "FastAPI"],
      github: "https://github.com/Ubaid-Sheikh?tab=repositories",
      gradient: "from-emerald-500/20 to-teal-500/20",
    },
    {
      title: "BreaCheck - Password Breach Detector",
      description:
        "Security tool that checks if passwords have been compromised in data breaches. Uses Have I Been Pwned API with secure hashing to protect user privacy while ensuring password safety.",
      tech: ["Next.js", "Node.js", "API Integration", "Encryption", "JavaScript"],
      github: "https://github.com/Ubaid-Sheikh?tab=repositories",
      gradient: "from-cyan-500/20 to-blue-500/20",
    },
    {
      title: "Realtime Security Dashboard",
      description:
        "Live security monitoring dashboard with real-time threat detection, network traffic analysis, and automated alerts. Features interactive charts and comprehensive security metrics.",
      tech: ["React", "Node.js", "Socket.io", "Chart.js", "MongoDB"],
      github: "https://github.com/Ubaid-Sheikh?tab=repositories",
      gradient: "from-teal-500/20 to-primary/20",
    },
  ];

  const otherProjects = [
    { title: "Youtube Video Downloader", tech: ["Python", "Flask", "yt-dlp"] },
    { title: "Blog Platform", tech: ["Next.js", "MongoDB", "MDX"] },
    { title: "Chat Application", tech: ["Socket.io", "Express", "React"] },
    { title: "Promptus - Find prompts", tech: ["React", "OpenAI", "MongoDB"] },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden section-bg-lines" ref={ref}>
      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.8 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <motion.span
              className="text-primary font-mono text-sm mb-4 block"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              // Projects
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Featured Work
            </motion.h2>
            <motion.p
              className="text-muted-foreground max-w-2xl"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              A selection of projects that showcase my skills and passion for building
            </motion.p>
          </motion.div>

          {/* Featured Projects - Minimalist Design */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                className="group cursor-pointer"
              >
                <motion.div
                  className="relative h-full"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Main card */}
                  <div className="relative bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 h-full flex flex-col overflow-hidden hover:border-primary/50 transition-all duration-300">

                    {/* Subtle gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <motion.div
                          className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Code2 className="text-primary" size={24} />
                        </motion.div>

                        <div className="flex gap-2">
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-background/50 border border-border/50 hover:border-primary/50 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="View on GitHub"
                          >
                            <Github size={16} />
                          </motion.a>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-mono rounded-md bg-secondary/50 text-muted-foreground border border-border/30 hover:border-primary/30 hover:text-primary transition-all duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
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
                    boxShadow: "0 20px 40px -15px hsl(175 80% 50% / 0.2)",
                  }}
                  className="bg-background backdrop-blur-sm rounded-xl p-5 group cursor-pointer border border-border/30 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Hover gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  <div className="relative z-10">
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
