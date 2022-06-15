import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import banner from './img/banner.png';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from 'react-bootstrap/Image'

function Home() {
  return (
    <Container fluid className="p-3 bg-black-50 text-start">
      <Row className="mx-5 px-3">
        <Col lg={7}>
          <p>
            Counter-Strike: <strong>Global Offensive</strong> (zkráceně CS:GO)
            je počítačová <strong>online FPS</strong> (First Person Shooter,
            česky střílecí hra z první osoby). Hru vyvinulo Valve ve spolupráci
            s Hidden Path Entertainment. Hra navazuje na předchozí verze hry
            Counter-Strike.[1] Je to v pořadí již čtvrtá hra ze série
            Counter-Strike.
          </p>
          <p>
            Hra byla vydána 21. srpna 2012 k dispozici na <strong>Windows</strong>, OS X a na
            platformách Steam, Xbox Live Arcade. Verze pro Linux byla vydána v
            září 2014. Obsahuje například předělané verze klasických map, ale
            také úplně nové mapy, postavy a herní módy. Multiplatformní
            multiplayer byl původně plánován pro Windows, OS X a PSN, ale
            nakonec byl umožněn pouze pro Windows a OS X. PSN verze nabízí tři
            metody ovládání: ovladač DualShock 3, PlayStation Move nebo <b>USB
            klávesnici/myš</b>. Aktualizace, která byla vydána 6. prosince 2018,
            umožnila hru hrát jako free to play zdarma. Uživatelé, kteří hru
            zakoupili před tímto datem, mají možnost získat, po ověření svého
            účtu, status "Prime", který jim umožňuje hrát na serverech
            vyhrazených pro hráče s tímto statusem a získat pozici v systému
            ranků (hodnocení hráčů dle jejich schopností ve hře). Status “Prime”
            je dostupný i pro nové hráče, ale ti si ho musí zakoupit nebo
            dosáhnout určitého levelu. Navíc nová verze představila režim battle
            royale nazvaný "<strong>Danger Zone</strong>".
          </p>
        </Col>
        <Col lg={5}>
            <Image src={banner} alt="Banner" fluid rounded />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
