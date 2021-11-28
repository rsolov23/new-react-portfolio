import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import projectImage from "../assets/images/help.png";
import * as FaIcons from "react-icons/fa";
import projectInfo from "../assets/data/data";

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: "RobotoMono Regular";
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

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
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
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
    </ProjectItemStyles>
  );
}
