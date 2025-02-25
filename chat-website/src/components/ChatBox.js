import React, { useState } from "react";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "",
      sender: "",
      time: "",
    },
    { id: 2, text: "", sender: "sent", time: "" },
    { id: 3, text: "", sender: "sent", time: "" },
  ]);

  const sendMessage = (messageText) => {
    const newMessage = {
      id: messages.length + 1,
      text: messageText,
      sender: "sent",
      time: new Date().toLocaleTimeString(),
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="chat-box">
      <div className="chat-header">
        <h3>David Moore</h3>
      </div>
      <ChatMessages messages={messages} />
      <ChatInput sendMessage={sendMessage} />
    </div>
  );
};

export default ChatBox;
