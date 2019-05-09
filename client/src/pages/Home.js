import React from "react";
import styled from "styled-components";

const Generator =styled.div`
  img{
     background-color:black;
     align:center;
  }
  
`; 
class Home extends React.Component {
    render() {
       return (
          <Generator>
             
         <img src = "https://cdn.cnn.com/cnn/interactive/2016/06/us/dad-joke-generator/media/title.gif" alt="background"/>
          </Generator>
       )
    }
 }
 export default Home;

