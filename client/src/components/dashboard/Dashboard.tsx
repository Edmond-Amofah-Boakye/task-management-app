import { useState } from 'react'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import styles from '../../styles/dashboard/Dashboard.module.css'

const Dashboard = () => {
  const [toogleMenu, settoogleMenu] = useState<boolean>(true)

  const handleToggle = (): void =>{
    settoogleMenu(!toogleMenu)
  }

  return (
    <div className={styles.wrapper}>
        <div className={toogleMenu? styles.sidebar: styles.toogle}>
            <Sidebar />
        </div>
        <div className={toogleMenu? styles.main: styles.toogle_main}>
            <MainContent handleMenu={handleToggle}/>
        </div>
    </div>
  )
}

export default Dashboard