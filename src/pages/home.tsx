import React from "react";
import Navigation from "../components/Navigation";
import irithyll from "../assets/irindyll_2.jpeg";

const Home: React.FC = () => {
  return (
    <div className="text-center w-[100vw] flex flex-col">
      <Navigation />

      <div
        className="flex items-center justify-center text-lg h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${irithyll})`,
        }}
      >
        <div className="text-left mr-[30%] text-white">
          <div className="text-4xl font-bold">Kieran</div>
          <div className="text-2xl font-medium">Fullstack Developer</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
