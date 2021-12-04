import { render, screen } from '@testing-library/react';
import PokemonList from './PokemonList';

it('displays a list of pokemon', () => {
	render(
		<PokemonList
			pokeArray={[
				{
					pokeId: '5ff4fb7cd89993a89cc6544f',
					name: 'butterfree',
					pic: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',
					type1: 'bug',
					type2: 'flying',
					ability1: 'compound-eyes',
					ability2: 'NA',
					hiddenAbility: 'tinted-lens',
					eggGroup1: 'bug',
					eggGroup2: 'NA',
				},
				{
					pokeId: '5ff4fb7cd89993a89cc65444',
					name: 'venusaur-mega',
					pic: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',
					type1: 'grass',
					type2: 'poison',
					ability1: 'thick-fat',
					ability2: 'NA',
					hiddenAbility: 'NA',
					eggGroup1: 'grass',
					eggGroup2: 'poison',
				},
				{
					pokeId: '5ff4fb7cd89993a89cc65454',
					name: 'pidgeotto',
					pic: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',
					type1: 'normal',
					type2: 'flying',
					ability1: 'keen-eye',
					ability2: 'tangled-feet',
					hiddenAbility: 'big-pecks',
					eggGroup1: 'normal',
					eggGroup2: 'flying',
				},
			]}
		/>
	);

	const pokemons = screen.getByRole('list', { class: 'cardContainer' });
	expect(pokemons).toMatchSnapshot();
});
