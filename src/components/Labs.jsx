import React from "react";
import { Navbar } from "./Navbar";
import Footer from "./Footer";

export const Labs = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center flex-col">
        <div className="w-full h-[40vh] md:h-[60vh] bg-[url('https://res.cloudinary.com/dn8esrnij/image/upload/v1731070479/image_5qLQ8233_1722726119555_raw_txdlmm.jpg')] bg-cover bg-center flex-nowrap">
          <div className="w-full h-full flex justify-center items-center backdrop-brightness-50">
            <span className="text-white md:text-7xl text-3xl font-bold w-1/2 -mx-4">
              Gallery
            </span>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-wrap gap-4 mx-auto rounded-md">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/28CYhgjrBLA?si=FJoprOKkNOzoVE3j"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/_-ZVv3cO2Ik?si=4RfJuRZsoA5wLWTC"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/aDXABSb0_p8?si=J206m8j2A3mkBV_R"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9I-XcW0XXzg?si=bxMu73QYz7rLnYqz"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/KqFZgA4s-Nk?si=XJVCPyW6NOCBa-99"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/jU9w6w8LwqM?si=lm7pXhXBsd8GHVga"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/qmpd82mpVO4?si=WTbGytCgSiccLBYa"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xIZQRjkwV9Q?si=wOjMwD00QqpvaKWS"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/UMTDmP81mG4?si=_hbdOhjgCzZPtDwf"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe> */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/e37rJqP6-aM?si=Czf8TW_4D6AzB4yX"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/jBt5jZSWhMI?si=wtqYYkGFMf5ZEgQW"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};
