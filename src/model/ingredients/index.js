import mongoose from "mongoose";

//connection to mongo database
try {
  if (mongoose.model("IngredItem")) {
    module.exports = mongoose.model("IngredItem");
  }
} catch (e) {
  if (e.name === "MissingSchemaError") {
    const ingredItemSchema = new mongoose.Schema({
      name: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      isActive: {
        type: Boolean,
        required: true,
      },
    });
    module.exports = mongoose.model("IngredItem", ingredItemSchema);
  }
}
