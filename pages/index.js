import Head from "next/head";
import postcss from "postcss";
import { NextSeo } from "next-seo";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";
import { FeaturedPosts } from "../sections";

export default function Home({ posts }) {
  const reversedPosts = posts.slice().reverse();
  return (
    <>
      <NextSeo
        title="Сунчаник"
        description="Сунчаник информише, осветљава праве перцепције и даје објективан поглед на друштво, културу, образовање, веру и виртуелни свет. Наши циљеви су да пружимо релевантне информације и подстакнемо дубље размишљање о актуелним темама и трендовима." // Add a brief description of your site
        canonical="https://www.suncanik.info/"
        openGraph={{
          type: "website",
          locale: "sr-Cyrl-RS",
          url: "https://www.suncanik.info/",
          title: "Сунчаник",
          description:
            "Сунчаник информише, осветљава праве перцепције и даје објективан поглед на друштво, културу, образовање, веру и виртуелни свет. Наши циљеви су да пружимо релевантне информације и подстакнемо дубље размишљање о актуелним темама и трендовима.", // Add a brief description of your site
          images: [
            {
              url: "https://www.suncanik.info/og-image.jpg",
              width: 1200,
              height: 630,
              alt: "Suncanik.info logo",
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
      <main className="container mx-auto px-10 mb-8">
        <Head>
          <title>Сунчаник</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <FeaturedPosts />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 ">
          <div className="lg:col-span-8 col-span-1">
            {reversedPosts.map((post, index) => (
              <PostCard post={post.node} key={post.title} />
            ))}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
