import React, {Component} from 'react';
import { Container, Nav, Tab, Col, Row, Jumbotron } from 'react-bootstrap';
import History from './encyclopedia2/History';
import Lore2 from './encyclopedia2/Lore2';
import Charcters2 from './encyclopedia2/Characters2';
import Enemy2 from './encyclopedia2/Enemy2';
import Weapon2 from './encyclopedia2/Weapon2';
import "./style.css"
import Historyone from './encyclopedia2/Histroryone';
import Historytwo from './encyclopedia2/Historytwo';
import Loreone from './encyclopedia2/Loreone';
import Loretwo from './encyclopedia2/Loretwo';

export default class HalfLife2 extends Component{
    render(){
        return(
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="key">
                <Row>
                    <Col sm={3}>
                        <Nav  className="flex-column mt-2" >
                        <Nav.Item >
                                <Nav.Link eventKey="zero" className='nav'>Сюжет</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="first" className='nav'>Главы</Nav.Link>
                            </Nav.Item>
                            
                            <Nav.Item>
                                <Nav.Link eventKey="second" className='nav'>Персонажи</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third" className='nav'>Враги</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth" className='nav'>Оружие</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fifth" className='nav'>Сюжет Episode One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="sixth" className='nav'>Сюжет Episode Two</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="seventh" className='nav'>Главы Episode One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="eight" className='nav'>Главы Episode Two</Nav.Link>
                            </Nav.Item>
                        </Nav>

                    </Col>
                    <Col sm={7}>
                    <Tab.Content>
                            <Tab.Pane eventKey="zero">
                                <History></History>
                            </Tab.Pane>
                        </Tab.Content>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                               <Lore2></Lore2>
                               
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Charcters2></Charcters2>
                               
                            </Tab.Pane>
                             <Tab.Pane eventKey="third">
                                <Enemy2></Enemy2>
                            </Tab.Pane>

                             <Tab.Pane eventKey="fourth">
                               <Weapon2></Weapon2>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">
                               <Historyone></Historyone>
                            </Tab.Pane>
                            <Tab.Pane eventKey="sixth">
                               <Historytwo></Historytwo>
                            </Tab.Pane>
                            <Tab.Pane eventKey="seventh">
                               <Loreone></Loreone>
                            </Tab.Pane>
                            
                            <Tab.Pane eventKey="eight">
                               <Loretwo></Loretwo>
                            </Tab.Pane>
                        </Tab.Content>


                    </Col>
                </Row>
                </Tab.Container>
            </Container>
        )
    }
}