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
    <div className="container mx-auto px-10 mb-8">
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
            <span className="font-bold uppercase text-xl m:text-3xl text-gray-500 antialiased drop-shadow ml-4 ">
              Сунчаник
            </span>
          </Link>
        </div>
        <div className="flex items-center">
          <Search posts={posts} />
          {/* DESKTOP NAV */}
          <div className="hidden md:float-left md:contents">
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className="transition duration-300 md:float-right align-middle text-gray-500 hover:text-spring-wood-800 antialiased mx-4 font-semibold cursor-pointer">
                  {category.name}
                </span>
              </Link>
            ))}
            <Link key="about" href={`/about`}>
              <span className="transition duration-300 md:float-right align-middle text-gray-500 hover:text-spring-wood-800 antialiased mx-4 font-semibold cursor-pointer">
                О нама
              </span>
            </Link>
          </div>
          {/* MOBILE NAV */}
          <div
            className={`flex flex-col md:hidden ${
              navOpen ? "block" : "hidden"
            }`}
          >
            <button
              className={` ${navOpen ? "block" : "hidden"}`}
              onClick={() => setNavbarOpen(!navOpen)}
            >
              X
            </button>
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className="transition duration-300 md:float-right align-middle text-gray-500 hover:text-spring-wood-800 antialiased mx-4 font-semibold cursor-pointer">
                  {category.name}
                </span>
              </Link>
            ))}
            <Link key="about" href={`/about`}>
              <span className="transition duration-300 md:float-right align-middle text-gray-500 hover:text-spring-wood-800 antialiased mx-4 font-semibold cursor-pointer">
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
              className="w-6 h-6 text-gray-500 antialiased ml-3"
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
