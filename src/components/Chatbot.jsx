import React, { useEffect, useRef, useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";
import { Navbar } from "./Navbar";
import Footer from "./Footer";
import useGemini from "../config/useGemini";
import GeminiService from "../config/gemini.service";

const Text = ({ children, className }) => {
  <span className={`${className}`}>{children}</span>;
};

export const Chatbot = () => {
  // const GEMINI_API_KEY = "AIzaSyACu1t5IwvG3kbcsTW-GsbbOSvtF1RxhRk";
  const { messages, loading, sendMessages, updateMessage } = useGemini();

  console.log(messages);

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

  const handleSend = async (userMessage) => {
    if (!userMessage) return;
    // setInput("");
    updateMessage([
      ...messages,
      { role: "user", parts: [{ text: userMessage }] },
    ]);
    sendMessages({ message: userMessage, history: messages });
  };

  return (
    <div>
      <Navbar />
      <div
        style={{
          position: "relative",
          height: "100vh",
          width: "80vw",
          margin: "auto",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <AlwaysScrollToBottom />
        <MainContainer>
          <ChatContainer>
            {/* Shows all our messages */}
            <MessageList
              typingIndicator={
                loading ? (
                  <TypingIndicator content="BeenCardio Bot is thinking" />
                ) : null
              }
            >
              {messages.map((message, i) => {
                return (
                  <Message
                    key={i}
                    model={{
                      message: message.parts.map(
                        (part, j) =>
                          part.text
                          // <ReactMarkdown
                          //   key={j}
                          //   components={{
                          //     p: ({ node, ...props }) => (
                          //       <Text {...props} className="text-sm" />
                          //     ),
                          //   }}
                          // >
                          //   {part.text}
                          // </ReactMarkdown>
                      ),
                      sender: message.role === "user" ? "me" : "bot",
                    }}
                    style={
                      message.role === "model"
                        ? { textAlign: "left" }
                        : { textAlign: "right" }
                    }
                  />
                );
              })}
            </MessageList>
            <MessageInput
              placeholder="Type Message here"
              onSend={handleSend}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
          </ChatContainer>
        </MainContainer>
      </div>
      <Footer />
    </div>
  );
};
