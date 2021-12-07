import { useState, useEffect } from 'react';
import Filter from '../../Components/Filter/Filter';
import PokemonList from '../../Components/PokemonList/PokemonList';
import {
	fetchPokemon,
	fetchPokemonTypes,
	fetchFilteredPokemon,
	fetchSortedPokemon,
} from '../../services/pokemon';

export default function Compendium() {
	const [loading, setLoading] = useState(true);
	const [pokemon, setPokemon] = useState([]);
	const [pokemonTypes, setPokemonTypes] = useState([]);
	const [selectedType, setSelectedType] = useState('');
	const [sortedMons, setSortedMons] = useState('');

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

	useEffect(() => {
		if (!sortedMons) return;
		async function sortTheMons() {
			setLoading(true);
			if (sortedMons === 'ascending') {
				const newOrder = await fetchSortedPokemon(selectedType, 'asc');
				setPokemon(newOrder);
			} else {
				const newOrder = await fetchSortedPokemon(selectedType, 'desc');
				setPokemon(newOrder);
			}
			setLoading(false);
		}
		sortTheMons();
	}, [selectedType, sortedMons]);

	// Example of how to use useEffect with dependencies
	// useEffect(() => {}, [state]);

	// useEffect(() => {}, [stateOne, stateTwo, stateThree]);

	if (loading) {
		return <h1>Loading...</h1>;
	}
	return (
		<>
			<header>
				<Filter
					pokemonTypes={pokemonTypes}
					selectedType={selectedType}
					handleChange={setSelectedType}
					sortedChange={sortedMons}
					handleSortChange={setSortedMons}
				/>
			</header>
			<main>
				<PokemonList pokeArray={pokemon} />
			</main>
		</>
	);
}
