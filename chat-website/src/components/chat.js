import React from "react";
import Sidebar from "../components/Sidebar";
import ChatBox from "../components/ChatBox";
import "../components/styles.css";

const Chat = () => {
  return (
    <div className="chat-container">
      <Sidebar />
      <ChatBox />
    </div>
  );
};

export default Chat;
