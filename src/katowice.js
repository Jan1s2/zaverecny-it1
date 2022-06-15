import React from "react";
import "./katowice.css"

import tournament from "./img/katowice.jpg"

import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "react-bootstrap/Image";
import Table from 'react-bootstrap/Table';

function Katowice() {
  return (
    <Container fluid className="p-3 bg-black-50 text-start">
      <Row className="mx-5 px-3 justify-content-md-center">
        <Col lg={9}>
          <h1>Katowice 2019</h1>
          <p>
            <strong>Intel Extreme Masters Season XIII - Katowice Major 2019</strong> byl 14.
            ročníkem turnaje ve hře Counter-Strike sponzorovaného společností
            Valve: Global Offensive Major Championship a první Major roku 2019.
            Turnaj nabízí stejně jako předchozí Majory prize pool ve výši 1 000
            000 USD a 24 týmů. Pozoruhodně jej také pořádala společnost ESL.
            Touto událostí byla zahájena nová sezóna Intel Grand Slam.
          </p>
        </Col>
        <Col lg={2}>
          <Image src={tournament} alt="Katowice" fluid rounded />
        </Col>
      </Row>
      <Row className="mt-2 mx-5 px-3 justify-content-md-center">
        <Col lg={7}>
        <Table striped bordered hover>
          <thead>
              <tr>
                  <th>#</th>
                  <th>USD</th>
                  <th>Team</th>
              </tr>
              </thead>
              <tbody>
                  <tr className="first">
                  <td>1.</td>
                  <td>500 000</td>
                  <td>Astralis</td>
                  </tr>
                  <tr className="second">
                  <td>2.</td>
                  <td>150 000</td>
                  <td>ENCE</td>
                  </tr>
                  <tr className="third">
                  <td rowspan={2}>3.-4.</td>
                  <td rowspan={2}>70 000</td>
                  <td>ENCE</td>
                  </tr>
                  <tr className="third">
                      <td>MIBR</td>
                  </tr>
              </tbody>
              </Table>

        </Col>
    </Row>
    </Container>
  );
}

export default Katowice;
