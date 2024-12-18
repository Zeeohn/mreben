import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [anatomyDropdown, setAnatomyDropdown] = useState(false);
  const [physiologyDropdown, setPhysiologyDropdown] = useState(false);

  // const navigate = useNavigate();

  // const handleNavigate = () => {
  //   navigate("/profile");
  // };

  // let picture = sessionStorage.getItem("picture");

  const anatomyRef = useRef(null);
  const physiologyRef = useRef(null);

  const handleClickOutside = (event) => {
    if (anatomyRef.current && !anatomyRef.current.contains(event.target)) {
      setAnatomyDropdown(false);
    }
    if (
      physiologyRef.current &&
      !physiologyRef.current.contains(event.target)
    ) {
      setPhysiologyDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full bg-black shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="/" className="">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-500  inline-flex items-center">
                BeeNCardiac
                <span className="rounded-full">
                  <img
                    src="https://res.cloudinary.com/ddbtxfsfk/image/upload/f_auto,q_auto/fjgmherhc7j4vwy0qags"
                    className="w-10 h-5"
                  />
                </span>
              </h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white hover:text-indigo-200">
                <a href="/about">About Us</a>
              </li>
              <li
                className="relative text-white hover:text-indigo-200"
                ref={anatomyRef}
              >
                {/* <a href="/heartAnatomy">Cardiovascular Anatomy</a> */}
                <button
                  onClick={() => setAnatomyDropdown(!anatomyDropdown)}
                  className="focus:outline-none focus:text-indigo-400"
                >
                  Cardiovascular Anatomy
                </button>
                {anatomyDropdown && (
                  <ul className="absolute left-0 mt-2 w-44 bg-white text-black shadow-lg rounded-md z-50 border border-black max-h-60 overflow-y-auto">
                    <li className="px-4 py-2 hover:rounded-md hover:bg-gray-200 border-b border-b-black">
                      <a href="/heartAnatomy">Heart Anatomy</a>
                    </li>
                    <li className="px-4 py-2 hover:rounded-md hover:bg-gray-200 border-b border-b-black">
                      <a href="/heartAnatomy#statement">
                        Statement of objectives
                      </a>
                    </li>
                    <li className="px-4 py-2 hover:rounded-md hover:bg-gray-200 border-b border-b-black">
                      <a href="/heartAnatomy#mediastinum">
                        Gross Anatomy of the Mediastinum
                      </a>
                    </li>
                    <li className="px-4 py-2 hover:rounded-md hover:bg-gray-200 border-b border-b-black">
                      <a href="/heartAnatomy#pericardium">
                        Pericardium and Pericardial Sinuses
                      </a>
                    </li>
                    <li className="px-4 py-2 hover:rounded-md hover:bg-gray-200 border-b border-b-black">
                      <a href="/heartAnatomy#greatVessel">
                        Features of the Heart and Great Vessels
                      </a>
                    </li>
                    <li className="px-4 py-2 hover:rounded-md hover:bg-gray-200 border-b border-b-black">
                      <a href="/heartAnatomy#surface">
                        Surface Anatomy of the Heart and Heart Valves
                      </a>
                    </li>
                    <li className="px-4 py-2 hover:rounded-md hover:bg-gray-200 border-b border-b-black">
                      <a href="/heartAnatomy#bloodSupply">
                        Blood Supply of the Heart
                      </a>
                    </li>
                    <li className="px-4 py-2 hover:rounded-md hover:bg-gray-200 border-b border-b-black">
                      <a href="/heartAnatomy#azygos">
                        Azygos System and Lymphatic Drainage of the Heart
                      </a>
                    </li>
                    <li className="px-4 py-2 hover:rounded-md hover:bg-gray-200 border-b border-b-black">
                      <a href="/heartAnatomy#autonomic">
                        Autonomic Nervous Supply to the Heart
                      </a>
                    </li>
                    <li className="px-4 py-2 hover:rounded-md hover:bg-gray-200 border-b border-b-black">
                      <a href="/heartAnatomy#microscopic">
                        Microscopic Anatomy of the Heart
                      </a>
                    </li>
                    <li className="px-4 py-2 hover:rounded-md hover:bg-gray-200 border-b border-b-black">
                      <a href="/heartAnatomy#anomalies">
                        Developmental Anatomy and Congenital Anomalies of the
                        Heart and Vascular Channels
                      </a>
                    </li>
                    <li className="px-4 py-2 hover:rounded-md hover:bg-gray-200 border-b border-b-black">
                      <a href="/heartAnatomy#dissection">
                        Dissection of the Thorax: Focus on Cardiovascular
                        Anatomy
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li
                className="relative text-white hover:text-indigo-200"
                ref={physiologyRef}
              >
                {/* <a href="/heartAnatomy">Cardiovascular Anatomy</a> */}
                <button
                  onClick={() => setPhysiologyDropdown(!physiologyDropdown)}
                  className="focus:outline-none focus:text-indigo-400"
                >
                  Cardiovascular Physiology
                </button>
                {physiologyDropdown && (
                  <ul className="absolute left-0 mt-2 w-44 bg-white text-black shadow-lg rounded-md z-50 border border-black max-h-60 overflow-y-auto">
                    <li className="px-4 py-2 hover:rounded-md hover:bg-gray-200 border-b border-b-black">
                      <a href="/heartPhysiology">Heart Physiology</a>
                    </li>
                    <li className="px-4 py-2 hover:rounded-md hover:bg-gray-200 border-b border-b-black">
                      <a href="/heartPhysiology#statement">
                        Statement of objectives
                      </a>
                    </li>
                    <li className="px-4 py-2 hover:rounded-md hover:bg-gray-200 border-b border-b-black">
                      <a href="/heartPhysiology#cardioSystem">
                        Introduction to the Cardiovascular System
                      </a>
                    </li>
                    <li className="px-4 py-2 hover:rounded-md hover:bg-gray-200 border-b border-b-black">
                      <a href="/heartPhysiology#cardiacycle">Cardiac Cycle</a>
                    </li>
                    <li className="px-4 py-2 hover:rounded-md hover:bg-gray-200 border-b border-b-black">
                      <a href="/heartPhysiology#haemodynamics">Haemodynamics</a>
                    </li>
                    <li className="px-4 py-2 hover:rounded-md hover:bg-gray-200 border-b border-b-black">
                      <a href="/heartPhysiology#electricHeart">
                        Electrical Activities of the Heart
                      </a>
                    </li>
                    <li className="px-4 py-2 hover:rounded-md hover:bg-gray-200 border-b border-b-black">
                      <a href="/heartPhysiology#heartRate">Heart Rate</a>
                    </li>
                    <li className="px-4 py-2 hover:rounded-md hover:bg-gray-200 border-b border-b-black">
                      <a href="/heartPhysiology#bloodPressure">
                        Blood Pressure
                      </a>
                    </li>
                    <li className="px-4 py-2 hover:rounded-md hover:bg-gray-200 border-b border-b-black">
                      <a href="/heartPhysiology#hypertension">Hypertension</a>
                    </li>
                    {/* <li className="px-4 py-2 hover:rounded-md hover:bg-gray-200 border-b border-b-black">
                      <a href="/heartPhysiology#microscopic">
                        Microscopic Anatomy of the Heart
                      </a>
                    </li> */}
                    <li className="px-4 py-2 hover:rounded-md hover:bg-gray-200 border-b border-b-black">
                      <a href="/heartPhysiology#coronary">
                        Coronary and Pulmonary Circulation
                      </a>
                    </li>
                    <li className="px-4 py-2 hover:rounded-md hover:bg-gray-200 border-b border-b-black">
                      <a href="/heartPhysiology#fetal">Fetal Circulation</a>
                    </li>
                    <li className="px-4 py-2 hover:rounded-md hover:bg-gray-200 border-b border-b-black">
                      <a href="/heartPhysiology#cerebralCirculation">
                        Cerebral Circulation
                      </a>
                    </li>
                    <li className="px-4 py-2 hover:rounded-md hover:bg-gray-200 border-b border-b-black">
                      <a href="/heartPhysiology#cardioFunctions">
                        Integration of Cardiovascular System Functions
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li className="text-white hover:text-indigo-200">
                <a href="/labs">Gallery</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a href="/quiz">Assessment</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a href="/chatbot">Chatbot</a>
              </li>
            </ul>

            {/* <div className="mt-3 space-y-2 lg:hidden md:inline-block">
              <button
                onClick={handleNavigate}
                className="w-13 h-13 rounded-full border-4 border-indigo-900 bg-white mt-4 items-center"
              >
                {picture ? (
                  <img src={picture} className="w-12 h-12 rounded-full" />
                ) : (
                  <img
                    src="https://res.cloudinary.com/ddbtxfsfk/image/upload/v1677178789/user-image-with-black-background_oslni5.png"
                    className="w-12 h-12 -top-1 relative"
                  />
                )}
              </button>
            </div> */}
          </div>
        </div>
        {/* <div className="hidden space-x-2 md:inline-block">
          <button
            onClick={handleNavigate}
            className="w-11 h-11 rounded-full border-4 border-indigo-900 bg-white mt-4"
          >
            {picture ? (
              <img src={picture} className="w-10 h-9 rounded-full" />
            ) : (
              <img
                src="https://res.cloudinary.com/ddbtxfsfk/image/upload/v1677178789/user-image-with-black-background_oslni5.png"
                className="w-10 h-10 -top-1 relative"
              />
            )}
          </button>
        </div> */}
      </div>
    </nav>
  );
};
