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
    background-color: rgb(238, 240, 242);
    border: 3px solid rgb(238, 240, 242);
    img {
      height: 70%;
    }
  }
  .projectItem__info {
    /* margin-top: 1rem; */
    background-color: rgb(238, 240, 242);
    padding-left: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: .5rem;
  }
  .projectItem__desc {
    font-size: .5rem;
    font-family: "RobotoMono Regular";
    /* margin-top: 1rem; */
  }
  .projectItem__skills {
    font-size: .5rem;
  }
  .projectItem__deployed {
    margin-bottom: 1rem;
  }
  .projectItem__github {
   
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
