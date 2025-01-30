import { useState } from "react"
import { motion } from "framer-motion"

function InputArea({ onSendMessage }) {
  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      onSendMessage(text)
      setText("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-800 border-t border-cyan-800 relative z-20">
      <div className="flex items-center">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 mr-2 bg-gray-700 text-cyan-100 border border-cyan-600 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-cyan-500 text-gray-900 rounded-full hover:bg-cyan-400 hover: cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          type="submit"
        >
          Send
        </motion.button>
      </div>
    </form>
  )
}

export default InputArea

