import { crearGrupos, obtenerGrupos, obtenerOneGrupos, actualizarGrupos, eliminarGrupos, eliminarTodoGrupos } from "../controllers/gruposController";
import Router from "express";

const ROUTER_Grupos = Router();

ROUTER_Grupos.post('/agregar', crearGrupos)
ROUTER_Grupos.get('/obtener', obtenerGrupos)
ROUTER_Grupos.get('/obtenerOne', obtenerOneGrupos)
ROUTER_Grupos.put('/actualizar', actualizarGrupos)
ROUTER_Grupos.delete('/eliminar', eliminarGrupos)
ROUTER_Grupos.delete('/eliminarTodo', eliminarTodoGrupos)


export default ROUTER_Grupos;