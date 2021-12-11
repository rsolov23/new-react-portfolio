import React from "react";
import { ProjectSectionStyle } from "../styles/ProjectsStyles";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import SectionTitle from "./SectionTitle";
import projectInfo from "../assets/data/data";
import ProjectItem from "./ProjectItem";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation]);

export default function ProjectsSection() {
  console.log(projectInfo);
  return (
    <ProjectSectionStyle>
      <div className="container">
        <SectionTitle heading="Projects" />
        <div className="projects__allItems">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {projectInfo.map((projectInfo, index) => {
              if (index >= 8) return;
              return (
                <SwiperSlide key={projectInfo.id}>
                  <ProjectItem
                    title={projectInfo.title}
                    img={projectInfo.img}
                    desc={projectInfo.summary}
                    skills={projectInfo.skills}
                    github={projectInfo.github}
                    deployed={projectInfo.deployed}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </ProjectSectionStyle>
  );
}
