import React from "react";
import Github from "../Skills/Github";
import Tools from "./Tools";
import { SkillsStyle } from "../../styles/SkillsStyle";
import { IconStyle } from "../../styles/IconStyle";

// import Particle from "./Particle";
function Skills() {
  return (
    <>
      {/* <Particle /> */}
      <SkillsStyle>
        <h1>Professional Skillset</h1>
        <IconStyle>
          <i className="devicon-bash-plain icons"></i>
          <i className="devicon-bootstrap-plain-wordmark icons"></i>
          <i className="devicon-css3-plain-wordmark icons"></i>
          <i className="devicon-express-original-wordmark icons"></i>
          <i className="devicon-google-plain-wordmark icons"></i>
          <i className="devicon-graphql-plain-wordmark icons"></i>
          <i className="devicon-handlebars-plain-wordmark icons"></i>
          <i className="devicon-heroku-line-wordmark icons"></i>
        </IconStyle>
        <IconStyle>
          <i className="devicon-graphql-plain-wordmark icons"></i>
          <i className="devicon-handlebars-plain-wordmark icons"></i>
          <i className="devicon-html5-plain-wordmark icons"></i>
          <i className="devicon-javascript-plain icons"></i>
          <i className="devicon-jest-plain icons"></i>
          <i className="devicon-jquery-plain-wordmark icons"></i>
          <i className="devicon-markdown-original icons"></i>
          <i className="devicon-mysql-plain-wordmark icons"></i>
        </IconStyle>
        <IconStyle>
          <i className="devicon-html5-plain-wordmark icons"></i>
          <i className="devicon-javascript-plain icons"></i>
          <i className="devicon-mongodb-plain-wordmark icons"></i>
          <i className="devicon-nodejs-plain-wordmark icons"></i>
          <i className="devicon-npm-original-wordmark icons"></i>
          <i className="devicon-react-original-wordmark icons"></i>
          <i className="devicon-sass-original icons"></i>
          <i className="devicon-webpack-plain-wordmark icons"></i>
        </IconStyle>
      </SkillsStyle>
      <Tools />
      <SkillsStyle>
        <Github />
      </SkillsStyle>
    </>
  );
}

export default Skills;
