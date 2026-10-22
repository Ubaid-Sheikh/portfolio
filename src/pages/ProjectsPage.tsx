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
            title: "Enterprise Email Platform",
            description: "Enterprise email client comparable to Outlook, Thunderbird and Gmail, built by customizing iRedMail and SOGo with a custom ReactJS webmail UI. Includes S/MIME encryption, Zimbra and Exchange mailbox migration, Active Directory sync, bulk user creation and a customized admin portal.",
            tech: ["ReactJS", "Python", "Objective-C", "AngularJS", "Postfix", "Nginx"],
            category: "web",
            github: "https://github.com/Ubaid-Sheikh?tab=repositories",
            live: "#",
            year: "2026",
        },
        {
            title: "Real-Time Collaboration Platform (Web + iOS)",
            description: "Slack-like platform with workspaces, channels, messaging and file sharing. Microservices with async event processing and distributed caching, deployed on Debian VMs with HAProxy and PostgreSQL clustering. LiveKit voice/video (migrated from MediaSoup) and a native Swift iOS client.",
            tech: ["Node.js", "PostgreSQL", "Redis", "RabbitMQ", "MinIO", "LiveKit", "Swift"],
            category: "web",
            github: "https://github.com/Ubaid-Sheikh?tab=repositories",
            live: "#",
            year: "2026",
        },
        {
            title: "Cryptocurrency Exchange iOS App",
            description: "Native Swift iOS app for an exchange built on a customized OpenDAX ecosystem. Wallet management, trading workflows, authentication, market data visualization, portfolio tracking and real-time market updates.",
            tech: ["Swift", "iOS", "OpenDAX", "REST APIs"],
            category: "mobile",
            github: "https://github.com/Ubaid-Sheikh?tab=repositories",
            live: "#",
            year: "2026",
        },
        {
            title: "Hitechie - Job Portal",
            description: "Job portal platform built at RTechnologies, where I worked as a core backend developer.",
            tech: ["Node.js", "Express", "MongoDB"],
            category: "web",
            github: "https://github.com/Ubaid-Sheikh?tab=repositories",
            live: "#",
            year: "2025",
        },
        {
            title: "Check-in - Location-Based App",
            description: "Backend for a check-in app where users can find other people who checked in at the same place.",
            tech: ["Node.js", "Express", "MongoDB"],
            category: "web",
            github: "https://github.com/Ubaid-Sheikh?tab=repositories",
            live: "#",
            year: "2025",
        },
        {
            title: "Kratos - Live Story-Mode Game App",
            description: "Contributed to the backend of a live story-mode game app.",
            tech: ["Node.js", "Express", "MongoDB"],
            category: "web",
            github: "https://github.com/Ubaid-Sheikh?tab=repositories",
            live: "#",
            year: "2025",
        },
        {
            title: "TrapShield Dashboard (FYP)",
            description: "Cybersecurity dashboard that analyzes real-time network traffic to detect and filter malicious activity. Three Random Forest models trained on a custom dataset for OS Command Injection, SQL Injection and Cross-Site Scripting.",
            tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Random Forest"],
            category: "security",
            github: "https://github.com/Ubaid-Sheikh?tab=repositories",
            live: "#",
            year: "2025",
        },
    ];

    const categories = [
        { id: "all", label: "All" },
        { id: "web", label: "Web" },
        { id: "mobile", label: "Mobile" },
        { id: "security", label: "Security" },
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
