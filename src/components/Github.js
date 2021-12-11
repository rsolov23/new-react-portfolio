import React from "react";
import GitHubCalendar from "react-github-calendar";


function Github() {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc",
  };
  return (
    <div>
      <h1>
        Days I <strong>Code</strong>
      </h1>
      <GitHubCalendar
        username="rsolov23"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
    </div>
  );
}

export default Github;
