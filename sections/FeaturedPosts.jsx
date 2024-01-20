import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { FeaturedPostCard } from "../components";
import { getFeaturedPosts } from "../services";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      let reversedFeaturedPosts = result.slice().reverse();
      setFeaturedPosts(reversedFeaturedPosts);
      setDataLoaded(true);
    });
  }, []);

  return !dataLoaded ? (
    <Image
      unoptimized
      alt="suncanik"
      height="440"
      width="440"
      className="mx-auto mb-8 align-middle "
      src="sundial.jpg"
    ></Image>
  ) : (
    <div className="mb-8">
      <Carousel
        infinite
        responsive={responsive}
        itemClass="px-4"
        autoPlay
        autoPlaySpeed={3000}
      >
        {dataLoaded &&
          featuredPosts.map((post, index) => (
            <FeaturedPostCard key={index} post={post} />
          ))}
      </Carousel>
    </div>
  );
};

export default FeaturedPosts;
