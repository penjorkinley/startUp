//import modules
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dontev from "dotenv"
import morgan from "morgan"

//app
const app = express()

//db
dontev.config()
mongoose
.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("DB Connected"))
.catch((err) => console.log("DB Connection Error", err))

//middleware
app.use(morgan("dev"))
app.use(cors({ orgin: true, crendentials: true }))

//routes

//port
const port = process.env.PORT || 8080

//listener
const server = app.listen(port, () => console.log("Server is running"))