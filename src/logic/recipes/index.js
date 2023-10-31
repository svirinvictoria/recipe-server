import dataAccess from "../../model/recipes/dataAccess";

//saving one recipe
const saveRecipe = (recipe)=>{
    return new Promise(async(resolve, reject)=>{
        try{
            const recipeToSave = await dataAccess.saveRecipe(recipe);
            resolve(recipeToSave)
        } catch(error){
            reject(error)
        }
    });
};

//getting recipes by category
const getChosenRecipes =(param)=>{
    return new Promise (async (resolve, reject)=>{
        try{
            const recipesByCategory = await dataAccess.getChosenRecipes(param);
           
            resolve(recipesByCategory) 
        } catch (err){
            console.error(err);
            reject(err)
        }
    });
};

module.exports = {
    saveRecipe: saveRecipe,
    getChosenRecipes:getChosenRecipes,
}