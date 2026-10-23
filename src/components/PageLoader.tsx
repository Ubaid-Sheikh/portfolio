import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const bootLines = [
    "initializing portfolio...",
    "loading components...",
    "connecting services...",
    "ready.",
];

const PageLoader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => Math.min(prev + 4, 100));
        }, 50);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress >= 100) {
            const timer = setTimeout(() => setIsLoading(false), 350);
            return () => clearTimeout(timer);
        }
    }, [progress]);

    const visibleLines = Math.min(bootLines.length, Math.floor(progress / 25) + 1);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.03 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] bg-background flex items-center justify-center overflow-hidden"
                >
                    {/* Soft glow */}
                    <div className="absolute w-[480px] h-[480px] rounded-full bg-primary/10 blur-3xl" />

                    <div className="relative z-10 flex flex-col items-center px-6">
                        {/* Monogram */}
                        <div className="relative w-28 h-28 mb-8">
                            <motion.svg
                                viewBox="0 0 100 100"
                                className="absolute inset-0 w-full h-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                            >
                                <circle
                                    cx="50" cy="50" r="46"
                                    fill="none"
                                    stroke="hsl(var(--primary) / 0.15)"
                                    strokeWidth="2"
                                />
                                <circle
                                    cx="50" cy="50" r="46"
                                    fill="none"
                                    stroke="hsl(var(--primary))"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeDasharray="70 220"
                                />
                            </motion.svg>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="absolute inset-0 flex items-center justify-center font-mono text-3xl font-bold text-gradient"
                            >
                                UB
                            </motion.div>
                        </div>

                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15, duration: 0.5 }}
                            className="text-xl font-semibold tracking-wide mb-1"
                        >
                            Ubaid Ullah
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="text-sm text-muted-foreground mb-8"
                        >
                            Software Engineer
                        </motion.p>

                        {/* Boot log */}
                        <div className="font-mono text-xs text-muted-foreground h-20 w-64 space-y-1">
                            {bootLines.slice(0, visibleLines).map((line, i) => (
                                <motion.div
                                    key={line}
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.25 }}
                                    className="flex gap-2"
                                >
                                    <span className="text-primary">{">"}</span>
                                    <span className={i === visibleLines - 1 ? "text-foreground" : ""}>{line}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Progress */}
                        <div className="w-64 h-1 bg-primary/10 rounded-full overflow-hidden mt-2">
                            <div
                                className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-[width] duration-100 ease-linear"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                        <div className="font-mono text-xs text-primary mt-3">{progress}%</div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PageLoader;
