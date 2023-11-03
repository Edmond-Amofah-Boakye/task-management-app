import Sidebar from './Sidebar'
import MainContent from './MainContent'
import styles from '../../styles/dashboard/Dashboard.module.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/Store'

const Dashboard = () => {
  const toogleMenu = useSelector((state: RootState)=> state.menu.menu)
 
  return (
    <div className={styles.wrapper}>
        <div className={toogleMenu? styles.sidebar: styles.toogle}>
            <Sidebar />
        </div>
        <div className={toogleMenu? styles.main: styles.toogle_main}>
            <MainContent />
        </div>
    </div>
  )
}

export default Dashboard