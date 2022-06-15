import React from 'react';
import './NoPage.css';

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

function NoPage() {
  return (
    <Container fluid className="p-0 m-0 bg-danger align-items-center justify-content-center">
          <h1>404 Error</h1>
          <p>Requested site does not exist</p>
    </Container>
  );
}

export default NoPage;
