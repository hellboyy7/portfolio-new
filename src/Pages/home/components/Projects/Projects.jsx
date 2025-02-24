import React, { useState } from "react";
import Project from "../../../../Components/Project";
import Model from "../../../../Components/Model";
const projects = [
  {
    title: "C2 Montreal",

    src: "c2montreal.png",

    color: "#000000",
  },

  {
    title: "Office Studio",

    src: "officestudio.png",

    color: "#8C8C8C",
  },

  {
    title: "Locomotive",

    src: "locomotive.png",

    color: "#EFE8D3",
  },

  {
    title: "Silencio",

    src: "silencio.png",

    color: "#706D63",
  },
];

const Projects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <main className="flex  items-center justify-center h-screen">
      <div className="w-[1000px] flex flex-col justify-center items-center">
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              setModal={setModal}
              key={index}
            />
          );
        })}
      </div>{" "}
      <Model modal={modal} projects={projects} />
    </main>
  );
};

export default Projects;
