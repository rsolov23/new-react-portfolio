import React from "react";
import styled from "styled-components";

const SectionTitleStyle = styled.div`
  text-align: center;

  h3 {
    font-family: "Montserrat Bold";
    font-size: 3rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;

    h3 {
      font-size: 2.4rem;
    }
  }
`;

export default function SectionTitle({

  heading = "need heading",
}) {
  return (
    <SectionTitleStyle className="section-title">
 <h3>{heading}</h3>
    </SectionTitleStyle>
  );
}
