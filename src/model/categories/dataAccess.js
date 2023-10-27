import Category from "./index.js"

export default class DataAccess {
    //getting collection of categories 
    static getCategoriesCollection(data) {
      return new Promise(async(resolve, reject)=>{
        Category.find(
          {
          isActive: {
            $eq: true
          },
        },
        (err, foundCategoriesList)=>{
          if(err){
            console.error(err);
            reject(err);
          }
          resolve(foundCategoriesList)
        })
      });
    }

    //saving new category
  static saveCategory(data) {
    return new Promise (async (resolve, reject) => {
      const newCategory = new Category({
        name: data.name,
        description: data.description,
        backColor: data.backColor,
        imageURL: data.imageURL,
        isActive: data.isActive
      });
      newCategory.save((err) => {
        if (err) {
          console.error(err);
          reject(err);
        }
        resolve(newCategory);
      });
    });
  }

}

