import React from "react";
import "./ChatScreen.css";
import { useState } from "react";
import { Avatar } from "@mui/material";

function ChatScreen() {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      name: "Billy",
      image: `https://avatars.dicebear.com/api/human/${Math.random()}.svg`,
      message: "What's up ♥",
    },
    {
      name: "Billy",
      image: `https://avatars.dicebear.com/api/human/${Math.random()}.svg`,
      message: "Hello There",
    },
    {
      message: "Beep bop",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH BILLY ON 10/08/22
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              src={message.image}
              className="chatScreen__image"
              alt={message.name}
            />

            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <div className="chatScreen__input">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="chatScreen__inputField"
            placeholder="Type a message"
          />
          <button
            onClick={handleSend}
            className="chatScreen__inputButton"
            type="submit"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
