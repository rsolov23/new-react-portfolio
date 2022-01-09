import * as FaIcons from "react-icons/fa";
import { ButtonStyle } from "../../styles/ProjectStyles";
const Card = ({
  handlePointerEvent,
  title,

  img,
  skills,
  github,
  deployed,
  summary,
  cardStyle,
}) => {
  return (
    <article className={cardStyle}>
      <div
        className="card"
        onMouseDown={handlePointerEvent}
        onTouchStart={handlePointerEvent}
      >
        <img src={img} alt="project img" />
        <div className="projectItem__info">
          <h3 className="title">{title}</h3>
          <p className="skills">{skills}</p>
          <p className="summary">{summary}</p>

          <ButtonStyle>
            <button>
              <span>
                <i className="fa fa-github btn">View Code</i>
              </span>
            </button>
            <button>
              <i className="fas fa-external-link-square-alt">View App</i>
            </button>
            {/* <a href={github} target="blank" className="github"> */}
            {/* <FaIcons.FaGithubSquare size={50} color="#000" /> */}
            {/* </a> */}
            {/* <a href={deployed} className="projectItem__deployed" target="blank"> */}
            {/* <FaIcons.FaExternalLinkSquareAlt size={50} color="#000" /> */}
            {/* </a> */}
          </ButtonStyle>
        </div>
      </div>
    </article>
  );
};

export default Card;
