import React from 'react';
import VehiclesCard from './VehiclesCard'



const VehiclesList = ({array, filteredCards}) => {
// The planetList accepts array as an argument from App.js allowing us to use the API data.
	return (

		<div>
		{ 
			// we map the API data setting varibles, using this index of specific parts of the pulling API - eg: name = array item with the index of name:
			array.map((results, i) => {
				return (
					<VehiclesCard
					key={i}
					name={array[i].name}
					model={array[i].model}
					crew={array[i].crew}
					passengers={array[i].passengers}
					/>

					);
			})

		}
		</div>
		)
		}


export default VehiclesList