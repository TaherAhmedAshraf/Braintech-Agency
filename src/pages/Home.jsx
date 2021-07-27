import React from "react";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Feacthers from "./components/Feacthers";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Status from "./components/Status";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Feacthers />
      <Status />
      <Portfolio />
      <Testimonials />
      <Team />
      <Contact />
    </>
  );
}
