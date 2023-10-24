import styles from "../../styles/signup/Signup.module.css";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Signup() {
  //handle goolge

  const handleGoogle = () =>{
    window.location.href = 'http://localhost:5000/auth/google'
  }
















  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
      className={styles.wrapper}
    >
      <div className={styles.headColor}></div>
      <div className={styles.signupWrapper}>
        <div className={styles.head}>
          <h1>Sign Up</h1>
          <p>Let's get started with your task management</p>
        </div>
        <form action="">
          <div className="email">
            <input type="email" placeholder="Email" />
          </div>
          <div className="pasword">
            <input type="pasword" placeholder="Password" />
          </div>
          <div className={styles.formbtn}>
            <button>Sign Up</button>
          </div>
          <p className={styles.existAccount}>
            Already have an account? <Link to="/signin">Log In</Link>
          </p>
          <p className={styles.alternative}>or</p>
        </form>
          <div className={styles.socials}>
            <div className={styles.google}>
              <button onClick={handleGoogle}>
                <FcGoogle className={styles.iconGoogle} /> Sign Up with Google
              </button>
            </div>
            <div className={styles.twitter}>
              <button>
                <FaTwitter className={styles.iconTwitter} />
                Sign Up with Twitter
              </button>
            </div>
          </div>
      </div>
    </motion.div>
  );
}

export default Signup;
