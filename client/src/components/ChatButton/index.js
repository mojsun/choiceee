import React from "react";
import "../../scss/components/Chat.scss";
import "../../assets/js/chat";
// function ChatButton({ onClick }) {
//   return (
//     <button
//       className="chat-button p-4 border rounded-circle bg-secondary text-white"
//       onClick={onClick}
//       id="chat-button"
//     >
//       <i className="fa fa-comment fa-2x"></i>
//     </button>
//   );
// }

function ChatButton({ onClick, isOpen }) {
  return (
    <button
      className={`chat-button p-4 border rounded-circle text-white ${
        isOpen ? "bg-secondary" : "bg-secondary"
      }`}
      onClick={onClick}
      id="chat-button"
    >
      {isOpen ? (
        <i className="fa fa-close fa-2x"></i>
      ) : (
        <i className="fa fa-comment fa-2x"></i>
      )}
    </button>
  );
}

export default ChatButton;
