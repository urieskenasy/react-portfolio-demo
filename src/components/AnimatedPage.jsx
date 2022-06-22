import React from "react";
import { motion } from "framer-motion";

const animations = {
    initial: { opacity: 0, y: -200 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: +200 },
};
export default function AnimatedPage({ children }) {
    return (
        <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.9 , delay: 1 }}
        
        >
            {children}
        </motion.div>
    );
}
