import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getCategories, getCategoryPost } from "../../services";
import { PostCard, Categories, Loader } from "../../components";

const CategoryPost = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  const [categoryName, setCategoryName] = useState("Сунчаник блог");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { slug } = router.query;
        const categories = await getCategories();
        const category = categories.find((category) => category.slug === slug);
        setCategoryName(category?.name || "Сунчаник блог");
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, [router.query]);

  if (router.isFallback) {
    return <Loader />;
  }

  const reversedPosts = posts.slice().reverse();

  return (
    <div className="container mx-auto px-10 mb-8">
      <h2 className="text-2xl text-gray-500 font-semibold mb-8 pb-8 text-center border-b border-gray-400">
        {categoryName}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {reversedPosts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
