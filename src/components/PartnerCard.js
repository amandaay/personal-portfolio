import { Col } from 'react-bootstrap';
export const PartnerCard = ({ title, description, url }) => {
  return (
    <Col>
      <div className="partner-bx">
        <a href={url}>
          <h5>{title}</h5>
        </a>
        <span>{description}</span>
        <br />
      </div>
    </Col>
  );
};
