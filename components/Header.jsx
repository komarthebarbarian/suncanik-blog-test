import React, { useState, useEffect } from "react";
import { getCategories } from "../services";
import { Search } from "../components";
import Image from "next/image";

import Link from "next/link";

const categories = [
  { name: "Култура и образовање", slug: "kultura-obrazovanje" },
  { name: "Друштво", slug: "drustvo" },
  { name: "Вера", slug: "vera" },
  { name: "Колумне", slug: "kolumne" },
  { name: "Поглед у виртуелно", slug: "virtuelno" },
];

const Header = ({ posts }) => {
  const [categories, setCategories] = useState([]);
  const [navOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div className="relative container mx-auto px-10 mb-8">
      <div className="flex justify-between items-center border-b w-full inline-block border-gray-400 py-8">
        <div className="md:float-left block cursor-pointer">
          <Link href="/" className="flex items-center">
            <Image
              className="rounded-full"
              src="/logo.png"
              alt="Suncanik blog logo icon"
              unoptimized
              height="50"
              width="50"
            ></Image>
            <span className="transition duration-300 text-gray-500 hover:text-spring-wood-800 font-bold uppercase text-xl md:text-3xl antialiased drop-shadow ml-4 ">
              Сунчаник
            </span>
          </Link>
        </div>
        <div className="flex items-center">
          <div className={`${!navOpen ? "block" : "hidden"}`}>
            <Search posts={posts} />
          </div>
          {/* DESKTOP NAV */}
          <div className="hidden flex justify-center items-center md:float-left md:contents">
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className="transition duration-300 md:float-right align-middle text-gray-500 hover:text-spring-wood-800 antialiased mx-4 font-semibold hover:border-y-2 hover:border-spring-wood-600 pt-2 pb-3 cursor-pointer">
                  {category.name}
                </span>
              </Link>
            ))}
            <Link key="about" href={`/about`}>
              <span className="transition duration-300 md:float-right align-middle text-gray-500 hover:text-spring-wood-800 antialiased mx-4 font-semibold hover:border-y-2 hover:border-spring-wood-600 pt-2 pb-3 cursor-pointer">
                О нама
              </span>
            </Link>
          </div>
          {/* MOBILE NAV */}
          <div
            className={`absolute top-0 right-0 w-3/4  bg-spring-wood-800 bg-opacity-90 flex flex-col justify-center items-center md:hidden ${
              navOpen ? "block" : "hidden"
            }`}
            style={{ zIndex: 9999 }}
          >
            <button
              className={` ${
                navOpen ? "block" : "hidden"
              } mt-11 border rounded-full p-1`}
              onClick={() => setNavbarOpen(!navOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 align-middle text-white antialiased "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug} `}
                className="mt-6"
              >
                <span className="align-middle text-white antialiased font-semibold uppercase cursor-pointer">
                  {category.name}
                </span>
              </Link>
            ))}
            <Link key="about" href={`/about`} className="mt-6 mb-11">
              <span className="align-middle text-white antialiased font-semibold uppercase cursor-pointer">
                О нама
              </span>
            </Link>
          </div>
          <button
            className={` ${navOpen ? "hidden" : "block"} md:hidden`}
            onClick={() => setNavbarOpen(!navOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="transition duration-300 text-gray-500 hover:text-spring-wood-800 antialiased w-6 h-6 ml-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
