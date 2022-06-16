import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import { Outlet } from "react-router-dom";


import { LinkContainer } from 'react-router-bootstrap'

function App() {
    return (
        <div className="App">
            <Container fluid>
                <Row>
                    <Navbar expand="lg" bg="secondary">
                        <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse>
                            <Row>
                                <Col>
                                    <Navbar.Brand>
                                        CSGO Test site
                                    </Navbar.Brand>
                                </Col>
                                <Col>
                                    <LinkContainer to="/zaverecny-it1">
                                        <Button>Domů</Button>
                                    </LinkContainer>
                                </Col>
                                <Col>
                                    <LinkContainer to="/zaverecny-it1/weapons">
                                        <Button>Zbraně</Button>
                                    </LinkContainer>
                                </Col>
                                <Col>
                                    <LinkContainer to="/zaverecny-it1/maps">
                                        <Button>Mapy</Button>
                                    </LinkContainer>
                                </Col>
 {/*                              <Col>
                                    <LinkContainer to="/modes">
                                        <Button>Modes</Button>
                                    </LinkContainer>
                                </Col>
    */}
                                <Col>
                                    <LinkContainer to="/zaverecny-it1/katowice">
                                        <Button>Katowice</Button>
                                    </LinkContainer>
                                </Col>
                                <Col>
                                    <LinkContainer to="/zaverecny-it1/quiz">
                                        <Button>Quiz</Button>
                                    </LinkContainer>
                                </Col>
                            </Row>
                            </Navbar.Collapse>
                        </Container>

                    </Navbar>
                </Row>
                <Row className="main">
                <Outlet />
                </Row>
                <Row>
        <hr />
        <Col lg={12} className="text-muted p-3">&copy; Jan Stránský (<a href="https://github.com/Jan1s2/zaverecny-it1" className="link-secondary">GitHub</a>)</Col>
        </Row>
            </Container>
        </div>
    );
}

export default App;
