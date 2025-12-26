import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com", handle: "@yourusername" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", handle: "in/yourusername" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com", handle: "@yourusername" },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-mono text-sm mb-4 block">// Contact</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let's Build Something<br />
              <span className="text-gradient">Together</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-12">
              I'm currently available for freelance work and exciting opportunities. 
              If you have a project in mind, let's talk!
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <a
              href="mailto:hello@yourdomain.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-105 group"
            >
              <Mail size={20} />
              <span>hello@yourdomain.com</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-muted-foreground mb-12"
          >
            <MapPin size={16} />
            <span>Based in Your City, Country</span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            {socials.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="card-glass p-4 rounded-xl hover-lift group flex items-center gap-3"
              >
                <social.icon size={20} className="text-primary" />
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
