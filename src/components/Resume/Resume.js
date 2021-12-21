import React from "react";
import { Document, Page } from "react-pdf";
// import Particle from "./Particle";
import { ResumeStyle } from "../../styles/ResumeStyles";
import { PaperStyle } from "../../styles/ResumeStyles";
import { AlignLeftStyle } from "../../styles/ResumeStyles";
import { ButtonStyle } from "../../styles/ResumeStyles";

export default function Resume() {
  return (
    <ResumeStyle>
      <ButtonStyle>
        <a
          align="center"
          id="download"
          href={require(`./test.pdf`).default}
          download="test.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <button className="name noselect">Download</button>
        </a>
      </ButtonStyle>
      <PaperStyle>
        <h1>RACHEL SOLOV</h1>
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
          leadership experience. In the University of Texas
        </p>
        <p>
          {" "}
          Coding Bootcamp I worked with a team to develop a MERN Stack
          application to help connect people experiencing
        </p>
        <p>
          {" "}
          homelessness with community resources. Proficient in React, CSS, HTML,
          Javascript, Express, MongoDb and MySQL.
        </p>
        <p>
          {" "}
          Seeking a position to utilize my deep-rooted passion for learning as a
          motivated self-starter who is detail oriented, excels in
        </p>
        <p> critical thinking and has a knack for problem solving.</p>
        <h4>
          <strong>Technical Skills</strong>
        </h4>
        <AlignLeftStyle>
          <p>
            <strong>Languages:</strong> HTML, CSS, JavaScript
          </p>
          <p>
            <strong>Frameworks:</strong> React JS, Express JS, Node JS
          </p>
          <p>
            <strong>Libraries:</strong> Bootstrap, Chakra UI, Bulma, jQuery
          </p>
        </AlignLeftStyle>
        <h4>
          <strong>Projects</strong>
        </h4>
        <AlignLeftStyle>
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
              ◆ Helping Hands is an app to serve the less fortunate through
              grass roots efforts of engaged community members
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
            <li>
              ◆ Gaminator is a tool that will help those who have little to no
              experience playing video games to find the
            </li>
            <li>right type of game for them to enjoy</li>
            <li>◆ Project Manager and led Front End Development</li>
            <li>◆ HTML, CSS, JavaScript, REST API</li>
          </ul>
        </AlignLeftStyle>
        <h4>
          <strong>Experience</strong>
        </h4>
        <AlignLeftStyle>
          <p>
            <strong>R&R Property Services: Co-Owner</strong> Cedar Park, TX May
            2018-Present
          </p>
          <p>
            Managed a team that provided property services ranging from vacation
            rental management to cleaning{" "}
          </p>
          <p>services in Austin and surrounding areas.</p>
          <ul>
            <li>◆ Led hiring process and training of subcontractors</li>
            <li>
              ◆ Managed and monitored development of schedules for all employees
            </li>
            <li>
              ◆ Maintained a 100% customer satisfaction rating by providing
              quality customer service in a timely manner,
            </li>
            <li>ensuring client retention and company standards</li>
          </ul>
          <p>
            <strong>
              Trilogy Education(Full Stack Boot Camp): University of Texas-
              Teacher Assistant
            </strong>
            November 2021-Present
          </p>
          <ul>
            <li>◆ Support Instructor and fellow TA’s during lectures</li>
            <li>
              ◆ Answer students questions during class, break-out sessions and
              during office hours by articulating clear and{" "}
            </li>
            <li> thorough responses that support student’s needs</li>
          </ul>
        </AlignLeftStyle>
        <h4>
          <strong>Education</strong>
        </h4>
        <AlignLeftStyle>
          <p>
            <strong>Full Stack Coding Bootcamp Certificate:</strong>University
            of Texas at Austin, August 2021
          </p>
          <p>
            An intensive 24 week long boot camp where I acquired the knowledge
            and skills to build dynamic end-to-end web
          </p>
          <p> applications.</p>
        </AlignLeftStyle>
      </PaperStyle>
    </ResumeStyle>
  );
}
