import { agregarBitadora, obtenerBitacora, obtenerBitacoraOne, actualizarBitacora, eliminarBitacoraOne, eliminarBitacoraTodo } from "../controllers/bitacoraController";
import Router from "express";

const ROUTER = Router();

ROUTER.post('/crear', agregarBitadora)
ROUTER.post('/obtener', obtenerBitacora)
ROUTER.post('/obtenerOne', obtenerBitacoraOne)
ROUTER.post('/actualizarBit', actualizarBitacora)
ROUTER.post('/eliminarBit', eliminarBitacoraOne)
ROUTER.post('/eliminarTodo', eliminarBitacoraTodo)


export default ROUTER;