import { Router } from "express";
import "regenerator-runtime/runtime";

import logic from "../../logic/ingredients/index";

export default ({}) => {
  const api = Router();

  // api.get("/isalive", (request, response)=>{
  //     response.status(200).json({
  //         isAlive: true
  //     });
  // });

  //getting ingredient from database
  api.get("/ingredlist", async(req, res) => {
    try {
      //console.log("GET");
      const result = await logic.getIngredList();
      console.log(result);//HERE!!!
      res.status(200).json({ 
        result 
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Failed to load ingredient",
      });
    }
  });

  //sending ingredient to database
  api.post("/saveingred", async (req, res) => {
    console.log("POST");
    const data = req.body;
    const result = await logic.saveIngred(data);
    
    res.status(200).json({
      result,
    });
  });

  // //getting ingredient by NAME
  // api.get("/singleingred/:name", async (req, res) => {
  //   try {
  //     const singleIngredAsObj = await logic.getIngredByName(req.params.name);
  //     //console.log("in controller  " + req.params.name);
  //     res.status(200).json({
  //       singleIngredAsObj,
  //     });
  //   } catch (err) {
  //     console.error(err);
  //     res.status(500).json({ message: "Failed to load ingredient by name" });
  //   }
  // });

  return api;
};
