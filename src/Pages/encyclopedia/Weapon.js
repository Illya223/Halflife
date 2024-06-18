import React, {Component} from 'react';
import { Container,Card, Row, Col, Button  } from 'react-bootstrap';
import Crowbar from "./weapon/монтировка.png";
import Glock from "./weapon/Glockw.jpg";
import Colt from "./weapon/357_HL_world_model.jpg";
import Mp5 from "./weapon/Mp5w.jpg";
import Spas12 from "./weapon/Shotgunw_1.jpg";
import Arb from "./weapon/Crossbow_1.jpg";
import Granade from "./weapon/Grenade_1.jpg";
import Mine from "./weapon/Tripmine_world.png";
import Rpg from "./weapon/Rpg_world_hd.jpg";
import Tauweapon from './weapon/Hl_tau.jpg';
import Gluon from './weapon/Gluon_w.jpg';
import Armley from './weapon/Hivehand_w.jpg';
import Snark from './weapon/Snark_w.jpg';


export default class Weapon extends Component{
    render(){
        return(
            <div>
                <Container className="m-4">


<Row>
  <Col>
        <Card border="success">
          <h1 className="text-center m-4">Монтировка </h1>
          <Card.Img src={Crowbar}>

          </Card.Img>
          <Card.Body>
            <Button variant="dark" href="/pages/encyclopedia/weapon/crowbar1">
              Перейти
            </Button>
          </Card.Body>
        </Card>
  </Col>
  <Col>
        <Card>
          <h1 className="text-center m-4">Пистолет</h1>
          <Card.Img src={Glock}></Card.Img>
          <Card.Body>
            <Button variant='dark' href="/pages/encyclopedia/weapon/glock">Перейти</Button>
          </Card.Body>
        </Card>
  </Col>
</Row>

<Row>
  <Col>
        <Card border="success">
          <h1 className="text-center m-4">Colt Python </h1>
          <Card.Img src={Colt}>

          </Card.Img>
          <Card.Body>
            <Button variant="dark" href="/pages/encyclopedia/weapon/colt1">
              Перейти
            </Button>
          </Card.Body>
        </Card>
  </Col>
  <Col>
        <Card>
          <h1 className="text-center m-4">MP5</h1>
          <Card.Img src={Mp5}></Card.Img>
          <Card.Body>
            <Button variant='dark' href="/pages/encyclopedia/weapon/mp5">Перейти</Button>
          </Card.Body>
        </Card>
  </Col>
</Row>

<Row>
  <Col>
        <Card border="success">
          <h1 className="text-center m-4">SPAS-12 </h1>
          <Card.Img src={Spas12}>

          </Card.Img>
          <Card.Body>
            <Button variant="dark" href="/pages/encyclopedia/weapon/spas12">
              Перейти
            </Button>
          </Card.Body>
        </Card>
  </Col>
  <Col>
        <Card>
          <h1 className="text-center m-4">Арбалет</h1>
          <Card.Img src={Arb}></Card.Img>
          <Card.Body>
            <Button variant='dark' href="/pages/encyclopedia/weapon/arb">Перейти</Button>
          </Card.Body>
        </Card>
  </Col>
</Row>

<Row>
  <Col>
        <Card border="success">
          <h1 className="text-center m-4">Тау-пушка </h1>
          <Card.Img src={Tauweapon}>

          </Card.Img>
          <Card.Body>
            <Button variant="dark" href="/pages/encyclopedia/weapon/tauweapon">
              Перейти
            </Button>
          </Card.Body>
        </Card>
  </Col>
  <Col>
        <Card>
          <h1 className="text-center m-4">Глюонная пушка</h1>
          <Card.Img src={Gluon}></Card.Img>
          <Card.Body>
            <Button variant='dark' href="/pages/encyclopedia/weapon/gluon">Перейти</Button>
          </Card.Body>
        </Card>
  </Col>
</Row>

<Row>
  <Col>
        <Card border="success">
          <h1 className="text-center m-4">Рукоулей </h1>
          <Card.Img src={Armley}>

          </Card.Img>
          <Card.Body>
            <Button variant="dark" href="/pages/encyclopedia/weapon/armley">
              Перейти
            </Button>
          </Card.Body>
        </Card>
  </Col>
  <Col>
        <Card>
          <h2 className="text-center m-4">Ручной противотанковый гранатомёт</h2>
          <Card.Img src={Rpg}></Card.Img>
          <Card.Body>
            <Button variant='dark' href="/pages/encyclopedia/weapon/rpg">Перейти</Button>
          </Card.Body>
        </Card>
  </Col>
</Row>

<Row>
  <Col>
        <Card border="success">
          <h1 className="text-center m-4">Снарк </h1>
          <Card.Img src={Snark}>

          </Card.Img>
          <Card.Body>
            <Button variant="dark" href="/pages/encyclopedia/weapon/snark">
              Перейти
            </Button>
          </Card.Body>
        </Card>
  </Col>
  <Col>
        <Card>
          <h2 className="text-center m-4">Мины</h2>
          <Card.Img src={Mine}></Card.Img>
          <Card.Body>
            <Button variant='dark' href="/pages/encyclopedia/weapon/mine1">Перейти</Button>
          </Card.Body>
        </Card>
  </Col>
</Row>

<Row>
  <Col>
        <Card border="success">
          <h1 className="text-center m-4">Граната </h1>
          <Card.Img src={Granade}>

          </Card.Img>
          <Card.Body>
            <Button variant="dark" href="/pages/encyclopedia/weapon/granade1">
              Перейти
            </Button>
          </Card.Body>
        </Card>
  </Col>
  <Col>
        
          
  </Col>
</Row>
</Container>


            </div>
        )
    }
}