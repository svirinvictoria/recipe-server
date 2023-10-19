import http from "http";
import express from "express";
import router from "./router/index";

import connectToMongo from"./db/index";

const cors = require("cors");
const app = express();
app.server = http.createServer(app);

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// app.get("/test-route", (req, res)=>{
//     res.json({
//         message: "Test route is working"
//     });
// });

app.use("/api", router);
app.use(express.static('public'));
connectToMongo();

app.server.listen(3000);
console.log(`Started on port ${app.server.address().port}`);
