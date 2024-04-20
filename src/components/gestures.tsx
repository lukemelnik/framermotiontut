import { motion } from "framer-motion";

export default function Gestures() {
  return (
    <div>
      <motion.button
        className="bg-blue-600 mb-5 shadow-lg text-slate-300 px-5 py-3 rounded-xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9, rotate: 3 }}
      >
        Click Me
      </motion.button>
    </div>
  );
}
