import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
// import banner from '../assets/img/banner.jpg';
import profilePic from '../assets/img/profilePic.jpg';
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
                    Yes, I spent my 20s pursuing two different careers just like
                    people who have various hobbies! 🤪 Now, I'm immersed in
                    Software Engineering, pursuing a Computer Science degree 👩🏻‍💻
                    alongside a Pharm.D. with clinical experience 👩🏻‍⚕️💊💉.
                    <br />
                    <br />
                    While my passion comes from the idea of bridging tech and
                    healthcare, I enjoy how engineering became a creative outlet
                    for me. It allows me to build products for people to use,
                    evident in my Github. Last summer, I interned at Amazon to
                    refine my skills 💼, focusing on a distributed system.
                    Adaptability drives me to explore diverse tech opportunities
                    🚀.
                    <br />
                    <br />
                    Beyond work, I enjoy 🩰 dancing, 🧘🏻‍♀️ yoga, 🏸 badminton, and
                    🗺️ traveling. I'm a local dancer in the Bay Area, part of
                    Montage Contemporary Dance Company 💃. Come see us if you're
                    interested!👯‍♀️
                  </p>

                  <button onClick={() => console.log('connect')}>
                    Let's connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={profilePic} alt="Headder Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
