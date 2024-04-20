import { motion, AnimatePresence, easeInOut } from "framer-motion";

export default function AnimationControls() {
  return (
    <div>
      <motion.button className="bg-blue-600 mb-5 shadow-lg text-slate-300 px-5 py-3 rounded-xl">
        Hide/Show
      </motion.button>
      <motion.div
        className="bg-gradient-to-r from-slate-600 to-slate-950 w-64 h-64 rounded-xl"
        variants={{
          initial: { rotate: "0deg" },
          flip: {
            rotate: "15deg",
            transition: { duration: 0.9, ease: "easeInOut" },
          },
          grow: { scale: 1.1, transition: { duration: 0.3 } },
        }}
        whileHover="flip"
        whileTap="grow"
      ></motion.div>
    </div>
  );
}
