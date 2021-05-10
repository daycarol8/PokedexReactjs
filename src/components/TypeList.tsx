import styles from '../styles/components/TypeList.module.css';
import { PokedexListContext } from '../contexts/PokedexListContext';
import { TypeButton } from './TypeButton';
import { useContext } from 'react';

export function TypeList(){

    const { types } = useContext(PokedexListContext);

    return(
        <div className={styles.typeListContainer}>
            <div>
                {types.map(p => (
                    <TypeButton pokType={p}/>
                ))}
            </div>
        </div>
    );
}