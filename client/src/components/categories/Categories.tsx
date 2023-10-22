import { Link } from "react-router-dom";
import styles from "../../styles/categories/Categories.module.css";

const Categories = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.corner} ${styles.topright}`}></div>
      <div className={`${styles.corner} ${styles.bottomleft}`}></div>
      <div className={styles.content}>
        <div className={styles.categories}>
          <p>+</p>
          <h1>CATEGORIES</h1>
        </div>
        <div className={styles.details}>
            <ul>
                <Link to='/'><li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, sed? Pariatur eos a eum ex saepe. Modi mollitia iure placeat ex voluptatum soluta beatae, atque, non adipisci eaque sunt blanditiis!</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
                <Link to='/'><li>1</li></Link>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Categories;
