import styles from "../../styles/categories/Categories.module.css";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const AddTask = () => {
  //schema for task
  const taskSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }).max(20),
    description: z
      .string()
      .min(1, { message: "Description is required" })
      .max(500),
  });

  //interface for task
  type ICreateTask = z.infer<typeof taskSchema>;

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ICreateTask>({ resolver: zodResolver(taskSchema) });

  //send data
  const onSubmit = (data: ICreateTask) => {
    console.log(data);
    reset()
  };

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.corner} ${styles.topright}`}></div>
      <div className={`${styles.corner} ${styles.bottomleft}`}></div>
      <div className={styles.content} style={{ width: "35rem" }}>
        <h3 className={styles.create_task}>Create A Task</h3>
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
                  {errors.title.message}
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
                  {errors.description.message}
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

export default AddTask;
