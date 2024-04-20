import { motion } from "framer-motion";
import { useState } from "react";

export default function BasicsOfMotion() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      <button
        className="bg-blue-600 mb-5 text-slate-300 px-5 py-3 rounded-xl"
        onClick={() => setIsVisible(!isVisible)}
      >
        Hide/Show
      </button>
      {isVisible && (
        <motion.div
          className="bg-gradient-to-r from-slate-600 to-slate-950 w-64 h-64 rounded-xl"
          initial={{ rotate: "0deg" }}
          animate={{ rotate: "180deg" }}
          exit={{ rotate: "0deg" }}
          transition={{ duration: 2, ease: "backInOut" }}
        ></motion.div>
      )}
    </div>
  );
}
