import React from 'react';

const Button = ({onButtonSelection}) => {


	return(
		<div Class = "button">
	<button  onClick={ () => onButtonSelection('people')}>People</button> 
	<button  onClick={ () => onButtonSelection('planets')}>Planets</button>
	<button  onClick={ () => onButtonSelection('vehicles')}>Vehicles</button>
		</div>
);
}
//  the above function, takes the OnButton Selection function from App.js as props
// It then returns, button, that when clicked, runs that function and sets the relavent ('type') eg: People, Vehicles etc.
// These 'types' are then used in the conditional statements in App.js that define what is rendered on the webpage.

export default Button