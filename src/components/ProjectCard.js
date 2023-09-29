import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h5>{title}</h5>
          <a href={url}>
            <span>{description}</span>
          </a>
        </div>
      </div>
    </Col>
  );
};
