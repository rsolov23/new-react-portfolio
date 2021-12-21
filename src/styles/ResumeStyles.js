import styled from "styled-components";

export const ResumeStyle = styled.div`
  background-color: rgb(229, 228, 226);
  margin-top: 75px;
`;

export const PaperStyle = styled.div`
  background-color: rgb(250, 249, 246);
  margin: auto;
  width: 700px;
  height: 900px;
  border: 1px solid rgb(113, 121, 126);
  border-radius: 2px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  text-align: center;
  line-height: 0.1;
  p,
  li {
    font-size: 12px;
    margin-left: 15px;
    /* line-height: 0.1; */
  }
  ul {
    list-style: none;
  }

  h4 {
    font-size: 14px;
  }
  h1 {
    font-size: 24px;
    padding: 10px 10px;
  }
  p {
    margin: 15px;
  }
  li {
    margin-bottom: 15px;
  }
`;

export const AlignLeftStyle = styled.div`
  text-align: left;
  margin: 15px;
`;
export const ButtonStyle = styled.div`
  display: flex;
  justify-content: center;
`;
