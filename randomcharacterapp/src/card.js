import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Head extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      load:false,
            name : null,
            height: null,
            mass:null,
            hairColor:null ,
        
           skinColor:null ,
          eyecolor:null,
        born: null,
          gender:null ,
     homeworld:null ,
     species:null ,
     image:null,
     masters:null,
     bornLocation: null,
     diedLocation: null,
    
    }}

clickme(){

  const ran = Math.round( Math.random() * 88)
// const url = `https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${ran}.json`
  // https://akabab.github.io/starwars-api/api
  // const url = `https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/${randomNumber}.json`;
  
  // const url = `https://swapi.dev/api/people/${ran}/`
  // const url = `https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${ran}.json`;
  const url = `https://akabab.github.io/starwars-api/api/id/${ran}.json`;
  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
         
    this.setState({
      load:true,
            name : data.name,
            height: data.height,
            // films: data.films,
            mass:data.mass,
            hairColor:data.hairColor ,
           skinColor:data.skinColor,
          eyeColor:data.eyeColor,
        born: data.born,
          gender:data.gender,
     homeworld:data.homeworld ,
     species:data.species ,
     image:data.image,
     masters:data.masters,
     bornLocation: data.bornLocation,
     diedLocation: data.diedLocation,

    // vehicles: data.vehicles,
    // starships: data.starships,
    // created: data.created,
    })
    })
}



 
 render(){
  return (
    <Card style={{ width: '18rem' }} className="shadow p-3 mb-5 bg-body rounded">
      <Card.Img variant="top" src={this.state.image} />
      <Card.Body>
       
        <Card.Text>
         Press the button to genrate a random character of star wars 
        </Card.Text>
        <Button variant="primary" onClick={()=>this.clickme()}>Genrate</Button>
      </Card.Body>
      {this.state.load &&
      <div>

      <p>name: {this.state.name}</p>
      <p>height: {this.state.height} m</p>
      {/* <ul>
        film: {
        this.state.films.map(film=>{
               return <li>{film}</li>
        })} </ul> */}
 <p> mass: {this.state.mass}</p>
 <p> haircolor: {this.state.hairColor} </p>
 <p>skincolor: {this.state.skinColor}</p>
 <p> eyecolor: {this.state.eyeColor}</p>
 <p>bornlocation: {this.state.bornLocation}</p>
 <p> diedlocation: {this.state.diedLocation}</p>
 <p> gender: {this.state.gender}</p>
 <p> homeworld: {this.state.homeworld} </p>
 <p> species: {this.state.species} </p>
 <p> masters: {this.state.masters} </p>
           
         
        
         
    
     
      </div>
 }
    </Card>
  );
  }}

export default Head;