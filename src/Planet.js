import React from "react";
import styled from "styled-components";
import Header from "./components/header.js";

const Planet = (props) => {

   return (
     <div>
      <Container>
      <div className="img-container">
      <img  src={props.hdurl} alt="error!"></img>
     </div>
     <h1>Copyright: {props.name}</h1>
     <h2>Title: {props.title}</h2>
     <div className="another">
     <h3>Explaination: </h3>
     <p>"{props.explanation}"</p>
     </div>
     
     </Container>
     </div>

   );
}
const Container = styled.div`
color: white;
margin: 2rem auto;
background: black;
.img-container{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
img{
  margin: 2rem auto;
  width: 20%;
  height: auto;
  }
  .another{
    display: flex;
    flex-direction: column;
    align-items; center;
    text-align: center;

    width: 100%;
  }
 p{
   margin: 0 30% 2rem 30%;
   text-align: center;
   font-style: italic;
 } 
  `
export default Planet;