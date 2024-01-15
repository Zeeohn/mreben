import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero
        content="The human heart, a conical, hollow, and muscular organ, constitutes a vital component of the circulatory system, ceaselessly functioning throughout an individual's lifetime. Roughly equivalent in size to a clenched fist and weighing approximately 300 grams, the heart resides within the chest, positioned behind the breastbone and nestled between the two lungs. "
        category="ANATOMY"
        title="THE HUMAN HEART"
        url="#heartAnatomy"
        videoSrc="https://res.cloudinary.com/ddbtxfsfk/video/upload/f_auto:video,q_auto/pivmutxqanujbx4kr4xp"
      />
      <div
        id="about"
        className="flex flex-col rounded-lg md:flex-row w-full h-screen bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-500"
      >
        <div className="w-full md:w-1/2 p-0 md:p-8 flex items-center justify-center ">
          <img
            src="https://res.cloudinary.com/ddbtxfsfk/image/upload/f_auto,q_auto/fjgmherhc7j4vwy0qags"
            alt="About Us"
            className="w-full h-auto object-cover rounded-tr-full rounded-bl-ful"
          />
        </div>

        <div className="w-full md:w-1/2 p-4 md:p-8 bg-gray-100 flex items-center justify-center rounded-lg">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-500 mb-4">
              About Us
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              BeeNCardiac:Heart Anatomy and Physiology is committed to
              revolutionizing medical education through technology. Our team of
              experts and educators collaborates to bring you an advanced,
              interactive, and personalized learning experience
              <br />
              <br />
              Embark on your journey to master human heart anatomy and
              physiology. Start exploring the wonders of the cardiovascular
              system with BeeNCardiac: Heart Anatomy and Physiology today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
