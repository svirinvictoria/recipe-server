import { Router } from "express";
import "regenerator-runtime/runtime";

import logic from "../../logic/recipes/index";

export default ({}) => {
  const api = Router();

  //saving one recipe
  api.post("/saverecipe", async (req, res) => {
    const obj = req.body;
    const result = await logic.saveRecipe(obj);
    res.status(200).json({
      result,
    });
  });

  //bringing recipe list from the DB
  api.get("/recipelist/:param", async (req, res) => {
    // console.log("RECIPE");
    try {
      const result = await logic.getChosenRecipes(req.params.param);
    //   console.log(result);
      res.status(200).json({
        result,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Failed to load recipes list",
      });
    }
  });

  return api;
};
