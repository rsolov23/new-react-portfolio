import * as FaIcons from "react-icons/fa";
const Card = ({
  handlePointerEvent,
  title,
  desc,
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
          <h3 className="projectItem__title">{title}</h3>
          <p className="projectItem__desc">{desc}</p>
          <p className="projectItem__skills">{skills}</p>
          <p className="projectItem__summary">{summary}</p>
          <a href={github} target="blank" className="projectItem__github">
            {" "}
            <FaIcons.FaGithubSquare size={50} color="#000" />
          </a>
          <a href={deployed} className="projectItem__deployed" target="blank">
            <FaIcons.FaExternalLinkSquareAlt size={50} color="#000" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default Card;
