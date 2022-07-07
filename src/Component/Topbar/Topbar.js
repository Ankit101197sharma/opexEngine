import React from "react";
import logoOpex from "../../Assests/logoOpex.svg";
import classes from "./Topbar.module.css";
import bell from "../../Assests/bell.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import  Container from "react-bootstrap/Container"
import personCircle from "../../Assests/personCircle.svg";
import dropdown from "../../Assests/dropdown.svg";

const Topbar = () => {
  return (
    <>
    <div>
      <div className={classes.topbarDiv}>
      <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home"><img src={logoOpex} alt="" /></Navbar.Brand>
    
    <Nav className=" justify-content-end">
      <Nav.Link className={classes.icons}  href="#home">Servey 2021 <img src={dropdown} alt="" /></Nav.Link>
      <Nav.Link className={classes.icons} href="#features">TechSmart <img src={dropdown} alt="" /></Nav.Link>
      <Nav.Link className={classes.avtar} href="#pricing"><img src={bell} alt="" /></Nav.Link>
      <Nav.Link href="#pricing"><img src={personCircle} alt="" /></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
 
      </div>
      
    </div>
    
  </>
  );
};

export default Topbar;
