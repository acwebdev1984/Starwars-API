//Tachyons - Background - Display inline block - border radius - padding - margin - grow/transform

import React from 'react';

const PeopleCard = ({name, gender, height, mass}) =>{

	return(

		<div className= 'bg-none dib br3 pa3 ma2 grow'>

		<p> Name: {name}</p>
		<p> Gender: {gender}</p>
		<p> Height:{height} CM</p>
		<p> Mass: {mass} KG </p>

		</div>

		);
}


export default PeopleCard