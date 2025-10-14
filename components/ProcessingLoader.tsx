import { motion } from "motion/react";

const scripts = ["अ", "அ", "అ", "ಅ", "അ", "অ", "અ", "ਅ", "ଅ"];

export function ProcessingLoader() {
  return (
    <div className="flex items-center justify-center gap-2 py-8">
      {scripts.map((char, index) => (
        <motion.div
          key={index}
          className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent text-2xl"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.1,
          }}
        >
          {char}
        </motion.div>
      ))}
    </div>
  );
}
