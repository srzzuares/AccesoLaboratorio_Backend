import { agregarAlumno, obtenerAllAlumno, actualizarAlumno, eliminarAlumno, eliminaTodoWarning, obtener1Alumno } from "../controllers/alumnosController";
import Router from "express";
import { validarRegistro, validarActualizacion } from "../utils/validatorsAlumno"; 

const ROUTER_Alumno = Router();

ROUTER_Alumno.get('/obtener', obtenerAllAlumno)
ROUTER_Alumno.get("/obtenerOne/:idAlumnos", obtener1Alumno);
ROUTER_Alumno.post('/agregar', validarRegistro(), agregarAlumno)
ROUTER_Alumno.put('/actualizar/:idAlumnos', actualizarAlumno)
ROUTER_Alumno.delete('/eliminar/:idAlumnos', eliminarAlumno)
ROUTER_Alumno.delete('/eliminaTodo', eliminaTodoWarning)


export default ROUTER_Alumno;