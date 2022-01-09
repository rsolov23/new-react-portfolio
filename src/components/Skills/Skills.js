import React from "react";
import Github from "../Skills/Github";
import Tools from "./Tools";
import { SkillsStyle } from "../../styles/SkillsStyle";
import { IconStyle } from "../../styles/IconStyle";
import { Icon } from "@iconify/react";
// import Particle from "./Particle";
function Skills() {
  return (
    <>
      {/* <Particle /> */}
      <SkillsStyle>
        <h1>Professional Skillset</h1>
        <IconStyle>
          <Icon
            className="test"
            icon="vscode-icons:file-type-html"
            width="75"
            height="75"
          />
          <Icon
            className="test"
            icon="vscode-icons:file-type-css"
            width="75"
            height="75"
          />
          <Icon
            className="test"
            icon="logos:javascript"
            width="75"
            height="75"
          />
          <Icon
            className="test"
            icon="logos:bash-icon"
            width="75"
            height="75"
          />
          <Icon
            className="test"
            icon="logos:bootstrap"
            width="75"
            height="75"
          />
          <Icon className="test" icon="logos:express" width="75" height="75" />
          <Icon
            className="test"
            icon="flat-color-icons:google"
            width="75"
            height="75"
          />
          <Icon className="test" icon="logos:graphql" width="75" height="75" />
          <Icon
            className="test"
            icon="logos:handlebars"
            width="75"
            height="75"
          />

          <Icon className="test" icon="logos:jest" width="75" height="75" />
        </IconStyle>
        <IconStyle>
          <Icon className="test" icon="logos:jquery" width="75" height="75" />
          <Icon className="test" icon="logos:markdown" width="75" height="75" />
          <Icon
            className="test"
            icon="logos:material-ui"
            width="75"
            height="75"
          />
          <Icon className="test" icon="logos:mysql" width="75" height="75" />

          <Icon className="test" icon="logos:mongodb" width="75" height="75" />
          <Icon className="test" icon="logos:nodejs" width="75" height="75" />
          <Icon
            className="test"
            icon="vscode-icons:file-type-npm"
            width="75"
            height="75"
          />
          <Icon className="test" icon="logos:react" width="75" height="75" />
          <Icon
            className="test"
            icon="logos:node-sass"
            width="75"
            height="75"
          />
          <Icon className="test" icon="logos:webpack" width="75" height="75" />
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
