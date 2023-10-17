import http from "http";
import express from "express";
import router from "./router";
import connectToMongo from"./db";

const app = express();
app.server = http.createServer(app);

app.get("/test-route", (req, res)=>{
    res.json({
        message: "Test route is working"
    });
});

app.use("/api", router);
connectToMongo();

app.server.listen(3000);
console.log(`Started on port ${app.server.address().port}`);
