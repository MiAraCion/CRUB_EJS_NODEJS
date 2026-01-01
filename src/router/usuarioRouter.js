import { Router } from "express";
import controller from "../controller/usuarioController.js";
const router = Router();


//vista
router.get("/usuario", controller.ListarUsuario);
router.post("/AgregarUsuario", controller.AgregarUsuario);
router.post("/buscarUsuario", controller.BuscarNombre);
router.post("/ActualizarUsuario",controller.ActualizarUsuario);
router.post("/eliminarUsuario", controller.EliminarPorId);


export default router;

