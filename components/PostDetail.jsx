import React from "react";
import { SocialShareButtons } from "../components";
import moment from "moment";

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    if (obj.type == "link") {
      modifiedText = (
        <a
          href={obj.href}
          target="_blank"
          className="text-indigo-900 hover:text-gray-800"
        >
          {obj["children"][0]["text"]}
        </a>
      );
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );

      case "video":
        return (
          <div
            style={{
              paddingTop: `${(315 / 560) * 100}%`,
              position: "relative",
            }}
          >
            <iframe
              key={index}
              title={obj.title}
              width="100%"
              height="100%"
              src={obj.src}
              frameBorder="0"
              allowFullScreen
              loading="lazy"
              style={{ position: "absolute", top: 0, left: 0 }}
            ></iframe>
          </div>
        );
      default:
        return modifiedText;
    }
  };

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
        <div className="relative overflow-hidden shadow-md mb-6">
          <img
            src={post.featuredImage.url}
            alt=""
            className="object-top h-full w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
          />
        </div>
        <div className="px-4 lg:px-0">
          {/* DETAILS PART */}
          <div className="mb-8 w-full">
            {/* SOCIAL PART */}
            <div className="flex items-center justify-center md:justify-end mb-10">
              <SocialShareButtons
                url={`https://suncanik.info/post/${post.slug}`}
                title={post.title}
                excerpt={post.excerpt}
              />
            </div>
            {/* AUTHOR PART */}
            <div className="flex items-center justify-start mb-2 lg:w-auto ">
              <img
                alt={post.author.name}
                height="32px"
                width="32px"
                className="align-middle rounded-full"
                src={post.author.photo.url}
              />
              <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
                {post.author.name}
              </p>
            </div>
            {/* DATE PART */}
            <div className="font-medium text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 inline mr-2 pl-0 text-spring-wood-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="align-middle text-sm">
                {moment(post.createdAt).format("DD. MM. YYYY.")}
              </span>
            </div>
          </div>
          {/* DETAILS PART END */}
          <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
          {/* Функција која омогућује да у објави буде више варијанти текста, слике и гифови */}
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) =>
              getContentFragment(itemindex, item.text, item)
            );

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </div>
    </>
  );
};

export default PostDetail;
