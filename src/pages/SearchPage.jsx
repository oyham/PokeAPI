import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CardPokemon } from '../components';
import { PokemonContext } from '../context/PokemonContext';

export const SearchPage = () => {
	const location = useLocation();

	const { globalPokemons } = useContext(PokemonContext);
	// const { filteredPokemons } = useContext(PokemonContext);

	// Verificar si hay datos de búsqueda o asignar una cadena vacía por defecto
	const searchQuery = location.state ? location.state.toLowerCase() : '';

	if (!searchQuery) {
		return (
			<div className='container'>
				<p className='p-search'>Ingrese un dato en el campo de búsqueda.</p>
			</div>
		);
	}

	// Filtrar los Pokémon en base a la búsqueda
	const filteredPokemons = globalPokemons.filter(pokemon =>
		pokemon.name.includes(searchQuery)
	);


	return (
		<div className='container'>
			<p className='p-search'>
				Se encontraron <span>{filteredPokemons.length}</span>{' '}
				resultados:
			</p>
			<div className='card-list-pokemon container'>
				{filteredPokemons.map(pokemon => (
					<CardPokemon pokemon={pokemon} key={pokemon.id} />
				))}
			</div>
		</div>
	);
};
