import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Form from "react-bootstrap/Form";

function Quiz() {
  return (
    <Container fluid className="p-3 bg-black-50 text-start">
      <Row className="mx-5 px-3 justify-content-md-center">
        <Col lg={9}>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Jmeno</Form.Label>
              <Form.Control type="text" placeholder="Napiste jmeno" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDeagle">
              <Form.Label>
                S jakou zbraní se běží stejně rychle jako s Desert Eaglem?
              </Form.Label>
              <Form.Select>
                <option>SSG-08</option>
                <option>AK-47</option>
                <option>R8 Revolver</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTable">
              <Form.Label>Vítěz IEM Katowice Major 2019</Form.Label>
              <Form.Control type="text" placeholder="Vítěz" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Quiz;
