import React from "react";
import { Swiper } from "swiper/react";
import SectionTitle from "./SectionTitle";
import projectInfo from "../assets/data/data";
import ProjectItem from "./ProjectItem";

export default function ProjectsSection() {
  console.log(projectInfo);
  return (
    <div>
      <div className="container">
        <SectionTitle subheading="some of my recent works" heading="Projects" />
        <div className="projects__allItems">
          <Swiper>
            {projectInfo.map((projectInfo, index) => {
              if (index >= 8) return;
              return <ProjectItem />;
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
