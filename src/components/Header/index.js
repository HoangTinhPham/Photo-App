import { Container, Col, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header() {
    return ( 
        <header className="header">
            <Container>
                <Row className="justify-content-between">
                    <Col xs="auto">
                        <a 
                        className="header__link header__title"
                        href="https://www.google.com/"
                        target="_blank"
                        rel="noreferrer"
                        >
                            Photos App
                        </a>
                    </Col>
                    <Col xs="auto">
                        <NavLink 
                            to="/photos"
                            className={(navData) => navData.isActive ? "header__link--active" : "header__link" }
                        >
                            Redux Project
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
     );
}

export default Header;