import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const BlobCursor = () => {
    const [isVisible, setIsVisible] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 200 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            setIsVisible(true);
        };

        const hideCursor = () => setIsVisible(false);

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseleave", hideCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseleave", hideCursor);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Main blob cursor */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                    opacity: isVisible ? 1 : 0,
                }}
            >
                <div className="w-full h-full bg-primary rounded-full blur-sm" />
            </motion.div>

            {/* Glowing light effect */}
            <motion.div
                className="fixed top-0 left-0 w-64 h-64 rounded-full pointer-events-none z-[9998]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                    opacity: isVisible ? 0.15 : 0,
                    background: "radial-gradient(circle, hsl(175 80% 50% / 0.4) 0%, transparent 70%)",
                }}
            />

            {/* Smaller inner glow */}
            <motion.div
                className="fixed top-0 left-0 w-32 h-32 rounded-full pointer-events-none z-[9998]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                    opacity: isVisible ? 0.3 : 0,
                    background: "radial-gradient(circle, hsl(175 80% 50% / 0.6) 0%, transparent 70%)",
                }}
            />

            {/* Trailing dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] bg-primary"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                    opacity: isVisible ? 1 : 0,
                }}
            />
        </>
    );
};

export default BlobCursor;
