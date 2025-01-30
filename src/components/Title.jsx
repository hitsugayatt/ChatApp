import { motion } from "framer-motion"

const Title = () => {
  return (
    <motion.h1
      className="text-6xl font-bold text-center mb-8"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <span className="text-cyan-400">Smart Conversations, </span>
      <span className="text-pink-500">Powered by</span>
      <span className="text-cyan-400"> You and Gemini</span>
    </motion.h1>
  )
}

export default Title

// Smart Conversations, Powered by You and AI