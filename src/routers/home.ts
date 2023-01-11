import { saludar, conectarDb, registrarUsuario } from "../controllers/homeController";
import Router from "express";

const EJEMPLO_ROUTER = Router();

EJEMPLO_ROUTER.post('/conectar', conectarDb)
EJEMPLO_ROUTER.post('/registrar', registrarUsuario)
EJEMPLO_ROUTER.post('/saludo', saludar)


export default EJEMPLO_ROUTER;