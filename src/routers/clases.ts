import { estadoActDesac, clasesActivo, grupos, asignarEquipo, asignarProfesor, laboratorista } from "../controllers/clasesController";
import Router from "express";

const ROUTER = Router();

ROUTER.post('/', estadoActDesac)
ROUTER.post('/', clasesActivo)
ROUTER.post('/', grupos)
ROUTER.post('/', asignarEquipo)
ROUTER.post('/', asignarProfesor)
ROUTER.post('/', laboratorista)


export default ROUTER;