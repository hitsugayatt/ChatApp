import { useState } from "react"
import { motion } from "framer-motion"
import ChatWindow from "./components/ChatWindow"
import BackgroundAnimation from "./components/BackgroundAnimation"
import Title from "./components/Title"
import "./App.css"

function App() {
  const [showChat, setShowChat] = useState(false)

  return (
    <div className="app bg-gray-900 text-cyan-300 min-h-screen overflow-hidden relative">
      <BackgroundAnimation />
      {!showChat ? (
        <div className="flex flex-col items-center justify-center h-screen z-10 relative">
          <Title />
          <motion.button
            className="px-8 py-4 text-xl font-bold hover: cursor-pointer text-gray-900 bg-cyan-400 rounded-full hover:bg-cyan-300 transition-colors duration-300 mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowChat(true)}
          >
            Start Chatting
          </motion.button>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full z-10 relative"
        >
          <ChatWindow />
        </motion.div>
      )}
    </div>
  )
}

export default App

