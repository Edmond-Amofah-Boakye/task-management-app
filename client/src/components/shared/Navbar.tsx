import styles from '../../styles/shared/Navbar.module.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
        <nav className={styles.wrapper}>
            <ul>
                <li><Link to='/'>Task</Link></li>
                <li>
                <Link to='/signup'><button>SIGN UP</button></Link>
                </li>
            </ul>
        </nav>
  )
}

export default Navbar