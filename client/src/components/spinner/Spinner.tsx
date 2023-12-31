import styles from '../../styles/spinner/Spinner.module.css'

const Spinner = () => {
  return (
    <div className={styles['spinner-container']}>
        <div className={styles.spinner}></div>
    </div>
  )
}

export default Spinner