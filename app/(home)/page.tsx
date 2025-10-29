"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Home from "@/app/pages/home/home";
import About from "@/app/(routes)/about/page";
import Projects from "@/app/(routes)/projects/page";
import Contact from "@/app/(routes)/contact/page";
import Navbar from "@/app/components/navbar/navbar";
import Footer from "@/app/components/footer/footer";

const MainPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState("home");

  // Update URL without page reload when current page changes
  useEffect(() => {
    if (currentPage === "home" && pathname !== "/") {
      router.push("/");
    } else if (currentPage !== "home" && pathname !== `/${currentPage}`) {
      router.push(`/${currentPage}`);
    }
  }, [currentPage, pathname, router]);

  // Update current page based on URL path
  useEffect(() => {
    if (pathname === "/") {
      setCurrentPage("home");
    } else if (pathname === "/about") {
      setCurrentPage("about");
    } else if (pathname === "/projects") {
      setCurrentPage("projects");
    } else if (pathname === "/contact") {
      setCurrentPage("contact");
    }
  }, [pathname]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <main>
      <Navbar setCurrentPage={setCurrentPage} />
      <div className="page-content">{renderPage()}</div>
      <Footer />
    </main>
  );
};

export default MainPage;
