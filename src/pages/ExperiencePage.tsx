import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CustomPageLoader from "@/components/CustomPageLoader";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const ExperiencePage = () => {
    const experiences = [
        {
            title: "Full Stack Developer",
            company: "QuantumRonics",
            location: "Pakistan",
            period: "Feb 2026 - Present",
            type: "Full-time",
            description: "Building backend services and real-time systems, plus two iOS apps (Swift) for the company's email, collaboration and cryptocurrency exchange products using Node.js, PostgreSQL, Redis and RabbitMQ.",
            highlights: [
                "Designed microservices and managed production deployments on Debian VMs with HAProxy load balancing and PostgreSQL clustering",
                "Integrated LiveKit for voice and video conferencing",
                "Customized the iRedMail/SOGo mail stack and built a custom ReactJS webmail interface",
                "Built two iOS apps in Swift for the company with REST APIs, authentication, push notifications and real-time updates",
            ],
        },
        {
            title: "MERN Stack Developer Intern",
            company: "RTechnologies",
            location: "Pakistan",
            period: "Nov 2025 - Feb 2026",
            type: "Internship",
            description: "Worked as a core backend developer across multiple client projects, including Hitechie (job portal), Check-in and Kratos.",
            highlights: [
                "Built a real-time collaborative whiteboard using WebSockets",
                "Built an admin dashboard with live analytics and role-based access",
                "Improved UI/UX, fixed production bugs and boosted frontend performance on the company website",
                "Took part in code reviews, sprint planning and deployment workflows",
            ],
        },
    ];

    return (
        <main className="min-h-screen bg-background relative">
            <CustomPageLoader pageName="Experience" />
            <Navigation />
            <PageHero
                title="Experience"
                subtitle="My professional journey in software development"
            />

            <div className="relative z-10">
                <section className="py-20 px-6">
                    <div className="container max-w-4xl mx-auto">
                        {/* Timeline */}
                        <div className="space-y-16">
                            {experiences.map((exp, index) => (
                                <motion.article
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative pl-8 border-l-2 border-border"
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                                    {/* Header */}
                                    <div className="mb-4">
                                        <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                                            <div>
                                                <h3 className="text-2xl md:text-3xl font-bold mb-2">{exp.title}</h3>
                                                <div className="flex items-center gap-2 text-primary font-semibold text-lg">
                                                    <Briefcase size={18} />
                                                    <span>{exp.company}</span>
                                                </div>
                                            </div>
                                            <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary">
                                                {exp.type}
                                            </span>
                                        </div>

                                        {/* Meta Info */}
                                        <div className="flex flex-wrap gap-4 text-muted-foreground">
                                            <div className="flex items-center gap-2">
                                                <Calendar size={16} />
                                                <span>{exp.period}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin size={16} />
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-muted-foreground leading-relaxed mb-6">
                                        {exp.description}
                                    </p>

                                    {/* Highlights */}
                                    <div>
                                        <h4 className="font-semibold mb-3">Key Achievements</h4>
                                        <ul className="space-y-2">
                                            {exp.highlights.map((highlight, i) => (
                                                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                                    <span className="text-primary mt-1 flex-shrink-0">▹</span>
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.article>
                            ))}
                        </div>

                        {/* Download Resume CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mt-20 pt-16 border-t border-border"
                        >
                            <h3 className="text-2xl font-bold mb-4">Want to know more?</h3>
                            <p className="text-muted-foreground mb-8">
                                Download my resume for a complete overview of my experience and skills.
                            </p>
                            <motion.a
                                href="/resume.pdf"
                                download
                                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                Download Resume
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

export default ExperiencePage;
