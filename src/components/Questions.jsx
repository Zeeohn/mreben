// QuizQuestion.js
import React, { useState } from "react";
import "./QuizQuestion.css";

function QuizQuestion({ question, onAnswerSelect }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState("");

  const handleOptionClick = (option) => {
    const isCorrect = option === question.answer;
    setSelectedOption(option);
    setFeedback(isCorrect ? "correct" : "incorrect");
    setTimeout(() => {
      onAnswerSelect(isCorrect);
      setFeedback(""); // Clear feedback
    }, 1000);
  };

  return (
    <div className="question">
      <h3 className="text-xl my-8">{question.question}</h3>
      <ul>
        {question.options.map((option, index) => (
          <li
            key={index}
            className={`option ${selectedOption === option ? feedback : ""}`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
      {feedback === "correct" && <div className="celebrate">🎉 Correct!</div>}
      {feedback === "incorrect" && (
        <div className="try-again">🚫 Wrong Answer!</div>
      )}
    </div>
  );
}

export default QuizQuestion;
