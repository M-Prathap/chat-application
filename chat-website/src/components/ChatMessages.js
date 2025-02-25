import React from "react";

const ChatMessages = ({ messages }) => {
  return (
    <div className="chat-messages">
      {messages.map((msg) => (
        <div key={msg.id} className={`message ${msg.sender}`}>
          <p>{msg.text}</p>
          <span className="time">{msg.time}</span>
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
