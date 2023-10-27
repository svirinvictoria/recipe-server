import mongoose from "mongoose";

//connection to mongo database
try {
  if (mongoose.model("Category")) {
    module.exports = mongoose.model("Category");
  }
} catch (e) {
  if (e.name === "MissingSchemaError") {
    const categorySchema = new mongoose.Schema({
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      backColor:{
        type: String,
        required: true, 
      },
      imageURL:{
        type: String,
        required: true,
      },
      isActive: {
        type: Boolean,
        required: true,
      },
    });
    module.exports = mongoose.model("Category", categorySchema);
  }
}
