export const getEggGroup = (eggGroupId, pokemon) => {
	let eggGroup;

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

export const pokeMunger = (pokemon) => {
	return {
		name: pokemon.pokemon,
		pic: pokemon.url_image,
		typeOne: pokemon.type_1,
		typeTwo: pokemon.type_2,
		abilityOne: pokemon.ability_1,
		abilityTwo: pokemon.ability_2,
		hiddenAbility: pokemon.ability_hidden,
		eggGroup1: getEggGroup(pokemon.pokemon.egg_group_1),
		eggGroup2: pokemon.egg_group_2,
	};
};
