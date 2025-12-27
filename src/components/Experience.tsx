import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "0px", amount: 0.1 });

    const experiences = [
        {
            title: "MERN Stack Developer",
            company: "RTechnologies",
            location: "Remote",
            period: "2025 - Present",
            type: "Full-time",
            description: "Backend-focused MERN stack development, building scalable APIs and server-side applications. Working with Node.js, Express, MongoDB, and implementing robust authentication and authorization systems.",
            highlights: [
                "Developed RESTful APIs serving 10k+ daily requests",
                "Implemented JWT authentication and role-based access control",
                "Optimized database queries reducing response time by 40%",
                "Built real-time features using Socket.io",
            ],
            color: "from-emerald-500/20 to-teal-500/20",
        },
        {
            title: "MERN Stack Developer Intern",
            company: "HiSkyTech Company",
            location: "Remote",
            period: "2024",
            type: "Internship",
            description: "Gained hands-on experience in full-stack development using MongoDB, Express.js, React, and Node.js. Contributed to multiple client projects and learned industry best practices.",
            highlights: [
                "Built responsive web applications using React",
                "Collaborated with senior developers on production code",
                "Implemented CRUD operations with MongoDB",
                "Participated in code reviews and agile sprints",
            ],
            color: "from-cyan-500/20 to-blue-500/20",
        },
    ];

    return (
        <section id="experience" className="py-24 md:py-32 section-bg-gradient relative overflow-hidden" ref={ref}>
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
              // Experience
                        </motion.span>
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold mb-4"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3, duration: 0.7 }}
                        >
                            Work Experience
                        </motion.h2>
                        <motion.p
                            className="text-muted-foreground max-w-2xl mx-auto"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        >
                            My professional journey in software development
                        </motion.p>
                    </motion.div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical line */}
                        <motion.div
                            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20"
                            initial={{ scaleY: 0 }}
                            animate={isInView ? { scaleY: 1 } : {}}
                            transition={{ duration: 1, delay: 0.5 }}
                            style={{ transformOrigin: "top" }}
                        />

                        {/* Experience cards */}
                        <div className="space-y-12">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                                    className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                        }`}
                                >
                                    {/* Timeline dot */}
                                    <motion.div
                                        className="absolute left-0 md:left-1/2 top-6 w-4 h-4 -ml-[7px] md:-ml-2 rounded-full bg-primary border-4 border-background z-10"
                                        initial={{ scale: 0 }}
                                        animate={isInView ? { scale: 1 } : {}}
                                        transition={{ delay: 0.8 + index * 0.2, type: "spring" }}
                                        whileHover={{ scale: 1.5 }}
                                    >
                                        <motion.div
                                            className="absolute inset-0 rounded-full bg-primary"
                                            animate={{
                                                scale: [1, 1.5, 1],
                                                opacity: [1, 0, 1],
                                            }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                    </motion.div>

                                    {/* Card */}
                                    <motion.div
                                        className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                                            }`}
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="relative bg-background backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden group">
                                            <div className="relative z-10">
                                                {/* Header */}
                                                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                                    <div>
                                                        <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                                                            {exp.title}
                                                        </h3>
                                                        <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                                                            <Briefcase size={16} />
                                                            <span>{exp.company}</span>
                                                        </div>
                                                    </div>
                                                    <span className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/30">
                                                        {exp.type}
                                                    </span>
                                                </div>

                                                {/* Meta info */}
                                                <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                                                    <div className="flex items-center gap-2">
                                                        <Calendar size={14} />
                                                        <span>{exp.period}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <MapPin size={14} />
                                                        <span>{exp.location}</span>
                                                    </div>
                                                </div>

                                                {/* Description */}
                                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                                    {exp.description}
                                                </p>

                                                {/* Highlights */}
                                                <div className="space-y-2">
                                                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Achievements:</h4>
                                                    <ul className="space-y-2">
                                                        {exp.highlights.map((highlight, i) => (
                                                            <motion.li
                                                                key={i}
                                                                initial={{ opacity: 0, x: -20 }}
                                                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                                                transition={{ delay: 1 + index * 0.2 + i * 0.1 }}
                                                                className="flex items-start gap-2 text-sm text-muted-foreground"
                                                            >
                                                                <span className="text-primary mt-1">▹</span>
                                                                <span>{highlight}</span>
                                                            </motion.li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Experience;
