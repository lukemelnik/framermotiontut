import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function BasicsOfMotion() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      <motion.button
        className="bg-blue-600 mb-5 shadow-lg text-slate-300 px-5 py-3 rounded-xl"
        onClick={() => setIsVisible(!isVisible)}
        layout
        transition={{ delay: 1 }}
      >
        Hide/Show
      </motion.button>

      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            className="bg-gradient-to-r from-slate-600 to-slate-950 w-64 h-64 rounded-xl"
            initial={{ rotate: "0deg", scale: 0, y: 0 }}
            animate={{ rotate: "180deg", scale: 1, y: [0, 50, -50, 0] }}
            exit={{ rotate: "0deg", scale: 0, x: 1000 }}
            transition={{
              duration: 3,
              ease: "backInOut",
              times: [0, 0.25, 0.75, 1],
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
