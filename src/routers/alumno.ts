import { agregarAlumno, obtenerAllAlumno, actualizarAlumno, eliminarAlumno, eliminaTodoWarning, obtener1Alumno } from "../controllers/alumnosController";
import Router from "express";

const ROUTER_Alumno = Router();

ROUTER_Alumno.post('/agregar', agregarAlumno)
ROUTER_Alumno.get('/obtener', obtenerAllAlumno)
ROUTER_Alumno.put('/actualizar', actualizarAlumno)
ROUTER_Alumno.delete('/eliminar', eliminarAlumno)
ROUTER_Alumno.delete('/eliminaTodo', eliminaTodoWarning)

ROUTER_Alumno.get("/obtenerOne/:idAlumnos", obtener1Alumno);

export default ROUTER_Alumno;