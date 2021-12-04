export const getEggGroup = (pokemon) => {
	let eggGroup;
	const eggGroupId = pokemon.egg_group_1;

	switch (eggGroupId) {
		case 'indeterminate':
			eggGroup = 'amorphous';
			break;
		case 'no-eggs':
			eggGroup = 'no egg group';
			break;
		case 'ditto':
			eggGroup = 'all';
			break;
		default:
			eggGroup = pokemon.egg_group_1;
	}

	return eggGroup;
};

export const pokeMunger = (pokeResults) => {
	return pokeResults.map((pokemon) => {
		return {
			pokeId: pokemon._id,
			name: pokemon.pokemon,
			pic: pokemon.url_image,
			type1: pokemon.type_1,
			type2: pokemon.type_2,
			ability1: pokemon.ability_1,
			ability2: pokemon.ability_2,
			hiddenAbility: pokemon.ability_hidden,
			eggGroup1: getEggGroup(pokemon),
			eggGroup2: pokemon.egg_group_2,
		};
	});
};
