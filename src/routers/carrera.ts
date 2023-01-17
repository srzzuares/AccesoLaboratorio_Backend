import { estadoActDesac, carreraActivo, grupos, asignarEquipo } from "../controllers/carreraController";
import Router from "express";

const ROUTER = Router();

ROUTER.post('/', estadoActDesac)
ROUTER.post('/', carreraActivo)
ROUTER.post('/', grupos)
ROUTER.post('/', asignarEquipo)


export default ROUTER;