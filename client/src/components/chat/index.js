import React, { useState } from "react";
import "../../scss/components/Chat.scss";
import "../../assets/js/chat";
function ChatWindow({ onClose }) {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the inputMessage to the server or chatbot
    // Update the messages state with the response
    setMessages([...messages, { text: inputMessage, user: "user" }]);
    setInputMessage("");
  };

  return (
    <div
      className="chat-container chat-window border rounded-2"
      id="chat-window"
    >
      <div className="chat-Header bg-secondary p-2 fw-bold text-white">
        Chat With Me
      </div>
      <div className="chat-history">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.user}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chat-input-form ">
        <input
          type="text"
          value={inputMessage}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button type="submit" className="bg-secondary text-white ">
          Send
        </button>
        {/* <button className="close-button" id="close-chat" onClick={onClose}>
          <i className="fa fa-close"></i>
        </button> */}
      </form>
    </div>
  );
}

export default ChatWindow;
