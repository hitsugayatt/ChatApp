function Message({ message }) {
  const { text, isUser } = message

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
          isUser
            ? 'bg-cyan-500 text-white rounded-br-none'
            : 'bg-gray-800/40 backdrop-blur-md border border-gray-700/50 text-gray-100 rounded-bl-none'
        }`}
      >
        {text}
      </div>
    </div>
  )
}

export default Message