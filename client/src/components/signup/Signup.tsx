import styles from "../../styles/signup/Signup.module.css";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

function Signup() {
  //handle goolge
  const handleGoogle = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  //zod
  const signupShcema = z.object({
    email: z.string().email().trim(),
    password: z
      .string()
      .min(6)
      .max(15)
      .trim()
      .regex(/[A-Z]/, "password must contain at leat one capital letter")
      .regex(/[!@#$%^&*()<>,.?:{}-]/,"password must contain at least one special character"),
  });

  type SignupSchema = z.infer<typeof signupShcema>;

  //registering and connecting hook form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupSchema>({ resolver: zodResolver(signupShcema) });

  //submitting form
  const onSubmit = async (data: SignupSchema) => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(console.log(data));
      }, 4000);
    });
  };

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

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="email">
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className={styles.error_message}>{errors.email.message}</p>
            )}
          </div>

          <div className="pasword">
            <input
              type="pasword"
              placeholder="Password"
              {...register("password")}
              disabled={isSubmitting}
            />
            {errors.password && (
              <p className={styles.error_message}>{errors.password.message}</p>
            )}
          </div>

          <div className={styles.formbtn}>
            <button disabled={isSubmitting}>Sign Up</button>
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
