import React from "react";
import { Swiper } from "swiper/react";
import { projectInfo } from "../assets/data/data";
import SectionTitle from "../SectionTitle";

export default function Projects() {
  return (
    <div>
      <div className="container">
        <SectionTitle heading="Projects" subheading="Recent Work" />
      <div className="projects__allItems">
        <Swiper>
          
        </Swiper>
      </div>
      </div>
    </div>
  );
}
