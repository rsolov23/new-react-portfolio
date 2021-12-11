import React from "react";
import Github from "../components/Github";
import { SkillsStyle } from "../styles/SkillsStyle";
import { FaHtml5, FaReact, FaNode, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { GrGraphQl } from "react-icons/gr";
import {
  SiMongodb,
  SiVisualstudiocode,
  SiHeroku,
  SiLighthouse,
} from "react-icons/si";
import { DiGit } from "react-icons/di";
import { FiGithub } from "react-icons/fi";
function Skills() {
  return (
    <>
      <SkillsStyle>
        <h1>Professional Skillset</h1>
        <div>
          <FaReact />
          <FaHtml5 />
          <FaCss3 />
          <IoLogoJavascript />
          <GrGraphQl />
          <FaNode />
          <SiMongodb />
          <DiGit />
        </div>
      </SkillsStyle>
      <SkillsStyle>
        <h1>Tools I Use</h1>
        <div>
          <SiVisualstudiocode />
          <SiHeroku />
          <FiGithub />
          <SiLighthouse />
        </div>
      </SkillsStyle>
      <SkillsStyle>
        <Github />
      </SkillsStyle>
    </>
  );
}

export default Skills;
