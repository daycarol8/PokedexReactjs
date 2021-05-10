import styles from '../styles/components/TypeButton.module.css'

interface TypeButtonProps {
    name: string;
  }

export function TypeButton({ name } : TypeButtonProps){

    return(
        <div>
            <div className={styles.TypesButtonContainer}>
                <button className={styles.buttonType}><strong>{name}</strong></button>
            </div>
        </div>
    );
}