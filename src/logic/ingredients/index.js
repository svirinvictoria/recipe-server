import dataAccess from "../../model/ingredients/dataAccess";

//saving one ingredient
const saveIngred = (ingred)=>{
    return new Promise (async (resolve, reject)=>{
        try {
            const ingredData = await dataAccess.saveIngred(ingred);
            resolve(ingredData);
        } catch (error){
            reject(error);
        }
    });
};

//getting ingredient by NAME
const getIngredByName = (name)=>{
    return new Promise (async (resolve, reject)=>{
        try{
            const ingredByName = await dataAccess.getIngredByName(name);
            resolve (ingredByName)
        } catch (err){
            reject(err)
        }
    })
}

module.exports = {
    saveIngred: saveIngred,
    getIngredByName: getIngredByName,
}