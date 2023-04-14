import React from "react";
import "./Chat.css";
import { Avatar } from "@mui/material";

function Chat({ name, message, profilePic, timestamp }) {
  return (
    <div className="chat">
      <Avatar src={profilePic} className="chat__image" alt={name} />

      <div className="chat__details">
        <h2>{name}</h2>
        <p>{message}</p>
      </div>
      <div className="chat__timestamp">
        <p>{timestamp}</p>
      </div>
    </div>
  );
}

export default Chat;
