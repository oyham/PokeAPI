import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';

const types = [
	{ name: 'steel', label: 'Acero' },
	{ name: 'water', label: 'Agua' },
	{ name: 'bug', label: 'Bicho' },
	{ name: 'dragon', label: 'Dragón' },
	{ name: 'electric', label: 'Eléctrico' },
	{ name: 'shadow', label: 'Fantasma' },
	{ name: 'fire', label: 'Fuego' },
	{ name: 'fairy', label: 'Hada' },
	{ name: 'ice', label: 'Hielo' },
	{ name: 'fighting', label: 'Lucha' },
	{ name: 'normal', label: 'Normal' },
	{ name: 'grass', label: 'Planta' },
	{ name: 'psychic', label: 'Psíquico' },
	{ name: 'rock', label: 'Roca' },
	{ name: 'dark', label: 'Siniestro' },
	{ name: 'ground', label: 'Tierra' },
	{ name: 'poison', label: 'Veneno' },
	{ name: 'flying', label: 'Volador' },
];

export const FilterBar = () => {
	const { active, handleCheckbox } = useContext(PokemonContext);

	return (
		<div className={`container-filters ${active ? 'active' : ''}`}>
			<div className='filter-by-type'>
				<span className='filter'>Tipo</span>

				{types.map((type) => (
					<div className='group-type' key={type.name}>
						<input
							type='checkbox'
							onChange={handleCheckbox}
							name={type.name}
							id={type.name}
						/>
						<label htmlFor={type.name}>{type.label}</label>
					</div>
				))}
			</div>
		</div>
	);
};
