import { crearGrupos, obtenerGrupos, obtenerOneGrupos, actualizarGrupos, eliminarGrupos, eliminarTodoGrupos } from "../controllers/gruposController";
import Router from "express";

const ROUTER_Grupos = Router();

ROUTER_Grupos.get('/obtener', obtenerGrupos)
ROUTER_Grupos.get('/obtenerOne/:idGrupos', obtenerOneGrupos)
ROUTER_Grupos.post('/agregar', crearGrupos)
ROUTER_Grupos.put('/actualizar/:idGrupos', actualizarGrupos)
ROUTER_Grupos.delete('/elimina/:idGrupos', eliminarGrupos)
ROUTER_Grupos.delete('/eliminarTodo', eliminarTodoGrupos)



export default ROUTER_Grupos;