import { estadoActDesac, conectarDb, usuarioActivo, laboratorista, grupos, asignarEquipo } from "../controllers/bitacoraController";
import Router from "express";

const ROUTER = Router();

ROUTER.post('/conectar', conectarDb)
ROUTER.post('/registrar', usuarioActivo)
ROUTER.post('/', estadoActDesac)
ROUTER.post('/', laboratorista)
ROUTER.post('/', grupos)
ROUTER.post('/', asignarEquipo)


export default ROUTER;