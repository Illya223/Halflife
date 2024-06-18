import React, {Component} from "react";
import {Container, FormControl, Nav, Navbar, Form, Button, Row, Col} from 'react-bootstrap'
import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import logo from './logo192.png';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';
import page from '../assets/Lambda_logo.png';

import GordonFreeman from "../Pages/encyclopedia2/Characters/GordonFreeman";
import Gman from "../Pages/encyclopedia2/Characters/Gman";
import HalfLife2 from "../Pages/HalfLife2";
import Dog from "../Pages/encyclopedia2/Characters/Dog";
import Clainer from "../Pages/encyclopedia2/Characters/Clainer";
import Brin from "../Pages/encyclopedia2/Characters/Brin";
import Barni from "../Pages/encyclopedia2/Characters/Barni";
import Alyx from "../Pages/encyclopedia2/Characters/Alyx";
import Grigoriy from "../Pages/encyclopedia2/Characters/Grigoriy";
import IlayVance from "../Pages/encyclopedia2/Characters/IlayVance";
import Mosman from "../Pages/encyclopedia2/Characters/Mosman";
import Resistance from "../Pages/encyclopedia2/Characters/Resistance";
import Vort from "../Pages/encyclopedia2/Characters/Vort";
import Ant from "../Pages/encyclopedia2/enemy/Ant";
import Barnakl from "../Pages/encyclopedia2/enemy/Barnakl";
import Btr from "../Pages/encyclopedia2/enemy/Btr";
import Chapper from "../Pages/encyclopedia2/enemy/Chapper";
import Crabsint from "../Pages/encyclopedia2/enemy/Crabsint";
import Elitsoldier from "../Pages/encyclopedia2/enemy/Elitsoldier";
import Fasthedcrab from "../Pages/encyclopedia2/enemy/Fasthedcrab";
import Fastzombie from "../Pages/encyclopedia2/enemy/Fastzombie";
import Fightscaner from "../Pages/encyclopedia2/enemy/Fightscaner";
import Go from "../Pages/encyclopedia2/enemy/Go";
import Hedcrab from "../Pages/encyclopedia2/enemy/Hedcrab";
import Hopper from "../Pages/encyclopedia2/enemy/Hopper";
import Hunter from "../Pages/encyclopedia2/enemy/Hunter";
import Manheck from "../Pages/encyclopedia2/enemy/Manheck";
import Mine from "../Pages/encyclopedia2/enemy/Mine";
import Mortsint from "../Pages/encyclopedia2/enemy/Mortsint";
import Phedcrab from "../Pages/encyclopedia2/enemy/Phedcrab";
import Pzombie from "../Pages/encyclopedia2/enemy/Pzombie";
import Scaner from "../Pages/encyclopedia2/enemy/Scaner";
import Sniper from "../Pages/encyclopedia2/enemy/Sniper";
import Soldier from "../Pages/encyclopedia2/enemy/Soldier";
import Sovet from "../Pages/encyclopedia2/enemy/Sovet";
import Stalker from "../Pages/encyclopedia2/enemy/Stalker";
import Strazh from "../Pages/encyclopedia2/enemy/Strazh";
import Strider from "../Pages/encyclopedia2/enemy/Strider";
import Transport from "../Pages/encyclopedia2/enemy/Transport";
import Trooper from "../Pages/encyclopedia2/enemy/Trooper";
import Worm from "../Pages/encyclopedia2/enemy/Worm";
import Zombie from "../Pages/encyclopedia2/enemy/Zombie";
import Zombien from "../Pages/encyclopedia2/enemy/Zombien";
import Arbalet2 from "../Pages/encyclopedia2/weapon/Arbalet2";
import Av2 from "../Pages/encyclopedia2/weapon/Av2";
import Colt from "../Pages/encyclopedia2/weapon/Colt";
import Crowbar from "../Pages/encyclopedia2/weapon/Crowbar";
import Dub from "../Pages/encyclopedia2/weapon/Dub";
import Feropod from "../Pages/encyclopedia2/weapon/Feropod";
import Grenade from "../Pages/encyclopedia2/weapon/Granade";
import Gravi from "../Pages/encyclopedia2/weapon/Gravi";
import Kater from "../Pages/encyclopedia2/weapon/Kater";
import Machinegun from "../Pages/encyclopedia2/weapon/Machinegun";
import Mp7 from "../Pages/encyclopedia2/weapon/Mp7";
import Pistol from "../Pages/encyclopedia2/weapon/Pistol";
import Redcar from "../Pages/encyclopedia2/weapon/Redcar";
import Rpg2 from "../Pages/encyclopedia2/weapon/Rpg2";
import Sngun from "../Pages/encyclopedia2/weapon/Sngun";
import Snhd from "../Pages/encyclopedia2/weapon/Snhd";
import Spas from "../Pages/encyclopedia2/weapon/Spas";
import Suppression from "../Pages/encyclopedia2/weapon/Suppression";
import Turel from "../Pages/encyclopedia2/weapon/Turel";
import Yellowcar from "../Pages/encyclopedia2/weapon/Yellowcar";
import GordonFreeman1 from "../Pages/encyclopedia/characters/GordonFreeman1";
import Gman1 from "../Pages/encyclopedia/characters/Gman1";
import Barni1 from "../Pages/encyclopedia/characters/Barni1";
import IlayVance1 from "../Pages/encyclopedia/characters/IlayVance1";
import Jin1 from "../Pages/encyclopedia/characters/Jin1";
import Security1 from "../Pages/encyclopedia/characters/Security1";
import Since1 from "../Pages/encyclopedia/characters/Since1";
import Barnakl1 from "../Pages/encyclopedia/enemy/Barnakl1";
import BlackHecu from "../Pages/encyclopedia/enemy/BlackHecu";
import Bullskvid from "../Pages/encyclopedia/enemy/Bullskvid"; 
import Controler from "../Pages/encyclopedia/enemy/Controler";
import Gargantua from "../Pages/encyclopedia/enemy/Gargantua";
import Gonarh from "../Pages/encyclopedia/enemy/Gonarh";
import Haunday from "../Pages/encyclopedia/enemy/Haunday";
import Headcrab1 from "../Pages/encyclopedia/enemy/Headcrab1";
import Hecu from "../Pages/encyclopedia/enemy/Hecu";
import Ihtyozavr from "../Pages/encyclopedia/enemy/Ihtyozavr";
import Nihilant from "../Pages/encyclopedia/enemy/Nihilant";
import Sniperhecu from "../Pages/encyclopedia/enemy/Sniperhecu";
import Techhecu from "../Pages/encyclopedia/enemy/Techhecu";
import Tentakl from "../Pages/encyclopedia/enemy/Tentakl";
import Troopervort from "../Pages/encyclopedia/enemy/Troopervort";
import TurelHecu from "../Pages/encyclopedia/enemy/TurelHecu";
import Vort1 from "../Pages/encyclopedia/enemy/Vort1";
import Zombie1 from "../Pages/encyclopedia/enemy/Zombie1";
import Arb from "../Pages/encyclopedia/weapon/Arb";
import Armley from "../Pages/encyclopedia/weapon/Armley";
import Colt1 from "../Pages/encyclopedia/weapon/Colt1";
import Crowbar1 from "../Pages/encyclopedia/weapon/Crowbar1";
import Glock from "../Pages/encyclopedia/weapon/Glock";
import Gluon from "../Pages/encyclopedia/weapon/Gluon";
import Granade1 from "../Pages/encyclopedia/weapon/Granade1";
import Mine1 from "../Pages/encyclopedia/weapon/Mine1";
import Mp5 from "../Pages/encyclopedia/weapon/Mp5";
import Rpg from "../Pages/encyclopedia/weapon/Rpg";
import Snark from "../Pages/encyclopedia/weapon/Snark";
import Spas12 from "../Pages/encyclopedia/weapon/Spas12";
import Tauweapon from "../Pages/encyclopedia/weapon/Tauweapon";






export default class Header extends Component{

    
constructor(props){
    super(props);
    this.state = {
        input: '',
        submit: '',
        a: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
    

handleChange(event){
    this.setState({       
        input: event.target.value        
    });
}

handleSubmit(event){
    event.preventDefault()
    if(this.state.input == "halflife"){
    this.setState({
        input: "/about"
    });
}
else if(this.state.input == "half life2"){
    this.setState({
        input: "/halflife2"
    });
}

}
    
    render() {
        return(
            <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img 
                            src={page}
                            height="30"
                            width="30"
                            className="d-inline-block align-top"
                            alt="Logo"
                        ></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Главная</Nav.Link>
                            <Nav.Link href="/about">Half life</Nav.Link>
                            <Nav.Link href="/halflife2">Half life 2</Nav.Link>
                            <Nav.Link href="/contacts">Contacts</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                        </Nav>
                        <Form  onSubmit={this.handleSubmit}>
                            <Row>
                                <Col>
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="me-sm-2"
                                 onChange={this.handleChange} />
                            </Col>
                            <Col>
                            <Button href={this.state.input}  variant="outline-warning"  type="submit">Поиск</Button>
                            </Col>
                            
                            </Row>

                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        
            <Router>
                <Routes>
                <Route  path="/" element={<Home />}></Route>
                <Route  path="/About" element={<About />}></Route>
                <Route path="/HalfLife2" element={<HalfLife2/>}></Route>
                <Route  path="/Pages/encyclopedia2/Characters/Gman" element={<Gman />}></Route>
                <Route  path="/Contacts" element={<Contacts />}></Route>
                <Route  path="/Blog" element={<Blog />}></Route>
                <Route  path="/Pages/encyclopedia2/Characters/GordonFreeman" element={<GordonFreeman/>}></Route>
                <Route  path="/Pages/encyclopedia2/Characters/Dog" element={<Dog/>}></Route>
                <Route  path="/Pages/encyclopedia2/Characters/Clainer" element={<Clainer/>}></Route>
                <Route  path="/Pages/encyclopedia2/Characters/Brin" element={<Brin/>}></Route>
                <Route  path="/Pages/encyclopedia2/Characters/Barni" element={<Barni/>}></Route>
                <Route  path="/Pages/encyclopedia2/Characters/Alyx" element={<Alyx/>}></Route>
                <Route  path="/Pages/encyclopedia2/Characters/Grigoriy" element={<Grigoriy/>}></Route>
                <Route  path="/Pages/encyclopedia2/Characters/IlayVance" element={<IlayVance/>}></Route>
                <Route  path="/Pages/encyclopedia2/Characters/Mosman" element={<Mosman/>}></Route>
                <Route  path="/Pages/encyclopedia2/Characters/Resistance" element={<Resistance/>}></Route>
                <Route  path="/Pages/encyclopedia2/Characters/Vort" element={<Vort/>}></Route>
<Route  path="/Pages/encyclopedia2/enemy/Ant" element={<Ant/>}></Route>
<Route  path="/Pages/encyclopedia2/enemy/Barnakl" element={<Barnakl/>}></Route>
<Route  path="/Pages/encyclopedia2/enemy/Btr" element={<Btr/>}></Route>
<Route  path="/Pages/encyclopedia2/enemy/Chapper" element={<Chapper/>}></Route>
<Route  path="/Pages/encyclopedia2/enemy/Crabsint" element={<Crabsint/>}></Route>
<Route  path="/Pages/encyclopedia2/enemy/Elitsoldier" element={<Elitsoldier/>}></Route>
<Route  path="/Pages/encyclopedia2/enemy/Fasthedcrab" element={<Fasthedcrab/>}></Route>
<Route  path="/Pages/encyclopedia2/enemy/Fastzombie" element={<Fastzombie/>}></Route>
       <Route  path="/Pages/encyclopedia2/enemy/Fightscaner" element={<Fightscaner/>}></Route>   
<Route  path="/Pages/encyclopedia2/enemy/Go" element={<Go/>}></Route>  
<Route  path="/Pages/encyclopedia2/enemy/Hedcrab" element={<Hedcrab/>}></Route>  
<Route  path="/Pages/encyclopedia2/enemy/Hopper" element={<Hopper/>}></Route>  
<Route  path="/Pages/encyclopedia2/enemy/Hunter" element={<Hunter/>}></Route>  
<Route  path="/Pages/encyclopedia2/enemy/Manheck" element={<Manheck/>}></Route>  
       <Route  path="/Pages/encyclopedia2/enemy/Mine" element={<Mine/>}></Route>  
             <Route  path="/Pages/encyclopedia2/enemy/Mortsint" element={<Mortsint/>}></Route>  
<Route  path="/Pages/encyclopedia2/enemy/Phedcrab" element={<Phedcrab/>}></Route>
<Route  path="/Pages/encyclopedia2/enemy/Pzombie" element={<Pzombie/>}></Route>
<Route  path="/Pages/encyclopedia2/enemy/Scaner" element={<Scaner/>}></Route>
<Route  path="/Pages/encyclopedia2/enemy/Sniper" element={<Sniper/>}></Route>
             <Route  path="/Pages/encyclopedia2/enemy/Soldier" element={<Soldier/>}></Route>
<Route  path="/Pages/encyclopedia2/enemy/Sovet" element={<Sovet/>}></Route>
<Route  path="/Pages/encyclopedia2/enemy/Stalker" element={<Stalker/>}></Route>
<Route  path="/Pages/encyclopedia2/enemy/Strazh" element={<Strazh/>}></Route>
<Route  path="/Pages/encyclopedia2/enemy/Strider" element={<Strider/>}></Route>
<Route  path="/Pages/encyclopedia2/enemy/Transport" element={<Transport/>}></Route>
             <Route  path="/Pages/encyclopedia2/enemy/Trooper" element={<Trooper/>}></Route>
<Route  path="/Pages/encyclopedia2/enemy/Worm" element={<Worm/>}></Route>
<Route  path="/Pages/encyclopedia2/enemy/Zombie" element={<Zombie/>}></Route>
             <Route  path="/Pages/encyclopedia2/enemy/Zombien" element={<Zombien/>}></Route>
<Route  path="/Pages/encyclopedia2/weapon/arbalet2" element={<Arbalet2/>}></Route>
<Route  path="/Pages/encyclopedia2/weapon/av2" element={<Av2/>}></Route>
<Route  path="/Pages/encyclopedia2/weapon/colt" element={<Colt/>}></Route>
<Route  path="/Pages/encyclopedia2/weapon/crowbar" element={<Crowbar/>}></Route>
<Route  path="/Pages/encyclopedia2/weapon/dub" element={<Dub/>}></Route>
<Route  path="/Pages/encyclopedia2/weapon/feropod" element={<Feropod/>}></Route>
<Route  path="/Pages/encyclopedia2/weapon/granade" element={<Grenade/>}></Route>
<Route  path="/Pages/encyclopedia2/weapon/gravi" element={<Gravi/>}></Route>
<Route  path="/Pages/encyclopedia2/weapon/kater" element={<Kater/>}></Route>
<Route  path="/Pages/encyclopedia2/weapon/machinegun" element={<Machinegun/>}></Route>
<Route  path="/Pages/encyclopedia2/weapon/mp7" element={<Mp7/>}></Route>
<Route  path="/Pages/encyclopedia2/weapon/pistol" element={<Pistol/>}></Route>
<Route  path="/Pages/encyclopedia2/weapon/redcar" element={<Redcar/>}></Route>
<Route  path="/Pages/encyclopedia2/weapon/rpg2" element={<Rpg2/>}></Route>
<Route  path="/Pages/encyclopedia2/weapon/sngun" element={<Sngun/>}></Route>
<Route  path="/Pages/encyclopedia2/weapon/snhd" element={<Snhd/>}></Route>
<Route  path="/Pages/encyclopedia2/weapon/spas" element={<Spas/>}></Route>
<Route  path="/Pages/encyclopedia2/weapon/suppression" element={<Suppression/>}></Route>
<Route  path="/Pages/encyclopedia2/weapon/turel" element={<Turel/>}></Route>
<Route  path="/Pages/encyclopedia2/weapon/yellowcar" element={<Yellowcar/>}></Route>
<Route  path="Pages/encyclopedia/characters/GordonFreeman1" element={<GordonFreeman1/>}></Route>
<Route  path="/Pages/encyclopedia/characters/Gman1" element={<Gman1/>}></Route>
<Route  path="/Pages/encyclopedia/characters/Barni1" element={<Barni1/>}></Route>
<Route  path="/Pages/encyclopedia/characters/IlayVance1" element={<IlayVance1/>}></Route>
<Route  path="/Pages/encyclopedia/characters/Jin1" element={<Jin1/>}></Route>
<Route  path="/Pages/encyclopedia/characters/Security1" element={<Security1/>}></Route>
<Route  path="/Pages/encyclopedia/characters/Since1" element={<Since1/>}></Route>
<Route  path="/Pages/encyclopedia/enemy/Barnakl1" element={<Barnakl1/>}></Route>
<Route  path="/Pages/encyclopedia/enemy/BlackHecu" element={<BlackHecu/>}></Route>
<Route  path="/Pages/encyclopedia/enemy/Bullskvid" element={<Bullskvid/>}></Route>
<Route  path="/Pages/encyclopedia/enemy/Controler" element={<Controler/>}></Route>
<Route  path="/Pages/encyclopedia/enemy/Gargantua" element={<Gargantua/>}></Route>
<Route  path="/Pages/encyclopedia/enemy/Gonarh" element={<Gonarh/>}></Route>
<Route  path="/Pages/encyclopedia/enemy/Haunday" element={<Haunday/>}></Route>
<Route  path="/Pages/encyclopedia/enemy/Headcrab1" element={<Headcrab1/>}></Route>
<Route  path="/Pages/encyclopedia/enemy/Hecu" element={<Hecu/>}></Route>
<Route  path="/Pages/encyclopedia/enemy/Ihtyozavr" element={<Ihtyozavr/>}></Route>
<Route  path="/Pages/encyclopedia/enemy/Nihilant" element={<Nihilant/>}></Route>
<Route  path="/Pages/encyclopedia/enemy/Sniperhecu" element={<Sniperhecu/>}></Route>
<Route  path="/Pages/encyclopedia/enemy/Techhecu" element={<Techhecu/>}></Route>
<Route  path="/Pages/encyclopedia/enemy/Tentakl" element={<Tentakl/>}></Route>
<Route  path="/Pages/encyclopedia/enemy/Troopervort" element={<Troopervort/>}></Route>
<Route  path="/Pages/encyclopedia/enemy/TurelHecu" element={<TurelHecu/>}></Route>
<Route  path="/Pages/encyclopedia/enemy/Vort1" element={<Vort1/>}></Route>
<Route  path="/Pages/encyclopedia/enemy/Zombie1" element={<Zombie1/>}></Route>
<Route  path="/Pages/encyclopedia/weapon/Arb" element={<Arb/>}></Route>
<Route  path="/Pages/encyclopedia/weapon/Armley" element={<Armley/>}></Route>
<Route  path="/Pages/encyclopedia/weapon/Colt1" element={<Colt1/>}></Route>
<Route  path="/Pages/encyclopedia/weapon/Crowbar1" element={<Crowbar1/>}></Route>
<Route  path="/Pages/encyclopedia/weapon/Glock" element={<Glock/>}></Route>
<Route  path="/Pages/encyclopedia/weapon/Gluon" element={<Gluon/>}></Route>
<Route  path="/Pages/encyclopedia/weapon/Granade1" element={<Granade1/>}></Route>
<Route  path="/Pages/encyclopedia/weapon/Mine1" element={<Mine1/>}></Route>
<Route  path="/Pages/encyclopedia/weapon/Mp5" element={<Mp5/>}></Route>
<Route  path="/Pages/encyclopedia/weapon/Rpg" element={<Rpg/>}></Route>
<Route  path="/Pages/encyclopedia/weapon/Snark" element={<Snark/>}></Route>
<Route  path="/Pages/encyclopedia/weapon/Spas12" element={<Spas12/>}></Route>
<Route  path="/Pages/encyclopedia/weapon/Tauweapon" element={<Tauweapon/>}></Route>


                </Routes>
            </Router>
            </>
        )
    }
}