import React from 'react';
import PlanetCard from './PlanetCard'



const PlanetsList = ({array}) => {
// The planetList accepts array as an argument from App.js allowing us to use the API data.
	return (

		<div>
		{ 
			// we map the API data setting varibles, using this index of specific parts of the pulling API - eg: name = array item with the index of name:
			array.map((results, i) => {
				return (
					<PlanetCard
					key={i}
					name={array[i].name}
					climate={array[i].climate}
					gravity={array[i].gravity}
					terrain={array[i].terrain}
					/>

					);
			})

		}
		</div>
		)
		}


export default PlanetsList	