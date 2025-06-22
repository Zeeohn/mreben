import { Navbar } from "./Navbar";
import Footer from "./Footer";

export const About = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center flex-col">
        <div className="w-full h-[40vh] md:h-[60vh] bg-[url('http://res.cloudinary.com/ddbtxfsfk/image/upload/v1750612428/x9ylfhxatuofcc6bzlk3.jpg')] bg-cover bg-center flex-nowrap">
          <div className="w-full h-full flex justify-center items-center backdrop-brightness-50">
            <span className="text-white md:text-7xl text-3xl font-bold w-1/2 -mx-4">
              About Us
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-4">
        <p className="text-lg md:text-xl text-justify text-black mb-8">
          The primary aim of this website is to enhance the learning of
          Cardiovascular Biology in Nigeria through the development and
          validation of an Artificial Intelligence-powered website.
          <br />
          <br />
          This initiative is a part of the research conducted by Ebenezer
          Omolafe Babalola in the Department of Educational Technology at the
          Faculty of Education, University of Ilorin, under the supervision of
          Professor Charles Olabode Olumorin, in partial fulfillment of the
          requirements for the award of the degree of Doctor of Philosophy
          (Ph.D.) in Educational Technology.
        </p>
      </div>
      <h1 className="font-bold text-3xl">Related Works</h1>
      <div className="p-5 sm:p-8">
        <div className="columns-1 gap-5 sm:columns-2 sm:gap-2 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
          <img src="https://res.cloudinary.com/ddbtxfsfk/image/upload/f_auto,q_auto/zf2gqbjcmq8gwotcy7qc" />
          <img src="https://res.cloudinary.com/ddbtxfsfk/image/upload/f_auto,q_auto/tzmiyimt8gqem8sd9ppz" />
          <img src="https://res.cloudinary.com/ddbtxfsfk/image/upload/f_auto,q_auto/ot7sonpttgap4fdo2kun" />
          <img src="https://res.cloudinary.com/ddbtxfsfk/image/upload/f_auto,q_auto/eswe3r3awnnpq05e0j2u" />
        </div>
      </div>
      <Footer />
    </div>
  );
};
