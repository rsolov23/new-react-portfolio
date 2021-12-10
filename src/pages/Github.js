import React from "react";
import GitHubCalendar from "react-github-calendar";
import { GithubStyle } from "../styles/GithubStyles";

function Github() {
  return (
    <GithubStyle>
      <GitHubCalendar username="rsolov23" year={new Date().getFullYear()} />
    </GithubStyle>
  );
}

export default Github;
