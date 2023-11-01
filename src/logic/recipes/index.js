import dataAccess from "../../model/recipes/dataAccess";
import dataAccess2 from "../../model/categories/dataAccess";

//saving one recipe
const saveRecipe = (recipe) => {
  return new Promise(async (resolve, reject) => {
    try {
      const recipeToSave = await dataAccess.saveRecipe(recipe);
      resolve(recipeToSave);
    } catch (error) {
      reject(error);
    }
  });
};

//getting recipes by category
const getChosenRecipes = (param) => {
  return new Promise(async (resolve, reject) => {
    try {
      const recipesByCategory = await dataAccess.getChosenRecipes(param);
      resolve(recipesByCategory);
    } catch (err) {
      console.error(err);
      reject(err);
    }
  });
};

const getRecipesAndCategs = () => {
  return new Promise(async (resolve, reject) => {
    const recipesCollection = [];

    try {
      //step 1- bringing list of categories from the server
      const categories = await dataAccess2.getCategoriesCollection();
      for (let i = 0; i < categories.length; i++) {
        const currentCategory = categories[i];
        //step 2 - bringing list of FILTERED (by category) recipes from server
        const recipes = await dataAccess.getChosenRecipes(currentCategory.name);
        recipesCollection.push(recipes);
      }
      const recipesAndCategories = {
        recipes: recipesCollection,
        categories: categories,
      };
      resolve(recipesAndCategories);
    } catch (err) {
      console.error(err);
      reject(err);
    }
  });
};

module.exports = {
  saveRecipe: saveRecipe,
  getChosenRecipes: getChosenRecipes,
  getRecipesAndCategs: getRecipesAndCategs,
};
