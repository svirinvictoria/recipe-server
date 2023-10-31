import RecipeItem from "./index";

export default class dataAccess {
  //saving one recipe
  static saveRecipe(recipe) {
    return new Promise(async (resolve, reject) => {
      const newRecipeItem = new RecipeItem({
        name: recipe.name,
        shortDescription: recipe.shortDescription,
        fullDescription: recipe.fullDescription,
        categories: recipe.categories,
        ingredients: recipe.ingredients,
        steps: recipe.steps,
        time: recipe.time,
        calories: recipe.calories,
        typeOfMeal: recipe.typeOfMeal,
        kindOfPreparation: recipe.kindOfPreparation,
        rating: recipe.rating,
        imageURL: recipe.imageURL,
        isActive: recipe.isActive,
        dateCreation: recipe.dateCreation,
        author: recipe.author,
      });
      newRecipeItem.save((err) => {
        if (err) {
          console.error(err);
          reject(err);
        }
        resolve(newRecipeItem);
      });
    });
  }

  //getting collection of recipes by category
  static getChosenRecipes(categories) {
    return new Promise(async (resolve, reject) => {
      RecipeItem.find(
        {
          categories: { $regex: categories, $options: "i" },
        },
        (err, chosenRecipesList) => {
          if (err) {
            console.error(err);
            reject(err);
          }
          resolve(chosenRecipesList);
        }
      );
    });
  }
}
