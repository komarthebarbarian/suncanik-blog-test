import React from "react";
import Image from "next/image";

const SocialShareButtons = ({ url, title }) => (
  <div className="flex justify-center w-32 items-center">
    <a
      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="mr-4 text-indigo-500 hover:text-indigo-700 cursor-pointer opacity-50 hover:opacity-100 transition-all linear duration-300"
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
      className="mr-4 text-indigo-500 hover:text-indigo-700 cursor-pointer opacity-50 hover:opacity-100 transition-all linear duration-300"
    >
      <Image
        src="/x.png"
        alt="Facebook icon"
        unoptimized
        height="18"
        width="18"
        className="align-middle"
      />
    </a>
    <a
      href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
        url
      )}&title=${encodeURIComponent(title)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="mr-4 text-indigo-500 hover:text-indigo-700 cursor-pointer opacity-50 hover:opacity-100 transition-all linear duration-300"
    >
      <Image
        src="/ln.png"
        alt="Facebook icon"
        unoptimized
        height="21"
        width="21"
        className="align-middle"
      />
    </a>
  </div>
);

export default SocialShareButtons;
