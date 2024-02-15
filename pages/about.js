import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="container bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8 w-3/4 md:w-1/2 mx-auto">
      <div className="relative overflow-hidden shadow-md rounded-lg mb-6">
        <img
          src="/suncanik-slika.png"
          alt="Sunčanik"
          width="600"
          className="align-middle"
        ></img>
      </div>
      <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-spring-wood-950 text-3xl font-semibold">
        О нама
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          {/* <img
            src={post.author.photo.url}
            alt={post.author.name}
            height="30px"
            width="30px"
            className="align-middle rounded-full"
          /> */}
          <p className="inline align-middle text-gray-700 ml-2 text-lg">
            {/* {post.author.name} */}
          </p>
        </div>
      </div>
      <p className="text-center text-lg text-gray-600 font-normal px-4 lg:px-20 mb-8">
        Сунчаник информише, осветљава праве перцепције и даје објективан поглед
        на друштво, културу, образовање, веру и виртуелни свет. Наши циљеви су
        да пружимо релевантне информације и подстакнемо дубље размишљање о
        актуелним темама и трендовима. Пратите нас како бисте били у току са
        најновијим вестима и поделите своје мишљење са нама у коментарима.
      </p>
    </div>
  );
};

export default AboutPage;
