import React from "react";
import { ToolsStyle } from "../../styles/ToolsStyle";
import { IconStyle } from "../../styles/IconStyle";
import { SiVisualstudiocode, SiHeroku, SiLighthouse } from "react-icons/si";

import { FiGithub } from "react-icons/fi";

export default function Tools() {
  return (
    <ToolsStyle>
      <h1>Tools I Use</h1>
      <IconStyle>
        <SiVisualstudiocode className="icons" />
        <SiHeroku className="icons" />
        <FiGithub className="icons" />
        <SiLighthouse className="icons" />
        <i className="devicon-git-plain-wordmark icons"></i>
      </IconStyle>
    </ToolsStyle>
  );
}
