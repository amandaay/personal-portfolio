import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import projImg1 from '../assets/img/project-img1.png';
import projImg3 from '../assets/img/project-img3.png';
import startsFoundation from '../assets/img/startsFoundation.png';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: 'Starts Foundation',
      description:
        'Worked on a non-profit organization in a team of 6 to develop a JAMstack responsive website (https://startsfoundation.org/) using Sanity, React.js, Express.js, Gatsby, and GraphQL by leveraging database querying to display up-to-date projects.',
      imgUrl: startsFoundation,
      url: 'https://github.com/amandaay/StartsFoundation',
    },
    {
      title: 'Tutor Matching App',
      description:
        'Spearheaded a development of MongoDB, Express.js, React, Node.js (MERN) application (https://tutormatchapp.onrender.com/) enabling user-tutor matching, with Passport.js authentication and MongoDB schema integration handling > 1k records for data persistence.',
      imgUrl: projImg3,
      url: 'https://github.com/amandaay/Tutor-Match-App',
    },
    {
      title: 'Career Helper App',
      description:
        'Led and collaborated to construct a full stack web application (https://career-helper-app.herokuapp.com/) for users to track job application status; Created the frontend employing HTML, CSS, JavaScript, supported the backend with Node.js, Express.js; Integrated MongoDB schema for data persistence to validate user, store user profile and job tracking interface',
      imgUrl: projImg1,
      url: 'https://github.com/amandaay/Career_Helper_App',
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here are some projects I completed⚙️
                    <a href="https://drive.google.com/file/d/16LuGnMVvyJkqEyUIqL-PwRRohvxKPqCW/view?usp=sharing">
                      <h3>Resume</h3>
                    </a>
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Applications</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          Distributed System & Network
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Others</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          <a
                            href="
                        https://github.com/amandaay/webcrawler"
                          >
                            Web Crawler Application: Led a team of 3 members to
                            develop a Python-based web crawler for a simulated
                            social networking website, efficiently handling
                            various HTTP protocols and status codes with custom
                            socket connections and HTTP request code.
                          </a>
                        </p>
                        <p>
                          <a href="https://github.com/amandaay/SocketProgramming">
                            Socket Programming: 'Designed and implemented a
                            Java-based TCP/IP socket client-server application
                            for text manipulation, showcasing strong networking
                            and coding abilities.
                          </a>
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          <a href="https://github.com/amandaay/sudoku">
                            Sudoku Game: Developed a Java-based game with a
                            test-driven approach, employing a backtracking
                            algorithm for Sudoku board validation while
                            utilizing the Model-View-Control (MVC) architecture,
                            OOD principles, JUnit tests, and mock models to
                            significantly enhance reliability.
                          </a>
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
