import styled from "styled-components";

export const SkillsStyle = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 20px;

  h1 {
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  } ;
`;
