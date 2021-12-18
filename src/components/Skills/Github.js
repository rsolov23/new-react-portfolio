import React from "react";
import GitHubCalendar from "react-github-calendar";
import { GithubStyle } from "../../styles/GithubStyles";

function Github() {
  const colourTheme = {
    background: "transparent",
    text: "#000",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc",
  };
  return (
    <>
      <h1>
        Days I <strong>Code</strong>
      </h1>
      <h3> </h3>
      <GithubStyle>
        <GitHubCalendar
          username="rsolov23"
          blockSize={15}
          blockMargin={5}
          theme={colourTheme}
          fontSize={16}
        />
      </GithubStyle>
    </>
  );
}

export default Github;
