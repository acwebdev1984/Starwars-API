// This is the output that we want to render on the webpage.

import React from 'react';

const PlanetCard = ({name, climate, gravity, terrain}) =>{
// This variable accept the props(properties) taken from the .map() that we did on the API array within PeopleList.js allowing them to be rendered within the card.
// eg {name:{name}} - this is pulling info from name={array[i].name} within PlanetList.js	

	return(

		<div className= 'bg-none dib br3 pa3 ma2 grow'>

		<p> Name: {name}</p>
		<p> Climate: {climate}</p>
		<p> Gravity:{gravity}</p>
		<p> Terrain: {terrain}</p>

		</div>

		);
}


export default PlanetCard