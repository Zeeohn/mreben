import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";

function Footer() {
  const iconsTab = [
    { icon: <FaFacebookF /> },
    { icon: <AiOutlineTwitter /> },
    { icon: <AiFillYoutube /> },
    { icon: <BiLogoPinterestAlt /> },
  ];
  return (
    <>
      <footer className="bg-gray-100 mt-10 px-4 rounded-xl">
        <div className="container mx-auto  py-5">
          {/* footer div all */}
          <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
            {/* logo side */}
            <div className="flex flex-col w-full md:w-1/2 md:p-0 py-4 gap-8">
              <a href="/" className="">
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-500  inline-flex items-center">
                  BeeNCardiac
                  <span className="rounded-full">
                    <img
                      src="https://res.cloudinary.com/ddbtxfsfk/image/upload/f_auto,q_auto/fjgmherhc7j4vwy0qags"
                      className="w-16 h-7"
                    />
                  </span>
                </h2>
              </a>
              <p className="text-[15px] font-medium text-justify text-[#646464]">
                Embark on your journey to master human heart anatomy and
                physiology. Start exploring the wonders of the cardiovascular
                system with{" "}
                <strong>
                  <em>BeeNCardiac: Heart Anatomy and Physiology</em>
                </strong>{" "}
                today!
              </p>
              {/* socials */}
              <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start">
                {iconsTab.map(({ icon }, index) => {
                  return (
                    <div
                      key={index}
                      className="text-2xl bg-[#efefef] p-2 rounded-full 
                      bg-gradient-to-r hover:from-purple-400 hover:via-blue-500 hover:to-indigo-500 hover:text-white"
                      style={{ transition: "all 0.3s" }}
                    >
                      {icon}
                    </div>
                  );
                })}
              </div>
              <p className="text-[16px] font-medium text-[#646464]">
                © {new Date().getFullYear()} <br /> Developed with &#10084; by{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://wa.me/message/ACG6T4NMBL2EE1"
                  className="text-green-600 underline"
                >
                  BeeN Cardiac Resource Center
                </a>
              </p>
            </div>

            {/* middle div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">Quick Links</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-500 "></span>

              <a href="/about">
                <p className="text-[16px] hover:text-indigo-600 cursor-pointer text-[#646464] font-medium hover:font-bold">
                  About Us
                </p>
              </a>
              <a href="/heartAnatomy">
                <p className="text-[16px] hover:text-indigo-600 cursor-pointer text-[#646464] font-medium hover:font-bold">
                  Cardiovascular Anatomy
                </p>
              </a>
              <a href="/heartPhysiology">
                <p className="text-[16px] hover:text-indigo-600 cursor-pointer text-[#646464] font-medium hover:font-bold">
                  Cardiovascular Physiology
                </p>
              </a>
              <a href="/labs">
                <p className="text-[16px] hover:text-indigo-600 cursor-pointer text-[#646464] font-medium hover:font-bold">
                  Gallery
                </p>
              </a>
              <a href="/quiz">
                <p className="text-[16px] hover:text-indigo-600 cursor-pointer text-[#646464] font-medium hover:font-bold">
                  Assessment
                </p>
              </a>
              <a href="/chatbot">
                <p className="text-[16px] hover:text-indigo-600 cursor-pointer text-[#646464] font-medium hover:font-bold">
                  Chatbot
                </p>
              </a>
            </div>
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
