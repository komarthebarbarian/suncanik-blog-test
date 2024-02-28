import React from "react";
import Header from "./Header";
import Script from "next/script";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-E7NY2W59JZ"
      />

      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
    </>
  );
};

export default Layout;
