import React from 'react';

const VehiclesCard = ({name, model, crew, passengers}) =>{
// This variable accept the props(properties) taken from the .map() that we did on the API array within PeopleList.js allowing them to be rendered within the card.
// eg {name:{name}} - this is pulling info from name={array[i].name} within PlanetList.js	

	return(

		<div className= 'tc bg-none dib br3 pa3 ma2 grow'>

		<p> Passengers: {passengers}</p>
		<p> Model: {model}</p>
		<p> Crew:{crew}</p>
		<p> Passengers: {passengers}</p>

		</div>

		);
}


export default VehiclesCard