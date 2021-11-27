import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import projectImage from "../assets/images/help.png";

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

export default function ProjectItem() {
  return (
    <ProjectItemStyles>
      <Link to="/projects" className="projectItem__img">
        <img src={projectImage} alt="project img" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">project 1</h3>
        </Link>
        <p className="projectItem__desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi,
          magni molestiae labore placeat maxime delectus earum eos quidem natus
          at, quaerat omnis ipsa? Sunt accusamus molestias repellat culpa a
          voluptates?
        </p>
      </div>
    </ProjectItemStyles>
  );
}
