import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CustomPageLoader from "@/components/CustomPageLoader";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";

const ProjectsPage = () => {
    const [filter, setFilter] = useState("all");

    const projects = [
        {
            title: "AI-Based Code Analyzer",
            description: "AI-powered code analysis tool that detects bugs, security vulnerabilities, and code quality issues in real-time. Built with React and Python, leveraging OpenAI's API for intelligent suggestions.",
            tech: ["React", "Python", "OpenAI", "MongoDB", "FastAPI"],
            category: "ai",
            github: "https://github.com/Ubaid-Sheikh?tab=repositories",
            live: "#",
            year: "2024",
        },
        {
            title: "BreaCheck - Password Breach Detector",
            description: "Security tool that checks if passwords have been compromised in data breaches. Integrates with Have I Been Pwned API while maintaining user privacy through client-side hashing.",
            tech: ["Next.js", "Node.js", "API Integration", "Encryption"],
            category: "security",
            github: "https://github.com/Ubaid-Sheikh?tab=repositories",
            live: "#",
            year: "2024",
        },
        {
            title: "Realtime Security Dashboard",
            description: "Live security monitoring dashboard with real-time threat detection and network traffic analysis. Features interactive charts and automated alert system.",
            tech: ["React", "Node.js", "Socket.io", "Chart.js", "MongoDB"],
            category: "security",
            github: "https://github.com/Ubaid-Sheikh?tab=repositories",
            live: "#",
            year: "2023",
        },
        {
            title: "Youtube Video Downloader",
            description: "Simple and efficient tool to download YouTube videos in various formats and qualities with a clean interface.",
            tech: ["Python", "Flask", "yt-dlp"],
            category: "tool",
            github: "https://github.com/Ubaid-Sheikh?tab=repositories",
            live: "#",
            year: "2023",
        },
        {
            title: "Blog Platform",
            description: "Modern blogging platform with MDX support, syntax highlighting, and SEO optimization for a clean reading experience.",
            tech: ["Next.js", "MongoDB", "MDX"],
            category: "web",
            github: "https://github.com/Ubaid-Sheikh?tab=repositories",
            live: "#",
            year: "2023",
        },
        {
            title: "Chat Application",
            description: "Real-time chat application with rooms, private messaging, and file sharing capabilities.",
            tech: ["Socket.io", "Express", "React"],
            category: "web",
            github: "https://github.com/Ubaid-Sheikh?tab=repositories",
            live: "#",
            year: "2022",
        },
        {
            title: "Promptus - Find Prompts",
            description: "Community-driven platform for sharing and discovering effective AI prompts with categorization and search features.",
            tech: ["React", "OpenAI", "MongoDB"],
            category: "ai",
            github: "https://github.com/Ubaid-Sheikh?tab=repositories",
            live: "#",
            year: "2024",
        },
    ];

    const categories = [
        { id: "all", label: "All" },
        { id: "ai", label: "AI & ML" },
        { id: "security", label: "Security" },
        { id: "web", label: "Web" },
        { id: "tool", label: "Tools" },
    ];

    const filteredProjects = filter === "all"
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <main className="min-h-screen bg-background relative">
            <CustomPageLoader pageName="Projects" />
            <Navigation />
            <PageHero
                title="My Work"
                subtitle="A collection of projects I've built over the years"
            />

            <div className="relative z-10">
                {/* Filter Pills */}
                <section className="py-8 px-6 sticky top-20 bg-background/80 backdrop-blur-lg z-40 border-b border-border">
                    <div className="container max-w-4xl mx-auto">
                        <div className="flex flex-wrap gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setFilter(cat.id)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === cat.id
                                        ? "bg-primary text-primary-foreground"
                                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                                        }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects List */}
                <section className="py-12 px-6">
                    <div className="container max-w-4xl mx-auto">
                        <div className="space-y-16">
                            {filteredProjects.map((project, index) => (
                                <motion.article
                                    key={project.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group"
                                >
                                    {/* Project Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-4 mb-2">
                                                <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                                                    {project.title}
                                                </h3>
                                                <span className="text-sm text-muted-foreground font-mono">{project.year}</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 ml-4">
                                            <motion.a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-muted-foreground hover:text-primary transition-colors"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                aria-label="View on GitHub"
                                            >
                                                <Github size={20} />
                                            </motion.a>
                                            <motion.a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-muted-foreground hover:text-primary transition-colors"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                aria-label="View live demo"
                                            >
                                                <ExternalLink size={20} />
                                            </motion.a>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-sm font-mono text-muted-foreground"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Divider */}
                                    {index < filteredProjects.length - 1 && (
                                        <div className="mt-12 h-px bg-border" />
                                    )}
                                </motion.article>
                            ))}
                        </div>

                        {filteredProjects.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-20"
                            >
                                <p className="text-muted-foreground text-lg">No projects found in this category.</p>
                            </motion.div>
                        )}
                    </div>
                </section>

                <Footer />
            </div>
            <ScrollToTop />
        </main>
    );
};

export default ProjectsPage;
