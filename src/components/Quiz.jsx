import React, { useState } from "react";
import { Navbar } from "./Navbar";
import Footer from "./Footer";
import quizData from "../config/quiz.json";

export const Quiz = () => {
  const [questions] = useState(quizData);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState(
    new Array(questions.length).fill(null)
  );

  // const handleAnswerOptionClick = (isCorrect) => {

  //   // const nextQuestion = currentQuestion + 1;
  //   // if (nextQuestion < questions.length) {
  //   //   setCurrentQuestion(nextQuestion);
  //   // } else {
  //   //   setShowScore(true);
  //   // }
  // };

  const handleNextClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handlePrevClick = () => {
    const prevQuestion = currentQuestion - 1;
    if (prevQuestion >= 0) {
      setCurrentQuestion(prevQuestion);
    }
  };

  const handleSubmit = () => {
    setShowScore(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswers([]);
    setShowScore(false);
  };

  const handleOptionSelect = (questionIndex, answerIndex, answer) => {
    if (selectedAnswers[questionIndex] === undefined) {
      // If answer is correct, increment score
      if (answer) {
        setScore((prevScore) => prevScore + 1);
      }
    }

    console.log("question", questionIndex);

    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[questionIndex] = answerIndex;
    setSelectedAnswers(updatedSelectedAnswers);
  };

  return (
    <div>
      <Navbar />
      {showScore ? (
        // Show score when quiz is completed
        <div className="flex flex-col items-center justify-center mx-auto w-1/2 md:my-36 my-24">
          <p className="text-4xl">
            You scored{" "}
            <span
              className={`${
                score <= 5 ? "text-red-700" : "text-green-800"
              } font-extrabold`}
            >
              {score}
            </span>{" "}
            out of <span className="font-extrabold">{questions.length}</span>
          </p>
          <div className="flex md:gap-8 gap-2 mt-10 pt-10 items-center">
            <button
              onClick={resetQuiz}
              className="md:px-8 md:py-3 px-6 py-2 text-center bg-purple-600 text-white rounded-md hover:bg-white hover:text-black hover:border hover:border-purple-600"
            >
              Retry
            </button>
            <a
              href="/"
              className="md:px-6 md:py-3 px-4 py-2 border border-purple-600 text-black bg-white rounded-md hover:bg-purple-600 hover:text-white"
            >
              Homepage
            </a>
          </div>
        </div>
      ) : (
        // Show questions and answers when quiz is in progress
        <div className="flex flex-col my-10">
          <div className="">
            <div className="mx-auto flex justify-center items-center mb-8">
              <p className="font-bold md:text-3xl text-2xl">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </p>
            </div>
            <div className="md:text-xl text-lg mb-8">
              {questions[currentQuestion].question}
            </div>
          </div>
          <div className="flex items-start flex-col md:ml-10 md:mt-5 mt-2 gap-6">
            {questions[currentQuestion].answers.map((answerOption, index) => (
              <div
                key={answerOption.id}
                className="flex gap-2 items-center"
                onClick={() =>
                  handleOptionSelect(
                    currentQuestion,
                    index,
                    answerOption.correct
                  )
                }
              >
                <input
                  type="radio"
                  name={`option-${currentQuestion}`}
                  id={`option-${currentQuestion}-${index}`}
                  checked={selectedAnswers[currentQuestion] === index}
                  readOnly
                />
                <label
                  htmlFor={`option-${currentQuestion}-${index}`}
                  className="text-left"
                >
                  {answerOption.answer}
                </label>
              </div>
            ))}
          </div>
          <div className="flex gap-8 justify-center items-center mt-10">
            <button
              onClick={handlePrevClick}
              disabled={currentQuestion === 0}
              className={`px-6 py-3 rounded-md ${
                currentQuestion === questions.length - 1
                  ? "bg-white text-black border border-purple-700"
                  : currentQuestion === 0
                  ? "bg-gray-400 text-white"
                  : " text-white bg-purple-700"
              }`}
            >
              Previous
            </button>
            {currentQuestion === questions.length - 1 ? (
              <button
                onClick={handleSubmit}
                className="bg-purple-700 rounded-md px-6 py-3 text-white"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={handleNextClick}
                className="px-8 py-3 border border-purple-700 rounded-md"
              >
                Next
              </button>
            )}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};
