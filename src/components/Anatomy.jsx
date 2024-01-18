import React from "react";
import { Navbar } from "./Navbar";
import Footer from "./Footer";

export const Anatomy = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center flex-col">
        <div className="w-full h-[40vh] md:h-[60vh] bg-[url('https://res.cloudinary.com/ddbtxfsfk/image/upload/f_auto,q_auto/um34zklhz3wb44mxgeym')] bg-cover bg-center flex-nowrap">
          <div className="w-full h-full flex justify-center items-center backdrop-brightness-50">
            <span className="text-white md:text-7xl text-3xl font-bold w-1/2 -mx-4">
              Heart Anatomy
            </span>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-left text-xl font-bold my-4">
          Human Heart Anatomy: <em>A Pinnacle of Biological complexity</em>{" "}
        </h3>
        <p className="text-justify">
          Human heart anatomy refers to the detailed study and understanding of
          the structure, organization, and components of the human heart,
          including its chambers, valves, blood vessels, and the intricate
          physiological features that contribute to its function within the
          circulatory system.
        </p>
        <div className="py-3 flex items-center justify-center">
          <img
            // src="https://res.cloudinary.com/ddbtxfsfk/image/upload/f_auto,q_auto/clqnxi2dfulc0gsydtyp"
            //https://upload.wikimedia.org/wikipedia/commons/e/e0/Heart_diagram-en.svg
            src="https://res.cloudinary.com/ddbtxfsfk/image/upload/f_auto,q_auto/i90lqhpycqwzn51jlzol"
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
            blood into circulation. Valves, strategically positioned within the
            heart, ensure the unidirectional flow of blood, preventing backflow
            and optimizing the efficiency of the circulatory system.
          </li>
          <li className="py-1">
            <strong>Blood Vessel Network:</strong> Integral to heart anatomy is
            the extensive network of blood vessels—arteries, veins, and
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
            while diastole, the relaxation phase, facilitates chamber refilling.
            This orchestrated dance of contractions and relaxations ensures the
            continuous and efficient circulation of blood, sustaining life.
          </li>
          <div className="py-3 flex items-center justify-center">
            <img
              // src="https://res.cloudinary.com/ddbtxfsfk/image/upload/f_auto,q_auto/clqnxi2dfulc0gsydtyp"
              src="https://res.cloudinary.com/ddbtxfsfk/image/upload/f_auto,q_auto/eagqdyh05yverpj9ecrw"
              className="rounded-lg shadow-lg"
            />
          </div>
          <li className="py-1">
            <strong>Electrical Conduction System:</strong>At the heart of heart
            anatomy is the electrical conduction system, orchestrating the
            synchronized beats that drive circulation. The sinoatrial (SA) node
            initiates electrical impulses, triggering atrial contractions.
            Subsequently, the atrioventricular (AV) node conducts signals,
            leading to ventricular contractions. This precisely coordinated
            electrical communication underlies the rhythmic heartbeat essential
            for the heart's pumping function.
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
          <div className="py-3 flex items-center justify-center">
            <img
              // src="https://res.cloudinary.com/ddbtxfsfk/image/upload/f_auto,q_auto/clqnxi2dfulc0gsydtyp"
              //https://res.cloudinary.com/ddbtxfsfk/image/upload/f_auto,q_auto/eagqdyh05yverpj9ecrw
              src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Heart_diagram-en.svg"
              className="rounded-lg shadow-lg"
            />
          </div>
          <br /> <br />
          In essence, human heart anatomy represents the pinnacle of biological
          complexity. Its multifaceted structure and dynamic functionality
          showcase nature's ingenuity in sustaining life through the
          orchestrated rhythm of the heart's beats. Delving into the meaning of
          human heart anatomy unravels the mysteries of an organ that serves as
          both the physical and metaphorical center of life.
        </ol>
      </div>
      <Footer />
    </div>
  );
};
