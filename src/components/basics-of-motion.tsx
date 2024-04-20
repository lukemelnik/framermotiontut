import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function BasicsOfMotion() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      <button
        className="bg-blue-600 mb-5 shadow-lg text-slate-300 px-5 py-3 rounded-xl"
        onClick={() => setIsVisible(!isVisible)}
      >
        Hide/Show
      </button>
      <div className="w-64 h-64">
        <AnimatePresence>
          {isVisible && (
            <motion.div
              className="bg-gradient-to-r from-slate-600 to-slate-950 w-64 h-64 rounded-xl"
              initial={{ rotate: "0deg", scale: 0 }}
              animate={{ rotate: "180deg", scale: 1 }}
              exit={{ rotate: "0deg", scale: 0 }}
              transition={{ duration: 2, ease: "backInOut" }}
            ></motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
