import React from "react";
import { NextSeo } from "next-seo";
import { getCategories, getCategoryPost } from "../../services";
import { PostCard, Categories, Loader } from "../../components";

const CategoryPost = ({ posts, categoryName }) => {
  const reversedPosts = posts.slice().reverse();

  return (
    <>
      <NextSeo
        title={`${categoryName} | Сунчаник`}
        description={`Најновније објаве у категорији ${categoryName}`}
        canonical={`https://www.suncanik.info/category/${posts.slug}`}
        openGraph={{
          type: "website",
          locale: "sr-Cyrl-RS",
          url: `https://www.suncanik.info/category/${categoryName}`,
          title: `${categoryName} | Сунчаник`,
          description: `Најновније објаве у категорији ${categoryName}`,
          images: [
            {
              url: "https://www.suncanik.info/og-category-image.jpg",
              width: 1200,
              height: 630,
              alt: `Suncanik.info logo`,
            },
          ],
          site_name: "Сунчаник",
        }}
        twitter={{
          handle: "@Suncanik",
          site: "@Suncanik",
          cardType: "summary_large_image",
        }}
      />
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
    </>
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
