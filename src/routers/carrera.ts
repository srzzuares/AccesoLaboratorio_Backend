import { crearCarrera, obtenerCarrera, obtenerOneCarrera, actualizarCarrera, eliminarCarrera, eliminarTodoCarrera } from "../controllers/carreraController";
import Router from "express";

const ROUTER = Router();

ROUTER.post('/crear', crearCarrera)
ROUTER.get('/obtener', obtenerCarrera)
ROUTER.get('/obtenerOne', obtenerOneCarrera)
ROUTER.put('/actualizar', actualizarCarrera)
ROUTER.delete('/eliminar', eliminarCarrera)
ROUTER.delete('/eliminarTodo', eliminarTodoCarrera)


export default ROUTER;