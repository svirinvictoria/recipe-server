import dataAccess from "../../model/ingredients/dataAccess";

//saving one ingredient
const saveIngred = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const ingredToSave = await dataAccess.saveIngred(data);
      resolve(ingredToSave);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

//getting list of ingredients
const getIngredList = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const ingredList = await dataAccess.getIngredCollection();
      //create array of new objects
      let updatedList = ingredList.map((item) => {
        return {
          name: item.name,
          type: item.type,
          isActive: item.isActive
        };
      
      });
      // if (updatedList == null) {
      //   updatedList = await dataAccess.saveIngred("test");
      // }
      resolve(updatedList);
    } catch (err) {
      console.error(err);
      reject(err);
    }
  });
};
//getting ingredient by NAME
const getIngredByName = (name) => {
  return new Promise(async (resolve, reject) => {
    try {
      const ingredByName = await dataAccess.getIngredByName(name);
      resolve(ingredByName);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = {
  getIngredList: getIngredList,
  saveIngred: saveIngred,
  getIngredByName: getIngredByName,
};
