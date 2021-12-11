import styled from "styled-components";

export const ProjectSectionStyle = styled.div`
  padding: 5rem 0;

  .projects__allItems {
    display: flex;
    gap: 3rem;
    /* margin-top: 5rem; */
  }
  .swiper-container {
    /* padding-top: 4rem; */
    max-width: 75%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    /* background: #000; */
    z-index: 10;
    /* right: 40px;
    left: auto;
    top: 0; */
    transform: translateY(50%);
    /* color: var(--gray-1); */
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .projects__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;
      .projectItem__img {
        width: 100%;
      }
    }
  }
`;

export const SectionTitleStyle = styled.div`
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

export const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    background-color: rgb(238, 240, 242);
    border: 3px solid rgb(238, 240, 242);
    img {
      height: 70%;
    }
  }
  .projectItem__info {
    /* margin-top: 1rem; */
    background-color: rgb(238, 240, 242);
    padding-left: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 0.5rem;
  }
  .projectItem__desc {
    font-size: 0.5rem;
    font-family: "RobotoMono Regular";
    /* margin-top: 1rem; */
  }
  .projectItem__skills {
    font-size: 0.5rem;
  }
  .projectItem__deployed {
    margin-bottom: 1rem;
  }
  .projectItem__github {
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;
