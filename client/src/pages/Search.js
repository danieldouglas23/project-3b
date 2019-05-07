import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Input, SubmitBtn, ClearBtn } from "../components/Form";
import { Container } from "react-bootstrap";
import { Form, Row, Col } from 'react-bootstrap';

class Search extends Component {

    render() {
        return (
            <Form>
            <Form.Row>
              <Col>
                <Form.Control placeholder="City" />
              </Col>
              </Form.Row>
              <Form.Row>
              <Col>
                <Form.Control placeholder="Job Level" />
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Control placeholder="Category" />
              </Col>
              </Form.Row>
            <Form.Row>                 
            <SubmitBtn></SubmitBtn>
            <ClearBtn></ClearBtn>
            </Form.Row>
          </Form> 

            // <form> 

            // <div class="row">
                       
            // <Input
            // placeholder="City"
            // />
            // <Input
            // placeholder="Job Level"
            // />
            // <Input
            // placeholder="Category"
            // />
            // </div> 
            // <div class="row">
                 
            // <SubmitBtn></SubmitBtn>
            // <ClearBtn></ClearBtn>
            // </div> 

            // </form>
                    )
                }
            }
export default Search;