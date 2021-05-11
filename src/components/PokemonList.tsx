import { PokedexListContext } from '../contexts/PokedexListContext';
import { useContext, useEffect, useState } from 'react';
import { PokemonCard } from './PokemonCard';
import axios from 'axios';
import styles from '../styles/components/PokemonList.module.css'


export function PokemonList(){
    
    const { list } = useContext(PokedexListContext);

    return(
        <div className={styles.pokemonListContainer}>
            <div>
                {list.map(p=> ( <PokemonCard key={p.id} type={p}/>))}
            </div>
            <div>
                teste
            </div>
        </div>
    );
}