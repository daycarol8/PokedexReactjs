import styles from '../styles/components/TypeButton.module.css'
import { PokedexListContext } from '../contexts/PokedexListContext';
import { useContext } from 'react';

interface TypeButtonProps {
    pokType: string;
  }

export function TypeButton({ pokType } : TypeButtonProps){

    const { isClicked, buttonCancel, buttonIsClicked, buttonClicked } = useContext(PokedexListContext);

    return(
        <div>
            <div className={styles.TypesButtonContainer}>
                {isClicked && pokType===buttonClicked? (
                    <button className={`${styles.buttonType} ${styles.buttonActive}`} onClick={buttonCancel}><strong>{pokType}</strong></button>
                ):(
                    <button className={styles.buttonType} onClick={() => buttonIsClicked(pokType)}><strong>{pokType}</strong></button>
                )}
                
            </div>
        </div>
    );
}