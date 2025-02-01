import { useState } from "react"
function InputArea({ onSendMessage }) {
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim()) {
      onSendMessage(message)
      setMessage("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 bg-transparent text-gray-100 placeholder-gray-400 px-4 py-3 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-xl transition-colors"
      >
        Send
      </button>
    </form>
  )
}

export default InputArea