import { useRouter } from "next/router";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, className }) => {
  const { pathname } = useRouter();
  return (
    <>
      {pathname === "/sign-up" ||
      pathname === "/sign-in" ||
      pathname === "/choose-test" ? null : (
        <Header className={className} />
      )}
      <main
        className={`${className} text-white pt-[3rem] h-[100vh] flex justify-center items-center`}
      >
        {children}{" "}
      </main>
    </>
  );
};

export default Layout;
