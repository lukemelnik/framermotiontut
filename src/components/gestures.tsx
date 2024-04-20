import { MotionConfig, motion } from "framer-motion";

export default function Gestures() {
  return (
    <div>
      <MotionConfig transition={{ duration: 0.8 }}>
        <motion.button
          className="bg-blue-600 mr-10 mb-5 shadow-lg text-slate-300 px-5 py-3 rounded-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9, rotate: 10 }}
        >
          Click Me
        </motion.button>
        <motion.button
          className="bg-red-600 mb-5 shadow-lg text-slate-300 px-5 py-3 rounded-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9, rotate: -10 }}
        >
          Click Me
        </motion.button>
      </MotionConfig>
    </div>
  );
}
