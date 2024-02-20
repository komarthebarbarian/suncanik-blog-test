import React from "react";
import Image from "next/image";
import { useState } from "react";

const SocialShareButtons = ({ url, title }) => {
  const [linkClicked, setLinkClicked] = useState(false);

  const handleEmailShare = () => {
    const subject = encodeURIComponent("Check out this link");
    const body = encodeURIComponent(`Сунчаник блог \n${url}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  const handleCopyLink = () => {
    const textField = document.createElement("textarea");
    textField.innerText = url;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();

    setLinkClicked(true);
    setTimeout(() => {
      setLinkClicked(false);
    }, 3000);
  };

  const handleViberShare = () => {
    window.open(
      `viber://forward?text=${encodeURIComponent(`Check this out: ${url}`)}`
    );
  };

  return (
    <div className="flex justify-center w-48 items-center">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all linear duration-300 mr-4 text-indigo-500 hover:text-indigo-700 cursor-pointer opacity-50 hover:opacity-100 "
      >
        <Image
          src="/fb.png"
          alt="Facebook icon"
          unoptimized
          height="20"
          width="20"
          className="align-middle"
        />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
        )}&text=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all linear duration-300 mr-2 text-indigo-500 hover:text-indigo-700 cursor-pointer opacity-50 hover:opacity-100 "
      >
        <Image
          src="/x.png"
          alt="Twitter icon"
          unoptimized
          height="18"
          width="18"
          className="align-middle"
        />
      </a>
      <button
        onClick={handleViberShare}
        className="transition-all linear mr-2 duration-300 text-indigo-500 hover:text-indigo-700 cursor-pointer opacity-50 hover:opacity-100"
      >
        <Image
          src="/viber.png"
          alt="Viber icon"
          unoptimized
          height="28"
          width="28"
          className="align-middle"
        />
      </button>
      <button
        onClick={handleEmailShare}
        className="transition-all linear duration-300 mr-3 text-indigo-500 hover:text-indigo-700 cursor-pointer opacity-50 hover:opacity-100 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
      </button>
      <button
        onClick={handleCopyLink}
        className="relative transition-all linear duration-300 text-indigo-500 hover:text-indigo-700 cursor-pointer opacity-50 hover:opacity-100 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
          />
        </svg>
        <p
          className={`absolute -left-20 top-7 text-spring-wood-800 font-semibold text-sm ${
            linkClicked ? "block" : "hidden"
          }`}
        >
          Линк је копиран
        </p>
      </button>
    </div>
  );
};

export default SocialShareButtons;
