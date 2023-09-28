import { Row, Col, Container } from 'react-bootstrap';
import logo from '../assets/img/logo.png';
import { MailchimpForm } from './MailchimpForm';
import linkedinIcon from '../assets/img/linkedinIcon.svg';
import instagramIcon from '../assets/img/instagramIcon.svg';
import github from '../assets/img/github.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailchimpForm />
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/amandaaay/">
                <img src={linkedinIcon} alt="linkedin" />
              </a>
              <a href="https://github.com/amandaay">
                <img src={github} alt="github" />
              </a>
              <a href="https://www.instagram.com/amanda.aysm/">
                <img src={instagramIcon} alt="instagram" />
              </a>
            </div>
            <p>Copyright of 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
