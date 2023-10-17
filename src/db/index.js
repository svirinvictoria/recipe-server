import mongoose from "mongoose";



export default()=>{
    let dbConnector = null;

    const connectionString = "mongodb+srv://vikipot_user:Test1234@cluster0.vspbpp5.mongodb.net/test";
    mongoose.set('strictQuery', true);
    mongoose.connect(connectionString, function(err, database){
        if(err){
            console.log(err);
            process.exit(1);
        }
        dbConnector = database;
        console.log("Connection to MongoDb established successfully")
    });
};