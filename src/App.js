import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import { Outlet, Link } from "react-router-dom";


import { LinkContainer } from 'react-router-bootstrap'

function App() {
    return (
        <div className="App">
            <Container fluid>
                <Row>
                    <Navbar expand="lg" bg="secondary">
                        <Container>
                            <Row>
                                <Col>
                                    <Navbar.Brand>
                                        CSGO Test site
                                    </Navbar.Brand>
                                </Col>
                                <Col>
                                    <LinkContainer to="/">
                                        <Button>Home</Button>
                                    </LinkContainer>
                                </Col>
                                <Col>
                                    <LinkContainer to="/weapons">
                                        <Button>Weapons</Button>
                                    </LinkContainer>
                                </Col>
                                <Col>
                                    <LinkContainer to="/maps">
                                        <Button>Maps</Button>
                                    </LinkContainer>
                                </Col>
                                <Col>
                                    <LinkContainer to="/modes">
                                        <Button>Modes</Button>
                                    </LinkContainer>
                                </Col>
                                <Col>
                                    <LinkContainer to="/about">
                                        <Button>About</Button>
                                    </LinkContainer>
                                </Col>
                                <Col>
                                    <LinkContainer to="/quiz">
                                        <Button>Quiz</Button>
                                    </LinkContainer>
                                </Col>
                            </Row>
                        </Container>

                    </Navbar>
                </Row>
                <Row className="main">
                <Outlet />
                </Row>
                <Row>
                        <Col lg={4}>
                            a 
                        </Col>
                        <Col lg={4}>
                            f
                        </Col>
                        <Col lg={4}>
                            fg
                        </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
