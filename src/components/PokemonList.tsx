import { PokedexListContext } from '../contexts/PokedexListContext';
import { useContext, useEffect, useState } from 'react';
import { PokemonCard } from './PokemonCard';
import axios from 'axios';
import styles from '../styles/components/PokemonList.module.css'


export function PokemonList(){
    
    const { actualType, isClicked } = useContext(PokedexListContext);

    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/type/${actualType}`).then(res =>{
        setList(res.data.pokemon.map(p => p.pokemon.name));
    })
    }, [actualType])

    return(
        <div className={styles.pokemonListContainer}>
            <div>
                {list.map(p=> ( <PokemonCard type={p}/>))}
            </div>
            <div>
                teste
            </div>
        </div>
    );
}