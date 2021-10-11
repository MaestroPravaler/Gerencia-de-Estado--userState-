import Contador from '../estado/Contador'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Contador />
    </div>
  )
}
