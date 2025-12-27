import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const PageLoader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 500);
                    return 100;
                }
                return prev + 2;
            });
        }, 30);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[9999] bg-background flex items-center justify-center overflow-hidden"
                >
                    {/* Animated background particles */}
                    <div className="absolute inset-0">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-primary/30 rounded-full"
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

                    {/* Main loader container */}
                    <div className="relative z-10 flex flex-col items-center gap-8">
                        {/* Rotating rings */}
                        <div className="relative w-32 h-32">
                            {/* Outer ring */}
                            <motion.div
                                className="absolute inset-0 rounded-full border-2 border-primary/20"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Middle ring */}
                            <motion.div
                                className="absolute inset-2 rounded-full border-2 border-primary/40"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Inner ring with gradient */}
                            <motion.div
                                className="absolute inset-4 rounded-full border-2 border-transparent bg-gradient-to-r from-primary via-primary/60 to-primary bg-clip-border"
                                style={{
                                    borderImage: "linear-gradient(90deg, hsl(175 80% 50%), hsl(175 80% 50% / 0.6), hsl(175 80% 50%)) 1",
                                }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Center pulsing dot */}
                            <motion.div
                                className="absolute inset-0 m-auto w-8 h-8 rounded-full bg-primary"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [1, 0.5, 1],
                                }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />

                            {/* Orbiting dots */}
                            {[0, 120, 240].map((angle, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-3 h-3 bg-primary rounded-full"
                                    style={{
                                        top: "50%",
                                        left: "50%",
                                        marginTop: "-6px",
                                        marginLeft: "-6px",
                                    }}
                                    animate={{
                                        rotate: 360,
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: i * 0.2,
                                    }}
                                    initial={{
                                        rotate: angle,
                                    }}
                                >
                                    <motion.div
                                        className="w-full h-full rounded-full bg-primary"
                                        style={{
                                            transformOrigin: "0 0",
                                            transform: `translate(48px, 0)`,
                                        }}
                                        animate={{
                                            scale: [1, 1.5, 1],
                                        }}
                                        transition={{
                                            duration: 1,
                                            repeat: Infinity,
                                            delay: i * 0.3,
                                        }}
                                    />
                                </motion.div>
                            ))}
                        </div>

                        {/* Code-style text animation */}
                        <motion.div
                            className="font-mono text-primary"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <motion.div className="flex items-center gap-2">
                                <motion.span
                                    animate={{ opacity: [1, 0.3, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    {"<"}
                                </motion.span>
                                <motion.span
                                    className="text-lg font-bold"
                                    animate={{
                                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                    }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    style={{
                                        background: "linear-gradient(90deg, hsl(175 80% 50%), hsl(175 80% 70%), hsl(175 80% 50%))",
                                        backgroundSize: "200% 100%",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    Loading
                                </motion.span>
                                <motion.span
                                    animate={{ opacity: [1, 0.3, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                                >
                                    {" />"}
                                </motion.span>
                            </motion.div>
                        </motion.div>

                        {/* Progress bar */}
                        <div className="w-64 h-1 bg-primary/10 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-primary via-primary/80 to-primary rounded-full relative"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Shimmer effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                    animate={{
                                        x: ["-100%", "100%"],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />
                            </motion.div>
                        </div>

                        {/* Percentage */}
                        <motion.div
                            className="font-mono text-primary text-sm"
                            animate={{
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            {progress}%
                        </motion.div>
                    </div>

                    {/* Corner accents */}
                    {[
                        { top: "20px", left: "20px", rotate: 0 },
                        { top: "20px", right: "20px", rotate: 90 },
                        { bottom: "20px", right: "20px", rotate: 180 },
                        { bottom: "20px", left: "20px", rotate: 270 },
                    ].map((pos, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-8 h-8"
                            style={pos}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <motion.div
                                className="w-full h-full border-l-2 border-t-2 border-primary/30"
                                animate={{
                                    opacity: [0.3, 1, 0.3],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PageLoader;
