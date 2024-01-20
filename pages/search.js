import React from "react";
import { useRouter } from "next/router";
import { getPosts } from "../services";
import { PostCard, PostWidget, Categories, Loader } from "../components";

const SearchPage = ({ searchResults }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <h1 className="text-2xl text-white font-semibold mb-4">
            Резултат претраге за "{router.query.q}"
          </h1>
          {searchResults.map((post) => (
            <PostCard key={post.node.slug} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            {/* Под условом да searchResults није празан, користи први резултат за PostWidget and Categories */}
            {searchResults.length > 0 && (
              <>
                <PostWidget
                  slug={searchResults[0].node.slug}
                  categories={searchResults[0].node.categories.map(
                    (category) => category.slug
                  )}
                />
                <Categories />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

export async function getServerSideProps({ query }) {
  const searchTerm = query.q || "";
  const posts = await getPosts();

  // Логика претраживања која упоређује searchTerm и posts
  const searchResults = posts.filter((post) => {
    const lowercaseTerm = searchTerm.toLowerCase();
    const lowercaseTitle = post.node.title.toLowerCase();
    const lowercaseAuthor = post.node.author.name.toLowerCase();
    const lowercaseExcerpt = post.node.excerpt.toLowerCase();

    // Провери да ли се searchTerm подудара са title, author или excerpt
    return (
      lowercaseTitle.includes(lowercaseTerm) ||
      lowercaseAuthor.includes(lowercaseTerm) ||
      lowercaseExcerpt.includes(lowercaseTerm)
    );
  });

  return {
    props: {
      searchResults,
    },
  };
}
