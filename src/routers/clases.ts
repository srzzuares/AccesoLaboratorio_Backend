import { crearClases, obtenerClases, obtenerOneClases, actualizarClases, eliminarClases, eliminarTodoClases } from "../controllers/gruposController";
import Router from "express";

const ROUTER_Clases = Router();

ROUTER_Clases.post('/agregar', crearClases)
ROUTER_Clases.get('/obtener', obtenerClases)
ROUTER_Clases.get('/obtenerOne', obtenerOneClases)
ROUTER_Clases.put('/actualizar', actualizarClases)
ROUTER_Clases.delete('/eliminar', eliminarClases)
ROUTER_Clases.delete('/eliminarTodo', eliminarTodoClases)


export default ROUTER_Clases;