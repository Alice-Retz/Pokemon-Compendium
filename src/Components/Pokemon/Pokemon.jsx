import PropTypes from 'prop-types';
import './Pokemon.css';

export default function Pokemon({ pokemon }) {
	const {
		name,
		pic,
		type1,
		type2,
		ability1,
		ability2,
		hiddenAbility,
		eggGroup1,
		eggGroup2,
	} = pokemon;

	const hasSecondType = type2 !== 'NA';
	const hasSecondAbility = ability2 !== 'NA';
	const hasSecondEggGroup = eggGroup2 !== 'NA';

	return (
		<article className='pokeEntry'>
			<h2>{name}</h2>
			<img src={pic} alt={`${name}`} />
			<div className='details'>
				<p>
					{type1}
					{hasSecondType && `/${type2}`}
				</p>
				<p>
					{ability1}
					{hasSecondAbility && `/${ability2}`}
					{hiddenAbility}
				</p>
				<p>
					{eggGroup1}
					{hasSecondEggGroup && `/${eggGroup2}`}
				</p>
			</div>
		</article>
	);
}

Pokemon.propTypes = {
	pokemon: PropTypes.shape({
		name: PropTypes.string.isRequired,
		pic: PropTypes.string.isRequired,
		type1: PropTypes.string.isRequired,
		type2: PropTypes.string.isRequired,
		ability1: PropTypes.string.isRequired,
		ability2: PropTypes.string.isRequired,
		hiddenAbility: PropTypes.string.isRequired,
		eggGroup1: PropTypes.string.isRequired,
		eggGroup2: PropTypes.string.isRequired,
	}).isRequired,
};
