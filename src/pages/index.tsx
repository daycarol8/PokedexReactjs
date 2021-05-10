import styles from '../styles/pages/Home.module.css'
import { TypeList } from '../components/TypeList'

export default function Home() {
  return (
    <div className={styles.container}>
      <TypeList/>
    </div>
  )
}
