import React from "react";
import { Document, Page } from "react-pdf";
// import Particle from "./Particle";
import { ResumeStyle } from "../../styles/ResumeStyles";
import { PaperStyle } from "../../styles/ResumeStyles";
export default function Resume() {
  return (
    <ResumeStyle>
  
      <PaperStyle>
        <h1>RACHEL SOlOV</h1>
        <p>
          Cedar Park, TX 78613 | Phone: 830.385.6947 | Email:
          rachelswebdev@gmail.com
        </p>
        <p>
          LinkedIn: https://linkedin.com/in/rachel-solov-80bb3a174 | GitHub:
          https://github.com/rsolov23
        </p>

        <p>Portfolio: https://rachels-webdev.herokuapp.com/</p>
        <h4>Summary</h4>
        <p>
          Dependable and dynamic Full Stack Web Developer with over ten years of
          leadership experience. In the University of Texas Coding Bootcamp I
          worked with a team to develop a MERN Stack application to help connect
          people experiencing homelessness with community resources. Proficient
          in React, CSS, HTML, Javascript, Express, MongoDb and MySQL. Seeking a
          position to utilize my deep-rooted passion for learning as a motivated
          self-starter who is detail oriented, excels in critical thinking and
          has a knack for problem solving.
        </p>
        <h4>
          <strong>Technical Skills</strong>
        </h4>
        <p>
          <strong>Languages:</strong> HTML, CSS, JavaScript
        </p>
        <p>
          <strong>Frameworks:</strong> React JS, Express JS, Node JS
        </p>
        <p>
          <strong>Libraries:</strong> Bootstrap, Chakra UI, Bulma, jQuery
        </p>
        <h4>
          <strong>Projects</strong>
        </h4>
        <p>
          <strong>Helping Hands |Link: </strong>{" "}
          https://helping-hands-deux.herokuapp.com/
        </p>
        <p>
          <strong>Github:</strong> https://github.com/rsolov23/helping-hands{" "}
        </p>
        <ul>
          <li>
            {" "}
            ◆ Helping Hands is an app to serve the less fortunate through grass
            roots efforts of engaged community members
          </li>
          <li> ◆ Project Manager and led Front End Development</li>
          <li> ◆ React, GraphQL, Express, MongoDB, Mongoose, Chakra UI</li>
        </ul>
        <p>
          <strong>Jot It | Link: </strong> https://jotitgood.herokuapp.com/
        </p>
        <p>
          <strong>Github:</strong>https://github.com/rsolov23/Jot-It
        </p>
        <ul>
          <li>
            ◆ Jot It is a note taking app with the option to edit, save and
            delete any notes
          </li>
          <li>◆ Led Back End Development</li>
          <li>
            ◆ JavaScript, Handlebars, Bootstrap, Sequelize, Express, MySql2
          </li>
        </ul>
        <p>
          <strong>Gaminator | Link: </strong>{" "}
          https://rsolov23.github.io/Gaminator/
        </p>
        <p>
          <strong>Github:</strong>https://github.com/rsolov23/Gaminator
        </p>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        {/* <a
          align="center"
          id="download"
          href={require(`./test.pdf`).default}
          download="test.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <button className="name noselect">Download</button>
        </a> */}
      </PaperStyle>
    </ResumeStyle>
  );
}
