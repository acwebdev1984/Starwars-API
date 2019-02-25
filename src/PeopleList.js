import React from 'react';
import PeopleCard from './PeopleCard'



const PeopleList = ({array, filteredCards}) => {

	return (

		<div>
		{ 
			
			array.map((results, i) => {
				return (
					<PeopleCard
					key={i}
					name={array[i].name}
					gender={array[i].gender}
					height={array[i].height}
					mass={array[i].mass}
					/>

					);
			})

		}
		</div>
		)
		}


export default PeopleList