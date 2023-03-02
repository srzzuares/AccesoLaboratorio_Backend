import { agregarBitadora, obtenerBitacora, obtenerBitacoraOne, actualizarBitacora, eliminarBitacoraOne, eliminarBitacoraTodo } from "../controllers/bitacoraController";
import Router from "express";

const ROUTER = Router();

ROUTER.get('/obtener', obtenerBitacora)
ROUTER.get('/obtenerOne/:idBitacora', obtenerBitacoraOne)
ROUTER.post('/crear', agregarBitadora)
ROUTER.put('/actualizarBit/:idBitacora', actualizarBitacora)
ROUTER.delete('/eliminarBit/:idBitacora', eliminarBitacoraOne)
ROUTER.delete('/eliminarTodo', eliminarBitacoraTodo)



export default ROUTER;