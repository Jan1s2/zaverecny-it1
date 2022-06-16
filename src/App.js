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
                        </Container>

                    </Navbar>
                </Row>
                <Row className="main">
                <Outlet />
                </Row>

            </Container>
        </div>
    );
}

export default App;
