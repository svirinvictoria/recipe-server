import dataAccess from "../../model/categories/dataAccess";

//getting list of categories
const getCategoriesList = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const categList = await dataAccess.getCategoriesCollection();//!!!
      //create array of new objects
      let updatedList = categList.map((item) => {
        return {
          name: item.name,
          description: item.description,
          backColor: item.backColor,
          imageURL: item.imageURL,
          isActive: item.isActive,
        };
      });

      resolve(updatedList);
    } catch (err) {
      console.error(err);
      reject(err);
    }
  });
};

//saving category to DB
const saveCateg = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const categoryToSave = await dataAccess.saveCategory(data);
      resolve(categoryToSave);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

module.exports = {
  getCategoriesList: getCategoriesList,
  saveCateg:saveCateg
};
