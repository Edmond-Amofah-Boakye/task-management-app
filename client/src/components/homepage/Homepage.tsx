import styles from "../../styles/homepage/homepage.module.css";
import Navbar from "../shared/Navbar";
import taskImage from "../../assets/gamechanger-John-lewis-pillow-indybest.avif";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Spinner from "../spinner/Spinner";
import { useEffect, useState } from "react";

const Homepage = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
    {loading?  <Spinner /> : (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
        className={styles.wrapper}
      >
        <div className={`${styles.corner} ${styles.topleft}`}></div>
        <div className={`${styles.corner} ${styles.topright}`}></div>
        <div className={`${styles.corner} ${styles.bottomleft}`}></div>
        <div className={`${styles.corner} ${styles.bottomright}`}></div>
        <div className={styles.content}>
          <Navbar />
          <div className={styles.details}>
            <div className={styles.message}>
              <h1>
                An online task <br /> management tool <br /> for teams
              </h1>
              <p>
                Dicta dolores totam asperiores. Animi natus facilis optio dicta
                modi autem incidunt. Odit, quidem!
              </p>
              <Link to="/signin">
                <button>SIGN IN</button>
              </Link>
            </div>
            <div className={styles.image}>
              <img src={taskImage} alt="task-image" />
            </div>
          </div>
        </div>
      </motion.div>
    )}
    </>
  );
};

export default Homepage;
