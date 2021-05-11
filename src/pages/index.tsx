import styles from '../styles/pages/Home.module.css'
import { TypeList } from '../components/TypeList'
import { PokemonList } from '../components/PokemonList'
import { PokedexListProvider } from '../contexts/PokedexListContext'
import React from 'react'

export default function Home() {
  return (
    <PokedexListProvider>
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
    </PokedexListProvider>
  )
}
