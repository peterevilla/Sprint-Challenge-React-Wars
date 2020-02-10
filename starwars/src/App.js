import React, { useEffect, useState} from 'react';
import './App.css';
import axios from "axios"
import Cards from "./components/Cards"
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const App = () => {
  
  const [data, setData] = useState([])


  useEffect(() => {
    
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        
        setData(response.data.results)
        //setDate(response.data.date)
        
      })
      .catch(error => console.log(error));
  }, []);

console.log(data)
  
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>

      <div className="container">
        
        {data.map(item => (

          <Cards 

          key={item.url}
          name={item.name}
          gender={item.gender}
          birth_year={item.birth_year}
          height={item.height}
          mass={item.mass}
          hair_color={item.hair_color}

          
          
     
          />

        ))}
        
      
      </div>

    </div>
  );
}

export default App;
