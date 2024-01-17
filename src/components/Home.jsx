import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import Footer from "./Footer";

export const Home = () => {
  let navigate = useNavigate();
  let authToken = sessionStorage.getItem("Auth Token");
  useEffect(() => {
    if (authToken) {
      navigate("/");
    }

    if (!authToken) {
      navigate("/login");
    }
  }, [authToken]);
  return (
    <div>
      <Navbar />
      <Hero
        content="The human heart, a conical, hollow, and muscular organ, constitutes a vital component of the circulatory system, ceaselessly functioning throughout an individual's lifetime. Roughly equivalent in size to a clenched fist and weighing approximately 300 grams, the heart resides within the chest, positioned behind the breastbone and nestled between the two lungs. "
        category="ANATOMY AND PHYSIOLOGY OF"
        title="THE HUMAN HEART"
        url="#heartAnatomy"
        videoSrc="https://res.cloudinary.com/ddbtxfsfk/video/upload/f_auto:video,q_auto/pivmutxqanujbx4kr4xp"
      />
      <div
        id="about"
        className="flex flex-col rounded-lg md:flex-row w-full h-screen bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-500 my-24"
      >
        <div className="w-full md:w-1/2 p-0 md:p-8 flex items-center justify-center ">
          <img
            src="https://res.cloudinary.com/ddbtxfsfk/image/upload/f_auto,q_auto/fjgmherhc7j4vwy0qags"
            alt="About Us"
            className="w-full h-auto object-cover rounded-tr-full rounded-bl-ful"
          />
        </div>

        <div className="w-full md:w-1/2 p-4 md:p-8 bg-gray-100 flex items-center justify-center rounded-r-lg">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-500 mb-4">
              About Us
            </h2>
            <p className="text-lg md:text-xl text-justify text-gray-700 mb-8">
              <strong>
                <em>BeeNCardiac: Heart Anatomy and Physiology</em>
              </strong>{" "}
              is committed to revolutionizing medical education through
              technology. Our team of experts and educators collaborates to
              bring you an advanced, interactive, and personalized learning
              experience
              <br />
              <br />
              Embark on your journey to master human heart anatomy and
              physiology. Start exploring the wonders of the cardiovascular
              system with{" "}
              <strong>
                <em>BeeNCardiac: Heart Anatomy and Physiology</em>
              </strong>{" "}
              today!
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5" id="heartAnatomy">
        <div className="mt-5">
          <h1 className="font-bold text-3xl text-left nt-5 mb-4">
            Human Heart
          </h1>
          <p className="text-justify">
            The heart is encased in a resilient, dual-layered membranous
            structure known as the pericardium, the heart benefits from a
            fluid-filled space, minimizing friction during its rhythmic pumping
            actions. <br /> At rest, the average human heart exhibits a
            consistent cadence, contracting and relaxing around 70 times per
            minute, facilitating the remarkable feat of pumping approximately
            14,000 liters of blood daily. This rate escalates during periods of
            activity, surpassing 100 beats per minute, thereby ensuring an
            increased supply of oxygen and nutrients to meet the heightened
            demands of the body's cells.
          </p>
          <h2 className="font-bold my-4 text-2xl text-left">
            Human Heart Anatomy and Physiology
          </h2>
          <p className="text-justify">
            Human heart anatomy and physiology collectively elucidate the
            intricate orchestration of structure and function within the
            cardiovascular system. Anatomy delves into the detailed exploration
            of the heart's four chambers, valves, and blood vessels, unveiling
            the architectural marvel that propels blood throughout the body.
            Simultaneously, physiology unravels the dynamic processes governing
            the heartbeat, blood circulation, and cellular exchange of oxygen
            and nutrients, spotlighting the physiological symphony that sustains
            life. Together, these disciplines illuminate the interplay of form
            and function, providing a holistic understanding of the heart as
            both a marvel of biological engineering and the pulsating epicenter
            of vitality within the human body.
          </p>
          <h3 className="text-left text-xl font-bold my-4">
            Human Heart Anatomy: <em>A Pinnacle of Biological complexity</em>{" "}
          </h3>
          <p className="text-justify">
            Human heart anatomy refers to the detailed study and understanding
            of the structure, organization, and components of the human heart,
            including its chambers, valves, blood vessels, and the intricate
            physiological features that contribute to its function within the
            circulatory system.
          </p>
          <div className="py-3 flex items-center justify-center">
            <img
              src="https://res.cloudinary.com/ddbtxfsfk/image/upload/f_auto,q_auto/clqnxi2dfulc0gsydtyp"
              className="rounded-lg shadow-lg"
            />
          </div>
          <ol className="list-decimal  text-justify mt-4">
            <li>
              <strong>Structural Components:</strong> Human heart anatomy is
              characterized by a four-chambered structure, each with distinct
              responsibilities. The upper chambers, or atria, act as receiving
              chambers, accepting blood returning to the heart. Contrarily, the
              lower chambers, or ventricles, serve as powerful pumps propelling
              blood into circulation. Valves, strategically positioned within
              the heart, ensure the unidirectional flow of blood, preventing
              backflow and optimizing the efficiency of the circulatory system.
            </li>
            <li className="py-1">
              <strong>Blood Vessel Network:</strong> Integral to heart anatomy
              is the extensive network of blood vessels—arteries, veins, and
              capillaries—that extends the heart's influence to every corner of
              the body. Arteries carry oxygenated blood away from the heart to
              nourish tissues, while veins return deoxygenated blood for
              replenishment. Capillaries, at the microscopic level, enable the
              exchange of nutrients and waste products, underscoring the
              interconnectedness of the circulatory system.
            </li>
            <li className="py-1">
              <strong>Cardiac Cycle Dynamics:</strong> Human heart anatomy is
              inseparable from the cardiac cycle, a rhythmic sequence of
              contractions and relaxations dictating the heart's pumping action.
              Systole, the contraction phase, propels blood into circulation,
              while diastole, the relaxation phase, facilitates chamber
              refilling. This orchestrated dance of contractions and relaxations
              ensures the continuous and efficient circulation of blood,
              sustaining life.
            </li>
            <li className="py-1">
              <strong>Electrical Conduction System:</strong>At the heart of
              heart anatomy is the electrical conduction system, orchestrating
              the synchronized beats that drive circulation. The sinoatrial (SA)
              node initiates electrical impulses, triggering atrial
              contractions. Subsequently, the atrioventricular (AV) node
              conducts signals, leading to ventricular contractions. This
              precisely coordinated electrical communication underlies the
              rhythmic heartbeat essential for the heart's pumping function.
            </li>
            <li className="py-1">
              <strong>Clinical Implications: </strong>
              Understanding human heart anatomy holds profound clinical
              significance. Healthcare professionals rely on this knowledge for
              diagnosing and treating various cardiovascular conditions. A
              comprehensive grasp of heart anatomy is indispensable for
              interpreting medical images, planning surgical interventions, and
              providing effective patient care.
            </li>
            <br /> <br />
            In essence, human heart anatomy represents the pinnacle of
            biological complexity. Its multifaceted structure and dynamic
            functionality showcase nature's ingenuity in sustaining life through
            the orchestrated rhythm of the heart's beats. Delving into the
            meaning of human heart anatomy unravels the mysteries of an organ
            that serves as both the physical and metaphorical center of life.
          </ol>
        </div>
      </div>
      <div id="heartPhysiology">
        <h3 className="text-left text-xl font-bold my-4">
          Human Heart Physiology: <em>Unveiling the Symphony of Life</em>
        </h3>
        <p className="text-justify">
          Human heart physiology delves into the dynamic and intricate processes
          governing the functioning of the human heart. It explores the
          physiological mechanisms that regulate the heartbeat, blood
          circulation, and the vital interplay of various components, unveiling
          the symphony of life orchestrated within the chambers of this
          remarkable organ.
        </p>
        <div className="py-3 flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/ddbtxfsfk/image/upload/f_auto,q_auto/zevmsmup9lh9ez0bv7iv"
            className="rounded-lg shadow-lg"
          />
        </div>
        <ol className="list-decimal  text-justify mt-4">
          <li>
            <strong>Cardiac Muscle Contraction:</strong> At the core of human
            heart physiology is the remarkable ability of cardiac muscle cells
            to contract rhythmically. This orchestrated contraction, controlled
            by the heart's intrinsic electrical conduction system, initiates the
            heartbeat. The coordinated dance of cardiac muscle fibers,
            responding to electrical signals, ensures the powerful and
            synchronized pumping action necessary for blood circulation.
          </li>
          <li className="py-1">
            <strong>Blood Circulation Dynamics:</strong> Human heart physiology
            intricately governs the circulation of blood throughout the body.
            The heart serves as a dual pump, with the right side pumping
            deoxygenated blood to the lungs for oxygenation, while the left side
            propels oxygenated blood to nourish tissues. The regulatory role of
            valves, directing the flow of blood between chambers, ensures a
            continuous and unidirectional circulation, optimizing nutrient and
            oxygen delivery to cells.
          </li>
          <li className="py-1">
            <strong>Blood Pressure Regulation:</strong> Heart physiology plays a
            pivotal role in regulating blood pressure, a key determinant of
            cardiovascular health. Contraction of the heart's ventricles
            generates the force needed to propel blood into the arteries,
            creating blood pressure. The delicate balance between systolic
            (contraction) and diastolic (relaxation) pressures is crucial for
            maintaining optimal circulation and preventing conditions like
            hypertension.
          </li>
          <li className="py-1">
            <strong>Oxygen and Nutrient Exchange:</strong>
            The physiological intricacies of the human heart extend to the
            exchange of oxygen and nutrients at the cellular level. Capillaries,
            the smallest blood vessels, facilitate this exchange in tissues,
            ensuring that cells receive the essential elements needed for energy
            production and metabolic processes. This intricate network of
            vessels underscores the intimate connection between heart physiology
            and overall cellular function.
          </li>
          <li className="py-1">
            <strong>Autonomic Nervous System Influence:</strong> Human heart
            physiology is modulated by the autonomic nervous system, which
            includes sympathetic and parasympathetic branches. Sympathetic
            stimulation accelerates heart rate and enhances cardiac output,
            preparing the body for activity. In contrast, parasympathetic
            activity slows the heart rate, promoting relaxation and conservation
            of energy. This dynamic interplay ensures that the heart responds
            appropriately to the body's physiological demands.
          </li>
          <li className="py-1">
            <strong>Clinical Relevance:</strong> Understanding human heart
            physiology is imperative in the clinical realm. Healthcare
            professionals leverage this knowledge to diagnose and manage
            cardiovascular conditions. Parameters such as heart rate, cardiac
            output, and electrocardiographic patterns serve as vital indicators
            in assessing cardiac health and guiding medical interventions.
          </li>{" "}
          <br /> <br /> In summary, human heart physiology unveils the
          intricacies of a dynamic and vital organ. From the rhythmic
          contraction of cardiac muscle to the regulation of blood circulation
          and the nuanced exchange of gases and nutrients, heart physiology
          illuminates the orchestration of life-sustaining processes within the
          chambers of this extraordinary organ.
        </ol>
      </div>
      <Footer />
    </div>
  );
};
