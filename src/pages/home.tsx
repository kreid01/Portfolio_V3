import React from "react";
import Navigation from "../components/Navigation";
import { AboutMe } from "../components/AboutMe";
import { Projects } from "../components/Projects";
import { Footer } from "../components/Footer";
import { Blogs } from "../components/Blogs";



const Home: React.FC = () => {
  return (
    <div className="text-gray-400 text-center w-screen flex flex-col">
      <Navigation />
      <div className="px-32 mt-20  md:flex">
        <AboutMe />
        <div className="md:w-[50%] mt-10 md:mt-0">
          <Projects />
          <Blogs />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
