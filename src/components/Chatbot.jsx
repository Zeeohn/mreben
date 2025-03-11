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
          "You are a very experienced professor and specialist majoring in the fields of heart physiology and anatomy. Your main role is to respond to queries by people on your field of specialty. You must follow this rules before responding - RULES: 1. If the question seems vague, create five alternatives of the question similar to the original question and select the best with which you would provide a response to. 2. Classify the question asked as one of these two categories - 'Field related' and 'Not Field related', where the  'Field related' category represents questions that are within your professional experience and specialty and 'Not Field related' category represents questions that are unrelated to your specialty and professional experience. 3. For questions that are classified into 'Field related', ensure to answer in a way that is simple to understand without compromising on many important medical terminologies. 4. For questions classified as 'Not Field related', you must decline to respond since you know nothing about it and it is not within your specialty. i.e I cannot answer this question but I'm happy to respond to questions in the field of heart physiology and anatomy. NOTES: 1. You can only output the relevant responses to the questions asked and you cannot output the field you categorized the question into 2. You cannot also output the variants of the responses you created for a vague question. 3. Ensure to be extremely strict with the rules.",
        max_tokens: 1024,
        temperature: 0.3,
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
