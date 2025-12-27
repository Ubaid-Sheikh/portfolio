import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Github, Linkedin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com/Ubaid-Sheikh", handle: "@Ubaid-Sheikh" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/ubaid018", handle: "in/ubaid018" },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px]"
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[250px] h-[250px] rounded-full bg-primary/5 blur-[80px]"
        animate={{ y: [0, 30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="text-primary font-mono text-sm mb-4 block"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              // Contact
            </motion.span>
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Let's Build Something<br />
              <motion.span
                className="text-gradient"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              >
                Together
              </motion.span>
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-lg max-w-xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              I'm currently available for freelance work and exciting opportunities.
              If you have a project in mind, let's talk!
            </motion.p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mb-16"
          >
            <motion.a
              href="mailto:ubaidsheikh700@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-xl relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-foreground"
                initial={{ x: "-100%", skewX: "-15deg" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <Mail size={20} className="relative z-10" />
              <span className="relative z-10">ubaidsheikh700@gmail.com</span>
              <motion.span
                className="relative z-10"
                animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowUpRight size={18} />
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center justify-center gap-2 text-muted-foreground mb-12"
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <MapPin size={16} />
            </motion.div>
            <span>Based in Islamabad, Pakistan</span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex justify-center gap-4"
          >
            {socials.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1 + index * 0.1, type: "spring" }}
                whileHover={{
                  y: -5,
                  scale: 1.05,
                  boxShadow: "0 15px 30px -10px hsl(175 80% 50% / 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                className="card-glass p-4 rounded-xl group flex items-center gap-3 border border-transparent hover:border-primary/30"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <social.icon size={20} className="text-primary" />
                </motion.div>
                <div className="text-left hidden sm:block">
                  <div className="text-xs text-muted-foreground">{social.label}</div>
                  <div className="text-sm font-mono">{social.handle}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
