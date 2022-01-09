import styled from "styled-components";

export const IconStyle = styled.div`
  justify-content: space-between;
  display: flex;
  margin: 25px 25px;
 
  .test {
    border: 1px solid var(--main-color);
    border-radius: 15px;
    padding: 10px;
    box-shadow: 5px 5px 18px var(--main-color);
  }
  .icons {
    background-color: rgb(54, 69, 79);
    /* align-items: center; */
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    font-size: 3em;
    margin-right: 15px;
    padding: 20px;
    opacity: 0.93;
    border: 1.7px solid rgba(200, 137, 230, 0.637);
    border-radius: 5px;
    box-shadow: 4px 5px 4px 3px rgba(89, 4, 168, 0.137);
    overflow: hidden;
    transition: all 0.4s ease 0s;
  }
`;
