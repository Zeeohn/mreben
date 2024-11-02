import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import Footer from "./Footer";

export const Anatomy = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center flex-col">
        <div className="w-full h-[40vh] md:h-[60vh] bg-[url('https://res.cloudinary.com/ddbtxfsfk/image/upload/f_auto,q_auto/um34zklhz3wb44mxgeym')] bg-cover bg-center flex-nowrap">
          <div className="w-full h-full flex justify-center items-center backdrop-brightness-50">
            <span className="text-white md:text-7xl text-3xl font-bold w-1/2 -mx-4">
              Cardiovascular Anatomy
            </span>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-left text-xl font-bold my-4" id="statement">
          Statement of Objectives
        </h3>
        <p className="text-justify">
          The objective of this study is to provide a comprehensive exploration
          of cardiovascular anatomy, which includes the gross anatomy of the
          mediastinum, the pericardium and pericardial sinuses, the external and
          internal features of the heart and great vessels, the surface anatomy
          of the heart and heart valves, the blood supply to the heart, the
          azygos system and lymphatic drainage of the heart, the autonomic
          nervous supply, the microscopic anatomy of the heart, developmental
          anatomy, congenital anomalies of the heart and vascular channels, and
          the dissection of the thorax.
        </p>
        <div className="py-3 flex items-center justify-center">
          <img
            // src="https://res.cloudinary.com/ddbtxfsfk/image/upload/f_auto,q_auto/clqnxi2dfulc0gsydtyp"
            //https://upload.wikimedia.org/wikipedia/commons/e/e0/Heart_diagram-en.svg
            src="https://res.cloudinary.com/ddbtxfsfk/image/upload/f_auto,q_auto/i90lqhpycqwzn51jlzol"
            className="rounded-lg shadow-lg"
          />
        </div>
        <h3 className="text-left text-xl font-bold my-4" id="mediastinum">
          Gross Anatomy of the Mediastinum
        </h3>
        <p className="text-justify">
          The mediastinum is a central anatomical compartment located in the
          thoracic cavity, serving as a critical region for the structures of
          the cardiovascular system. It is situated between the two pleural
          cavities and extends from the sternum in the front to the thoracic
          vertebrae in the back, and from the diaphragm below to the thoracic
          inlet above. The mediastinum contains vital cardiovascular structures,
          including the heart, major blood vessels, and associated connective
          tissues, which play a crucial role in the circulatory system.
          <br />
          <br />
          The mediastinum is commonly divided into four regions: anterior,
          middle, posterior, and superior mediastinum. The middle mediastinum is
          of particular significance to cardiovascular anatomy, as it houses the
          heart within the pericardial sac. The heart is a muscular organ that
          pumps blood throughout the body, and its position in the mediastinum
          allows it to efficiently receive blood from the systemic circulation
          via the superior and inferior venae cavae and to distribute blood to
          the lungs and the rest of the body through the pulmonary arteries and
          the aorta.
          <br />
          <br />
          Within the middle mediastinum, the pericardium serves as a protective
          sac for the heart, consisting of two layers: the fibrous pericardium
          and the serous pericardium. The serous layer further divides into
          visceral and parietal layers, creating a space that contains
          pericardial fluid, which reduces friction during heartbeats. The
          proximity of the heart to major blood vessels, including the ascending
          aorta, pulmonary trunk, and pulmonary veins, is critical for efficient
          blood flow. The ascending aorta branches into the right and left
          coronary arteries, which supply blood to the heart muscle itself.
          <br />
          <br />
          The superior mediastinum contains the great vessels, which are
          essential components of the cardiovascular system. The aortic arch
          emerges from the heart and gives rise to major arteries, including the
          brachiocephalic trunk, left common carotid artery, and left subclavian
          artery. These vessels are responsible for supplying oxygenated blood
          to the head, neck, and upper limbs. The superior vena cava, which
          drains deoxygenated blood from the upper body back to the heart, also
          traverses this region, underscoring the mediastinum's importance in
          facilitating blood circulation.
          <br />
          <br />
          In the posterior mediastinum, the descending aorta continues its
          course, providing blood supply to the thoracic wall and the abdominal
          organs via its various branches. The thoracic aorta also plays a role
          in supplying oxygenated blood to the esophagus, bronchi, and other
          structures in the thoracic cavity. Additionally, the thoracic duct,
          which is the main lymphatic vessel, runs alongside the aorta,
          emphasizing the interconnectedness of the cardiovascular and lymphatic
          systems within the mediastinum.
          <br />
          <br />
          Understanding the gross anatomy of the mediastinum is essential in
          clinical practice, especially in diagnosing cardiovascular diseases
          and planning surgical interventions. Conditions such as aortic
          aneurysms, pericardial effusions, or mediastinal tumors can
          significantly impact cardiovascular function and require thorough
          anatomical knowledge for effective management. Imaging techniques,
          such as chest X-rays and CT scans, are often employed to visualize
          these structures, aiding in the assessment of various cardiovascular
          conditions.
          <br />
          <br />
          In conclusion, the gross anatomy of the mediastinum is crucial for
          understanding the cardiovascular system's organization and function.
          It provides a framework for the heart's placement, the major blood
          vessels' pathways, and their relationships with surrounding
          structures. A comprehensive grasp of mediastinal anatomy is vital for
          healthcare professionals in diagnosing and treating cardiovascular
          diseases, ultimately contributing to improved patient care and
          outcomes.
          <br />
          <br />
        </p>
        <h3 className="text-left text-xl font-bold my-4" id="pericardium">
          Pericardium and Pericardial Sinuses
        </h3>
        <p className="text-justify">
          The pericardium is a vital anatomical structure surrounding the heart,
          composed of two main layers: the fibrous pericardium and the serous
          pericardium. The fibrous pericardium is the outermost layer, made of
          dense connective tissue that provides mechanical support and protects
          the heart from overdistension during vigorous contractions. It anchors
          the heart to surrounding structures, such as the diaphragm and great
          vessels, preventing excessive movement within the thoracic cavity.
          This protective layer is particularly important during physical
          activity, as it helps maintain the heart’s position and function under
          varying physiological conditions.
          <br />
          <br />
          The serous pericardium is divided into two layers: the parietal layer,
          which lines the fibrous pericardium, and the visceral layer (also
          known as the epicardium), which closely adheres to the surface of the
          heart. Between these two layers lies the pericardial cavity, a
          potential space filled with a small volume of pericardial fluid. This
          fluid, produced by the serous pericardium, serves multiple purposes.
          It acts as a lubricant, reducing friction between the heart and
          surrounding tissues during the cardiac cycle, thereby allowing for
          smooth heart movements. Additionally, this fluid plays a role in
          providing a cushioning effect, protecting the heart from mechanical
          injury during physical impact.
          <br />
          <br />
          Within the pericardial cavity, there are specialized recesses known as
          pericardial sinuses, which are formed by the reflection of the serous
          pericardium around the heart and great vessels. The two primary
          sinuses are the transverse pericardial sinus and the oblique
          pericardial sinus. The transverse pericardial sinus is located behind
          the ascending aorta and the pulmonary trunk and in front of the
          superior vena cava. Clinically, this sinus is significant because it
          provides access to the great vessels, which can be critical during
          surgical procedures, such as coronary artery bypass grafting. Surgeons
          can use this access to clamp the aorta without directly manipulating
          the heart, facilitating safer surgical interventions.
          <br />
          <br />
          In contrast, the oblique pericardial sinus is situated posterior to
          the heart, formed by the reflection of the serous pericardium around
          the pulmonary veins and inferior vena cava. This sinus resembles a
          cul-de-sac and is less frequently accessed than the transverse sinus.
          Despite its relative obscurity, the oblique pericardial sinus is
          clinically important because it can serve as a site for fluid
          accumulation. In cases of pericardial effusion, where excess fluid
          builds up in the pericardial cavity, the oblique sinus can become
          distended, leading to potential complications such as cardiac
          tamponade, a life-threatening condition where the pressure from the
          fluid restricts the heart's ability to pump effectively.
          <br />
          <br />
          Pathologies affecting the pericardium can significantly impact
          cardiovascular health. Pericarditis, which is the inflammation of the
          pericardium, can arise from infections, autoimmune diseases, or
          post-surgical complications. This condition often presents with chest
          pain that can mimic cardiac ischemia. In severe cases, inflammation
          can lead to fluid accumulation (pericardial effusion), resulting in
          symptoms such as shortness of breath and muffled heart sounds. If the
          fluid accumulation becomes excessive, it can result in cardiac
          tamponade, which requires urgent medical intervention, often through a
          procedure known as pericardiocentesis to remove the fluid and relieve
          pressure on the heart.
          <br />
          <br />
          In conclusion, the pericardium and its associated sinuses are critical
          components of cardiovascular anatomy, providing essential protection
          and support for the heart. Understanding the structure and function of
          the pericardium is crucial for healthcare professionals, particularly
          in the diagnosis and management of various cardiovascular diseases. A
          thorough grasp of the pericardial anatomy enhances clinical practice,
          informing surgical approaches and improving patient outcomes in
          cardiology and related fields.
        </p>
        <h3 className="text-left text-xl font-bold my-4" id="greatVessel">
          External and Internal Features of the Heart and Great Vessels
        </h3>
        <p className="text-justify">
          The heart is a muscular organ located in the thoracic cavity,
          primarily within the mediastinum. It is approximately the size of a
          fist and is shaped somewhat like an inverted cone, with its apex
          pointing to the left and resting on the diaphragm. Externally, the
          heart is covered by the pericardium, which consists of an outer
          fibrous layer and an inner serous layer. The outer fibrous pericardium
          provides structural support and protection, while the inner serous
          layer contains the pericardial fluid that facilitates smooth movement
          during cardiac cycles. The heart is positioned between the lungs, with
          its base oriented superiorly and its apex directed inferiorly,
          allowing for effective blood circulation throughout the body.
          <br />
          <br />
          The external surface of the heart is marked by grooves known as sulci,
          which indicate the boundaries between the heart's chambers. The
          coronary sulcus, also known as the atrioventricular sulcus, encircles
          the heart and separates the atria from the ventricles. Additionally,
          the anterior interventricular sulcus and posterior interventricular
          sulcus separate the left and right ventricles. These sulci house the
          coronary blood vessels that supply the heart muscle, emphasizing the
          importance of a well-vascularized surface for optimal cardiac
          function. The heart's outer appearance is further characterized by its
          distinct chambers: the right and left atria at the top, which receive
          blood, and the right and left ventricles at the bottom, which pump
          blood out of the heart.
          <br />
          <br />
          Internally, the heart is divided into four chambers: the right atrium,
          right ventricle, left atrium, and left ventricle. The right atrium
          receives deoxygenated blood from the body via the superior vena cava
          and inferior vena cava. Blood then flows into the right ventricle,
          which pumps it through the pulmonary valve into the pulmonary arteries
          leading to the lungs for oxygenation. The left atrium receives
          oxygen-rich blood from the lungs via the pulmonary veins and directs
          it into the left ventricle. The left ventricle, the most muscular
          chamber, then pumps oxygenated blood into the aorta, the body’s
          largest artery, supplying systemic circulation.
          <br />
          <br />
          The great vessels associated with the heart include the aorta,
          superior and inferior vena cavae, pulmonary arteries, and pulmonary
          veins. The aorta arises from the left ventricle and arches over the
          heart, giving rise to major branches that supply blood to the head,
          neck, arms, and trunk. The superior vena cava collects deoxygenated
          blood from the upper body, while the inferior vena cava drains blood
          from the lower body. The pulmonary arteries, which stem from the right
          ventricle, transport deoxygenated blood to the lungs, where carbon
          dioxide is exchanged for oxygen. Conversely, the pulmonary veins
          return oxygen-rich blood from the lungs to the left atrium, completing
          the circuit of blood flow through the heart.
          <br />
          <br />
          Internally, each chamber of the heart has distinct features. The atria
          are separated from the ventricles by the atrioventricular valves—the
          tricuspid valve on the right and the mitral valve (or bicuspid valve)
          on the left. These valves ensure unidirectional blood flow from the
          atria to the ventricles. The ventricles are equipped with trabeculae
          carneae, muscular ridges that enhance contraction, and papillary
          muscles attached to chordae tendineae, which prevent valve prolapse
          during ventricular contraction. The left ventricle is thicker than the
          right due to the higher pressure required to pump blood throughout the
          systemic circulation.
          <br />
          <br />
          The heart's electrical conduction system, consisting of the sinoatrial
          (SA) node, atrioventricular (AV) node, bundle of His, and Purkinje
          fibers, coordinates the heart's contractions. The SA node, located in
          the right atrium, acts as the natural pacemaker, generating electrical
          impulses that initiate each heartbeat. These impulses travel through
          the atria, causing them to contract, and then reach the AV node, where
          there is a slight delay before the signal continues into the
          ventricles. This organized conduction pathway ensures efficient blood
          flow through the heart and maintains an effective heartbeat rhythm.
          <br />
          <br />
          In conclusion, the external and internal features of the heart and
          great vessels are intricately designed to facilitate efficient blood
          circulation throughout the body. The heart's structural
          characteristics, combined with the functional roles of the great
          vessels, underscore its significance in maintaining cardiovascular
          health. Understanding these anatomical features is crucial for
          healthcare professionals in diagnosing and treating various cardiac
          conditions, ensuring effective management and improved patient
          outcomes.
        </p>
        <div className="py-3 flex items-center justify-center">
          <img
            // src="https://res.cloudinary.com/ddbtxfsfk/image/upload/f_auto,q_auto/clqnxi2dfulc0gsydtyp"
            src="https://res.cloudinary.com/ddbtxfsfk/image/upload/f_auto,q_auto/eagqdyh05yverpj9ecrw"
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
          <li className="py-1" id="blood">
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
