import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Server, Zap } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Code2, label: "Frontend", description: "React, Next.js, TypeScript" },
    { icon: Server, label: "Backend", description: "Node.js, Express, REST APIs" },
    { icon: Database, label: "Database", description: "MongoDB, Mongoose, Redis" },
    { icon: Zap, label: "DevOps", description: "Docker, AWS, CI/CD" },
  ];

  return (
    <section id="about" className="py-24 md:py-32" ref={ref}>
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-16 items-start"
          >
            {/* Left column - Text */}
            <div>
              <span className="text-primary font-mono text-sm mb-4 block">// About</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Building the web,<br />
                <span className="text-muted-foreground">one component at a time</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with 3+ years of experience 
                  specializing in the MERN stack. I love creating performant, 
                  accessible, and visually appealing web applications.
                </p>
                <p>
                  My journey in web development started with curiosity and has 
                  evolved into a deep understanding of modern JavaScript ecosystems.
                  I focus on writing clean, maintainable code that scales.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open source, or sharing knowledge with the 
                  developer community.
                </p>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mt-8 pt-8 border-t border-border">
                <div>
                  <span className="text-3xl font-bold text-gradient">3+</span>
                  <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
                </div>
                <div>
                  <span className="text-3xl font-bold text-gradient">50+</span>
                  <p className="text-sm text-muted-foreground mt-1">Projects Completed</p>
                </div>
                <div>
                  <span className="text-3xl font-bold text-gradient">20+</span>
                  <p className="text-sm text-muted-foreground mt-1">Happy Clients</p>
                </div>
              </div>
            </div>

            {/* Right column - Highlight cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-glass p-6 rounded-xl hover-lift group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
