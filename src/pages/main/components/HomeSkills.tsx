import { Badge, Container, Row, Col } from "react-bootstrap";
import { technologies } from '../../../constants/mainConstants';
import '../styles/home_skills.css';

const HomeSkills = () => {
    return (
        <Container className="Skills">
            <h2>Technologies</h2>
            <Row className="badge-row">
                {technologies.slice(0, 5).map((technology) => (
                    <Col>
                        <Badge pill bg="secondary" key={technology.name}>
                            <img src={technology.icon} alt={technology.name} />
                            {technology.name}
                        </Badge>
                    </Col>
                ))}
            </Row>
            <Row className="badge-row">
                {technologies.slice(5, 10).map((technology) => (
                    <Col >
                        <Badge pill bg="secondary" key={technology.name}>
                            <img src={technology.icon} alt={technology.name} />
                            {technology.name}
                        </Badge>
                    </Col>
                ))}
            </Row>
            <Row className="badge-row">
                {technologies.slice(10, 14).map((technology) => (
                    <Col>
                        <Badge pill bg="secondary" key={technology.name}>
                            <img src={technology.icon} alt={technology.name} />
                            {technology.name}
                        </Badge>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default HomeSkills;