import styles from "../../styles/categories/Categories.module.css";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const EditTask = () => {
  //zod schema
  const taskSchema = z.object({
    title: z.string().min(1, { message: "Title is rwquired" }),
    description: z.string().min(1, { message: "Description is required" }),
  });

  
  //infer schema
  type ITaskSchema = z.infer<typeof taskSchema>;

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ITaskSchema>({
    resolver: zodResolver(taskSchema),
  });

  const onSubmit = (data: ITaskSchema) => {
    console.log(data);
    reset();
  };

  return (
    <div className={`${styles.wrapper} ${styles.task_wrapper}`}>
      <div className={`${styles.corner} ${styles.topright}`}></div>
      <div className={`${styles.corner} ${styles.bottomleft}`}></div>
      <div className={styles.content} style={{ width: "35rem" }}>
        <h3 className={styles.create_task}>Edit A Task</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles["add-label"]}>
            <label htmlFor="title">Title:</label>
            <div className={styles["add-cat-input"]}>
              <input
                type="text"
                id="title"
                {...register("title")}
                disabled={isSubmitting}
              />
              {errors.title && (
                <p
                  style={{
                    color: "red",
                    fontSize: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  {errors.title?.message}
                </p>
              )}
            </div>
            <label htmlFor="title">Description:</label>
            <div className={styles["add-cat-input"]}>
              <textarea
                cols={30}
                rows={10}
                {...register("description")}
                disabled={isSubmitting}
              />
              {errors.description && (
                <p
                  style={{
                    color: "red",
                    fontSize: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  {errors.description?.message}
                </p>
              )}
            </div>
            <div className={styles["add-buttons"]}>
              <div className={styles["cancel"]}>
                <button>CANCEL</button>
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

export default EditTask;
