import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Navbar } from "./Navbar";
import Footer from "./Footer";

const Text = ({ children, className }) => {
  return <span className={`${className}`}>{children}</span>;
};

export const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Load messages from local storage
    const savedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    setMessages(savedMessages);
  }, []);

  useEffect(() => {
    // Save messages to local storage whenever they are updated
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

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
    if (!input.trim()) return;

    // Add user's message to the messages array
    const userMessage = { role: "user", content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setLoading(true);

    try {
      const response = await axios.post(`${import.meta.env.VITE_PROXY}/proxy`, {
        model: "claude-3-haiku-20240307",
        system:
          "You are a heart physiology and anatomy professor and specialist, you cannot answer any unrelated question to your expertise in heart physiology and anatomy.",
        max_tokens: 1024,
        messages: [{ role: "user", content: input }],
      });

      const assistantMessage = {
        role: "assistant",
        content: response.data.content[0].text,
      };

      setMessages((prevMessages) => [...prevMessages, assistantMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
      // setMessages((prevMessages) => [...prevMessages, { role: "assistant", content: "There was an error processing your message. Please try again." }]);
      alert("There was an error processing your message. Please try again.");
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  const formatMessage = (message) => {
    return message
      .replace(/\n/g, "<br/>")
      .replace(/(\d+\. )/g, "<strong>$1</strong>");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <h3 className="text-4xl text-center mb-5 font-bold">BeeNCardiac Bot</h3>
        <div className="flex flex-col max-w-2xl w-full h-3/4 border bg-gray-200 border-gray-300 rounded-md shadow-lg">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg max-w-lg ${
                  message.role === "user"
                    ? "bg-blue-500 text-white text-left"
                    : "bg-white text-black text-left self-end"
                }`}
                dangerouslySetInnerHTML={{
                  __html: formatMessage(message.content),
                }}
              />
            ))}
            <AlwaysScrollToBottom />
            {loading && (
              <div className="self-start text-gray-500">Typing...</div>
            )}
          </div>
          <div className="p-4 border-t border-gray-300 flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              className="flex-1 p-2 w-1/2 border border-gray-300 rounded-md"
              placeholder="Type a message"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Chatbot;
