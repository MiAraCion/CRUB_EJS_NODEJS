import { Router } from "express";
import controller from "../controller/usuarioController.js";
const router = Router();


//vista
router.get("/usuario", controller.ListarUsuario);
router.post("/AgregarUsuario", controller.AgregarUsuario);


export default router;

