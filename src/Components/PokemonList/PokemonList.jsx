import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from '../Pokemon/Pokemon';
import './PokemonList.css';

export default function PokemonList({ pokeArray }) {
	return (
		<ul className='cardContainer'>
			{pokeArray.map((pokeEntry) => {
				return (
					<li key={pokeEntry.pokeId}>
						<Pokemon pokeEntry={pokeEntry} />
					</li>
				);
			})}
		</ul>
	);
}

PokemonList.propTypes = {
	pokeArray: PropTypes.arrayOf(
		PropTypes.shape({
			pokeId: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			pic: PropTypes.string.isRequired,
			type1: PropTypes.string.isRequired,
			type2: PropTypes.string.isRequired,
			ability1: PropTypes.string.isRequired,
			ability2: PropTypes.string.isRequired,
			hiddenAbility: PropTypes.string.isRequired,
			eggGroup1: PropTypes.string.isRequired,
			eggGroup2: PropTypes.string.isRequired,
		}).isRequired
	),
};
