import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from './app.js'


dotenv.config({
    path: './.env'
})



connectDB()
.then((err) => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(` Server is running at port : ${process.env.PORT}`);
        app.on("error", (err) => {
            console.log("ERR: ", err);
            throw err
        })
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})
