import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const fullText = "Ubaid Ullah";

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
            const timer = setTimeout(() => setIsLoading(false), 300);
            return () => clearTimeout(timer);
        }
    }, [progress]);

    const typed = fullText.slice(0, Math.ceil((Math.min(progress, 70) / 70) * fullText.length));

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
                >
                    <div className="text-center px-6">
                        <div className="font-mono text-3xl md:text-5xl font-bold">
                            <span className="text-primary">{"<"}</span>
                            <span className="text-foreground">{typed}</span>
                            <motion.span
                                className="inline-block w-[3px] h-[0.9em] bg-primary align-middle ml-1"
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                            />
                            <span className="text-primary">{" />"}</span>
                        </div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-4 text-sm font-mono text-muted-foreground"
                        >
                            Software Engineer
                        </motion.p>
                    </div>

                    {/* Thin progress line at the bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary/10">
                        <div
                            className="h-full bg-primary transition-[width] duration-100 ease-linear"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PageLoader;
