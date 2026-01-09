import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();

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
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Skills", href: "/skills" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    // Small delay to let animation finish
    setTimeout(() => {
      navigate(href);
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
              href="/"
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

              {/* Minimalist Hamburger Menu */}
              <motion.button
                className="relative z-50 flex items-center justify-center py-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                <div className="flex items-center gap-3">
                  {/* Hamburger/Arrow container */}
                  <div className="relative w-8 h-4 flex flex-col justify-between">
                    {/* Top line - becomes top of arrow */}
                    <motion.span
                      className="h-0.5 bg-primary rounded-full"
                      style={{ transformOrigin: "right center" }}
                      animate={
                        isMenuOpen
                          ? { rotate: 45, y: 9, width: "100%", x: 0 }
                          : isHovered
                            ? { rotate: -30, width: "60%", x: 8, y: -2 }
                            : { rotate: 0, y: 0, width: "100%", x: 0 }
                      }
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    />

                    {/* Middle line - becomes arrow shaft */}
                    <motion.span
                      className="h-0.5 bg-primary rounded-full"
                      animate={
                        isMenuOpen
                          ? { opacity: 0, x: -10 }
                          : isHovered
                            ? { width: "100%", x: 0, opacity: 1 }
                            : { opacity: 1, x: 0, width: "75%" }
                      }
                      transition={{ duration: 0.3 }}
                    />

                    {/* Bottom line - becomes bottom of arrow */}
                    <motion.span
                      className="h-0.5 bg-primary rounded-full"
                      style={{ transformOrigin: "right center" }}
                      animate={
                        isMenuOpen
                          ? { rotate: -45, y: -9, width: "100%", x: 0 }
                          : isHovered
                            ? { rotate: 30, width: "60%", x: 8, y: 2 }
                            : { rotate: 0, y: 0, width: "50%", x: 0 }
                      }
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    />
                  </div>

                  {/* "Menu" text - slides in on hover */}
                  <motion.span
                    className="text-sm font-medium text-primary whitespace-nowrap overflow-hidden"
                    animate={
                      isHovered && !isMenuOpen
                        ? { opacity: 1, width: "auto", x: 0 }
                        : { opacity: 0, width: 0, x: -10 }
                    }
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  >
                    Menu
                  </motion.span>
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
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="flex items-center gap-3">
                          <motion.span
                            className="text-primary font-mono text-sm"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                          >
                            0{index + 1}.
                          </motion.span>
                          <span className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors duration-300">
                            {item.label}
                          </span>
                        </div>
                        <motion.div
                          className="h-0.5 bg-primary mt-1"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Bottom Section - Resume & Social */}
              <motion.div
                className="mt-16 flex flex-col items-center gap-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                {/* Resume Button */}
                <motion.a
                  href="/resume.pdf"
                  download
                  className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary bg-[length:200%_100%] group-hover:bg-[position:100%_0] transition-all duration-500" />

                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="relative z-10"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span className="relative z-10 text-sm">Download Resume</span>
                </motion.a>

                {/* Social Links with Icons */}
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com/Ubaid-Sheikh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 border border-border/50 rounded-lg text-foreground hover:border-primary hover:text-primary transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span className="text-sm font-medium">GitHub</span>
                  </motion.a>

                  <motion.a
                    href="https://linkedin.com/in/ubaid018"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 border border-border/50 rounded-lg text-foreground hover:border-primary hover:text-primary transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span className="text-sm font-medium">LinkedIn</span>
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Close button - Desktop: ESC hint, Mobile: X icon */}
            <motion.div
              className="absolute top-8 right-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {/* Desktop: ESC text */}
              <div className="hidden md:block text-muted-foreground text-sm font-mono">
                ESC to close
              </div>

              {/* Mobile: X icon button */}
              <motion.button
                onClick={() => setIsMenuOpen(false)}
                className="md:hidden w-10 h-10 rounded-full border border-border/50 flex items-center justify-center hover:border-primary/50 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close menu"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-foreground"
                >
                  <path
                    d="M15 5L5 15M5 5L15 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
