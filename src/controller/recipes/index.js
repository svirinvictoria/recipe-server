import { Router } from "express";
import "regenerator-runtime/runtime";

import logic from "../../logic/recipes/index";
import { async } from "regenerator-runtime";

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
  api.get("/recipelist/:category", async (req, res) => {
    console.log(req.params);
    try {
      const result = await logic.getChosenRecipes(req.params.category);
      res.status(200).json({result});
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Failed to load recipes list",
      });
    }
  });

  
  //bringing categories and recipes together in one object
  api.get("/getlists", async(req, res)=>{
    try{
      const result = await logic.getRecipesAndCategs()
      res.status(200).json({result});
    }catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Failed to load all the lists",
      });
    }
    

  })

  return api;
};
