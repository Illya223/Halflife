import React, {Component} from 'react';
import {Container, Card, Button, Row, Col} from "react-bootstrap";



export default class Charcters extends Component{
    render(){
        return(
            <div>
                
                <Container className="m-4">

<Row>
  <Col>
        <Card border="success">
          <h1 className="text-center m-4">Гордон Фримен</h1>
          <Card.Img src="https://i.pinimg.com/originals/fa/fd/aa/fafdaa6517a09e2cdf77c7692d0a9106.jpg">

          </Card.Img>
          <Card.Body>
            <Button variant="dark" href="/pages/encyclopedia/characters/gordonfreeman1">
              Перейти
            </Button>
          </Card.Body>
        </Card>
  </Col>
  <Col>
        <Card>
          <h1 className="text-center m-4">Gman</h1>
          <Card.Img src="https://media.moddb.com/cache/images/downloads/1/144/143882/thumb_620x2000/Capture.PNG"></Card.Img>
          <Card.Body>
            <Button variant='dark' href="/pages/encyclopedia/characters/gman1">Перейти</Button>
          </Card.Body>
        </Card>
  </Col>
</Row>
<Row>
  <Col>
        <Card border="success">
          <h1 className="text-center m-4">Барни Калхун</h1>
          <Card.Img src="https://upload.wikimedia.org/wikipedia/ru/f/f6/Barney_Calhoun.jpg">

          </Card.Img>
          <Card.Body>
            <Button variant="dark" href="/pages/encyclopedia/characters/barni1">
              Перейти
            </Button>
          </Card.Body>
        </Card>
  </Col>
  <Col>
        <Card>
          <h1 className="text-center m-4">Илай Венс</h1>
          <Card.Img src="https://www.giantbomb.com/a/uploads/scale_small/0/597/179500-600px_elivance.jpg"></Card.Img>
          <Card.Body>
            <Button variant='dark' href="/pages/encyclopedia/characters/ilayvance1">Перейти</Button>
          </Card.Body>
        </Card>
  </Col>
</Row>

<Row>
  <Col>
        <Card border="success">
          <h1 className="text-center m-4">Джин Кросс</h1>
          <Card.Img src="https://dic.academic.ru/pictures/wiki/files/71/Gina_Cross.jpg">

          </Card.Img>
          <Card.Body>
            <Button variant="dark" href="/pages/encyclopedia/characters/jin1">
              Перейти
            </Button>
          </Card.Body>
        </Card>
  </Col>
  <Col>
        <Card>
          <h1 className="text-center m-4">Научная команда</h1>
          <Card.Img src="https://pm1.narvii.com/7502/bce8d97d92ef1ebc5b85b84ed764a51ca742f1bar1-360-450v2_hq.jpg"></Card.Img>
          <Card.Body>
            <Button variant='dark' href="/pages/encyclopedia/characters/since1">Перейти</Button>
          </Card.Body>
        </Card>
  </Col>
</Row>

<Row>
  <Col>
        <Card border="success">
          <h1 className="text-center m-4">Служба охраны</h1>
          <Card.Img src="https://upload.wikimedia.org/wikipedia/ru/f/f3/Security_Guard_%28Half-Life%29.jpg">

          </Card.Img>
          <Card.Body>
            <Button variant="dark" href="/pages/encyclopedia/characters/security1">
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