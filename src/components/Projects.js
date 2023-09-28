import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img1.png';
import projImg3 from '../assets/img/project-img3.png';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { isVisible } from '@testing-library/user-event/dist/utils';

export const Projects = () => {
  const projects = [
    {
      title: 'Socket Programming',
      description:
        'Designed and implemented a Java-based TCP/IP socket client-server application for text manipulation, showcasing strong networking and • coding abilities.',
      imgUrl: projImg1,
    },
    {
      title: 'Web Crawler App',
      description:
        'Led a team of 3 members to develop a Python-based web crawler for a simulated social networking website, efficiently handling various HTTP protocols and status codes with custom socket connections and HTTP request code.',
      imgUrl: projImg2,
    },
    {
      title: 'Tutor Matching App',
      description:
        'Spearheaded a development of MongoDB, Express.js, React, Node.js (MERN) application (https://tutormatchapp.onrender.com/) enabling • user-tutor matching, with Passport.js authentication and MongoDB schema integration handling > 1k records for data persistence.',
      imgUrl: projImg3,
    },
    {
      title: 'Sudoku Game',
      description:
        'Developed a Java-based game with a test-driven approach, employing a backtracking algorithm for Sudoku board validation while utilizing the Model-View-Control (MVC) architecture, OOD principles, JUnit tests, and mock models to significantly enhance reliability.',
      imgUrl: projImg1,
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum numquam blanditiis harum
                    quisquam eius sed odit fugiat iusto fuga praesentium optio,
                    eaque rerum!
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
                        <Nav.Link eventKey="second">Computer Networking</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Distributed System</Nav.Link>
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
                      <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>
                      <Tab.Pane eventKey="third">Loren Ipsum</Tab.Pane>
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
