import {obtener1RecursosLab, obtenerRecursosLab,agregarRecursosLab, actualizarRecursosLab,eliminaTodoWarning,eliminarRecursosLab  } from "../controllers/recursos_LaboratorioController";
import Router from "express";
import { validarRegistro, validarActualizacion } from "../utils/validatorsAlumno"; 

const ROUTER_recursosLab = Router();

ROUTER_recursosLab.get('/obtener', obtenerRecursosLab)
ROUTER_recursosLab.get("/obtenerOne/:idRecursos_Laboratorio", obtener1RecursosLab );
ROUTER_recursosLab.post('/agregar', validarRegistro(), agregarRecursosLab)
ROUTER_recursosLab.put('/actualizar/:idRecursos_Laboratorio',actualizarRecursosLab )
ROUTER_recursosLab.delete('/eliminar/:idRecursos_Laboratorio',eliminarRecursosLab )
ROUTER_recursosLab.delete('/eliminaTodo', eliminaTodoWarning)


export default ROUTER_recursosLab;