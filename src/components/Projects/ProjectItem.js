import React from "react";
import { Link } from "react-router-dom";
import projectImage from "../../assets/images/help.png";
import * as FaIcons from "react-icons/fa";
import { ProjectItemStyles } from "../../styles/ProjectsStyles";

export default function ProjectItem({
  img = projectImage,
  title = "Project Name",
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  skills = "Skills used",
  github = "github",
  deployed = "deployed link",
}) {
  return (
    <ProjectItemStyles>
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project img" />
        <div className="projectItem__info">
          <h3 className="projectItem__title">{title}</h3>
          <p className="projectItem__desc">{desc}</p>
          <p className="projectItem__skills">{skills}</p>
          <p>
            <a href={github} target="blank" className="projectItem__github">
              {" "}
              <FaIcons.FaGithubSquare size={50} color="#000" />
            </a>
            <a href={deployed} className="projectItem__deployed" target="blank">
              <FaIcons.FaExternalLinkSquareAlt size={50} color="#000" />
            </a>
          </p>
        </div>
      </Link>
    </ProjectItemStyles>
  );
}
