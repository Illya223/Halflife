import React, {Component} from 'react';
import { Container, Nav, Tab, Col, Row, Jumbotron } from 'react-bootstrap';
import CarouselBox from '../Components/CarouselBox';
import Lore from './encyclopedia/Lore';
import Charcters from './encyclopedia/Characters';
import Enemy from './encyclopedia/Enemy';
import Weapon from './encyclopedia/Weapon';
import History from './encyclopedia/History';

export default class About extends Component{
    render(){
        return(
            
                
                
                
        <Container>
            
            <Tab.Container id="ledt-tabs-example" defaultActiveKey="key">
                <Row>
                    <Col sm={3}>
                        <Nav  className="flex-column mt-2">
                            <Nav.Item>
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
                        </Nav>
                    </Col>
                    <Col sm={7}>
                        <Tab.Content>
                            <Tab.Pane eventKey="zero">
                                <History/>
                            </Tab.Pane>
                        </Tab.Content>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                               
                                <Lore/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                
                                <Charcters/>
                            </Tab.Pane>
                             <Tab.Pane eventKey="third">
                                <Enemy/>
                            </Tab.Pane>

                             <Tab.Pane eventKey="fourth">
                                <Weapon/>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>

            </Tab.Container>

            </Container>
            
            
            
            
        )
    }
}