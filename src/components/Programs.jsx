// <a href="https://www.flaticon.com/free-icons/html" title="html icons">Html icons created by Freepik - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/javascript" title="javascript icons">Javascript icons created by Freepik - Flaticon</a>

import ProgramCard from "./ProgramCards";
import Projects from "./Projects";
import React from "react";
import data from "../skills";
import projects from "../projects";

export default function Programs() {
  const cardsList = data.map((card) => {
    return <ProgramCard key={card.id} card={card} />;
  });

  const projectsList = projects.map((project) => {
    return <Projects kye={project.key} project={project} />;
  });

  return (
    <section>
      <br />
      <br />
      <h1 className="text-center text-[42px] text-underline underline underline-offset-[17px] decoration-[3px]">
        Programs and Skills
      </h1>
      <br />
      <br />
      <h2 className="text-center text-[20px]">
        Below are the list of skills that I have knowledge in
      </h2>
      <div className="m-[50px] flex justify-center gap-[50px]">{cardsList}</div>
      <h2 className="text-center text-[20px]">
        Below are some of my favorite projects
      </h2>
      <div>
        {projectsList}
      </div>
    </section>
  );
}
