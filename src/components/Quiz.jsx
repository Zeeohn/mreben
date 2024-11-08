import React, { useState } from "react";
import { Navbar } from "./Navbar";
import Footer from "./Footer";
import quizData from "../config/quiz.json";
import QuizQuestion from "./Questions";

const questions = [
  {
    question:
      "The mediastinum is located between which two structures in the thorax?",
    options: [
      "Heart and lungs",
      "Lungs and spine",
      "Lungs and sternum",
      "Diaphragm and clavicle",
    ],
    answer: "Lungs and sternum",
  },
  {
    question: "What is the primary role of the pericardium?",
    options: [
      "To circulate blood within the heart",
      "To protect and anchor the heart in the chest",
      "To initiate electrical impulses",
      "To reduce blood pressure",
    ],
    answer: "To protect and anchor the heart in the chest",
  },
  {
    question:
      "Which chamber of the heart receives oxygenated blood from the lungs?",
    options: [
      "Left atrium",
      "Right atrium",
      "Right ventricle",
      "Left ventricle",
    ],
    answer: "Left atrium",
  },
  {
    question:
      "Which of these is a characteristic feature found on the heart's external surface?",
    options: ["Endocardium", "Coronary sulcus", "Azygos vein", "Fossa ovalis"],
    answer: "Coronary sulcus",
  },
  {
    question: "The mitral valve is located between which two chambers?",
    options: [
      "Right atrium and right ventricle",
      "Left atrium and left ventricle",
      "Right ventricle and pulmonary artery",
      "Left ventricle and aorta",
    ],
    answer: "Left atrium and left ventricle",
  },
  {
    question:
      "The blood supply to the heart muscle itself is provided primarily by the:",
    options: [
      "Pulmonary arteries",
      "Coronary arteries",
      "Carotid arteries",
      "Brachiocephalic arteries",
    ],
    answer: "Coronary arteries",
  },
  {
    question:
      "Which vein is part of the azygos system and is responsible for draining the thoracic wall?",
    options: [
      "Pulmonary vein",
      "Azygos vein",
      "Subclavian vein",
      "Jugular vein",
    ],
    answer: "Azygos vein",
  },
  {
    question:
      "What is the primary function of the lymphatic system in relation to the heart?",
    options: [
      "To regulate heart rate",
      "To drain excess fluid from the tissues",
      "To supply oxygenated blood to the heart",
      "To remove carbon dioxide from blood",
    ],
    answer: "To drain excess fluid from the tissues",
  },
  {
    question:
      "Which part of the autonomic nervous system slows down the heart rate?",
    options: [
      "Sympathetic nervous system",
      "Parasympathetic nervous system",
      "Central nervous system",
      "Somatic nervous system",
    ],
    answer: "Parasympathetic nervous system",
  },
  {
    question:
      "Which layer of the heart wall is responsible for its pumping action?",
    options: ["Epicardium", "Endocardium", "Myocardium", "Pericardium"],
    answer: "Myocardium",
  },
  {
    question:
      "In fetal circulation, which structure allows blood to bypass the lungs?",
    options: [
      "Foramen ovale",
      "Ligamentum arteriosum",
      "Coronary sinus",
      "Vena cava",
    ],
    answer: "Foramen ovale",
  },
  {
    question:
      "Which valve prevents blood from flowing back into the left ventricle?",
    options: [
      "Pulmonary valve",
      "Mitral valve",
      "Aortic valve",
      "Tricuspid valve",
    ],
    answer: "Aortic valve",
  },
  {
    question: "Congenital heart anomalies typically refer to:",
    options: [
      "Blood clots in the heart",
      "Structural defects present from birth",
      "Electrical conduction problems",
      "Valve infections",
    ],
    answer: "Structural defects present from birth",
  },
  {
    question:
      "Which phase of the cardiac cycle involves the contraction of the ventricles?",
    options: [
      "Diastole",
      "Systole",
      "Isovolumetric relaxation",
      "Atrial filling",
    ],
    answer: "Systole",
  },
  {
    question:
      "Which node initiates the electrical impulses that regulate the heartbeat?",
    options: ["AV node", "SA node", "Bundle of His", "Purkinje fibers"],
    answer: "SA node",
  },
  {
    question: "Blood pressure is the force exerted by blood against:",
    options: [
      "The capillary walls",
      "The chamber walls of the heart",
      "The walls of arteries",
      "The lymphatic system",
    ],
    answer: "The walls of arteries",
  },
  {
    question: "Which circulatory system provides blood supply to the brain?",
    options: [
      "Pulmonary circulation",
      "Coronary circulation",
      "Cerebral circulation",
      "Systemic circulation",
    ],
    answer: "Cerebral circulation",
  },
  {
    question: "Hypertension is a condition characterized by:",
    options: [
      "Low blood pressure",
      "Excess blood volume",
      "High blood pressure",
      "Low heart rate",
    ],
    answer: "High blood pressure",
  },
  {
    question:
      "Which type of blood vessel is primarily responsible for nutrient and gas exchange?",
    options: ["Arteries", "Veins", "Capillaries", "Arterioles"],
    answer: "Capillaries",
  },
  {
    question:
      "In hemodynamics, resistance to blood flow is most influenced by:",
    options: [
      "Blood velocity",
      "Blood volume",
      "Vessel diameter",
      "Blood viscosity",
    ],
    answer: "Vessel diameter",
  },
  {
    question: "The 'lub-dub' sounds heard during a heartbeat are caused by:",
    options: [
      "Blood flowing through vessels",
      "Valves opening",
      "Valves closing",
      "Muscle contraction",
    ],
    answer: "Valves closing",
  },
  {
    question: "Where does the SA node, the primary pacemaker, reside?",
    options: [
      "Left atrium",
      "Right atrium",
      "Right ventricle",
      "Left ventricle",
    ],
    answer: "Right atrium",
  },
  {
    question: "Stroke volume multiplied by heart rate gives the:",
    options: [
      "Blood pressure",
      "Cardiac output",
      "Stroke rate",
      "End diastolic volume",
    ],
    answer: "Cardiac output",
  },
  {
    question: "The coronary arteries emerge from the:",
    options: ["Pulmonary artery", "Superior vena cava", "Aorta", "Left atrium"],
    answer: "Aorta",
  },
  {
    question: "During systole, the blood pressure in the arteries:",
    options: ["Rises", "Falls", "Remains the same", "Decreases to zero"],
    answer: "Rises",
  },
  {
    question: "The role of Purkinje fibers in the heart is to:",
    options: [
      "Supply blood to the ventricles",
      "Conduct electrical impulses for ventricular contraction",
      "Initiate the heartbeat",
      "Control blood pressure",
    ],
    answer: "Conduct electrical impulses for ventricular contraction",
  },
  {
    question: "Surface anatomy of the heart helps identify:",
    options: [
      "Only the left ventricle",
      "The positions of all heart chambers and valves",
      "Major nerves",
      "Only the right atrium",
    ],
    answer: "The positions of all heart chambers and valves",
  },
  {
    question: "The foramen ovale in fetal circulation is located between the:",
    options: [
      "Left and right ventricles",
      "Aorta and pulmonary artery",
      "Left and right atria",
      "Left atrium and left ventricle",
    ],
    answer: "Left and right atria",
  },
  {
    question: "The bundle of His is part of the heart’s:",
    options: [
      "Circulatory system",
      "Conduction system",
      "Muscle layer",
      "Lymphatic system",
    ],
    answer: "Conduction system",
  },
  {
    question:
      "Which procedure involves opening the chest to study the thoracic cavity and heart anatomy directly?",
    options: [
      "Mediastinotomy",
      "Pericardiocentesis",
      "Thoracic dissection",
      "Endoscopy",
    ],
    answer: "Thoracic dissection",
  },
];

export const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
  const [score, setScore] = useState(0);
  const [showFinalScore, setShowFinalScore] = useState(false);

  // Handler for selecting an answer
  const handleAnswerSelect = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowFinalScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(1);
    setScore(0);
    setShowFinalScore(false);
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center w-full mx-auto">
        <h1 className="text-lg text-center font-bold my-5">
          Comprehensive Cardiovascular Anatomy & Physiology Assessment
        </h1>
        <div className="quiz-app">
          <div
            className={`bg-black flex justify-center items-center md:w-1/2 mx-auto py-2 mb-5 ${
              showFinalScore ? "hidden" : "flex"
            }`}
          >
            <p className="text-xl font-bold text-white">
              Question {currentQuestionIndex} of {questions.length}
            </p>
          </div>

          {showFinalScore ? (
            <>
              <div className="final-score">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-500">
                  Total Score: {score} / {questions.length}
                </h2>
                <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-500">
                  {score <= 10
                    ? "uh-oh you had a very low score 😱"
                    : score >= 11 && score <= 19
                    ? "Well done! You scored above average 😁"
                    : score >= 20
                    ? "Congratulations, you performed well in this test! 🎉"
                    : "Well done! 🎉"}
                </p>
              </div>

              <button
                className="bg-black text-white px-3 py-4 my-7"
                onClick={resetQuiz}
              >
                Try Again
              </button>
            </>
          ) : (
            <>
              <h2 className="font-bold text-lg bg-black text-white py-2 mb-3 flex justify-center items-center md:w-1/2 mx-auto">
                Current Score: {score}
              </h2>
              <QuizQuestion
                question={questions[currentQuestionIndex]}
                onAnswerSelect={handleAnswerSelect}
              />
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
