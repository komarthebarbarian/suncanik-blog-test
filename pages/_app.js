import React, { useEffect, useState } from "react";
import { Layout } from "../components";
import Script from "next/script";
// import "tailwindcss/tailwind.css";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />

      <Script id="google-analytics-script" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
          page_path: window.location.pathname,
          });
    `}
      </Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
