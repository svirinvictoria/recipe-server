import { async } from "regenerator-runtime";
import IngredItem from "./index.js";

export default class DataAccess {
  //getting collection of ingredients 
  static getIngredCollection(data) {
    return new Promise(async(resolve, reject)=>{
      IngredItem.find(
        
        {
        // isActive: {
        //   $eq: true
        // },
      },
      (err, foundIngredsList)=>{
        if(err){
          console.error(err);
          reject(err);
        }
        resolve(foundIngredsList)
      })
    });
  }

  //save new ingredient
  static saveIngred(data) {
    return new Promise (async (resolve, reject) => {
      const newIngredItem = new IngredItem({
        name: data.name,
        type: data.type,
        isActive: data.isActive
      });
      newIngredItem.save((err) => {
        if (err) {
          console.error(err);
          reject(err);
        }
        resolve(newIngredItem);
      });
    });
  }

  // //find ingredient by name
  // static getIngredByName(name) {
  //   return new Promise(async (resolve, reject) => {
  //     ingredItem.findOne(
  //       { name: { $regex: name, $options: "i" } },
  //       (err, singleIngred) => {
  //         if (err) {
  //           console.log(err);
  //           reject(err);
  //         }
  //         resolve(singleIngred);
  //       }
  //     );
  //   });
  // }
}
