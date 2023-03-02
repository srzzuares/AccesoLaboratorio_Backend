import { agregarLaboratorio, obtenerAllLaboratorio, actualizarLaboratorio, eliminarLaboratorio, eliminaTodoWarning, obtener1Laboratorio } from "../controllers/laboratorioController";
import Router from "express";

const ROUTER_Lab = Router();

ROUTER_Lab.get('/obtener', obtenerAllLaboratorio)
ROUTER_Lab.get("/obtenerOne/:idLaboratorio", obtener1Laboratorio);
ROUTER_Lab.post('/agregar', agregarLaboratorio)
ROUTER_Lab.put('/actualizar/:idLaboratorio', actualizarLaboratorio)
ROUTER_Lab.delete('/eliminar/:idLaboratorio', eliminarLaboratorio)
ROUTER_Lab.delete('/eliminaTodo', eliminaTodoWarning)



export default ROUTER_Lab;