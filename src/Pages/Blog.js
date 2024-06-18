import React, {Component} from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CarouselBox from '../Components/CarouselBox';

export default class Blog extends Component{
    render(){
        return(
            <Container>
                <Row> 
                    <Col>
                        <Card className="m-5">
                            
                            <img 
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://e7.pngegg.com/pngimages/958/424/png-clipart-half-life-logo-half-life-opposing-force-trademark-symbol-logo-half-life-miscellaneous-game-thumbnail.png"
                            ></img>
                            
                                
                            <Card.Body>
                                <h5>
                                    Blog post
                                </h5>
                                <p>
                                The symbol is the letter "Λ" (lowercase "λ"). This is the radioactive decay constant used in the half-life equation. "Λ" is the 11th character in the Greek alphabet.
                                </p>
                            </Card.Body>
                            
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}