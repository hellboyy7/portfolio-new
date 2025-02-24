import React from "react";
import transition from "../../transition";
import Project from "./components/Projects/Projects";
import Projects from "./components/Projects/Projects";

const Home = () => {
  return (
    <div className="">
      <div className="  w-full  h-[calc(100vh-6.7rem)] bg-red-500 ">
        {" "}
        banner{" "}
      </div>
      {/* <div>da</div> */}

      <div>
        <Projects />
      </div>
    </div>
  );
};

export default transition(Home);
