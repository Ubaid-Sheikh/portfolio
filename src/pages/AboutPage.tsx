import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CustomPageLoader from "@/components/CustomPageLoader";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Code2, Database, Server, Zap } from "lucide-react";

const AboutPage = () => {
    const navigate = useNavigate();
    const skills = [
        { icon: Code2, label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
        { icon: Server, label: "Backend", items: ["Node.js", "Express", "REST APIs", "GraphQL"] },
        { icon: Database, label: "Database", items: ["MongoDB", "Mongoose", "Redis", "PostgreSQL"] },
        { icon: Zap, label: "DevOps", items: ["Docker", "AWS", "CI/CD", "Git"] },
    ];

    return (
        <main className="min-h-screen bg-background relative">
            <CustomPageLoader pageName="About" />
            <Navigation />
            <PageHero
                title="About Me"
                subtitle="Passionate developer crafting digital experiences that make a difference"
            />

            <div className="relative z-10">
                <section className="py-20 px-6">
                    <div className="container max-w-4xl mx-auto">
                        {/* Introduction */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="prose prose-invert max-w-none mb-20"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-8">
                                Hi, I'm <span className="text-gradient">Ubaid Sheikh</span> 👋
                            </h2>

                            <div className="text-lg text-muted-foreground space-y-6 leading-relaxed">
                                <p>
                                    I'm a passionate full-stack developer based in Islamabad, Pakistan, with over 3 years of experience
                                    building modern web applications. My journey in tech started with curiosity and has evolved into
                                    a deep love for creating solutions that make a real impact.
                                </p>

                                <p>
                                    I specialize in the <strong className="text-foreground">MERN stack</strong> (MongoDB, Express, React, Node.js)
                                    and have a keen eye for design. I believe that great software is not just about functionality—it's about
                                    creating experiences that are intuitive, accessible, and delightful to use.
                                </p>

                                <p>
                                    When I'm not coding, you'll find me exploring new technologies, contributing to open source projects,
                                    or sharing knowledge with the developer community. I'm always excited to learn and grow, and I love
                                    tackling challenging problems that push me to think creatively.
                                </p>
                            </div>
                        </motion.div>

                        {/* Stats Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex flex-wrap justify-center gap-12 md:gap-20 py-12 mb-20 border-y border-border"
                        >
                            {[
                                { value: "3+", label: "Years Experience" },
                                { value: "50+", label: "Projects" },
                                { value: "20+", label: "Clients" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="text-center"
                                >
                                    <div className="text-5xl md:text-6xl font-bold text-gradient mb-2">{stat.value}</div>
                                    <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Skills Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="mb-20"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold mb-12">Technical Skills</h3>

                            <div className="space-y-12">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.label}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex gap-6 items-start"
                                    >
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                                            <skill.icon className="text-primary" size={20} />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-xl font-semibold mb-3">{skill.label}</h4>
                                            <div className="flex flex-wrap gap-3">
                                                {skill.items.map((item) => (
                                                    <span
                                                        key={item}
                                                        className="text-muted-foreground hover:text-primary transition-colors"
                                                    >
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Philosophy */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="mb-20"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold mb-8">My Approach</h3>

                            <div className="space-y-8 text-muted-foreground leading-relaxed">
                                <div>
                                    <h4 className="text-xl font-semibold text-foreground mb-3">Quality Over Quantity</h4>
                                    <p>
                                        I believe in writing clean, maintainable code that stands the test of time. Every project
                                        deserves attention to detail and a commitment to excellence.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-xl font-semibold text-foreground mb-3">User-Centric Design</h4>
                                    <p>
                                        Technology should serve people, not the other way around. I always keep the end user in mind,
                                        ensuring that what I build is intuitive and accessible.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-xl font-semibold text-foreground mb-3">Continuous Learning</h4>
                                    <p>
                                        The tech world moves fast, and I'm committed to staying current. I'm always exploring new
                                        tools, frameworks, and best practices to deliver better solutions.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center py-16 border-t border-border"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Let's Build Something Amazing</h3>
                            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                            </p>
                            <motion.a
                                href="/contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate("/contact");
                                }}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get In Touch
                            </motion.a>
                        </motion.div>
                    </div>
                </section>

                <Footer />
            </div>
            <ScrollToTop />
        </main>
    );
};

export default AboutPage;
