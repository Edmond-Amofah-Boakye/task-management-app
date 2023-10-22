import * as Category from "../controllers/category";
import { Router } from "express";

const router = Router();

router.route("/")
    .post(Category.createCategory)
    .get(Category.getAllCategories);


router
  .route("/:id")
  .get(Category.getCategory)
  .patch(Category.updateCategory)
  .delete(Category.deleteCategory);


  
export default router;
