import mongoose from "mongoose";



export default()=>{
    let dbConnector = null;

    const connectionString = "mongodb+srv://vikiport_user:E2rb88n35IpDPche@cluster0.qq9rpka.mongodb.net/vikirecipe";
    
    mongoose.set('strictQuery', true);
    mongoose.connect(connectionString, function(err, database){
        if(err){
            console.error(err);
            process.exit(1);
        }
        dbConnector = database;
        console.log("Connection to MongoDb established successfully")
    });
};