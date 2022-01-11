import React from "react";
import { ToolsStyle } from "../../styles/ToolsStyle";
import { IconStyle } from "../../styles/IconStyle";

import { Icon } from "@iconify/react";

export default function Tools() {
  return (
    <ToolsStyle>
      <h1>Tools I Use</h1>
      <IconStyle>
        <Icon
          className="test"
          icon="logos:visual-studio-code"
          width="75"
          height="75"
        />
        <Icon
          className="test"
          icon="logos:heroku-icon"
          width="75"
          height="75"
        />
        <Icon className="test" icon="icon-park:github" width="75" height="75" />
        <Icon className="test" icon="logos:lighthouse" width="75" height="75" />
        <Icon className="test" icon="logos:git" width="75" height="75" />
      </IconStyle>
    </ToolsStyle>
  );
}
