import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => setPokemon(res.data))
  }, [id])

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <p>{pokemon?.abilities?.map((item) => <span key={item.ability.name}>{item.ability.name}{" "}</span>)}</p>
      <p>{pokemon.height}</p>
      <p>{pokemon.weight}</p>
      <img alt={pokemon.name} src={pokemon?.sprites?.front_default}/>
    </div>
  );
}

export default PokemonDetails;
