import { agregarBitadora, obtenerBitacora, obtenerBitacoraOne, actualizarBitacora, eliminarBitacoraOne, eliminarBitacoraTodo } from "../controllers/bitacoraController";
import Router from "express";

const ROUTER = Router();

ROUTER.post('/conectar', agregarBitadora)
ROUTER.post('/registrar', obtenerBitacora)
ROUTER.post('/', obtenerBitacoraOne)
ROUTER.post('/', actualizarBitacora)
ROUTER.post('/', eliminarBitacoraOne)
ROUTER.post('/', eliminarBitacoraTodo)


export default ROUTER;