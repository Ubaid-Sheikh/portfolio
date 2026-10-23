import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Server, Zap } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0px", amount: 0.1 });

  const highlights = [
    { icon: Code2, label: "Frontend", description: "React.js, Next.js, TypeScript, Redux" },
    { icon: Server, label: "Backend", description: "Node.js, Express, WebSockets, Microservices" },
    { icon: Database, label: "Database", description: "PostgreSQL, MongoDB, Redis, MinIO" },
    { icon: Zap, label: "Infra & iOS", description: "RabbitMQ, HAProxy, Debian, Swift" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 section-bg-gradient" ref={ref}>
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-2 gap-16 items-start"
          >
            {/* Left column - Text */}
            <motion.div variants={containerVariants}>
              <motion.span
                variants={itemVariants}
                className="text-primary font-mono text-sm mb-4 block"
              >
                // About
              </motion.span>
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Building the web,<br />
                <span className="text-muted-foreground">one component at a time</span>
              </motion.h2>
              <motion.div
                variants={containerVariants}
                className="space-y-4 text-muted-foreground leading-relaxed"
              >
                <motion.p variants={itemVariants}>
                  I'm a software engineer with experience in full-stack web development,
                  microservices, cloud infrastructure and native iOS development.
                  I build scalable real-time systems with Node.js, PostgreSQL, Redis, RabbitMQ and Swift.
                </motion.p>
                <motion.p variants={itemVariants}>
                  I'm currently a Full Stack Developer (Web + iOS) at QuantumRonics,
                  building email, collaboration and cryptocurrency exchange products
                  and deploying them to production.
                </motion.p>
                <motion.p variants={itemVariants}>
                  I hold a Bachelor of Cyber Security from Comsats University, Islamabad.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Right column - Highlight cards */}
            <motion.div
              variants={containerVariants}
              className="grid sm:grid-cols-2 gap-4"
            >
              {highlights.map((item) => (
                <motion.div
                  key={item.label}
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 40px -15px hsl(175 80% 50% / 0.2)",
                    borderColor: "hsl(175 80% 50% / 0.5)"
                  }}
                  className="card-glass p-6 rounded-xl group cursor-pointer"
                >
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="text-primary" size={24} />
                  </motion.div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
