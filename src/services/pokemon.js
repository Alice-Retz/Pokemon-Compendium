export const fetchPokemon = async () => {
	const res = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');
	const pokemonData = await res.json();
	return pokemonData.results;
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
	return pokemonData.results;
};
