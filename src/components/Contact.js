import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
library.add(fas, fab);

function Contact() {
  return (
    <>
      <Container className="container__items contact">
        <Row>
          <Col md={{ order: "last" }} className="col-contact">
            <div className="container__icons">
              <div className="container__icons-items">
                <FontAwesomeIcon icon={["fas", "envelope"]} />
                <div>hello@yay.com</div>
              </div>
              <div className="container__icons-items">
                <FontAwesomeIcon icon={["fas", "phone"]} />
                <div>123 456 7890</div>
              </div>
              <div className="container__icons-items">
                <FontAwesomeIcon icon={["fas", "map-marker-alt"]} />
                <div>
                  <Row>123 Some Street</Row>
                  <Row>Somewhere</Row>
                  <Row>Some City</Row>
                  <Row>1000</Row>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <Col >
              <h1>Submit your details</h1>
            </Col>
            <Form>
              <Container>
                <Form.Label>Name</Form.Label>
                <Form.Group controlId="formBasicName">
                  <Form.Control type="name" />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Label>Email address</Form.Label>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <label htmlFor="basic-url">Website</label>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon3">
                      https://
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl id="basic-url" aria-describedby="basic-addon3" />
                </InputGroup>

                <label htmlFor="Message">Message</label>
                <InputGroup>
                  <FormControl as="textarea" />
                </InputGroup>

                <Form.Group id="formGridCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Allow us to sell your personal details to whomever we want"
                  />
                </Form.Group>
                <div className="btn__container">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </div>
              </Container>
            </Form>
          </Col>
        </Row>
      </Container>
      <footer>
        <div className="footer__items">
          <div>
            <FontAwesomeIcon icon={["fab", "vimeo-v"]} />
            <FontAwesomeIcon icon={["fab", "youtube"]} />
          </div>

          <div>Hello@yay.com</div>
          <div> Copyright 2020</div>
        </div>
      </footer>
    </>
  );
}

export default Contact;
