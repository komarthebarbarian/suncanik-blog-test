import React from "react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { getPosts, getPostDetails } from "../../services";
import {
  PostDetail,
  Author,
  CommentsForm,
  Comments,
  PostWidget,
  Categories,
  Loader,
} from "../../components";

const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <>
      <NextSeo
        title={post.title}
        description={post.excerpt}
        canonical={`https://suncanik.info/post/${post.slug}`}
        openGraph={{
          type: "article",
          title: post.title,
          description: post.excerpt,
          images: [
            {
              url: post.featuredImage.url,
              alt: post.title,
            },
          ],
        }}
        twitter={{
          handle: "@Suncanik",
          site: "@Suncanik",
          cardType: "summary_large_image",
        }}
      />
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
            <Author author={post.author} />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <PostWidget
                slug={post.slug}
                categories={post.categories.map((category) => category.slug)}
              />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
