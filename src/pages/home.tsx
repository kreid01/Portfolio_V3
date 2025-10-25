import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { AboutMe } from "../components/AboutMe";
import { Projects } from "../components/Projects";
import { Footer } from "../components/Footer";
import { Blogs } from "../components/Blogs";



const Home: React.FC = () => {
  const [hovered, setHovered] = useState(false);


  return (
    <div className="relative">
      <div className={`fixed inset-0 bg-black transition-opacity z-20 duration-300 pointer-events-none ${hovered ? "opacity-50" : "opacity-0"}`} />
      <div className="text-gray-400 text-center w-screen flex flex-col">
        <Navigation />
        <div className="px-32 mt-20  md:flex">
          <AboutMe />
          <div className="md:w-[50%] mt-10 md:mt-0">
            <Projects onHover={setHovered} />
            <Blogs onHover={setHovered} />
          </div>
        </div>

        <Footer />
      </div>

    </div>
  );
};

export default Home;
