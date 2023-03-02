import { crearDaper, obtenerDaper, obtenerOneDaper, actualizarDaper, eliminarDaper, eliminarTodoDaper } from "../controllers/datos_PersonaController";
import Router from "express";

const ROUTER_DaPer = Router();

ROUTER_DaPer.get('/obtener', obtenerDaper)
ROUTER_DaPer.get('/obtenerOne/:idDatos_persona', obtenerOneDaper)
ROUTER_DaPer.post('/agregar', crearDaper)
ROUTER_DaPer.put('/actualizar/:idDatos_persona', actualizarDaper)
ROUTER_DaPer.delete('/eliminar/:idDatos_persona', eliminarDaper)
ROUTER_DaPer.delete('/eliminarTodo', eliminarTodoDaper)



export default ROUTER_DaPer;