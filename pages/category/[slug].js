import React from "react";
import { getCategories, getCategoryPost } from "../../services";
import { PostCard, Categories, Loader } from "../../components";

const CategoryPost = ({ posts, categoryName }) => {
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

// Fetch data at server-side
export async function getServerSideProps({ params }) {
  try {
    const posts = await getCategoryPost(params.slug);
    const categories = await getCategories();
    const category = categories.find(
      (category) => category.slug === params.slug
    );
    const categoryName = category?.name || "Сунчаник блог";

    return {
      props: { posts, categoryName },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        posts: [],
        categoryName: "Сунчаник блог",
      },
    };
  }
}
