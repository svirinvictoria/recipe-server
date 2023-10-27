import { Router } from "express";
import "regenerator-runtime/runtime";

import logic from "../../logic/categories/index.js";

export default ({}) => {

  const api = Router();

  // api.get("/test", (req, res)=>{
  //   res.status(200).json({
  //     isAlive: true
  //   });
  // });

  //getting categories from database
  api.get("/categlist", async(req, res) => {
    try {
      //console.log("Categories");
      const result = await logic.getCategoriesList();//!!!
      //console.log(result);
      res.status(200).json({ 
        result 
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Failed to load categories",
      });
    }
  });

  //sending category to database
  api.post("/savecategory", async (req, res) => {
    //console.log("savecategory");
    const data = req.body;
    const result = await logic.saveCateg(data);///!!!
    
    res.status(200).json({
      result,
    });
  });

  return api;
}