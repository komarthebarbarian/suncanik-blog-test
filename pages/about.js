import React from "react";
import Image from "next/image";
import { NextSeo } from "next-seo";

const AboutPage = () => {
  return (
    <>
      <NextSeo
        title="О нама | Сунчаник"
        description="Сунчаник информише, осветљава праве перцепције и даје објективан поглед на друштво, културу, образовање, веру и виртуелни свет. Пратите нас и поделите своје мишљење са нама у коментарима."
        canonical="https://www.suncanik.info/about"
      />
      <div className="container bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8 w-3/4 md:w-1/2 mx-auto">
        <div className="relative overflow-hidden shadow-md rounded-lg mb-6">
          <img
            src="/suncanik-slika.png"
            alt="Sunčanik"
            width="600"
            className="align-middle"
          ></img>
        </div>
        <h1 className="text-center mb-8 cursor-pointer text-3xl font-semibold">
          О нама
        </h1>
        <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
          <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
            <img
              src="/logo.png"
              alt="Suncanik logo"
              height="30px"
              width="30px"
              className="align-middle rounded-full"
            />
            <p className="inline align-middle text-gray-700 ml-2 text-lg">
              Сунчаник блог
            </p>
          </div>
        </div>
        <p className="text-left text-lg text-gray-600 font-normal px-4 lg:px-20 mb-8">
          Сунчаник информише, осветљава праве перцепције и даје објективан
          поглед на друштво, културу, образовање, веру и виртуелни свет. Наши
          циљеви су да пружимо релевантне информације и подстакнемо дубље
          размишљање о актуелним темама и трендовима.
        </p>
        <p className="text-left text-lg text-gray-600 font-normal px-4 lg:px-20 mb-8">
          Пратите нас и поделите своје мишљење са нама у коментарима.
        </p>
      </div>
    </>
  );
};

export default AboutPage;
