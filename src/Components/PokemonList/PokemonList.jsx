import React from 'react';
import Pokemon from '../Pokemon/Pokemon';

export default function PokemonList({ pokemon }) {
	return (
		<div>
			{pokemon.map((pokemon) => {
				<div className='pokeEntry'>
					<h1 key={pokemon.pokemon}>{pokemon.pokemon}</h1>
					<img
						src={pokemon.url_image}
						alt='the official artwork of the pokemon from nintendo'
					/>
					<h3 key={pokemon.type_1}>
						{pokemon.type_1}/{pokemon.type_2}
					</h3>
					<h3 key={pokemon.ability_1}>Primary Ability: {pokemon.ability_1}</h3>
					<h3 key={pokemon.ability_hidden}>
						Hidden Ability: {pokemon.ability_hidden}
					</h3>
					<h3 key={pokemon.egg_group_1}>
						Egg Group: {pokemon.egg_group_1}/{pokemon.egg_group_2}
					</h3>
				</div>;
			})}
		</div>
	);
}
