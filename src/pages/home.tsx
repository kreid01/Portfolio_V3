import React from "react";
import Navigation from "../components/Navigation";
import { AboutMe } from "../components/AboutMe";
import { Projects } from "../components/Projects";
import { Footer } from "../components/Footer";



const Home: React.FC = () => {
  return (
    <div className="text-gray-400 text-center w-screen flex flex-col">
      <Navigation />
      <div className="px-32 mt-20 flex">
        <AboutMe />
        <div>
          <Projects />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
