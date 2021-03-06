

import React, { Component } from 'react';
import './App.css'
// importing required companants and functions
import PlanetsList from './PlanetsList';
import PeopleList from './PeopleList';
import Button from './Button.js';
import VehiclesList from './VehiclesList.js'
import logo from './logo.svg'
//import SearchBox from './SearchBox.js'//
// standard Syntax that allows changes to state ( in this case, i will be changing the state of array [] & selection)
class App extends Component {

   constructor() {
    super()
    this.state = {
      array: [],
      searchfield: 'noSelect', 
      selection: 'noSelect',
    };
  }

// The Below function, accepts a "type" prop (taken from the button in button.js) and sets the state of the selection, 
// using this 'type'/prop
 onButtonSelection = (type) => {
  this.setState({selection: type});
}
// The below function accepts an event that sets the state based on whats entered in the searchfield
onSearchChange = (event) => {
  this.setState({searchfield: event.target.value});
  }
  
 

  render() {
   
    const {array, selection, searchfield} = this.state;
    const filteredCards = this.state.array.filter(results =>{
    return(
      results.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      );
      
  })
    
    // in order to allow other componants, to use the current state of the array/selection, 
    //i have created a variable "array, section" using de-structuring to pass these variables to PeopleList etc.
    if (this.state.selection ==='planets' ){
          fetch('https://swapi.co/api/planets/') 
      .then(response => response.json())
      .then(data => this.setState({array:data.results}));
      // above I have used "data.results", to specifically set the results section of the array pulled from the API 
      // see https://swapi.co/api/people/ to understand clearly, looking for "results in the return"
      this.card = <PlanetsList array = {array}/>
  
      // I have set the PlanetList componant as "card", this is passed as props to render
      // only when planets is the "selection"
     }

     else if 

      (this.state.selection ==='people'){
          fetch('https://swapi.co/api/people/') 
      .then(response => response.json())
      .then(data => this.setState({array:data.results}));
      // above I have used "data.results", to specifically set the results section of the array pulled from the API 
      // see https://swapi.co/api/people/ to understand clearly, looking for "results in the return"
      this.card = <PeopleList array = {array}/>
        
      // I have set the PeopleList componant as "card", this is passed as props to render
      // only when people is the "selection"
     }

     else if

      (this.state.selection ==='vehicles' ){
          fetch('https://swapi.co/api/vehicles/') 
      .then(response => response.json())
      .then(data => this.setState({array:data.results}));
      // above I have used "data.results", to specifically set the results section of the array pulled from the API 
      // see https://swapi.co/api/people/ to understand clearly, looking for "results in the return"
      this.card = <VehiclesList array = {array}/>
      // I have set the Vehicle componant as "card", this is passed as props to render
      // only when people is the "selection"
     }

     
      
    return (

     <div className = "container">
     <div className = "imgcontainer">
     <img src={logo} alt = "title" />
     </div>
     <h2 className ="subheading"> - Use the Buttons to search Catergories - </h2>
     <Button onButtonSelection ={this.onButtonSelection}/>
    
     {this.card}

      
     </div> 
    // using this.card, to render the componant, relavent to the conditional if else statement
    );

 //<SearchBox searchChange = {this.onSearchChange}/> REMOVED SEARCHBOX AS UNABLE TO GET WORKING
  
    }


  }

export default App;
