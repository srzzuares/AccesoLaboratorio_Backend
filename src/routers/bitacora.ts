import { agregarBitadora, obtenerBitacora, obtenerBitacoraOne, actualizarBitacora, eliminarBitacoraOne, eliminarBitacoraTodo } from "../controllers/bitacoraController";
import Router from "express";

const ROUTER = Router();

ROUTER.post('/conectar', agregarBitadora)
ROUTER.post('/registrar', obtenerBitacora)
ROUTER.post('/obtenerBit', obtenerBitacoraOne)
ROUTER.post('/actualizarBit', actualizarBitacora)
ROUTER.post('/eliminarBit', eliminarBitacoraOne)
ROUTER.post('/eliminar', eliminarBitacoraTodo)


export default ROUTER;