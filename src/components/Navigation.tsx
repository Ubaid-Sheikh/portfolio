import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : ""
      }`}
    >
      <nav className="container px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a 
            href="#" 
            className="font-mono text-lg font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span 
              className="text-primary"
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              {"<"}
            </motion.span>
            dev
            <motion.span 
              className="text-primary"
              animate={{ rotate: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              {"/>"}
            </motion.span>
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
              >
                <motion.a
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group py-2"
                  whileHover={{ y: -2 }}
                >
                  <span className="text-primary font-mono text-xs mr-1">0{index + 1}.</span>
                  {item.label}
                  <motion.span 
                    className="absolute -bottom-0 left-0 h-px bg-primary"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <motion.a
                href="/resume.pdf"
                target="_blank"
                className="px-4 py-2 border border-primary text-primary text-sm rounded-lg relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-primary"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 group-hover:text-primary-foreground transition-colors">
                  Resume
                </span>
              </motion.a>
            </motion.li>
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden"
        >
          <ul className="flex flex-col gap-4 pt-4 pb-4">
            {navItems.map((item, index) => (
              <motion.li
                key={item.label}
                initial={{ x: -20, opacity: 0 }}
                animate={isMobileMenuOpen ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  <span className="text-primary font-mono text-xs mr-2">0{index + 1}.</span>
                  {item.label}
                </a>
              </motion.li>
            ))}
            <motion.li
              initial={{ x: -20, opacity: 0 }}
              animate={isMobileMenuOpen ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              <a
                href="/resume.pdf"
                target="_blank"
                className="inline-block px-4 py-2 border border-primary text-primary text-sm rounded-lg hover:bg-primary/10 transition-all duration-300"
              >
                Resume
              </a>
            </motion.li>
          </ul>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Navigation;
