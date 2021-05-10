import { PokedexListContext } from '../contexts/PokedexListContext';
import { useContext } from 'react';
import styles from '../styles/components/PokemonCard.module.css'

interface PokemonCardProps {
    type: string;
  }

export function PokemonCard({ type } : PokemonCardProps){

    return(
        <div className={styles.pokemonCardContainer}>
            {type}
        </div>
    );
}