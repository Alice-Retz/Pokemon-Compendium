import { pokeMunger } from '../Utils/Helpers';

export const fetchPokemon = async () => {
	const res = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');
	const pokemonData = await res.json();
	const mungedData = pokeMunger(pokemonData.results);
	return mungedData;
};

export const fetchPokemonTypes = async () => {
	const res = await fetch(
		'https://pokedex-alchemy.herokuapp.com/api/pokedex/types'
	);

	const pokemonTypesData = await res.json();
	const pokemonTypes = pokemonTypesData.map((pokemonType) => pokemonType.type);
	return pokemonTypes;
};

export const fetchFilteredPokemon = async (pokemonType) => {
	const res = await fetch(
		`https://pokedex-alchemy.herokuapp.com/api/pokedex?type=${pokemonType}`
	);
	const pokemonData = await res.json();
	const mungedData = pokeMunger(pokemonData.results);
	return mungedData;
};

export const fetchSortedPokemon = async (pokemonType, order) => {
	let typeParam;
	if (pokemonType) {
		typeParam = `&type=${pokemonType}`;
	} else {
		typeParam = '';
	}
	const res = await fetch(
		`https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=pokemon&direction=${order}${typeParam}`
	);
	const sortedData = await res.json();
	const mungedData = pokeMunger(sortedData.results);
	return mungedData;
};
