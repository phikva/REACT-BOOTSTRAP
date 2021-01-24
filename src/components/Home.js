import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Accordion from 'react-bootstrap/Accordion';
import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import image from "../image.png";
import image2 from "../image2.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas, fab);


function Home() {
  return (
    <>
    
    

<div className="header">
<img className="header__item" src={image} fluid />
</div>


<Container className="container__items">
      
      <div className="description-container">
      <h1>We do YAY things</h1>
      <p>
      Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. 
      Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, 
      aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, 
      pretium lacinia magna. 
      Donec mi orci, sollicitudin in luctus a, varius eget massa.
      </p>
      </div>
      

      
       
            <Accordion defaultActiveKey="0" className="d-md-none">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    First
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                 
                    <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. 
                    Nullam non eleifend justo, 
                    a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.  
                    </p>
                    <img className="accordion__image" src={image2} fluid />
                   
                    </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Second
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Third
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            
            <div className="d-none d-md-block">
              <Tabs defaultActiveKey="one" id="uncontrolled-tab-example">
                <Tab eventKey="one" title="First">
                 
                   <div>
                <img className="accordion__image" src={image2} fluid />
                </div>
                <div>
                <p>
                 Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. 
                    Nullam non eleifend justo, 
                    a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.  {" "}
                    </p>
                  
                    </div>
                </Tab>
                <Tab eventKey="Ipsem" title="Second"></Tab>
                <Tab eventKey="Dolor" title="Third"></Tab>
                
              </Tabs>
            </div>
         
            
      </Container>
      <footer>
          <div className="footer__items">
              <div>
                <FontAwesomeIcon icon={["fab", "vimeo-v"]} />
                <FontAwesomeIcon  icon={["fab", "youtube"]} />
              </div>

              <div>Hello@yay.com</div>
              <div> Copyright 2020</div>
            </div>
          </footer>
      
      
    </>
  );
}

export default Home;
