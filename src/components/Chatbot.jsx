import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Navbar } from "./Navbar";
import Footer from "./Footer";

const Text = ({ children, className }) => {
  <span className={`${className}`}>{children}</span>;
};

export const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() =>
      elementRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      })
    );
    return <div ref={elementRef} />;
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    // Make a request to the ChatGPT API with the user input
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        messages: [
          {
            role: "system",
            content:
              "You are a heart physiology and anatomy professor and specialist.",
          },
          { role: "user", content: input },
        ],
        model: "gpt-3.5-turbo",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI}`,
        },
      }
    );

    // Update the conversation history with the response from ChatGPT
    setMessages([
      ...messages,
      { role: "assistant", content: response.data.choices[0].message.content },
    ]);

    // Clear the input field
    setInput("");
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col max-w-[600px] h-[50vh] m-auto px-10 border border-black rounded-md">
        <div>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${
                message.role === "user"
                  ? "text-left bg-white text-black"
                  : "text-right bg-white text-black"
              } mb-5`}
            >
              {message.content}
            </div>
          ))}
        </div>
        <div className="flex mt-5 mb-1">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            className="flex-1 p-2 border border-black rounded-md mr-2"
          />
          <button
            onClick={handleSendMessage}
            className="bg-[#007bff] text-white px-6 py-3 rounded-md"
          >
            Send
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
