import styles from "../../styles/categories/Categories.module.css";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const EditCategory = () => {
  //zod schema
  const categorySchema = z.object({
    category: z.string().min(1, { message: "category is rwquired" }),
  });

  //form

  //infer schema
  type ICategorySchema = z.infer<typeof categorySchema>;

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ICategorySchema>({
    resolver: zodResolver(categorySchema),
  });


  const onSubmit = (data: ICategorySchema) =>{
    console.log(data);
    reset()
    
  }

  return (
    <div className={`${styles.wrapper} ${styles.edit_wrapper}`}>
      <div className={`${styles.corner} ${styles.topright}`}></div>
      <div className={`${styles.corner} ${styles.bottomleft}`}></div>
      <div className={styles.content}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles["add-label"]}>
            <label htmlFor="add">Edit Category</label>
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
                <button>SUBMIT</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCategory;
