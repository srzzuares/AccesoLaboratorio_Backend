import { crearClases, obtenerClases, obtenerOneClases, actualizarClases, eliminarClases, eliminarTodoClases } from "../controllers/clasesController";
import Router from "express";

const ROUTER_Clases = Router();

ROUTER_Clases.get('/obtener', obtenerClases)
ROUTER_Clases.get('/obtenerOne/:idClases', obtenerOneClases)
ROUTER_Clases.post('/agregar', crearClases)
ROUTER_Clases.put('/actualizar/:idClases', actualizarClases)
ROUTER_Clases.delete('/eliminar/:idClases', eliminarClases)
ROUTER_Clases.delete('/eliminarTodo', eliminarTodoClases)



export default ROUTER_Clases;