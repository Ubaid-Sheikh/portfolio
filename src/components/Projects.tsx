import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

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
            <span className="text-primary font-mono text-sm mb-4 block">// Projects</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Work
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              A selection of projects that showcase my skills and passion for building
            </p>
          </motion.div>

          {/* Featured Projects */}
          <div className="space-y-8 mb-16">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-glass rounded-2xl p-6 md:p-8 hover-lift group"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <Folder className="text-primary" size={20} />
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-xs font-mono rounded-full bg-secondary text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 md:flex-col">
                    <a
                      href={project.github}
                      className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300"
                      aria-label="View source code"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.live}
                      className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Other Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-primary font-mono text-sm">{">"}</span>
              Other Noteworthy Projects
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  className="card-glass rounded-xl p-5 hover-lift group cursor-pointer"
                >
                  <Folder className="text-primary mb-3" size={18} />
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
