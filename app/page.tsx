"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Home from "@/app/pages/home/home";
import About from "@/app/pages/about/about";
import Projects from "@/app/pages/projects/projects";
import Contact from "@/app/pages/contact/contact";
import Navbar from "@/app/components/navbar/navbar";

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
    </main>
  );
};

export default MainPage;
