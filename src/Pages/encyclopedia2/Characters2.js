import React, {Component} from 'react';
import {Container, Card, Button, Row, Col} from "react-bootstrap";


export default class Charcters2 extends Component{
    render(){
        return(
            <div>
              <Container className="m-4">

          <Row>
            <Col>
                  <Card border="success">
                    <h1 className="text-center m-4">Гордон Фримен</h1>
                    <Card.Img src="https://upload.wikimedia.org/wikipedia/ru/3/30/Freeman_face_concept.jpeg">

                    </Card.Img>
                    <Card.Body>
                      <Button variant="dark" href="/pages/encyclopedia2/characters/gordonfreeman">
                        Перейти
                      </Button>
                    </Card.Body>
                  </Card>
            </Col>
            <Col>
                  <Card>
                    <h1 className="text-center m-4">Gman</h1>
                    <Card.Img src="https://upload.wikimedia.org/wikipedia/uk/0/0f/G-man-1-.jpg"></Card.Img>
                    <Card.Body>
                      <Button variant='dark' href="/pages/encyclopedia2/characters/gman">Перейти</Button>
                    </Card.Body>
                  </Card>
            </Col>
        </Row>
        <Row>
            <Col>
                  <Card>
                    <h1 className="text-center m-4">Аликс Вэнс</h1>
                    <Card.Img src="https://upload.wikimedia.org/wikipedia/ru/b/b8/Alyx_Vance_%28art%29.jpg"></Card.Img>
                    <Card.Body>
                      <Button variant='dark' href="/pages/encyclopedia2/characters/alyx">Перейти</Button>
                    </Card.Body>
                  </Card>
            </Col>
            <Col>      
               <Card>
                    <h1 className="text-center m-4">Барни Калхун</h1>
                    <Card.Img src="https://www.giantbomb.com/a/uploads/original/0/64/177679-barney_calhoun_half_life.jpg"></Card.Img>
                    <Card.Body>
                      <Button variant='dark' href="/pages/encyclopedia2/characters/barni">Перейти</Button>
                    </Card.Body>
                  </Card>
            </Col> 
        </Row>
        <Row>
          <Col> 
                  <Card>
                    <h1 className="text-center m-4">Илай Вэнс</h1>
                    <Card.Img src="http://pm1.narvii.com/7033/7d83f24f9cd7616778652b441de5c0baf3cae688r1-616-640v2_00.jpg"></Card.Img>
                    <Card.Body>
                      <Button variant='dark' href="/pages/encyclopedia2/characters/ilayvance">Перейти</Button>
                    </Card.Body>
                  </Card>
          </Col>
          <Col>
                  <Card>
                    <h1 className="text-center m-4">Джудит Моссман</h1>
                    <Card.Img src="https://www.giantbomb.com/a/uploads/scale_small/0/5216/187216-jud.jpg"></Card.Img>
                    <Card.Body>
                      <Button variant='dark' href="/pages/encyclopedia2/characters/mosman">Перейти</Button>
                    </Card.Body>
                  </Card>
          </Col>
        </Row>
        <Row>
          <Col>
                   <Card>
                    <h1 className="text-center m-4">Отец Григорий</h1>
                    <Card.Img src="http://internetua.com/uploads/blogs/81/2e/ib-donrshpps_1876bd08.jpg"></Card.Img>
                    <Card.Body>
                      <Button variant='dark' href="/pages/encyclopedia2/characters/grigoriy">Перейти</Button>
                    </Card.Body>
                  </Card>
          </Col>
          <Col>
                    <Card>
                    <h1 className="text-center m-4">Уоллес Брин</h1>
                    <Card.Img src="https://dic.academic.ru/pictures/wiki/files/68/DrBreens.jpg"></Card.Img>
                    <Card.Body>
                      <Button variant='dark' href="/pages/encyclopedia2/characters/brin">Перейти</Button>
                    </Card.Body>
                  </Card>
          </Col>
        </Row>
        <Row>
          <Col>
                  <Card>
                    <h1 className="text-center m-4">Вортигонт-одиночка</h1>
                    <Card.Img src="https://upload.wikimedia.org/wikipedia/ru/thumb/2/22/VortigauntHL2.jpg/193px-VortigauntHL2.jpg"></Card.Img>
                    <Card.Body>
                      <Button variant='dark' href="/pages/encyclopedia2/characters/vort">Перейти</Button>
                    </Card.Body>
                  </Card>
          </Col>
          <Col>
                  <Card>
                    <h1 className="text-center m-4">Пёс</h1>
                    <Card.Img src="https://i.pinimg.com/736x/af/60/8b/af608bfa114328252053825550f09c0e--life-wiki-half-life.jpg"></Card.Img>
                    <Card.Body>
                      <Button variant='dark' href="/pages/encyclopedia2/characters/dog">Перейти</Button>
                    </Card.Body>
                  </Card>
            </Col>
          </Row>
          <Row>
            <Col>
                  <Card>
                    <h1 className="text-center m-4">Сопротивление</h1>
                    <Card.Img src="https://cdna.artstation.com/p/assets/images/images/041/544/684/large/skwallie-amp-tsukoo-rebel21.jpg?1631998719"></Card.Img>
                    <Card.Body>
                      <Button variant='dark' href="/pages/encyclopedia2/characters/resistance">Перейти</Button>
                    </Card.Body>
                  </Card>
            </Col>
            <Col>
                  <Card>
                    <h1 className="text-center m-4">Айзек Кляйнер</h1>
                    <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBdDBoxTxeJz0VGx7FuNQijXoLQYVgJkcg_w&usqp=CAU"></Card.Img>
                    <Card.Body>
                      <Button variant='dark' href="/pages/encyclopedia2/characters/clainer">Перейти</Button>
                    </Card.Body>
                  </Card>
            </Col>
          </Row>        
                
              </Container>


                
                                                                                                                                            
                                                                                                                                                                                            




            </div>

        )
    }
}