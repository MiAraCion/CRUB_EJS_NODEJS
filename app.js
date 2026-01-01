import express from "express"
import userRouter from "./src/router/usuarioRouter.js";

const app = express();
const port = 4000;

app.set("view engine", "ejs");
app.set("views", "./src/views/")
app.use(express.json());//para json
app.use(express.urlencoded({ extended: true }))//para formularios
app.use("/", userRouter);

app.listen(port, ()=>{
    console.log(`servidor corriendo en http://localhost:${port}`);
})