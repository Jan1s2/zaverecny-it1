import React from "react";
import knife from "./img/knife.webp";
import pistols from "./img/pistols.jpg";
import shotguns from "./img/shotguns.webp";
import smgs from "./img/smgs.webp";
import assault from "./img/assault.webp";
import sniper from "./img/sniper.webp";
import machine from "./img/machine.webp";

import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Nav from "react-bootstrap/Nav";

import Button from "react-bootstrap/Button";

import Image from "react-bootstrap/Image";

function Weapons() {
  return (
    <Container fluid className="p-3 bg-black-50 text-start">
      <Row className="mx-5 px-3">
        <Col md={5} lg={2}>
          <Nav className="flex-column">
            <Nav.Link href="#melee" className="border">
              <Button>Nůž</Button>
            </Nav.Link>
            <Nav.Link href="#pistols" className="border">
              <Button>Pistole</Button>
            </Nav.Link>
            <Nav.Link href="#shotguns" className="border">
              <Button>Brokovnice</Button>
            </Nav.Link>
            <Nav.Link href="#smg" className="border">
              <Button>SMG</Button>
            </Nav.Link>
            <Nav.Link href="#rifle" className="border">
              <Button>Pušky</Button>
            </Nav.Link>
            <Nav.Link href="#machine" className="border">
              <Button>Kulomety</Button>
            </Nav.Link>
          </Nav>
        </Col>
        <Col md={7} lg={10}>
          <Row className="mb-3">
            <Col lg={9}>
              <h1 id="melee">Nože</h1>
              <p>
                Jedinou zbraní pro boj zblízka ve hrách Counter-Strike je
                základní nůž. Nůž funguje pouze na velmi krátkou vzdálenost, ale
                je neuvěřitelně smrtící a vydává málo hluku.
              </p>
              <p>
                Na levém tlačítku myši je rychlý, ale slabý útok. Na pravém
                pomalý, ale silný. Útok zezadu pravým tlačítkem je{" "}
                <b>vždy smrtící</b>.
              </p>
            </Col>
            <Col lg={3}>
              <Image src={knife} alt="knife" fluid rounded />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col lg={9}>
              <h1 id="pistols">Pistole</h1>
              <p>
                <b>Pistole</b> jsou sekundární zbraně v sérii Counter-Strike a
                zároveň první zbraně, které lze použít na začátku zápasu nebo po
                opětovném oživení po smrti.
              </p>
              <p>
                Obecně jsou pistole ve srovnání s primárními zbraněmi slabé a
                mají malou kapacitu zásobníku.
              </p>
            </Col>
            <Col lg={3}>
              <Image src={pistols} alt="pistols" fluid rounded />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col lg={9}>
              <h1 id="shotguns">Brokovnice</h1>
              <p>
                <b>Brokovnice</b> jsou typem primární zbraně v sérii
                Counter-Strike. Namísto jediné zásahové střely vystřelují
                několik zásahových kulek v jednom výstřelu, které dohromady
                způsobují vysoké poškození. Kulky v jednom výstřelu jsou
                rozptýlené a šíří se na dálku, což omezuje jejich účinnost na
                blízkou vzdálenost. Jsou poměrně levné, stojí méně než většina
                pušek.
              </p>
              <p>
                Oproti ostatním zbraním je u nich <b>vysoká odměna za zabití</b>
                .
              </p>
            </Col>
            <Col lg={3}>
              <Image src={shotguns} alt="shotguns" fluid rounded />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col lg={9}>
              <h1 id="smg">SMG</h1>
              <p>
                SMG, zkratka pro samopal, je typ primární zbraně v sérii
                Counter-Strike. Jsou velmi levné, jejich cena se pohybuje pod
                2500 USD.
              </p>
              <p>
                {" "}
                Většina samopalů má rychlou střelbu, malé nebo žádné snížení
                rychlosti a nízký až střední zpětný ráz, takže jsou velmi vhodné
                pro boj na krátkou vzdálenost. Bohužel jsou samopaly na dlouhou
                vzdálenost překonány puškami, protože ty způsobují větší
                poškození, mají lepší průbojnost pancíře, menší pokles poškození
                a jsou přesnější. Přesto jsou stále užitečné pro týmy s
                nedostatkem peněz.
              </p>
            </Col>
            <Col lg={3}>
              <Image src={smgs} alt="smg" fluid rounded />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col lg={9}>
              <h1 id="rifle">Pušky</h1>
              <h2>Útočné pušky</h2>
              <p>
                Útočné pušky jsou typem primární zbraně v sérii Counter-Strike.
                Útočné pušky, které se objevují v sérii Counter-Strike, jsou
                poměrně drahé zbraně s velmi vysokým poškozením a zpětným rázem,
                ale mají relativně sníženou rychlost. Většina útočných pušek je
                vybavena pro boj s nepřátelskými bojovníky na střední až velkou
                vzdálenost. Některé útočné pušky mají jedinečné vlastnosti, jako
                je například možnost střelby dávkou u pušky FAMAS a odnímatelný
                tlumič u pušky M4A1.
              </p>
              <h2>Odstřelovací pušky</h2>
              <p>
                Odstřelovací pušky, jak už jejich název napovídá, jsou určeny
                pro boj na extrémní vzdálenosti. V sérii Counter-Strike existují
                dva typy odstřelovačských pušek: odstřelovačské pušky se šroubem
                a plně automatické pušky (přezdívané auto-odstřelovačky). První
                z nich způsobují velké poškození za cenu potrestání nepřesných
                uživatelů, ale druhé mají rychlejší střelbu na úkor nižšího
                poškození.
              </p>
              <p>
                Zajímavostí je, že běh s SSG-08 je stejně rychlý jako s Desert
                Eaglem a rychlejší než s R8 Revolverem
              </p>
            </Col>
            <Col lg={3}>
              <Row>
                <Image src={assault} alt="assault" fluid rounded />
              </Row>
              <Row>
                <Image src={sniper} alt="sniper" fluid rounded />
              </Row>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col lg={9}>
              <h1 id="machine">Kulomety</h1>
              <p>
                Kulomety jsou typem primární zbraně v sérii Counter-Strike. Jsou
                určeny pro obranný nebo potlačovací boj, jsou to extrémně těžké
                a zpravidla drahé zbraně s rychlou střelbou a velkým zásobníkem.
              </p>
            </Col>
            <Col lg={3}>
              <Image src={machine} alt="machine" fluid rounded />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Weapons;
