"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bitacoraController_1 = require("../controllers/bitacoraController");
const express_1 = __importDefault(require("express"));
const ROUTER = (0, express_1.default)();
ROUTER.post('/conectar', bitacoraController_1.agregarBitadora);
ROUTER.post('/registrar', bitacoraController_1.obtenerBitacora);
ROUTER.post('/', bitacoraController_1.obtenerBitacoraOne);
ROUTER.post('/', bitacoraController_1.actualizarBitacora);
ROUTER.post('/', bitacoraController_1.eliminarBitacoraOne);
ROUTER.post('/', bitacoraController_1.eliminarBitacoraTodo);
exports.default = ROUTER;
