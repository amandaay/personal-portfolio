import { Container, Row, Col } from 'react-bootstrap';
import { PartnerCard } from './PartnerCard';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Partners = () => {
  const partners = [
    {
      title: 'Capital One Venture X',
      description: 'Best Travel card that pays for itself:) ',
      url: 'https://i.capitalone.com/JEeKVZfjk',
    },
    {
      title: 'Chase Sapphire Preferred',
      description: 'Perfect Travel Card for points staggering',

      url: 'https://www.referyourchasecard.com/6j/FIDIIRYJPZ',
    },
    {
      title: 'Bilt',
      description: 'Earn Points while paying rent? Say less:)',
      url: 'https://bilt.page/r/PVXI-HI4B',
    },
  ];
  return (
    <section className="partner" id="partners">
      <Container>
        <h1>DEALS</h1>
        <h5>Discounts just for you</h5>
        <span>
          Here are some products that I believe in and hope it helps you too😚
        </span>
        <p>
          My family and friends are all around the world.👨‍👩‍👧‍👧
          <br />
          So I love seeing them by traveling around the world 🌍
          <br />
          Here is how I try to be good about maximizing my credit card
          points✈️💳
        </p>
        <p>Here are some cc I recommend in the US as for 2023.</p>
        <Row className="align-items-center row">
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  {partners.map((partner, index) => {
                    return <PartnerCard key={index} {...partner} />;
                  })}
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
