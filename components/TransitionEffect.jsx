import { motion } from "framer-motion";

export default function TransitionEffect() {
  return (
    <>
      <motion.div className="fixed top-0 bottom-0 left-full h-screen w-screen z-30  bg-purple-300"
      initial={{ x: "-100%", width: "100%" }}
      animate={{ x: "0%", width: "0%" }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      />
      <motion.div className="fixed top-0 bottom-0 left-full  h-screen w-screen z-20 bg-light " 
      initial={{ x: "-100%", width: "100%" }}
      animate={{ x: "0%", width: "0%" }}
      transition={{ delay: 0.1, duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div className="fixed top-0 bottom-0 left-full  h-screen w-screen z-10 bg-purple-500 " 
      initial={{ x: "-100%", width: "100%" }}
      animate={{ x: "0%", width: "0%" }}
      transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
      />
    </>
  );
}