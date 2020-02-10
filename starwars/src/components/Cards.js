import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col, Row, CardGroup
  } from 'reactstrap';



const Cards = props => {




return (
<CardGroup>
<Col sm="" >

<Card  body inverse color="primary" >
    
    <CardBody>
      
      <CardTitle>Character: {props.name}</CardTitle>
      <CardText>Gender: {props.gender}</CardText>
      <CardText>Birth Year: {props.birth_year}</CardText> 
      <CardText>Height: {props.height}</CardText>
      <CardText>Mass: {props.mass}</CardText>
      <CardText>Hair Color: {props.hair_color}</CardText>  
        
    </CardBody>

</Card>

</Col>
</CardGroup>
)

}



export default Cards;