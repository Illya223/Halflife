import React, {Component} from 'react';
import { Card, Container,  Button, CardGroup } from 'react-bootstrap';
import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import About from './About';
import './style.css'


export default class Home extends Component{
    render(){
        return(
            <div >
                
           <Container >
            
            <div className='home'>
            <h1 className='home-h1'>Добро пожаловать ! </h1>
            <p className='home-p'>Это энциклопедия вселенной Half life. Надеемся что здесь вы найдете<br></br>
             много интересного о своей любимой вселенной.</p>
            </div>
            
                
            <Button variant='dark' size='lg' href="/about">Перейти</Button>
            
           </Container>
           
           </div>
        )
    }
}