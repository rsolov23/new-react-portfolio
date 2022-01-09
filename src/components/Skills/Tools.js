import React from "react";
import { ToolsStyle } from "../../styles/ToolsStyle";
import { IconStyle } from "../../styles/IconStyle";
import { SiVisualstudiocode, SiHeroku, SiLighthouse } from "react-icons/si";

import { Icon } from "@iconify/react";

export default function Tools() {
  return (
    <ToolsStyle>
      <h1>Tools I Use</h1>
      <IconStyle>
        <Icon icon="logos:visual-studio-code" width="75" height="75" />
        <Icon icon="logos:heroku-icon" width="75" height="75" />
        <Icon icon="icon-park:github" width="75" height="75" />
        <Icon icon="logos:lighthouse" width="75" height="75" />
        <Icon icon="logos:git" width="275" height="75" />
      </IconStyle>
    </ToolsStyle>
  );
}
