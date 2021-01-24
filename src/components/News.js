import React from "react";
import Container from "react-bootstrap/Container";
import Pagination from 'react-bootstrap/Pagination';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from "react-bootstrap/card";
import image3 from "../image3.png";
import image4 from "../image4.png";
import image5 from "../image5.png";
import image6 from "../image6.png";
import image7 from "../image7.png";
import image8 from "../image8.png";
import image9 from "../image9.png";
import image10 from "../image10.png";
import Button from "react-bootstrap/Button";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas, fab);

function News() {
    return (
      <>
      <Container className="container__items">
      <h1>News</h1>
      <Pagination>
         
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Item>{4}</Pagination.Item>
         
      </Pagination>
      
      <CardDeck>
      
  <Card>
    <Card.Img variant="top" src={image3} />
    <Card.Body className="card-body__items">
      <Card.Title>Nunc porttitor vel</Card.Title>
      <Card.Text>
      Nunc malesuada eget est fringilla dapibus.
      </Card.Text>
      <Button variant="primary" size="sm" className="btn__item">
      <span>MORE</span>
    </Button>{' '}
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={image4} />
    <Card.Body className="card-body__items">
      <Card.Title>Nunc porttitor vel</Card.Title>
      <Card.Text>
      Nunc malesuada eget est fringilla dapibus.
      </Card.Text>
      <Button variant="primary" size="sm" className="btn__item">
      <span>MORE</span>
    </Button>{' '}
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={image5} />
    <Card.Body className="card-body__items">
      <Card.Title>Nunc porttitor vel</Card.Title>
      <Card.Text>
      Nunc malesuada eget est fringilla dapibus.
      </Card.Text>
      <Button variant="primary" size="sm" className="btn__item">
      <span>MORE</span>
    </Button>{' '}
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={image6} />
    <Card.Body className="card-body__items">
      <Card.Title>Nunc porttitor vel</Card.Title>
      <Card.Text>
      Nunc malesuada eget est fringilla dapibus.
      </Card.Text>
      <Button variant="primary" size="sm" className="btn__item">
      <span>MORE</span>
    </Button>{' '}
    </Card.Body>
  </Card>
  
</CardDeck>

<CardDeck>
      
      <Card>
        <Card.Img variant="top" src={image7} />
        <Card.Body className="card-body__items">
          <Card.Title>Nunc porttitor vel</Card.Title>
          <Card.Text>
          Nunc malesuada eget est fringilla dapibus.
          </Card.Text>
          <Button variant="primary" size="sm" className="btn__item">
      <span>MORE</span>
    </Button>{' '}
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={image8} />
        <Card.Body className="card-body__items">
          <Card.Title>Nunc porttitor vel</Card.Title>
          <Card.Text>
          Nunc malesuada eget est fringilla dapibus.
          </Card.Text>
          <Button variant="primary" size="sm" className="btn__item">
      <span>MORE</span>
    </Button>{' '}
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={image9} />
        <Card.Body className="card-body__items">
          <Card.Title>Nunc porttitor vel</Card.Title>
          <Card.Text>
          Nunc malesuada eget est fringilla dapibus.
          </Card.Text>
          <Button variant="primary" size="sm" className="btn__item">
      <span>MORE</span>
    </Button>{' '}
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={image10} />
        <Card.Body className="card-body__items">
          <Card.Title>Nunc porttitor vel</Card.Title>
          <Card.Text>
          Nunc malesuada eget est fringilla dapibus.
          </Card.Text>
          <Button variant="primary" size="sm" className="btn__item">
      <span>MORE</span>
    </Button>{' '}
        </Card.Body>
      </Card>
      
    </CardDeck>
    
    <Pagination>
         
         <Pagination.Item>{1}</Pagination.Item>
         <Pagination.Item>{2}</Pagination.Item>
         <Pagination.Item>{3}</Pagination.Item>
         <Pagination.Item>{4}</Pagination.Item>
 
     </Pagination>

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

export default News;