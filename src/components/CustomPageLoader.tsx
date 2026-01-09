import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Terminal } from "lucide-react";

interface CustomPageLoaderProps {
    pageName: string;
}

const CustomPageLoader = ({ pageName }: CustomPageLoaderProps) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate page load
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
                >
                    <div className="text-center">
                        {/* Animated Logo/Icon */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="mb-8 relative"
                        >
                            <motion.div
                                className="w-24 h-24 mx-auto rounded-3xl bg-primary/5 border border-primary/20 flex items-center justify-center relative overflow-hidden"
                                animate={{
                                    boxShadow: [
                                        "0 0 0px 0px hsl(var(--primary) / 0)",
                                        "0 0 20px 2px hsl(var(--primary) / 0.2)",
                                        "0 0 0px 0px hsl(var(--primary) / 0)"
                                    ]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <motion.div
                                    animate={{
                                        rotate: [0, 360],
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_70%)]"
                                />
                                <Terminal className="text-primary relative z-10" size={40} />
                            </motion.div>
                        </motion.div>

                        {/* Loading Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h2 className="text-2xl font-bold mb-2">
                                Loading <span className="text-gradient">{pageName}</span>
                            </h2>

                            {/* Animated Dots */}
                            <div className="flex items-center justify-center gap-2 mt-4">
                                {[0, 1, 2].map((i) => (
                                    <motion.div
                                        key={i}
                                        className="w-2 h-2 bg-primary rounded-full"
                                        animate={{
                                            scale: [1, 1.5, 1],
                                            opacity: [0.3, 1, 0.3],
                                        }}
                                        transition={{
                                            duration: 1,
                                            repeat: Infinity,
                                            delay: i * 0.2,
                                        }}
                                    />
                                ))}
                            </div>
                        </motion.div>

                        {/* Progress Bar */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="mt-8 w-64 h-1 bg-secondary rounded-full overflow-hidden mx-auto"
                        >
                            <motion.div
                                className="h-full bg-gradient-to-r from-primary to-primary/60"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CustomPageLoader;
