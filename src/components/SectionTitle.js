import React from "react";
import { SectionTitleStyle } from "../styles/ProjectsStyles";

export default function SectionTitle({ heading = "need heading" }) {
  return (
    <SectionTitleStyle className="section-title">
      <h3>{heading}</h3>
    </SectionTitleStyle>
  );
}
