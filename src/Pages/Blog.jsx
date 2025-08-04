import React, { useEffect } from "react";
import BlogList from "../components/BlogList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AOS from "aos";
import "aos/dist/aos.css";

function Blog() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-light overflow-x-hidden">
      <div data-aos="fade-down">
        <Header />
      </div>

      <main data-aos="fade-up" className="container py-5">
        <BlogList />
      </main>

      <footer data-aos="fade-up" data-aos-delay="200">
        <Footer />
      </footer>
    </div>
  );
}

export default Blog;
