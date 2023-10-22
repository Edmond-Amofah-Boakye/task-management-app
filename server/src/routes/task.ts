import * as Task from "../controllers/task";
import { Router } from "express";

const router = Router();

router.route("/")
    .get(Task.getAllTask);


router.route("/:id")
  .post(Task.createTask)
  .get(Task.getTask)
  .patch(Task.updateTask)
  .delete(Task.deleteTask);


  
export default router;
