import { agregarPerido, obtenerAllPeriodos,actualizarPeriodo,eliminaTodoWarning,eliminarPeriodo, obtener1Periodo} from "../controllers/periodoController";
import Router from "express";
import { validarRegistro, validarActualizacion } from "../utils/validatorsAlumno"; 

const ROUTER_Periodo = Router();

ROUTER_Periodo.get('/obtener',obtenerAllPeriodos )
ROUTER_Periodo.get("/obtenerOne/:idPeriodo",obtener1Periodo );
ROUTER_Periodo.post('/agregar', validarRegistro(), agregarPerido)
ROUTER_Periodo.put('/actualizar/:idPeriodo',actualizarPeriodo )
ROUTER_Periodo.delete('/eliminar/:idPeriodo', eliminarPeriodo)
ROUTER_Periodo.delete('/eliminaTodo', eliminaTodoWarning)


export default ROUTER_Periodo;
