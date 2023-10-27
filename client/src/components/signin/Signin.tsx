import styles from "../../styles/signup/Signup.module.css";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

function Signin() {
  //handle google login
  const handleGoogle = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  //zod validation
  const signinSchema = z.object({
    email: z.string().email().trim(),
    password: z
      .string()
      .trim()
      .min(6)
      .max(15)
      .regex(/[A-Z]/)
      .regex(/[!@#$%^&*,./]/),
  });

  type ISignupSchema = z.infer<typeof signinSchema>;

  //react-hook-form
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ISignupSchema>({ resolver: zodResolver(signinSchema) });

  //send form

  const onSubmit = (data: ISignupSchema) =>{
    console.log(data);
    
  }





  return (
    <motion.div
      transition={{ duration: 3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      className={styles.wrapper}
    >
      <div className={styles.signinheadColor}></div>
      <div className={styles.signupWrapper}>
        <div className={styles.head}>
          <h1>Sign In</h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="email">
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              disabled={isSubmitting}
              />
              {errors.email && (<p className={styles.error_message}>{errors.email.message}</p>)}
          </div>

          <div className="pasword">
            <input
              type="pasword"
              placeholder="Password"
              {...register("password")}
              disabled={isSubmitting}
            />
            {errors.password && (<p className={styles.error_message}>{errors.password.message}</p>)}
          </div>

          <div className={styles.signinbtn}>
            <button disabled={isSubmitting}>Sign In</button>
          </div>

          <p className={styles.existAccount}>
            Don't have an account? <Link to="/signup">Sign In</Link>
          </p>
          <p className={styles.alternative}>or</p>
        </form>
        <div className={styles.socials}>
          <div className={styles.google}>
            <button onClick={handleGoogle}>
              <FcGoogle className={styles.iconGoogle} /> Sign in with Google
            </button>
          </div>
          <div className={styles.twitter}>
            <button>
              <FaTwitter className={styles.iconTwitter} />
              Sign in with Twitter
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Signin;
