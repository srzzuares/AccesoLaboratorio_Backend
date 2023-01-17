import {agregarAlumno, eliminarAlumno, actualizarAlumno ,registrarAlumno,Alumno,grupoAlumno } from "../controllers/alumnosController";
import Router from "express";

const ROUTER = Router();

ROUTER.post('/', agregarAlumno)
ROUTER.post('/', eliminarAlumno)
ROUTER.post('/', actualizarAlumno)
ROUTER.post('/', registrarAlumno)
ROUTER.post('/', Alumno)
ROUTER.post('/', grupoAlumno)


export default ROUTER;