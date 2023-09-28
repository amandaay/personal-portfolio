import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ['Software Engineer', 'Pharmacist'];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fateIn' : ''
                  }
                >
                  <span className="tagline"> Welcome to my Portfolio</span>
                  <h1>
                    {`Hi, I'm Amanda, a `}
                    <span>{text}</span>
                  </h1>
                  <p>
                    I am currently pursuing a Master’s degree in Computer
                    Science. I received my Doctorate degree in Pharmacy and
                    completed clinical rotations, and I worked as a pharmacist
                    previously. I have a strong desire to see advancements in
                    the tools that professionals use. I believe that medicine
                    and technology can work interdependently, and I am eager to
                    build the tools to engage in the cross intersections between
                    healthcare and tech. My goal is to find an opportunity in
                    this field to make a difference by engineering the tools we
                    use. I gained experience via building projects as displayed
                    on my github and worked for a non-profit organization. In
                    this past summer, I had the opportunity to intern at Amazon,
                    where I have honed in skills to grow as a software engineer.
                    I built projects collaboratively and independently. As I am
                    highly adaptable, I am open to any opportunities in tech
                    that involves with or without healthcare to further develop
                    my skills in tech.
                  </p>
                  <button onClick={() => console.log('connect')}>
                    Let's connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Headder Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
