import React from "react";
import { motion } from "framer-motion";

const animations = {
    initial: { opacity: 0.5, y: -1000 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0.5, y: +1000 },
};

const nav = {
    initial: { opacity: 0, rotate: 360 },
    animate: { opacity: 1, rotate: 0 },
    exit: { opacity: 0, rotate: 360 },
};
export default function AnimatedPage({ children }) {
    return (
        <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 2, delay: 0 }}
        >
            {children}
        </motion.div>
    );
}
