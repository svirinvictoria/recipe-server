import express from "express";
import ingredients from "../controller/ingredients";
import categories from "../controller/categories";
import recipes from "../controller/recipes";

let router = express();
router.use("/ingredients/v1", ingredients({}));
router.use("/categories/v1", categories({}));
router.use("/recipes/v1", recipes({}));

export default router;