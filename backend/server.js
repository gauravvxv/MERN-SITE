const express = require("express");
const app = express();
const mongoDB = require("./config/db")
const router = require("./routers/userRouter")
const router2 = require("./routers/dataRouter")
const cors = require("cors")
app.use(express.json());
require("dotenv").config();
const PORT = process.env.PORT

app.use(cors())

app.use("/",router)
app.use("/",router2)


app.listen(PORT,()=>{
    try {
        mongoDB();
        console.log(`${PORT} Port is running`);
    } catch (error) {
        console.log(error);
    }
})