import mongoose from "mongoose";

try{
    if(mongoose.model("RecipeItem")){
        module.exports = mongoose.model("RecipeItem");
    }
} catch (e){
    if (e.name==="MissingSchemaError"){
        const recipeItemSchema = new mongoose.Schema({
            name:{
                type: String,
                required: true,
            },
            shortDescription: {
                type: String,
                required: true,
            },
            fullDescription: {
                type: String,
                required: true,
            },
            categories: {
                type: String,
                required: true,
            },
            ingredients: {
                type: String,
                required: true,
            },
            steps: {
                type: String,
                required: true,
            },
            time: {
                type: String,
                required: true,
            },
            calories: {
                type: Number,
                required: true,
            },
            typeOfMeal: {
                type: String,
                required: true,
            },
            kindOfPreparation: {
                type: String,
                required: true,
            },
            rating: {
                type: Number,
                required: true,
            },
            imageURL: {
                type: String,
                required: false,
            },
            isActive: {
                type: Boolean,
                required: true,
            },
            dateCreation: {
                type: Date,
                required: false,
            },
            author: {
                type: String,
                required: true,
            },

        })
        module.exports=mongoose.model("RecipeItem", recipeItemSchema);
    }
}