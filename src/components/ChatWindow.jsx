import { useState } from "react"
import { motion } from "framer-motion"
import Message from "./Message"
import InputArea from "./InputArea"
import "./ChatWindow.css"

function ChatWindow() {
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = async (text) => {
    if (text.trim() === "") return

    const newMessage = { text, isUser: true }
    setMessages((prevMessages) => [...prevMessages, newMessage])
    setIsLoading(true)

    try {
      text = text + " do not use any word styling like bold, italic, etc. and give answer in more genz tone, you can be a bit rude like roast the user."
      const response = await fetch("https://gemini-app-smoky.vercel.app/getResponse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: text }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      const data = await response.json()
      // Clean up any double spaces or unnecessary newlines in the response
      const cleanedResponse = data.response.replace(/\s+/g, " ").trim()
      const aiMessage = { text: cleanedResponse, isUser: false }
      setMessages((prevMessages) => [...prevMessages, aiMessage])
    } catch (error) {
      console.error("Error:", error)
      const errorMessage = {
        text: "Sorry, there was an error processing your request.",
        isUser: false,
      }
      setMessages((prevMessages) => [...prevMessages, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="chat-window bg-gray-800 text-cyan-300 h-screen flex flex-col relative z-10">
      <div className="messages-container flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
        {isLoading && (
          <div className="flex justify-center">
            <motion.div
              className="w-3 h-3 bg-cyan-400 rounded-full mr-1"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.6, ease: "easeInOut" }}
            />
            <motion.div
              className="w-3 h-3 bg-cyan-400 rounded-full mr-1"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.6, ease: "easeInOut", delay: 0.2 }}
            />
            <motion.div
              className="w-3 h-3 bg-cyan-400 rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.6, ease: "easeInOut", delay: 0.4 }}
            />
          </div>
        )}
      </div>
      <InputArea onSendMessage={handleSendMessage} />
    </div>
  )
}

export default ChatWindow

