import React, {Component} from "react";
import { Carousel } from "react-bootstrap";
import page1 from '../assets/570284.jpg';
import page2 from '../assets/2001820.jpg';
import page3 from '../assets/fa8debbb5d99319e1a2ce8870dfff64c7306ea7a.jpg.webp';

export default class CarouselBox extends Component{
    render()
    {
        return(
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img 
                            className="d-blok w-100"
                            src={page1}
                        />
                        <Carousel.Caption>
                            <h3>Half life 2</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            className="d-blok w-100"
                            src={page2}
                        />
                        <Carousel.Caption>
                            <h3>Half life 2 episode 1</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                     <Carousel.Item>
                        <img 
                            className="d-blok w-100"
                            src={page3}
                        />
                        <Carousel.Caption>
                            <h3>Half life 2 episode 2</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
        )
    }
}