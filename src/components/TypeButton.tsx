import styles from '../styles/components/TypeButton.module.css'
import { PokedexListContext } from '../contexts/PokedexListContext';
import { useContext } from 'react';

interface TypeButtonProps {
    name: string;
  }

export function TypeButton({ name } : TypeButtonProps){

    const { isClicked, buttonCancel, buttonIsClicked, buttonClicked } = useContext(PokedexListContext);

    return(
        <div>
            <div className={styles.TypesButtonContainer}>
                {isClicked && name===buttonClicked? (
                    <button className={`${styles.buttonType} ${styles.buttonActive}`} onClick={buttonCancel}><strong>{name}</strong></button>
                ):(
                    <button className={styles.buttonType} onClick={() => buttonIsClicked(name)}><strong>{name}</strong></button>
                )}
                
            </div>
        </div>
    );
}