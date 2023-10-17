import IngredItem from "./index.js";

export default class DataAccess {
  //save new ingredient
  static saveIngred(data) {
    return new Promise(async (resolve, reject) => {
      const newIngredItem = new IngredItem({
        name: data.name,
        type: data.type,
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

  //find ingredient by name
  static getIngredByName(name) {
    return new Promise(async (resolve, reject) => {
      ingredItem.findOne(
        { name: { $regex: name, $options: "i" } },
        (err, singleIngred) => {
          if (err) {
            console.log(err);
            reject(err);
          }
          resolve(singleIngred);
        }
      );
    });
  }
}
