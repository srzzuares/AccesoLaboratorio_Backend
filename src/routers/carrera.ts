import { crearCarrera, obtenerCarrera, obtenerOneCarrera, actualizarCarrera, eliminarCarrera, eliminarTodoCarrera } from "../controllers/carreraController";
import Router from "express";

const ROUTER = Router();

ROUTER.get('/obtener', obtenerCarrera)
ROUTER.get('/obtenerOne/:idCarrera', obtenerOneCarrera)
ROUTER.post('/crear', crearCarrera)
ROUTER.put('/actualizar/:idCarrera', actualizarCarrera)
ROUTER.delete('/eliminar/:idCarrera', eliminarCarrera)
ROUTER.delete('/eliminarTodo', eliminarTodoCarrera)


export default ROUTER;