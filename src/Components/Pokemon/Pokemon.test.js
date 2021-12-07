import { screen, render } from '@testing-library/react';
import Pokemon from './Pokemon';

it('Should render a pokemon', () => {
	render(
		<Pokemon
			pokeEntry={{
				name: 'butterfree',
				pic: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',
				type1: 'bug',
				type2: 'flying',
				ability1: 'compund-eyes',
				ability2: 'NA',
				hiddenAbility: 'tinted-lens',
				eggGroup1: 'bug',
				eggGroup2: 'bug',
			}}
		/>
	);

	const pokemon = screen.getByText(/butterfree/);
	expect(pokemon).toMatchSnapshot();
});
