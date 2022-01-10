import React from "react";
import GitHubCalendar from "react-github-calendar";
import { GithubStyle } from "../../styles/GithubStyles";

function Github() {
  const colourTheme = {
    background: "transparent",
    text: "#000",
    grade4: "#15265c",
    grade3: "#43517C",
    grade2: "#5B678C",
    grade1: "#B8BDCE",
    grade0: "#FFFEFF",
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
