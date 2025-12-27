import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ["about", "experience", "skills", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    // Small delay to let animation finish
    setTimeout(() => {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/50" : "bg-transparent"
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="container px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-1 text-xl font-bold group"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                className="text-primary font-mono"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {"<"}
              </motion.span>
              <span>Ubaid</span>
              <motion.span
                className="text-primary font-mono"
                animate={{ rotate: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {" />"}
              </motion.span>
            </motion.a>

            <div className="flex items-center gap-4">
              {/* Resume Button */}
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2 px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.a>

              {/* Unique Animated Hamburger Menu Button */}
              <motion.button
                className="relative z-50 w-12 h-12 flex items-center justify-center"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
              >
                {/* Rotating ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-primary/30"
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Pulsing background */}
                <motion.div
                  className="absolute inset-2 rounded-full bg-primary/10"
                  animate={{
                    scale: isMenuOpen ? [1, 1.2, 1] : 1,
                    opacity: isMenuOpen ? [0.1, 0.3, 0.1] : 0.1,
                  }}
                  transition={{ duration: 1, repeat: isMenuOpen ? Infinity : 0 }}
                />

                {/* Orbital particles */}
                {[0, 120, 240].map((angle, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-primary rounded-full"
                    style={{
                      top: "50%",
                      left: "50%",
                      marginTop: "-3px",
                      marginLeft: "-3px",
                    }}
                    animate={{
                      rotate: isMenuOpen ? 0 : 360,
                      opacity: isMenuOpen ? 0 : [0.3, 1, 0.3],
                    }}
                    transition={{
                      rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                      opacity: { duration: 2, repeat: Infinity, delay: i * 0.3 },
                    }}
                    initial={{ rotate: angle }}
                  >
                    <div
                      style={{
                        transform: `translate(16px, 0) rotate(${-angle}deg)`,
                      }}
                      className="w-1.5 h-1.5 bg-primary rounded-full"
                    />
                  </motion.div>
                ))}

                {/* Center icon - transforms between hamburger and X */}
                <div className="relative w-5 h-4 flex flex-col justify-between">
                  <motion.span
                    className="w-full h-0.5 bg-primary block rounded-full"
                    animate={isMenuOpen ? { rotate: 45, y: 7, scaleX: 1.2 } : { rotate: 0, y: 0, scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="w-full h-0.5 bg-primary block rounded-full"
                    animate={isMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="w-full h-0.5 bg-primary block rounded-full"
                    animate={isMenuOpen ? { rotate: -45, y: -7, scaleX: 1.2 } : { rotate: 0, y: 0, scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-background flex items-center justify-center overflow-hidden"
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-primary/20 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.2, 1, 0.2],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            {/* Menu Content */}
            <div className="relative z-10 text-center">
              <nav>
                <ul className="space-y-6">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, y: 50, rotateX: -90 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      exit={{ opacity: 0, y: -50, rotateX: 90 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.1 + index * 0.1,
                        type: "spring",
                        stiffness: 100,
                      }}
                    >
                      <motion.a
                        href={item.href}
                        onClick={() => handleNavClick(item.href)}
                        className="group inline-block"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="flex items-center gap-4">
                          <motion.span
                            className="text-primary font-mono text-2xl"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                          >
                            0{index + 1}.
                          </motion.span>
                          <span className="text-5xl md:text-7xl font-bold group-hover:text-primary transition-colors duration-300">
                            {item.label}
                          </span>
                        </div>
                        <motion.div
                          className="h-1 bg-primary mt-2"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Social Links */}
              <motion.div
                className="mt-16 flex justify-center gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.a
                  href="https://github.com/Ubaid-Sheikh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  GitHub
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/ubaid018"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                >
                  LinkedIn
                </motion.a>
              </motion.div>
            </div>

            {/* Close button hint */}
            <motion.div
              className="absolute top-8 right-8 text-muted-foreground text-sm font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              ESC to close
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
