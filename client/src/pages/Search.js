import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Input, SubmitBtn, ClearBtn } from "../components/Form";
import { Container } from "react-bootstrap";


class Search extends Component {

    render() {
        return (
           
            <form> 

            <div class="row">
                   <div class="col-lg-3 col-centered"></div>
                       
            <Input
            placeholder="City"
            />
            <Input
            placeholder="Job Level"
            />
            <Input
            placeholder="Category"
            />
            </div> 
            <div class="row">
                    <div class="col-lg-5 col-centered"></div>
                 
            <SubmitBtn></SubmitBtn>
            <ClearBtn></ClearBtn>
            </div> 

            </form>
                    )
                }
            }
export default Search;