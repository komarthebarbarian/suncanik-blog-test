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
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));

    // Event listener for scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 500);
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`relative container mx-auto px-10 mb-8 ${
        isSticky ? "sticky top-0 bg-sticky-color z-50" : ""
      }`}
    >
      <div className="flex justify-between items-center border-b w-full inline-block border-gray-400 uppercase md:py-6 py-4">
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
            <span className="transition duration-300 text-gray-500 hover:text-spring-wood-800 font-bold uppercase text-xl md:text-3xl antialiased drop-shadow ml-4 hidden md:block">
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
                <span className="transition duration-300 md:float-right align-middle text-gray-500 hover:text-spring-wood-800 antialiased mx-4 font-semibold pt-2 pb-3 cursor-pointer">
                  {category.name}
                </span>
              </Link>
            ))}
            <Link key="about" href={`/about`}>
              <span className="transition duration-300 md:float-right align-middle text-gray-500 hover:text-spring-wood-800 antialiased mx-4 font-semibold pt-2 pb-3 cursor-pointer">
                О нама
              </span>
            </Link>
          </div>
          {/* MOBILE NAV */}
          <div
            className={`absolute top-0 right-0 w-3/4 bg-spring-wood-800 bg-opacity-90 flex flex-col justify-center items-center md:hidden ${
              navOpen ? "block" : "hidden"
            }`}
            style={{ zIndex: 9999 }}
          >
            <button
              className={` ${
                navOpen ? "block" : "hidden"
              } border rounded-full p-1 absolute left-2 top-2`}
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
            <Link href="/">
              <h1 className="text-white font-bold uppercase text-3xl mt-12 mb-3">
                Сунчаник
              </h1>
            </Link>

            <div className="flex flex-col justify-center items-left">
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
              <Link key="about" href={`/about`} className="mt-6 mb-4">
                <span className="align-middle text-white antialiased font-semibold uppercase cursor-pointer ">
                  О нама
                </span>
              </Link>
            </div>
            <div className="flex mt-6 mb-11 gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61555481954942"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>

              <a
                href="https://x.com/Suncanik?t=mXsOO-IMvJrScnvGsDEcKQ"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61555481954942"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="mailto:webmaster@example.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
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
