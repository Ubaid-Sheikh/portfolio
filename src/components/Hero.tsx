import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import TypingEffect from "./TypingEffect";
import AnimatedBackground from "./AnimatedBackground";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const Hero = () => {
  const roles = ["Software Developer", "Full-Stack Developer", "React Specialist", "Node.js Expert"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />

      <motion.div
        className="container relative z-10 px-6 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto">
          {/* Status badge */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <motion.span
              className="text-muted-foreground text-sm font-mono"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              Available for work
            </motion.span>
          </motion.div>

          {/* Main heading with typing effect */}
          <motion.div variants={itemVariants}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <motion.span
                className="text-foreground inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Hi, I'm Ubaid{" "}
              </motion.span>
              <br />
              <TypingEffect
                words={roles}
                className="text-gradient font-mono"
              />
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed"
          >
            I craft modern, scalable web applications using{" "}
            <motion.span
              className="text-foreground inline-block"
              whileHover={{ y: -2, color: "hsl(175, 80%, 50%)" }}
            >
              MongoDB
            </motion.span>,{" "}
            <motion.span
              className="text-foreground inline-block"
              whileHover={{ y: -2, color: "hsl(175, 80%, 50%)" }}
            >
              Express
            </motion.span>,{" "}
            <motion.span
              className="text-foreground inline-block"
              whileHover={{ y: -2, color: "hsl(175, 80%, 50%)" }}
            >
              React
            </motion.span>, and{" "}
            <motion.span
              className="text-foreground inline-block"
              whileHover={{ y: -2, color: "hsl(175, 80%, 50%)" }}
            >
              Node.js
            </motion.span>.
            Turning complex problems into elegant solutions.
          </motion.p>

          {/* Social links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 mb-16"
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg overflow-hidden relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-foreground"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <Mail size={18} className="relative z-10" />
              <span className="relative z-10">Get in Touch</span>
            </motion.a>
            <motion.a
              href="https://github.com/Ubaid-Sheikh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border hover:border-primary/50 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/ubaid018"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border hover:border-primary/50 transition-colors"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={20} />
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.a
              href="#about"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-xs font-mono">Scroll</span>
              <ArrowDown size={16} />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
