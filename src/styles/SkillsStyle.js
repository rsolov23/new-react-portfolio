import styled from "styled-components";

export const SkillsStyle = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  background-color: #42555f;
  opacity:75%;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 20px;
  margin: 75px 0;

  h1 {
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  } ;
`;
