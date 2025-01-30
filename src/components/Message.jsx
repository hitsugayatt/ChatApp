import { motion } from "framer-motion"
import { formatText } from "../utils/formatText.jsx"

function Message({ message }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg p-3 ${
          message.isUser ? "bg-pink-500 text-gray-900 rounded-br-none" : "bg-cyan-800 text-cyan-100 rounded-bl-none"
        }`}
      >
        <div className="whitespace-pre-wrap break-words">{formatText(message.text)}</div>
      </div>
    </motion.div>
  )
}

export default Message

