import { PokedexListContext } from '../contexts/PokedexListContext';
import { useContext } from 'react';
import styles from '../styles/components/PokemonCard.module.css'

interface PokemonCardProps {
    type: string;
  }

export function PokemonCard({ type } : PokemonCardProps){

    return(
        <div className={styles.pokemonCardContainer}>
            <main>
                <img/>
                <strong>{type}</strong>
                <p>titulo do pokemon </p>
            </main>
            
            <footer>
                <strong>tipos do pokemon</strong>
                <p>ataque?</p>
            </footer>
        </div>
    );
}