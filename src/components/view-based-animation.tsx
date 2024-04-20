import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

export default function ViewBasedAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log("isInView -> ", isInView);
  }, [isInView]);
  return (
    <>
      <div className="h-[3000px]"></div>
      <motion.div
        className="h-screen bg-black w-lvw"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      ></motion.div>
      <div
        ref={ref}
        className={`h-lvh ${isInView ? "bg-red-700" : "bg-green-400"} duration-700`}
      ></div>
    </>
  );
}
