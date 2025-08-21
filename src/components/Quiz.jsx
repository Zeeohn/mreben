import { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import Footer from "./Footer";
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
  {
    question: "The middle mediastinum contains which major organ?",
    options: ["Lungs", "Heart", "Esophagus", "Trachea"],
    answer: "Heart",
  },
  {
    question:
      "The fibrous pericardium is attached inferiorly to which structure?",
    options: ["Pleura", "Sternum", "Diaphragm", "Thoracic duct"],
    answer: "Diaphragm",
  },
  {
    question: "The pericardial cavity normally contains:",
    options: ["Blood", "Lymph", "Pericardial fluid", "Plasma"],
    answer: "Pericardial fluid",
  },
  {
    question: "The coronary sulcus separates which heart structures?",
    options: [
      "Right and left atria",
      "Atria and ventricles",
      "Right and left ventricles",
      "Pulmonary trunk and aorta",
    ],
    answer: "Atria and ventricles",
  },
  {
    question:
      "The transverse pericardial sinus lies between which major structures?",
    options: [
      "Left atrium and left ventricle",
      "Pulmonary veins and inferior vena cava",
      "Ascending aorta & pulmonary trunk in front, superior vena cava behind",
      "Right atrium and right ventricle",
    ],
    answer:
      "Ascending aorta & pulmonary trunk in front, superior vena cava behind",
  },
  {
    question: "The oblique pericardial sinus is clinically important because:",
    options: [
      "It allows direct access to the coronary arteries",
      "It is a site for fluid accumulation during pericardial effusion",
      "It separates the atria from the ventricles",
      "It prevents backflow of blood",
    ],
    answer: "It is a site for fluid accumulation during pericardial effusion",
  },
  {
    question: "The left coronary artery typically divides into:",
    options: [
      "Posterior descending & marginal arteries",
      "Left anterior descending & circumflex arteries",
      "Right marginal & diagonal arteries",
      "Coronary sinus & vena cordis",
    ],
    answer: "Left anterior descending & circumflex arteries",
  },
  {
    question: "The great cardiac vein drains primarily into which vessel?",
    options: [
      "Superior vena cava",
      "Coronary sinus",
      "Pulmonary vein",
      "Inferior vena cava",
    ],
    answer: "Coronary sinus",
  },
  {
    question: "Which chamber forms the apex of the heart?",
    options: [
      "Right atrium",
      "Left atrium",
      "Right ventricle",
      "Left ventricle",
    ],
    answer: "Left ventricle",
  },
  {
    question: "Papillary muscles are connected to valve cusps by:",
    options: [
      "Trabeculae carneae",
      "Chordae tendineae",
      "Crista terminalis",
      "Pectinate muscles",
    ],
    answer: "Chordae tendineae",
  },
  {
    question:
      "The interventricular sulci on the surface of the heart mark the position of:",
    options: [
      "Atrioventricular valves",
      "Coronary arteries",
      "Interventricular septum",
      "Foramen ovale",
    ],
    answer: "Interventricular septum",
  },
  {
    question:
      "The vagus nerve provides parasympathetic fibers mainly to which nodes?",
    options: [
      "SA node and AV node",
      "AV node and Bundle of His",
      "Purkinje fibers and AV node",
      "SA node and coronary arteries",
    ],
    answer: "SA node and AV node",
  },
  {
    question: "Intercalated discs of cardiac muscle contain:",
    options: [
      "Sarcomeres and troponin",
      "Desmosomes and gap junctions",
      "Elastic fibers and tight junctions",
      "Mitochondria and t-tubules",
    ],
    answer: "Desmosomes and gap junctions",
  },
  {
    question: "A defect in closure of the ductus arteriosus results in:",
    options: [
      "Patent ductus arteriosus",
      "Tetralogy of Fallot",
      "Coarctation of the aorta",
      "Atrial septal defect",
    ],
    answer: "Patent ductus arteriosus",
  },
  {
    question: "The accessory hemiazygos vein drains into which vessel?",
    options: [
      "Superior vena cava",
      "Left atrium",
      "Azygos vein",
      "Coronary sinus",
    ],
    answer: "Azygos vein",
  },
  {
    question: "The cardiac plexus is located near the:",
    options: [
      "Left atrium",
      "Base of the heart",
      "Apex of the heart",
      "Coronary sinus",
    ],
    answer: "Base of the heart",
  },
  {
    question: "The coronary arteries originate from:",
    options: [
      "Right atrium",
      "Left atrium",
      "Ascending aorta",
      "Pulmonary artery",
    ],
    answer: "Ascending aorta",
  },
  {
    question: "Which vein drains the lateral wall of the left ventricle?",
    options: [
      "Middle cardiac vein",
      "Great cardiac vein",
      "Posterior vein of the left ventricle",
      "Small cardiac vein",
    ],
    answer: "Posterior vein of the left ventricle",
  },
  {
    question: "The most muscular chamber of the heart is the:",
    options: [
      "Right atrium",
      "Right ventricle",
      "Left atrium",
      "Left ventricle",
    ],
    answer: "Left ventricle",
  },
  {
    question:
      "Which congenital heart defect is characterized by four combined abnormalities?",
    options: [
      "Atrial septal defect",
      "Patent ductus arteriosus",
      "Tetralogy of Fallot",
      "Ventricular septal defect",
    ],
    answer: "Tetralogy of Fallot",
  },
  {
    question: "Coarctation of the aorta refers to:",
    options: [
      "Dilation of the aorta",
      "Narrowing of the aorta",
      "Displacement of the aorta",
      "Rupture of the aorta",
    ],
    answer: "Narrowing of the aorta",
  },
  {
    question:
      "The heart is located in which subdivision of the thoracic cavity?",
    options: ["Pleural cavity", "Mediastinum", "Costal cavity", "Peritoneum"],
    answer: "Mediastinum",
  },
  {
    question: "The coronary sinus opens into which chamber of the heart?",
    options: [
      "Left atrium",
      "Right atrium",
      "Left ventricle",
      "Right ventricle",
    ],
    answer: "Right atrium",
  },
  {
    question: "The internal lining of the heart chambers is called the:",
    options: ["Myocardium", "Pericardium", "Endocardium", "Epicardium"],
    answer: "Endocardium",
  },
  {
    question: "The bundle of His is located in which structure?",
    options: [
      "Atrial wall",
      "Interventricular septum",
      "Left ventricle",
      "Right atrium",
    ],
    answer: "Interventricular septum",
  },
  {
    question: "The average duration of a complete cardiac cycle at rest is:",
    options: ["0.4 seconds", "0.6 seconds", "0.8 seconds", "1.2 seconds"],
    answer: "0.8 seconds",
  },
  {
    question: "Which valves close at the beginning of ventricular systole?",
    options: [
      "Semilunar valves",
      "Atrioventricular valves",
      "Mitral and aortic valves",
      "Pulmonary and aortic valves",
    ],
    answer: "Atrioventricular valves",
  },
  {
    question: "The Frank–Starling law states that:",
    options: [
      "Increased afterload decreases cardiac output",
      "Increased preload increases force of contraction",
      "Decreased heart rate increases stroke volume",
      "Blood viscosity determines heart rate",
    ],
    answer: "Increased preload increases force of contraction",
  },
  {
    question: "Peripheral resistance is mainly determined by:",
    options: [
      "Blood pressure",
      "Blood viscosity",
      "Vessel diameter",
      "Capillary density",
    ],
    answer: "Vessel diameter",
  },
  {
    question: "A normal resting heart rate in adults is typically:",
    options: ["20–40 bpm", "40–60 bpm", "60–100 bpm", "100–140 bpm"],
    answer: "60–100 bpm",
  },
  {
    question: "Heart rate variability (HRV) is an indicator of:",
    options: [
      "Stroke volume",
      "Autonomic balance",
      "Blood viscosity",
      "Cardiac hypertrophy",
    ],
    answer: "Autonomic balance",
  },
  {
    question: "The first heart sound (S1) is due to closure of:",
    options: [
      "Semilunar valves",
      "Atrioventricular valves",
      "Aortic valve",
      "Pulmonary valve",
    ],
    answer: "Atrioventricular valves",
  },
  {
    question: "The second heart sound (S2) corresponds to closure of:",
    options: [
      "AV valves",
      "Mitral valve only",
      "Semilunar valves",
      "Coronary sinus",
    ],
    answer: "Semilunar valves",
  },
  {
    question:
      "Which part of the ECG corresponds to ventricular repolarization?",
    options: ["P wave", "QRS complex", "T wave", "U wave"],
    answer: "T wave",
  },
  {
    question:
      "The hormone renin indirectly increases blood pressure by activating:",
    options: [
      "Insulin secretion",
      "Renin–angiotensin–aldosterone system (RAAS)",
      "Sympathetic nerves directly",
      "ADH breakdown",
    ],
    answer: "Renin–angiotensin–aldosterone system (RAAS)",
  },
  {
    question:
      "Which circulation delivers blood to the lungs for oxygen exchange?",
    options: ["Pulmonary", "Coronary", "Cerebral", "Systemic"],
    answer: "Pulmonary",
  },
  {
    question: "Which fetal shunt connects the pulmonary artery to the aorta?",
    options: [
      "Foramen ovale",
      "Ductus venosus",
      "Ductus arteriosus",
      "Sinus venosus",
    ],
    answer: "Ductus arteriosus",
  },
  {
    question: "The circle of Willis is located at:",
    options: [
      "Apex of the lung",
      "Base of the brain",
      "Root of the heart",
      "Spinal cord",
    ],
    answer: "Base of the brain",
  },
  {
    question: "Autoregulation of cerebral blood flow ensures:",
    options: [
      "Constant flow despite changes in systemic BP",
      "Maximum flow during systole",
      "Blood diversion to muscles during exercise",
      "Lowered intracranial pressure",
    ],
    answer: "Constant flow despite changes in systemic BP",
  },
  {
    question:
      "Which branch of the autonomic nervous system increases heart rate?",
    options: ["Sympathetic", "Parasympathetic", "Somatic", "Enteric"],
    answer: "Sympathetic",
  },
  {
    question:
      "Hypertension is defined clinically as a blood pressure consistently above:",
    options: ["110/70 mmHg", "120/80 mmHg", "130/80 mmHg", "150/100 mmHg"],
    answer: "130/80 mmHg",
  },
  {
    question:
      "Which vessels serve as the primary site for exchange of gases and nutrients?",
    options: ["Arteries", "Veins", "Capillaries", "Arterioles"],
    answer: "Capillaries",
  },
  {
    question: "Which fetal shunt allows blood to bypass the liver?",
    options: [
      "Foramen ovale",
      "Ductus arteriosus",
      "Ductus venosus",
      "Ligamentum arteriosum",
    ],
    answer: "Ductus venosus",
  },
  {
    question:
      "Which phase of the cardiac cycle is characterized by atrial contraction pushing blood into ventricles?",
    options: [
      "Ventricular systole",
      "Atrial systole",
      "Isovolumetric relaxation",
      "Early diastole",
    ],
    answer: "Atrial systole",
  },
  {
    question: "Which type of blood flow is most efficient in healthy vessels?",
    options: ["Turbulent flow", "Laminar flow", "Spiral flow", "Reverse flow"],
    answer: "Laminar flow",
  },
  {
    question: "The SA node normally sets the pace of the heart at:",
    options: ["20–40 bpm", "40–60 bpm", "60–100 bpm", "120–150 bpm"],
    answer: "60–100 bpm",
  },
  {
    question: "Which component of an ECG represents atrial depolarization?",
    options: ["P wave", "QRS complex", "T wave", "PR interval"],
    answer: "P wave",
  },
  {
    question:
      "Which ventricle generates higher pressure due to systemic circulation demands?",
    options: ["Right ventricle", "Left ventricle", "Both equally", "Neither"],
    answer: "Left ventricle",
  },
  {
    question:
      "Which hormone reduces blood pressure by causing vasodilation and sodium excretion?",
    options: [
      "Aldosterone",
      "Angiotensin II",
      "Atrial natriuretic peptide (ANP)",
      "Cortisol",
    ],
    answer: "Atrial natriuretic peptide (ANP)",
  },
  {
    question: "Which factor primarily determines blood viscosity?",
    options: [
      "Plasma proteins",
      "Hematocrit",
      "Capillary density",
      "Stroke volume",
    ],
    answer: "Hematocrit",
  },
];

export const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
  const [score, setScore] = useState(0);
  const [showFinalScore, setShowFinalScore] = useState(false);
  const [randomizedQuestions, setRandomizedQuestions] = useState([]);

  // Function to shuffle array (Fisher-Yates algorithm)
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Function to randomize options positions for all questions
  const randomizeQuestions = () => {
    const shuffledQuestions = questions.map((question) => {
      // Create pairs of options with their original index to track correct answer
      const optionPairs = question.options.map((option) => ({
        option,
        isCorrect: option === question.answer,
      }));

      // Shuffle the options
      const shuffledOptions = shuffleArray(optionPairs);

      // Extract just the option text for display
      const newOptions = shuffledOptions.map((pair) => pair.option);

      // Find the new correct answer position
      const correctAnswer = shuffledOptions.find(
        (pair) => pair.isCorrect
      ).option;

      return {
        ...question,
        options: newOptions,
        answer: correctAnswer,
      };
    });

    setRandomizedQuestions(shuffledQuestions);
  };

  // Initialize randomized questions on first render and when reset
  useEffect(() => {
    randomizeQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handler for selecting an answer
  const handleAnswerSelect = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < randomizedQuestions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowFinalScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(1);
    setScore(0);
    setShowFinalScore(false);
    randomizeQuestions(); // Randomize questions again on reset
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
              Question {currentQuestionIndex} of {randomizedQuestions.length}
            </p>
          </div>

          {showFinalScore ? (
            <>
              <div className="final-score">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-500">
                  Total Score: {score} / {randomizedQuestions.length}
                </h2>
                <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-500">
                  {score <= 15
                    ? "uh-oh you had a very low score 😱"
                    : score >= 16 && score <= 24
                    ? "Well done! You scored above average 😁"
                    : score >= 25
                    ? "Congratulations, you aced this test! 🎉"
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
              {randomizedQuestions.length > 0 && (
                <QuizQuestion
                  question={randomizedQuestions[currentQuestionIndex]}
                  onAnswerSelect={handleAnswerSelect}
                />
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
