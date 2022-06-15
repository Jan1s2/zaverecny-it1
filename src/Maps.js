import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function Maps() {
  return (
    <Container fluid className="p-3 bg-black-50 text-start">
      <Row className="mx-5 px-3 justify-content-md-center">
        <Col lg={9}>
            <h1>Záchrana rukojmí (cs)</h1>
          <p>
          Mapy klasifikované jako scénář Záchrana rukojmích mají protiteroristé za úkol zlikvidovat teroristy nebo zachránit alespoň polovinu rukojmích. Dřívější hry měly na mapách se záchranou rukojmích nejméně 4 rukojmí, ale tento počet byl ve hře Counter-Strike snížen na 2: Global Offensive. Teroristé mohou vyhrát, pokud časovač kola vyprší dříve, než je zachráněn dostatečný počet rukojmích, nebo pokud zlikvidují protiteroristy dříve, než je zachráněn dostatečný počet rukojmích.

          </p>
        </Col>
      </Row>
      <Row className="mx-5 px-3 justify-content-md-center">
        <Col lg={9}>
            <h1>Arms Race (ar)</h1>
          <p>
          Mapy klasifikované jako scénář Arms Race jsou mapy ve stylu týmového deathmatche, ve kterých hráč nemůže zakoupit žádné zbraně, ale místo toho musí postupovat přes zbraně ve hře zabíjením protivníků, dokud nedosáhne finálního zabití zlatým nožem.
          </p>
        </Col>
      </Row>
      <Row className="mx-5 px-3 justify-content-md-center">
        <Col lg={9}>
            <h1>Demolice (ar)</h1>
          <p>
          Mapy klasifikované jako scénář Demolice jsou podobné mapám typu Bomb Defusal, s tím rozdílem, že mají pouze jedno místo s bombou na podstatně menší mapě. Místo získávání peněz za splnění cílů jsou hráči v každém kole odměňováni novými zbraněmi za likvidaci alespoň jednoho hráče z týmu soupeře.

          </p>
        </Col>
      </Row>
      <Row className="mx-5 px-3 justify-content-md-center">
        <Col lg={9}>
            <h1>Nebezpečná zóna (dz)</h1>
          <p>
          V mapách zařazených do scénáře Nebezpečná zóna se hráči snaží přežít z, opět, Nebezpečné zóny. V současné době jsou pro tento režim k dispozici 3 mapy: V nabídce jsou dvě mapy: Blacksite, Sirocco a County. Režim byl poprvé zařazen do aktualizace Welcome to the Danger Zone spolu s přechodem hry CS:GO na free-to-play. 
                    </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Maps;
