"use client"

import { AnimatePresence, motion } from "framer-motion";
import React from "react";
export default function TextAnimation() {
    const words = ["NextJS", "ShadcnUI", "Tailwind", "Typescript", "tRPC", "Clerk", "Prisma"];
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000);

        // Clean up interval on unmount
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <AnimatePresence mode="wait">
            <motion.h1
                key={words[index]}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                className="scroll-m-20 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl"
            >
                {words[index]}
            </motion.h1>
        </AnimatePresence>
    );
}