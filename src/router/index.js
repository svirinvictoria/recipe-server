import express from "express";
import ingredients from "../controller/ingredients";

let router = express();
router.use("/ingredients/v1", ingredients({}));

export default router;