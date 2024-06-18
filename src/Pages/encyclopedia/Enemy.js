import React, {Component} from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import Sn from "./enemy/hecu-sniper.png";
import Tr from "./enemy/hecu-sentry.png";

export default class Enemy extends Component{
    render(){
        return(
            <div>
                
                           
                <Container className="m-4">


<Row>
  <Col>
        <Card border="success">
          <h1 className="text-center m-4">Барнакл </h1>
          <Card.Img src="https://i.ytimg.com/vi/-Kz9JtTyW1o/hqdefault.jpg">

          </Card.Img>
          <Card.Body>
            <Button variant="dark" href="/pages/encyclopedia/enemy/barnakl1">
              Перейти
            </Button>
          </Card.Body>
        </Card>
  </Col>
  <Col>
        <Card>
          <h1 className="text-center m-4">Хедкраб</h1>
          <Card.Img src="https://upload.wikimedia.org/wikipedia/ru/5/54/Headcrab.jpg"></Card.Img>
          <Card.Body>
            <Button variant='dark' href="/pages/encyclopedia/enemy/Headcrab1">Перейти</Button>
          </Card.Body>
        </Card>
  </Col>
</Row>
<Row>
  <Col>
        <Card border="success">
          <h1 className="text-center m-4">Зомби </h1>
          <Card.Img src="https://media.moddb.com/images/mods/1/22/21677/hlmv_2012-12-08_16-59-02-91.jpg">

          </Card.Img>
          <Card.Body>
            <Button variant="dark" href="/pages/encyclopedia/enemy/zombie1">
              Перейти
            </Button>
          </Card.Body>
        </Card>
  </Col>
  <Col>
        <Card>
          <h1 className="text-center m-4">Вортигонт</h1>
          <Card.Img src="https://i.ytimg.com/vi/RwtI1bLXSsg/hqdefault.jpg"></Card.Img>
          <Card.Body>
            <Button variant='dark' href="/pages/encyclopedia/enemy/vort1">Перейти</Button>
          </Card.Body>
        </Card>
  </Col>
</Row>
<Row>
  <Col>
        <Card border="success">
          <h1 className="text-center m-4">Пехотинец пришельцев </h1>
          <Card.Img src="https://cdna.artstation.com/p/assets/images/images/044/713/534/large/rachel-montero-hlmv-vdvrt1xpk0.jpg?1640915327">

          </Card.Img>
          <Card.Body>
            <Button variant="dark" href="/pages/encyclopedia/enemy/troopervort">
              Перейти
            </Button>
          </Card.Body>
        </Card>
  </Col>
  <Col>
        <Card>
          <h1 className="text-center m-4">Ихтиозавр</h1>
          <Card.Img src="https://i.ytimg.com/vi/bUphpZ5kpHA/hqdefault.jpg"></Card.Img>
          <Card.Body>
            <Button variant='dark' href="/pages/encyclopedia/enemy/ihtyozavr">Перейти</Button>
          </Card.Body>
        </Card>
  </Col>
</Row>

<Row>
  <Col>
        <Card border="success">
          <h1 className="text-center m-4">Контроллер пришельцев </h1>
          <Card.Img src="https://i.ytimg.com/vi/0x6hvs2Htog/hqdefault.jpg">

          </Card.Img>
          <Card.Body>
            <Button variant="dark" href="/pages/encyclopedia/enemy/controler">
              Перейти
            </Button>
          </Card.Body>
        </Card>
  </Col>
  <Col>
        <Card>
          <h1 className="text-center m-4">Буллсквид</h1>
          <Card.Img src="https://media.sketchfab.com/models/f145e7511e114f7181c8a49255d747e8/thumbnails/0f43caaf800f47848d1beab9190b197e/41a89c94bc2249cb8a5b9443d02c729d.jpeg"></Card.Img>
          <Card.Body>
            <Button variant='dark' href="/pages/encyclopedia/enemy/bullskvid">Перейти</Button>
          </Card.Body>
        </Card>
  </Col>
</Row>

<Row>
  <Col>
        <Card border="success">
          <h1 className="text-center m-4">Гаргантюа </h1>
          <Card.Img src="https://i.ytimg.com/vi/6LbBqXnpc-M/hqdefault.jpg">

          </Card.Img>
          <Card.Body>
            <Button variant="dark" href="/pages/encyclopedia/enemy/gargantua">
              Перейти
            </Button>
          </Card.Body>
        </Card>
  </Col>
  <Col>
        <Card>
          <h1 className="text-center m-4">Гонарх</h1>
          <Card.Img src="https://i.playground.ru/p/P1NRHjkBwiuArrCwOFo_fQ.jpeg"></Card.Img>
          <Card.Body>
            <Button variant='dark' href="/pages/encyclopedia/enemy/gonarh">Перейти</Button>
          </Card.Body>
        </Card>
  </Col>
</Row>
<Row>
  <Col>
        <Card border="success">
          <h1 className="text-center m-4">Хаундай</h1>
          <Card.Img src="https://images.stopgame.ru/uploads/images/460587/form/2018/11/21/1542777219.jpg">

          </Card.Img>
          <Card.Body>
            <Button variant="dark" href="/pages/encyclopedia/enemy/haunday">
              Перейти
            </Button>
          </Card.Body>
        </Card>
  </Col>
  <Col>
        <Card>
          <h1 className="text-center m-4">Нихилант</h1>
          <Card.Img src="https://cs7.pikabu.ru/post_img/big/2018/02/25/9/1519572031199311115.jpg"></Card.Img>
          <Card.Body>
            <Button variant='dark' href="/pages/encyclopedia/enemy/nihilant">Перейти</Button>
          </Card.Body>
        </Card>
  </Col>
</Row>

<Row>
  <Col>
        <Card border="success">
          <h3 className="text-center m-4">Спецподразделение HECU</h3>
          <Card.Img src="https://i.ytimg.com/vi/3fhu72Ygghg/hqdefault.jpg">

          </Card.Img>
          <Card.Body>
            <Button variant="dark" href="/pages/encyclopedia/enemy/hecu">
              Перейти
            </Button>
          </Card.Body>
        </Card>
  </Col>
  <Col>
        <Card>
          <h1 className="text-center m-4">Снайпер HECU</h1>
          <Card.Img src={Sn}></Card.Img>
          <Card.Body>
            <Button variant='dark' href="/pages/encyclopedia/enemy/sniperhecu">Перейти</Button>
          </Card.Body>
        </Card>
  </Col>
</Row>

<Row>
  <Col>
        <Card border="success">
          <h1 className="text-center m-4">Тентакл</h1>
          <Card.Img src="https://cs6.pikabu.ru/post_img/2014/11/01/6/1414832308_2066059075.jpg">

          </Card.Img>
          <Card.Body>
            <Button variant="dark" href="/pages/encyclopedia/enemy/tentakl">
              Перейти
            </Button>
          </Card.Body>
        </Card>
  </Col>
  <Col>
        <Card>
          <h1 className="text-center m-4">Портативный пулемёт HECU</h1>
          <Card.Img src={Tr}></Card.Img>
          <Card.Body>
            <Button variant='dark' href="/pages/encyclopedia/enemy/turelhecu">Перейти</Button>
          </Card.Body>
        </Card>
  </Col>
</Row>

<Row>
  <Col>
        <Card border="success">
          <h1 className="text-center m-4">Чёрные оперативники</h1>
          <Card.Img src="https://upload.wikimedia.org/wikipedia/ru/thumb/5/5a/Hl_fassn.jpg/200px-Hl_fassn.jpg">

          </Card.Img>
          <Card.Body>
            <Button variant="dark" href="/pages/encyclopedia/enemy/blackhecu">
              Перейти
            </Button>
          </Card.Body>
        </Card>
  </Col>
  <Col>
        <Card>
          <h1 className="text-center m-4">Техника HECU</h1>
          <Card.Img src="https://i.ytimg.com/vi/teGUENDphUM/maxresdefault.jpg"></Card.Img>
          <Card.Body>
            <Button variant='dark' href="/pages/encyclopedia/enemy/techhecu">Перейти</Button>
          </Card.Body>
        </Card>
  </Col>
</Row>



</Container>               
                                         
                                                                                                              
                                                                                                                    
                                                                                                                                             
                                                                                                                                                 
 

            </div>
        )
    }
}
