import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron";
import { Input, SubmitBtn, ClearBtn } from "../components/Form";

class Search extends Component {

    render() {
        return (
            <form>
            <Input
            city/>
            <Input
            Campany/>
            <Input
            Job/>
            <Input
            Catagory/>
            <SubmitBtn></SubmitBtn>
            <ClearBtn></ClearBtn>

            </form>
        )
    }
}
export default Search;