import React from "react";
import Github from "../components/Github";
import { SkillsStyle } from "../styles/SkillsStyle";
import { IconStyle } from "../styles/IconStyle";
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
        <IconStyle>
          <FaReact className="icons" />

          <FaHtml5 className="icons" />

          <FaCss3 className="icons" />

          <IoLogoJavascript className="icons" />

          <GrGraphQl className="icons" />

          <FaNode className="icons" />

          <SiMongodb className="icons" />

          <DiGit className="icons" />
        </IconStyle>
      </SkillsStyle>
      <SkillsStyle>
        <h1>Tools I Use</h1>
        <IconStyle>
          <SiVisualstudiocode className="icons" />
          <SiHeroku className="icons" />
          <FiGithub className="icons" />
          <SiLighthouse className="icons" />
        </IconStyle>
      </SkillsStyle>
      <SkillsStyle>
        <Github />
      </SkillsStyle>
    </>
  );
}

export default Skills;
