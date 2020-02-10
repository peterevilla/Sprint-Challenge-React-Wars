import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col, Row, CardGroup
  } from 'reactstrap';



const Cards = props => {




return (
<CardGroup>
<Col sm="" >

<Card  body inverse color="success" >
    
    <CardBody>
      
      <CardTitle>Character: {props.name}</CardTitle>
      <CardText>
        <p>Gender: {props.gender}</p>
        <p>Birth Year: {props.birth_year}</p>

      </CardText>
    
    </CardBody>

</Card>

</Col>
</CardGroup>
)

}



export default Cards;