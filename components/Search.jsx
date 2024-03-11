import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";
import { useRouter } from "next/router";

const Search = ({ posts }) => {
  const [expanded, setExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [fuse, setFuse] = useState(null);
  const router = useRouter();

  const handleSearchClick = () => {
    expanded && handleFormSubmit;

    setExpanded(!expanded);
  };

  const options = {
    keys: ["node.title", "node.excerpt", "node.content.raw"],
  };

  useEffect(() => {
    if (posts) {
      setFuse(new Fuse(posts, options));
    }
  }, [posts, options]);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (fuse) {
      const results = fuse.search(term);
      setSearchResults(results);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (searchTerm.trim() !== "") {
      router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
    } else {
      // Стави нешто ако затреба у случају да је празан стринг
    }
  };

  return (
    <form name="Search" onSubmit={handleFormSubmit}>
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Претражи"
          value={searchTerm}
          onChange={handleSearchChange}
          className={`${
            expanded ? "w-40 md:w-60 px-2 z-100" : "w-0"
          } transition-all duration-300 linear outline-gray-100 rounded-full`}
        />
        <button
          type="submit"
          className="cursor-pointer ml-2"
          onClick={handleSearchClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="transition duration-300 text-gray-500 hover:text-spring-wood-800 w-6 h-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
        {searchResults.length > 0 && expanded && (
          <div className="absolute mt-2 p-2 bg-white rounded-md shadow-md">
            <ul>
              {searchResults.map((result) => (
                <li key={result.item.slug}>
                  <a href={`/post/${result.item.slug}`}>{result.item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </form>
  );
};

export default Search;
