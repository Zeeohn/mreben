import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import Footer from "./Footer";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center">
        <Hero
          content="The human heart, a conical, hollow, and muscular organ, constitutes a vital component of the circulatory system, ceaselessly functioning throughout an individual's lifetime. Roughly equivalent in size to a clenched fist and weighing approximately 300 grams, the heart resides within the chest, positioned behind the breastbone and nestled between the two lungs. "
          category="ANATOMY AND PHYSIOLOGY OF"
          title="THE HUMAN HEART"
          url="/heartAnatomy"
          videoSrc="https://res.cloudinary.com/ddbtxfsfk/video/upload/f_auto:video,q_auto/pivmutxqanujbx4kr4xp"
        />
      </div>

      {/* <div
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
      </div> */}
      <div className="mt-5" id="heartAnatomy">
        <div className="mt-5">
          <h1 className="font-bold text-3xl text-left nt-5 mb-4">
            Human Heart
          </h1>
          <p className="text-justify font-medium text-xl">
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
          <h2 className="font-bold my-4 text-3xl text-left">
            Human Heart Anatomy and Physiology
          </h2>
          <p className="text-justify font-medium text-xl">
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
        </div>
        <div className="md:flex md:mt-10 md:flex-row items-center justify-center gap-2">
          <div className="mt-8 md:mt-0 md:flex md:justify-center">
            <a
              href="/heartAnatomy"
              className="text-xl font-medium text-white transition-colors duration-200 hover:text-green-400 hover:underline xl:text-2xl px-4 py-3 rounded-lg bg-black flex items-center md:justify-center"
            >
              Learn more about the Heart Anatomy
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 inline-flex h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:flex md:justify-center">
            <a
              href="/heartPhysiology"
              className="text-xl font-medium text-white transition-colors duration-200 hover:text-green-400 hover:underline xl:text-2xl px-4 py-3 rounded-lg bg-black flex items-center md:justify-center"
            >
              Learn more about the Heart Physiology
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 inline-flex h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
        <h1 className="font-bold text-3xl mt-10">Heart Images</h1>
        <div className="p-5 sm:p-8">
          <div className="columns-1 gap-5 sm:columns-2 sm:gap-2 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
            <video autoPlay muted loop>
              <source
                src="https://res.cloudinary.com/ddbtxfsfk/video/upload/f_auto:video,q_auto/ab7d0camlpjqvhvlbq2h"
                type="video/mp4"
              />
            </video>
            <img src="https://w0.peakpx.com/wallpaper/1001/972/HD-wallpaper-aortic-arch-anatomy-function-and-significance-human-heart.jpg" />
            <img src="https://c4.wallpaperflare.com/wallpaper/874/941/205/heart-man-medicine-lungs-wallpaper-preview.jpg" />
            <img src="https://c4.wallpaperflare.com/wallpaper/632/1005/174/heart-pictures-for-desktop-wallpaper-preview.jpg" />
            <img src="https://t3.ftcdn.net/jpg/04/46/18/40/360_F_446184023_GW30hNDr8nLpWxAWClovs2HHuS3wXVPR.jpg" />
            <img src="https://cdnb.artstation.com/p/assets/images/images/011/338/003/large/michel-paschalis-human-heart-01.jpg?1529056146" />
            <img src="https://i.ytimg.com/vi/SwHjwO7BnsI/maxresdefault.jpg" />
            <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDY5cHB2c3Qwajg2c2ZvdHBkZG9kYm90cWcyOHd4NWkzcnRlZ3dpaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rMfiAUhjQW4aQ/giphy.gif" />
            <img src="https://media2.giphy.com/media/mNBDoWkp6rWnu/giphy.gif?cid=ecf05e471twm5s92lnfog68einlk1bzlrgaloyqe8ue2mnaf&ep=v1_gifs_related&rid=giphy.gif&ct=g" />
            <img src="https://media.sketchfab.com/models/168b474fba564f688048212e99b4159d/thumbnails/23e35e773a634c24bec42ead5f02e129/blob.jpeg" />
            <img src="https://media1.giphy.com/media/kgNmbsAHSaaSgSDp2d/giphy.gif?cid=ecf05e477fqieolvt1gsrefkv391q8peyietmem845jivo7k&ep=v1_gifs_related&rid=giphy.gif&ct=g" />
            {/* <img src="https://media3.giphy.com/media/jMhZWStOgAjG75Q1P6/200w.webp?cid=ecf05e47bm56li1xougyhqlkg5sr2ryiklgamovpfqmz9zyt&ep=v1_gifs_related&rid=200w.webp&ct=g" />
            <img src="https://media1.giphy.com/media/800cazaNjjScQAahtF/200w.webp?cid=ecf05e47bm56li1xougyhqlkg5sr2ryiklgamovpfqmz9zyt&ep=v1_gifs_related&rid=200w.webp&ct=g" />
            <img src="https://media2.giphy.com/media/EWeVomGXzxUQqBM7Ix/200w.webp?cid=ecf05e47bm56li1xougyhqlkg5sr2ryiklgamovpfqmz9zyt&ep=v1_gifs_related&rid=200w.webp&ct=g" /> */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
//
