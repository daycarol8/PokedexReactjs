import axios from 'axios';
import { PokedexListContext } from '../contexts/PokedexListContext';
import { useContext, useEffect, useState } from 'react';
import styles from '../styles/components/PokemonCard.module.css'

interface PokemonCardProps {
    type: string;
  }

export function PokemonCard({ type } : PokemonCardProps){

    const [img, setImg] = useState('');

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${type}`).then(res =>{
        setImg(res.data.sprites.front_default);
    })
    }, [type])

    const [typesPokemon, setTypesPokemon] = useState([]);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${type}`).then(res =>{
        setTypesPokemon(res.data.types.map(p => p.type.name));
    })
    }, [type])

    const [id, setId] = useState(0);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${type}`).then(res =>{
        setId(res.data.id);
    })
    }, [type])

    const [move, setMove] = useState([]);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${type}`).then(res =>{
        setMove(res.data.moves.map(p => p.move.name));
    })
    }, [type])

    return(
        <div className={styles.pokemonCardContainer}>
            <main>
                <img src={img} />
                <h3>{type}</h3>
                <p>id:{id}</p>
            </main>
            
            <footer>{typesPokemon.length == 2 ? (
                <strong>{`${typesPokemon[0]} - ${typesPokemon[1]}`}</strong>
            ):(
                <strong>{`${typesPokemon[0]}`}</strong>
            )}
                <p>{move[0]}</p>
            </footer>
        </div>
    );
}