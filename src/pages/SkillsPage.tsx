import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CustomPageLoader from "@/components/CustomPageLoader";
import { motion } from "framer-motion";
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
    SiAmazon,
    SiTypescript,
    SiPostgresql,
    SiRedis,
    SiSocketdotio,
} from "react-icons/si";

const SkillsPage = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            skills: [
                { name: "React", icon: SiReact, level: "Expert" },
                { name: "Next.js", icon: SiNextdotjs, level: "Advanced" },
                { name: "JavaScript", icon: SiJavascript, level: "Expert" },
                { name: "TypeScript", icon: SiTypescript, level: "Advanced" },
                { name: "Tailwind CSS", icon: SiTailwindcss, level: "Expert" },
                { name: "Redux", icon: SiRedux, level: "Advanced" },
            ],
        },
        {
            title: "Backend Development",
            skills: [
                { name: "Node.js", icon: SiNodedotjs, level: "Expert" },
                { name: "Express", icon: SiExpress, level: "Expert" },
                { name: "GraphQL", icon: SiGraphql, level: "Intermediate" },
                { name: "Socket.io", icon: SiSocketdotio, level: "Advanced" },
            ],
        },
        {
            title: "Database & Storage",
            skills: [
                { name: "MongoDB", icon: SiMongodb, level: "Expert" },
                { name: "PostgreSQL", icon: SiPostgresql, level: "Intermediate" },
                { name: "Redis", icon: SiRedis, level: "Intermediate" },
            ],
        },
        {
            title: "DevOps & Tools",
            skills: [
                { name: "Docker", icon: SiDocker, level: "Advanced" },
                { name: "AWS", icon: SiAmazon, level: "Intermediate" },
                { name: "Git", icon: SiGit, level: "Expert" },
            ],
        },
    ];

    const getLevelColor = (level: string) => {
        switch (level) {
            case "Expert":
                return "text-primary";
            case "Advanced":
                return "text-blue-400";
            case "Intermediate":
                return "text-yellow-400";
            default:
                return "text-muted-foreground";
        }
    };

    return (
        <main className="min-h-screen bg-background relative">
            <CustomPageLoader pageName="Tech Stack" />
            <Navigation />
            <PageHero
                title="Tech Stack"
                subtitle="Tools and technologies I use to build amazing things"
            />

            <div className="relative z-10">
                <section className="py-20 px-6">
                    <div className="container max-w-4xl mx-auto">
                        {/* Skill Categories */}
                        <div className="space-y-16">
                            {skillCategories.map((category, catIndex) => (
                                <motion.div
                                    key={category.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className="text-2xl md:text-3xl font-bold mb-8">{category.title}</h3>

                                    <div className="space-y-6">
                                        {category.skills.map((skill, skillIndex) => (
                                            <motion.div
                                                key={skill.name}
                                                initial={{ opacity: 0, x: -30 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                                                viewport={{ once: true }}
                                                className="flex items-center gap-4 group"
                                            >
                                                {/* Icon */}
                                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                                    <skill.icon className="text-primary text-2xl" />
                                                </div>

                                                {/* Skill Info */}
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className="font-semibold text-lg">{skill.name}</span>
                                                        <span className={`text-sm font-medium ${getLevelColor(skill.level)}`}>
                                                            {skill.level}
                                                        </span>
                                                    </div>

                                                    {/* Progress Bar */}
                                                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                                                        <motion.div
                                                            className="h-full bg-gradient-to-r from-primary to-primary/60"
                                                            initial={{ width: 0 }}
                                                            whileInView={{
                                                                width: skill.level === "Expert" ? "100%" :
                                                                    skill.level === "Advanced" ? "80%" : "60%"
                                                            }}
                                                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                                                            viewport={{ once: true }}
                                                        />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Additional Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="mt-20 pt-16 border-t border-border"
                        >
                            <h3 className="text-2xl font-bold mb-6">Always Learning</h3>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Technology evolves rapidly, and I'm committed to staying current. I regularly explore new tools,
                                frameworks, and best practices to deliver better solutions. Currently, I'm diving deeper into:
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {["Microservices", "Kubernetes", "GraphQL Federation", "Serverless Architecture"].map((topic) => (
                                    <span
                                        key={topic}
                                        className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                                    >
                                        {topic}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mt-20 pt-16 border-t border-border"
                        >
                            <h3 className="text-2xl font-bold mb-4">Let's Build Together</h3>
                            <p className="text-muted-foreground mb-8">
                                Have a project in mind? Let's discuss how these skills can bring your vision to life.
                            </p>
                            <motion.a
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Start a Project
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

export default SkillsPage;
