import styles from "../../styles/categories/Categories.module.css";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Categories = () => {
  //zod schema
  const categorySchema = z.object({
    category: z.string().min(1, { message: "**Category is required**" }),
  });

  type ICategorySchema = z.infer<typeof categorySchema>;

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ICategorySchema>({ resolver: zodResolver(categorySchema) });

  //submitting form
  const onSubmit = (data: ICategorySchema) => {
    console.log(data);
    reset();
  };

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.corner} ${styles.topright}`}></div>
      <div className={`${styles.corner} ${styles.bottomleft}`}></div>
      <div className={styles.content}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles["add-label"]}>
            <label htmlFor="add">Add Category</label>
            <div className={styles["add-cat-input"]}>
              <input
                type="text"
                id="add"
                {...register("category")}
                disabled={isSubmitting}
              />
              {errors.category && (
                <p
                  style={{
                    color: "red",
                    fontSize: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  {errors.category?.message}
                </p>
              )}
            </div>

            <div className={styles["add-buttons"]}>
              <div className={styles["cancel"]}>
                <button type="reset">CANCEL</button>
              </div>
              <div className={styles["add"]}>
                <button disabled={isSubmitting}>SUBMIT</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Categories;
