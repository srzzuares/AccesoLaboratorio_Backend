
import { obtener1Personal, obtenerAllPersonal, agregarPersonal,actualizarPersonal,eliminarPersonal,eliminaTodoWarning } from "../controllers/personalController";
import Router from "express";
import { validarRegistro, validarActualizacion } from "../utils/validatorsAlumno"; 

const ROUTER_personal = Router();

ROUTER_personal.get('/obtener', obtenerAllPersonal)
ROUTER_personal.get("/obtenerOne/:idPersonal",obtener1Personal );
ROUTER_personal.post('/agregar', validarRegistro(),  agregarPersonal)
ROUTER_personal.put('/actualizar/:idPersonal', actualizarPersonal )
ROUTER_personal.delete('/eliminar/:idPersonal', eliminarPersonal )
ROUTER_personal.delete('/eliminaTodo', eliminaTodoWarning)


export default ROUTER_personal;