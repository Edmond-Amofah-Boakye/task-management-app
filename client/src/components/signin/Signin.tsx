import styles from "../../styles/signup/Signup.module.css";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

function Signin() {
  return (
    <motion.div
      transition={{ duration: 3 }}
      animate={{ opacity: 1 }}
      exit={{opacity: 0}}
      initial={{ opacity: 0 }}
      className={styles.wrapper}
    >
      <div className={styles.signinheadColor}></div>
      <div className={styles.signupWrapper}>
        <div className={styles.head}>
          <h1>Sign In</h1>
        </div>
        <form action="">
          <div className="email">
            <input type="email" placeholder="Email" />
          </div>
          <div className="pasword">
            <input type="pasword" placeholder="Password" />
          </div>
          <div className={styles.signinbtn}>
            <button>Sign In</button>
          </div>
          <p className={styles.existAccount}>
            Don't have an account? <a href="login">Sign In</a>
          </p>
          <p className={styles.alternative}>or</p>
          <div className={styles.socials}>
            <div className={styles.google}>
              <button>
                <FcGoogle className={styles.iconGoogle} /> Sign in with Google
              </button>
            </div>
            <div className={styles.twitter}>
              <button>
                {" "}
                <FaTwitter className={styles.iconTwitter} />
                Sign in with Twitter
              </button>
            </div>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

export default Signin;
