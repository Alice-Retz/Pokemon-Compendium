import { useState, useEffect } from 'react';
import Filter from '../../Components/Filter/Filter';
import PokemonList from '../../Components/PokemonList/PokemonList';
import {
	fetchPokemon,
	fetchPokemonTypes,
	fetchFilteredPokemon,
} from '../../services/pokemon';

export default function Compendium() {
	const [loading, setLoading] = useState(true);
	const [pokemon, setPokemon] = useState([]);
	const [pokemonTypes, setPokemonTypes] = useState([]);
	const [selectedType, setSelectedType] = useState('fairy');

	useEffect(() => {
		async function getPokemon() {
			const pokemonList = await fetchPokemon();
			setPokemon(pokemonList);
			setLoading(false);
		}

		getPokemon();
	}, []);

	useEffect(() => {
		async function getTypes() {
			const pokemonTypes = await fetchPokemonTypes();
			setPokemonTypes(pokemonTypes);
		}

		getTypes();
	}, []);

	useEffect(() => {
		if (!selectedType) return;
		async function getFilteredPokemon() {
			setLoading(true);

			const filteredPokemon = await fetchFilteredPokemon(selectedType);
			setPokemon(filteredPokemon);
			setLoading(false);
		}
		getFilteredPokemon();
	}, [selectedType]);

	// Example of how to use useEffect with dependencies
	// useEffect(() => {}, [state]);

	// useEffect(() => {}, [stateOne, stateTwo, stateThree]);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	return (
		<>
			<Filter
				pokemonTypes={pokemonTypes}
				selectedType={selectedType}
				handleChange={setSelectedType}
			/>
			<PokemonList pokemon={pokemon} />
		</>
	);
}
