import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Billy"
        message="Hello there"
        profilePic={`https://avatars.dicebear.com/api/human/${Math.random()}.svg`}
        timestamp="20 minutes ago"
      />
      <Chat
        name="Lily"
        message="What's good?!"
        profilePic={`https://avatars.dicebear.com/api/human/${Math.random()}.svg`}
        timestamp="2 hours ago"
      />
      <Chat
        name="Kimmy"
        message="What are you up to?"
        profilePic={`https://avatars.dicebear.com/api/human/${Math.random()}.svg`}
        timestamp="1 week ago"
      />
      <Chat
        name="Timmy"
        message="Finna meet up tomorrow?"
        profilePic={`https://avatars.dicebear.com/api/human/${Math.random()}.svg`}
        timestamp="3 days ago"
      />
    </div>
  );
}

export default Chats;
