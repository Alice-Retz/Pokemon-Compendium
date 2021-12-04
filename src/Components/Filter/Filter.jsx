import React from 'react';

export default function Filter({
	pokemonTypes,
	selectedType,
	handleChange,
	sortedChange,
	handleSortChange,
}) {
	return (
		<div>
			<select
				value={selectedType}
				onChange={(e) => handleChange(e.target.value)}>
				<option key='all' value='all'>
					All
				</option>
				{pokemonTypes.map((type) => {
					return (
						<option key={type} value={type}>
							{type}
						</option>
					);
				})}
			</select>
			<select
				value={sortedChange}
				onChange={(e) => handleSortChange(e.target.value)}>
				<option key='ascending' value='ascending'>
					Ascending
				</option>
				<option key='descending' value='descending'>
					Descending
				</option>
			</select>
		</div>
	);
}
