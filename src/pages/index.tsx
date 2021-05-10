import styles from '../styles/pages/Home.module.css'
import { TypeList } from '../components/TypeList'
import { PokemonList } from '../components/PokemonList'

export default function Home() {
  return (
    <div className={styles.container}>
      <section>
        <div>
          <TypeList/>
        </div>
        <div>
          <PokemonList/>
        </div>
      </section>
    </div>
  )
}
